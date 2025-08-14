
import React from 'react';
import { Acronym } from '../ui/Tooltip';
import { ACRONYMS } from '../../types';

const AnalysisPoint: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-primary-800">{title}</h3>
        <div className="mt-2 text-gray-600">{children}</div>
    </div>
);

export function Analysis(): React.ReactNode {
    const renderTextWithAcronyms = (text: string) => {
        const words = text.split(/(\s+|\(|\)|,|\.)/);
        return words.map((word, index) => {
            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
            if (ACRONYMS[cleanWord.toUpperCase()]) {
                return <Acronym key={`${word}-${index}`} term={cleanWord} />;
            }
            return word;
        });
    };
    
    return (
        <div className="space-y-8">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Overall Analysis & Recommendations</h1>
                <p className="mt-2 max-w-4xl text-lg text-gray-500">
                    Strategic insights for maximizing grant acquisition and impact for small farms in South Carolina.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnalysisPoint title="Funding Trends">
                    {renderTextWithAcronyms("FY2025 prioritizes small farms (10% EQIP/CSP set-asides); SC focus on high tunnels ($10K-$20K), organics ($140K cap). IRA adds $19.5B for CSAF.")}
                </AnalysisPoint>

                <AnalysisPoint title="Success Rates & Tips">
                    {renderTextWithAcronyms("Avg 40-60%; boost with metrics (SCI, WHEG +15-20%), underserved status (90% cost-share). Document land control.")}
                </AnalysisPoint>

                <AnalysisPoint title="Synergies">
                    {renderTextWithAcronyms("EQIP + CSP + SARE = 50% impact; OCSP/GAP ensure market access. CSP bundles (e.g., B000CPL25) add 20% payments.")}
                </AnalysisPoint>

                <AnalysisPoint title="SC-Specific Strategy">
                    {renderTextWithAcronyms("Coastal watersheds (EPA 319); Clemson partnerships (SARE, BFRDP). Early batching; SCDA reimbursements. Prioritize CSAF (e.g., E327B, E328E).")}
                </AnalysisPoint>

                <div className="md:col-span-2">
                    <AnalysisPoint title="Challenges & ROI">
                        {renderTextWithAcronyms("Challenges include competitive application pools (SARE 20-35%) and the need for detailed applications. The Return on Investment (ROI) is significant, with conservation grants improving yields by 2-3x and marketing grants boosting sales by over 20%.")}
                    </AnalysisPoint>
                </div>
            </div>

             <div className="mt-12 text-center text-sm text-gray-500">
                <p>For the most current information, contact SC NRCS (Stac, 843-550-0683) or SCDA (Betsy Dorton, bdorton@scda.sc.gov).</p>
            </div>
        </div>
    );
}