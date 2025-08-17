import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { nrcsPrograms, amsPrograms, scdaPrograms, nifaPrograms, otherPrograms, cspEnhancements } from '../../data/grantData';
import { PdfDownloadButton, generatePdf } from '../ui/PdfGenerator';

interface GrantRecommendation {
    id: string;
    reasoning: string;
}

interface CspRecommendation {
    code: string;
    reasoning: string;
}

interface AnalysisResult {
    grantRecommendations: GrantRecommendation[];
    cspRecommendations?: CspRecommendation[];
    nextSteps: string[];
}

const allGrants = [...nrcsPrograms, ...amsPrograms, ...scdaPrograms, ...nifaPrograms, ...otherPrograms];

export function GrantCalculator(): React.ReactNode {
    const [farmData, setFarmData] = useState({
        size: '',
        county: '',
        experience: '0-2',
        isUnderserved: false,
        goals: [] as string[],
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [isPdfLoading, setIsPdfLoading] = useState(false);

    const goalsOptions = [
        'Improve soil health (e.g., cover crops, no-till)',
        'Extend growing season (e.g., high tunnel)',
        'Improve water efficiency (e.g., micro-irrigation)',
        'Add pollinator or wildlife habitat',
        'Get organic certification or transition to organic',
        'Develop value-added products (e.g., jams, teas)',
        'Improve direct marketing (e.g., CSA, farmers market)',
        'Restore forestry land or manage fire risk',
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFarmData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFarmData(prev => {
            if (checked) {
                return { ...prev, goals: [...prev.goals, value] };
            } else {
                return { ...prev, goals: prev.goals.filter(goal => goal !== value) };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResult(null);

        if (!process.env.API_KEY) {
            setError('API key is not configured. Please contact the administrator.');
            setLoading(false);
            return;
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        const grantDataContext = JSON.stringify(allGrants.map(p => ({
            id: p.id,
            name: p.name,
            details: p.details,
            eligibility: p.eligibility
        })));
        
        const cspDataContext = JSON.stringify(cspEnhancements.map(e => ({
            code: e.code,
            name: e.name,
            details: e.details,
            landUse: e.landUse
        })));

        const userProfile = `
## Farm Profile:
- Farm Size: ${farmData.size || 'Not specified'} acres
- County in SC: ${farmData.county || 'Not specified'}
- Farming Experience: ${farmData.experience} years
- Belongs to an underserved group (socially disadvantaged, beginning, limited resource, veteran): ${farmData.isUnderserved ? 'Yes' : 'No'}
- Primary Goals:
${farmData.goals.length > 0 ? farmData.goals.map(g => `  - ${g}`).join('\n') : '  - General improvement'}
`;
        
        const prompt = `
Please act as a Grant Opportunity Calculator. Analyze the user's farm profile against the provided JSON data of grant programs and CSP enhancements. Your analysis should be tailored to their specific situation.

## Available Grant Programs Data (JSON):
${grantDataContext}

## Available CSP Enhancements Data (JSON):
${cspDataContext}

${userProfile}
`;

        const responseSchema = {
            type: Type.OBJECT,
            properties: {
                grantRecommendations: {
                    type: Type.ARRAY,
                    description: "Top 3-5 recommended grant programs based on user profile.",
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: {
                                type: Type.STRING,
                                description: 'The unique ID of the grant program from the provided context data (e.g., "csp", "eqip"). MUST match an ID from the input data.',
                            },
                            reasoning: {
                                type: Type.STRING,
                                description: 'A brief explanation of why this grant is a good fit for the user, referencing their profile.',
                            },
                        },
                        required: ['id', 'reasoning'],
                    },
                },
                cspRecommendations: {
                    type: Type.ARRAY,
                    description: "Top 2-4 recommended CSP enhancements if applicable and relevant to the user's goals.",
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            code: {
                                type: Type.STRING,
                                description: 'The unique code of the CSP enhancement from the provided context data (e.g., "E327B", "E329D"). MUST match a code from the input data.',
                            },
                            reasoning: {
                                type: Type.STRING,
                                description: 'A brief explanation of why this enhancement is a good fit for the user, referencing their goals.',
                            },
                        },
                        required: ['code', 'reasoning'],
                    },
                },
                nextSteps: {
                    type: Type.ARRAY,
                    description: "A list of 3-5 prioritized, actionable next steps for the user.",
                    items: {
                        type: Type.STRING,
                    },
                },
            },
            required: ['grantRecommendations', 'nextSteps'],
        };


        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: responseSchema,
                    systemInstruction: "You are an expert on agricultural grants for small farms in South Carolina. Your task is to act as a 'Grant Opportunity Calculator'. Analyze the user's farm profile against the provided JSON data of available grant programs and CSP enhancements. Your response MUST be a JSON object that adheres to the provided schema. For each recommendation, provide a concise reasoning based on the user's profile and goals. The 'id' for grants and 'code' for CSP enhancements in your response MUST exactly match one of the IDs/codes from the provided context data. Do not add any programs or enhancements that are not in the provided data.",
                }
            });
            
            const analysisResult: AnalysisResult = JSON.parse(response.text);
            setResult(analysisResult);

        } catch (err) {
            console.error(err);
            setError('An error occurred while analyzing your grant potential. The AI may have returned an unexpected format. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    
    const handleDownloadPdf = () => {
        generatePdf('pdf-content', 'AgriGrant_SC_Calculator_Results', setIsPdfLoading);
    };

    return (
        <div className="space-y-8">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Grant Opportunity Calculator</h1>
                <p className="mt-2 max-w-4xl text-lg text-gray-500">
                    Answer a few questions about your farm to get personalized grant recommendations.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm space-y-8">
                {/* Farm Details */}
                <fieldset>
                    <h3 className="text-xl font-semibold text-gray-900">About Your Farm</h3>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="size" className="block text-sm font-medium text-gray-700">Farm Size (in acres)</label>
                            <input type="number" name="size" id="size" value={farmData.size} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" placeholder="e.g., 3" required />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="county" className="block text-sm font-medium text-gray-700">County in South Carolina</label>
                            <input type="text" name="county" id="county" value={farmData.county} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" placeholder="e.g., Charleston" />
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years Farming</label>
                            <select id="experience" name="experience" value={farmData.experience} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                                <option value="0-2">0-2 (Beginning)</option>
                                <option value="3-9">3-9 (Beginning)</option>
                                <option value="10+">10+ (Established)</option>
                            </select>
                        </div>
                        <div className="sm:col-span-6">
                            <div className="relative flex items-start">
                                <div className="flex h-5 items-center">
                                    <input id="isUnderserved" name="isUnderserved" type="checkbox" checked={farmData.isUnderserved} onChange={(e) => setFarmData(p => ({...p, isUnderserved: e.target.checked}))} className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="isUnderserved" className="font-medium text-gray-700">I qualify as a "historically underserved" producer</label>
                                    <p className="text-gray-500">Includes beginning, socially disadvantaged, limited resource, and veteran farmers/ranchers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>

                {/* Farm Goals */}
                <fieldset>
                    <h3 className="text-xl font-semibold text-gray-900">Your Goals</h3>
                    <p className="text-sm text-gray-500">What do you hope to achieve with grant funding? Select all that apply.</p>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {goalsOptions.map(goal => (
                            <div key={goal} className="relative flex items-start">
                                <div className="flex h-5 items-center">
                                    <input id={goal} type="checkbox" value={goal} onChange={handleCheckboxChange} className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor={goal} className="font-medium text-gray-700">{goal}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                </fieldset>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:bg-primary-300"
                    >
                        {loading ? 'Analyzing...' : 'Calculate Grant Potential'}
                    </button>
                </div>
            </form>

            {loading && (
                <div className="flex justify-center items-center py-10">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent"></div>
                    <p className="ml-4 text-gray-600">Generating your personalized report... This may take a moment.</p>
                </div>
            )}
            
            {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert"><p>{error}</p></div>}

            {result && (
                 <div id="pdf-content" className="bg-primary-50 p-6 rounded-lg shadow-sm mt-8 animate-fade-in space-y-8">
                    <div className="text-center">
                         <h2 className="text-2xl font-bold text-primary-900">Your Grant Potential Analysis</h2>
                         <div className="mt-4">
                            <PdfDownloadButton isLoading={isPdfLoading} onClick={handleDownloadPdf} className="mx-auto" />
                         </div>
                    </div>
                    
                    {/* Grant Recommendations */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Grant Recommendations</h3>
                        <div className="space-y-4">
                            {result.grantRecommendations.map(rec => {
                                const grant = allGrants.find(g => g.id === rec.id);
                                if (!grant) return null;
                                return (
                                    <div key={grant.id} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                        <div className="sm:flex sm:justify-between sm:items-start">
                                            <h4 className="text-lg font-semibold text-primary-800 mb-2 sm:mb-0">{grant.name}</h4>
                                            <span className="flex-shrink-0 text-base font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">{grant.funding}</span>
                                        </div>
                                        <p className="mt-2 text-gray-600">{rec.reasoning}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CSP Recommendations */}
                    {result.cspRecommendations && result.cspRecommendations.length > 0 && (
                         <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Suggested CSP Enhancements</h3>
                            <div className="space-y-4">
                                {result.cspRecommendations.map(rec => {
                                    const enhancement = cspEnhancements.find(e => e.code === rec.code);
                                    if (!enhancement) return null;
                                    return (
                                         <div key={enhancement.code} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                                             <div className="sm:flex sm:justify-between sm:items-start">
                                                <h4 className="text-lg font-semibold text-primary-800 mb-2 sm:mb-0">{enhancement.name} ({enhancement.code})</h4>
                                                 <span className="flex-shrink-0 text-base font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">{enhancement.scEstimate}</span>
                                            </div>
                                            <p className="mt-2 text-gray-600">{rec.reasoning}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Next Steps */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Next Steps</h3>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700 bg-white p-4 rounded-lg border border-gray-200 shadow">
                            {result.nextSteps.map((step, i) => <li key={i} className="pl-2">{step}</li>)}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}