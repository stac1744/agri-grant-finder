
import React from 'react';
import { nrcsPrograms, amsPrograms, otherPrograms } from '../../data/grantData';
import type { ViewType } from '../../types';
import { SuccessRateChart } from '../charts/SuccessRateChart';

interface DashboardProps {
    setActiveView: (view: ViewType) => void;
}

export function Dashboard({ setActiveView }: DashboardProps): React.ReactNode {

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

    return (
        <div className="space-y-12">
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                    Agriculture Grant Guide
                </h1>
                <p className="mt-2 max-w-4xl text-lg text-gray-500">
                    For Farms Under 5 Acres in South Carolina (FY2025)
                </p>
                <p className="mt-1 text-sm text-gray-500">Information current as of August 2025</p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                    {/* Executive Summary */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-gray-900">Executive Summary</h2>
                        <p className="mt-4 text-gray-600 space-y-4">
                           This updated report details all major grant programs available in FY2025 for South Carolina (SC) farms under 5 acres, focusing exclusively on grants (no loans) from USDA (NRCS, AMS, NIFA), EPA, USFWS, NFWF, SARE, Xerces Society, and SC-specific programs. It expands the previous report by including all FY2025 Conservation Stewardship Program (CSP) enhancements from the provided Delaware CSP Activity List (adapted for SC), tailored for small farms. Small farms are prioritized as “beginning,” “socially disadvantaged,” or “limited resource” producers, with no minimum acreage requirements, making them eligible for conservation, production, and marketing grants. Total FY2025 funding exceeds $10B nationally, with $100M+ targeting small/beginning farmers (e.g., SARE Producer Grants: $15K-$25K; EQIP cost-share: 50-90%). SC emphasizes high tunnels, organics, and habitat.
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

                    {/* Contacts */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-gray-900">Key Contacts</h2>
                        <div className="mt-4 space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-800">SC NRCS</h3>
                                <p className="text-gray-600">Stac</p>
                                <p className="text-gray-500">843-550-0683</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">SCDA</h3>
                                <p className="text-gray-600">Betsy Dorton</p>
                                <p className="text-gray-500">bdorton@scda.sc.gov</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}