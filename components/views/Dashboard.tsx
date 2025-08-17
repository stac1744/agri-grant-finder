import React, { useState } from 'react';
import { nrcsPrograms, amsPrograms, otherPrograms } from '../../data/grantData';
import type { ViewType } from '../../types';
import { SuccessRateChart } from '../charts/SuccessRateChart';
import { PdfDownloadButton, generatePdf } from '../ui/PdfGenerator';

interface DashboardProps {
    setActiveView: (view: ViewType) => void;
}

export function Dashboard({ setActiveView }: DashboardProps): React.ReactNode {
    const [isPdfLoading, setIsPdfLoading] = useState(false);

    const chartData = [
        { name: 'CSP', 'Success Rate': 53, fill: '#8884d8' },
        { name: 'EQIP', 'Success Rate': 44, fill: '#83a6ed' },
        { name: 'CRP', 'Success Rate': 70, fill: '#8dd1e1' },
        { name: 'SARE', 'Success Rate': 28, fill: '#82ca9d' },
        { name: 'NFWF', 'Success Rate': 30, fill: '#a4de6c' },
        { name: 'VAPG', 'Success Rate': 30, fill: '#d0ed57' },
        { name: 'FMPP', 'Success Rate': 35, fill: '#ffc658' },
    ];

    const quickLinks = [
        { name: 'USDA NRCS Programs', view: 'USDA NRCS' as ViewType, count: nrcsPrograms.length },
        { name: 'USDA AMS Programs', view: 'USDA AMS' as ViewType, count: amsPrograms.length },
        { name: 'Other Federal Grants', view: 'Other Grants' as ViewType, count: otherPrograms.length },
        { name: 'All CSP Enhancements', view: 'CSP Enhancements' as ViewType, count: 'View All' },
    ];

    const handleDownloadPdf = () => {
        generatePdf('pdf-content', 'AgriGrant_SC_Dashboard', setIsPdfLoading);
    };

    return (
        <div className="space-y-12" id="pdf-content">
            <div className="border-b border-gray-200 pb-5">
                 <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                            Agriculture Grant Guide
                        </h1>
                        <p className="mt-2 max-w-4xl text-lg text-gray-500">
                            For Farms Under 5 Acres in South Carolina (FY2025)
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                        <PdfDownloadButton isLoading={isPdfLoading} onClick={handleDownloadPdf} />
                    </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">Information current as of August 2025</p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                    {/* Executive Summary */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-gray-900">Executive Summary</h2>
                        <p className="mt-4 text-gray-600 space-y-4">
                           This guide details major FY2025 grant programs for South Carolina (SC) farms under 5 acres. It covers grants (no loans) from federal agencies like USDA (NRCS, AMS, NIFA), EPA, and partners such as SARE and the Xerces Society, plus state-level SCDA programs. The guide includes a comprehensive list of all FY2025 Conservation Stewardship Program (CSP) enhancements relevant to SC's small-scale agriculture. Small farms, especially those classified as beginning, socially disadvantaged, or limited resource, are prioritized for funding and often have no minimum acreage requirements. Nationally, available funding exceeds $10B, with significant portions targeting small producers. Key SC priorities include high tunnels, organic transitions, and pollinator habitat.
                        </p>
                    </div>

                    {/* Key Trends */}
                    <div className="bg-white p-6 rounded-lg shadow">
                         <h2 className="text-xl font-semibold text-gray-900">Key Trends & Success Rates</h2>
                        <p className="mt-4 text-gray-600">
                            Inflation Reduction Act (IRA) boosts climate-smart agriculture and forestry (CSAF) practices by up to 20%; focus on soil health, pollinators, and equity. Success rates vary by program, with a general range of 20-70%. Applications are often continuous or batched with specific deadlines.
                        </p>
                        <div className="mt-6 h-80">
                            <SuccessRateChart data={chartData} />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 space-y-8">
                    {/* Quick Access */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-gray-900">Quick Access</h2>
                        <ul className="mt-4 space-y-3">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <button onClick={() => setActiveView(link.view)} className="w-full text-left p-4 rounded-lg hover:bg-primary-50 transition duration-150 border border-gray-200 group">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-primary-800">{link.name}</span>
                                            <span className="text-sm font-bold bg-primary-100 text-primary-800 rounded-full px-3 py-1">
                                                {link.count}
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}