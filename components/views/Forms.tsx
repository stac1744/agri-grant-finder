import React, { useState } from 'react';
import { formsData } from '../../data/formData';
import { PdfDownloadButton, generatePdf } from '../ui/PdfGenerator';

export function Forms(): React.ReactNode {
    const [isPdfLoading, setIsPdfLoading] = useState(false);

    const handleDownloadPdf = () => {
        generatePdf('pdf-content', 'AgriGrant_SC_Forms', setIsPdfLoading);
    };

    return (
        <div className="space-y-8" id="pdf-content">
            <div className="border-b border-gray-200 pb-5">
                 <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Key Program Forms</h1>
                        <p className="mt-2 max-w-4xl text-lg text-gray-500">
                            A collection of important forms for applying to and participating in USDA conservation programs.
                        </p>
                    </div>
                     <div className="mt-4 sm:mt-0 sm:ml-4">
                        <PdfDownloadButton isLoading={isPdfLoading} onClick={handleDownloadPdf} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formsData.map((form) => (
                    <div key={form.id} className="bg-white p-6 rounded-lg shadow-sm border flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-900">{form.name}</h3>
                        <p className="text-sm font-medium text-gray-500">{form.agency}</p>
                        <p className="mt-3 text-gray-600 flex-grow">{form.description}</p>
                        <a 
                            href={form.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                            {form.linkText}
                            <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}