import React from 'react';
import { Acronym } from '../ui/Tooltip';
import { ACRONYMS } from '../../types';

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700">
            {children}
        </div>
    </div>
);

const Step: React.FC<{ number: number; title: string; children: React.ReactNode; }> = ({ number, title, children }) => (
    <div className="flex">
        <div className="flex-shrink-0">
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white font-bold">
                {number}
            </span>
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-semibold text-primary-800">{title}</h3>
            <p className="mt-1 text-gray-600">{children}</p>
        </div>
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
        <div className="space-y-12">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Strategic Grant Acquisition Roadmap</h1>
                <p className="mt-2 max-w-4xl text-lg text-gray-500">
                    Beyond individual grants, a strategic approach unlocks stacked benefits, increasing both your funding and your farm's resilience. This analysis provides a strategic roadmap for small farms in South Carolina.
                </p>
            </div>

            <Section title="The 'Golden Path': A Step-by-Step Grant Stacking Strategy">
                <p>For a new or growing small farm, navigating the grant landscape can be daunting. Following a logical sequence can build momentum and create powerful synergies. We call this the "Golden Path".</p>
                <div className="space-y-6 mt-6">
                    <Step number={1} title="Foundation First: Get Farm-Ready">
                        {renderTextWithAcronyms("Before applying for any USDA grant, register your farm with the Farm Service Agency (FSA). This establishes your operation and gets you a farm number, which is a prerequisite for nearly all programs. This is a critical first step.")}
                    </Step>
                    <Step number={2} title="Quick Wins: Build Momentum with SCDA">
                        {renderTextWithAcronyms("Start with high-success-rate, low-complexity cost-share programs from the South Carolina Department of Agriculture (SCDA). Programs like the CoolBot or GAP Certification cost-shares are reimbursements that build your farm's infrastructure and your grant history.")}
                    </Step>
                    <Step number={3} title="The Cornerstone: Secure an EQIP Contract">
                        {renderTextWithAcronyms("The Environmental Quality Incentives Program (EQIP) is the workhorse for on-farm infrastructure. Focus on a high-impact project like a high tunnel (Practice 325). If you're an underserved producer, you can receive up to 90% cost-share and advance payments, making it a powerful foundation.")}
                    </Step>
                    <Step number={4} title="Layer Up: Add Annual Income with CSP">
                        {renderTextWithAcronyms("Once you have a handle on your EQIP project, apply for the Conservation Stewardship Program (CSP). CSP provides annual payments for ongoing conservation. Select enhancements that complement your EQIP project—for example, soil health enhancements (like E340H) for the beds inside your new high tunnel.")}
                    </Step>
                    <Step number={5} title="Innovate & Grow: Target Advanced Grants">
                        {renderTextWithAcronyms("With your conservation base established, pursue grants for innovation and market access. A SARE Producer Grant can fund on-farm research, while a Value-Added Producer Grant (VAPG) can help you turn your crops into marketable products like jams or teas, boosting your revenue streams.")}
                    </Step>
                </div>
            </Section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Section title="Key Strategic Pillars">
                    <h4 className="font-semibold text-gray-800">Embrace Climate-Smart Agriculture (CSAF)</h4>
                    <p>{renderTextWithAcronyms("The Inflation Reduction Act (IRA) has injected billions into USDA conservation. Grants and enhancements marked 'CSAF' receive priority funding. When filtering the CSP list, select CSAF options like E328E (Soil Health Rotation) to significantly increase your ranking.")}</p>
                    
                    <h4 className="font-semibold text-gray-800 mt-4">Leverage "Underserved" Status</h4>
                    <p>{renderTextWithAcronyms("If you are a beginning, socially disadvantaged, limited resource, or veteran farmer, you have a major advantage. This includes higher payment rates (90% vs 50-75% for EQIP), priority ranking, and access to advance payments. Always identify this on your applications.")}</p>
                    
                     <h4 className="font-semibold text-gray-800 mt-4">Quantify Your Impact</h4>
                    <p>{renderTextWithAcronyms("Don't wait for NRCS to assess your land. Proactively use their tools. Calculate your Soil Tillage Intensity Rating (STIR) and Soil Conditioning Index (SCI). Use the Wildlife Habitat Evaluation Guide (WHEG) for habitat projects. Presenting this data shows you are a serious, knowledgeable applicant.")}</p>
                </Section>
                
                <Section title="Common Pitfalls to Avoid">
                    <ul className="list-disc list-outside pl-5 space-y-3">
                        <li>
                            <span className="font-semibold">Starting Work Before Contract Approval:</span>
                            {renderTextWithAcronyms(" A critical error. Any work completed before your contract is officially signed by NRCS is ineligible for payment. Always wait for full approval.")}
                        </li>
                         <li>
                            <span className="font-semibold">Poor Record-Keeping:</span>
                            {renderTextWithAcronyms(" Meticulously document all expenses, invoices, and implementation details. Reimbursement-based grants (like SCDA's) and audits require precise records.")}
                        </li>
                        <li>
                            <span className="font-semibold">Ignoring Local Resource Concerns:</span>
                            {renderTextWithAcronyms("Frame your project as a solution to a local problem. Check with your SC NRCS office for the county's priority resource concerns (e.g., water quality, soil erosion) and tailor your application to address them.")}
                        </li>
                         <li>
                            <span className="font-semibold">Missing Batching Deadlines:</span>
                            {renderTextWithAcronyms("Many programs like EQIP use batching periods. Submitting your application on day one of the period is far better than the last day. Early applications get reviewed first and have a better chance before funds are exhausted.")}
                        </li>
                    </ul>
                </Section>
            </div>
            
            <div className="mt-12 text-center text-sm text-gray-500">
                <p className="font-semibold">Your best resource is local expertise.</p>
                <p>For personalized guidance, contact your local SC NRCS office or the SCDA. They can help you align your farm's goals with state and federal priorities.</p>
            </div>
        </div>
    );
}
