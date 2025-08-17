import React, { useState } from 'react';
import type { GrantProgram } from '../../types';
import { ACRONYMS } from '../../types';
import { Acronym } from '../ui/Tooltip';
import { PdfDownloadButton, generatePdf } from '../ui/PdfGenerator';

interface GrantProgramsProps {
    title: string;
    programs: GrantProgram[];
}

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm font-medium text-gray-600">{title}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{children}</dd>
    </div>
);

const GrantCard: React.FC<{ program: GrantProgram; isOpen: boolean; onToggle: () => void }> = ({ program, isOpen, onToggle }) => {
    const renderTextWithAcronyms = (text: string) => {
        const words = text.split(/(\s+|\(|\)|,|\.)/);
        return words.map((word, index) => {
            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
            if (ACRONYMS[cleanWord.toUpperCase()]) {
                return <Acronym key={`${program.id}-${word}-${index}`} term={cleanWord} />;
            }
            return word;
        });
    };
    
    return (
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 cursor-pointer" onClick={onToggle}>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">{program.name}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">{program.agency}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        {program.successRate && (
                            <div className="text-center">
                                <div className="text-sm text-gray-500">Success</div>
                                <div className="text-lg font-bold text-primary-700">{program.successRate}%</div>
                            </div>
                        )}
                        <svg className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200 sm:px-6">
                        <InfoSection title="Details">{renderTextWithAcronyms(program.details)}</InfoSection>
                        <InfoSection title="Eligibility">{renderTextWithAcronyms(program.eligibility)}</InfoSection>
                        <InfoSection title="Funding">{renderTextWithAcronyms(program.funding)}</InfoSection>
                        <InfoSection title="Deadlines">
                            <ul className="list-disc space-y-1 pl-5">
                                {program.deadlines.map((d, i) => <li key={i}>{d}</li>)}
                            </ul>
                        </InfoSection>
                        <InfoSection title="Submission">
                            <div className="space-y-2">
                                <p><strong>Forms:</strong> {renderTextWithAcronyms(program.submission.forms)}</p>
                                <p><strong>Steps:</strong></p>
                                <ol className="list-decimal space-y-1 pl-5">
                                    {program.submission.steps.map((s, i) => <li key={i}>{renderTextWithAcronyms(s)}</li>)}
                                </ol>
                            </div>
                        </InfoSection>
                        <InfoSection title="SC-Specific">{renderTextWithAcronyms(program.scSpecific)}</InfoSection>
                        <InfoSection title="Sample">
                            <blockquote className="mt-1 border-l-4 border-primary-300 bg-primary-50 pl-4 pr-2 py-3 italic text-gray-800 rounded-r-md">
                                {renderTextWithAcronyms(program.sample)}
                            </blockquote>
                        </InfoSection>
                        <InfoSection title="Analysis">{renderTextWithAcronyms(program.analysis)}</InfoSection>
                    </dl>
                </div>
            )}
        </div>
    );
};


export function GrantPrograms({ title, programs }: GrantProgramsProps): React.ReactNode {
    const [openAccordion, setOpenAccordion] = useState<string | null>(programs.length > 0 ? programs[0].id : null);
    const [isPdfLoading, setIsPdfLoading] = useState(false);

    const handleToggle = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const handleDownloadPdf = () => {
        generatePdf('pdf-content', `AgriGrant_SC_${title}`, setIsPdfLoading);
    };

    return (
        <div className="space-y-8" id="pdf-content">
            <div className="border-b border-gray-200 pb-5">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">{title}</h1>
                        <p className="mt-2 max-w-4xl text-lg text-gray-500">
                            Key details for South Carolina farms under 5 acres. Click any grant to expand.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                        <PdfDownloadButton isLoading={isPdfLoading} onClick={handleDownloadPdf} />
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                {programs.map(program => (
                    <GrantCard 
                        key={program.id} 
                        program={program}
                        isOpen={openAccordion === program.id}
                        onToggle={() => handleToggle(program.id)} 
                    />
                ))}
            </div>
        </div>
    );
}