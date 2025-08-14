
import React, { useState, useMemo } from 'react';
import { cspEnhancements } from '../../data/grantData';
import type { CspEnhancement, CspLandUse } from '../../types';
import { ACRONYMS } from '../../types';
import { Acronym } from '../ui/Tooltip';

const landUseOptions: CspLandUse[] = ['Crop', 'Pasture/Range', 'Forest', 'Associated Ag Land/Farmstead', 'All'];

export function CspEnhancements(): React.ReactNode {
    const [searchTerm, setSearchTerm] = useState('');
    const [landUseFilter, setLandUseFilter] = useState<CspLandUse | 'All Categories'>('All Categories');
    const [csafFilter, setCsafFilter] = useState<boolean | null>(null);

    const filteredEnhancements = useMemo(() => {
        return cspEnhancements.filter(e => {
            const matchesSearch = searchTerm === '' ||
                e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                e.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                e.details.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesLandUse = landUseFilter === 'All Categories' || e.landUse === landUseFilter;
            
            const matchesCsaf = csafFilter === null || e.csaf === csafFilter;

            return matchesSearch && matchesLandUse && matchesCsaf;
        });
    }, [searchTerm, landUseFilter, csafFilter]);
    
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
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">FY2025 CSP Enhancements for SC</h1>
                <p className="mt-2 max-w-4xl text-lg text-gray-500">
                    A detailed, filterable list of all Conservation Stewardship Program enhancements available for small farms.
                </p>
            </div>
            
            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                        <label htmlFor="search-enhancements" className="block text-sm font-medium text-gray-700">Search</label>
                        <input
                            type="text"
                            id="search-enhancements"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            placeholder="e.g., Monarch, E328E, soil health"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="md:col-span-1">
                         <label htmlFor="land-use-filter" className="block text-sm font-medium text-gray-700">Land Use</label>
                         <select
                            id="land-use-filter"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            value={landUseFilter}
                            onChange={(e) => setLandUseFilter(e.target.value as CspLandUse | 'All Categories')}
                        >
                            <option>All Categories</option>
                            {landUseOptions.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700">CSAF Status</label>
                        <div className="mt-1 flex space-x-2">
                             <button onClick={() => setCsafFilter(null)} className={`px-4 py-1.5 text-sm rounded-md ${csafFilter === null ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>All</button>
                             <button onClick={() => setCsafFilter(true)} className={`px-4 py-1.5 text-sm rounded-md ${csafFilter === true ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>CSAF</button>
                             <button onClick={() => setCsafFilter(false)} className={`px-4 py-1.5 text-sm rounded-md ${csafFilter === false ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>Non-CSAF</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <div className="bg-white shadow-sm rounded-lg">
                    <div className="hidden md:block">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enhancement</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SC Estimate</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Analysis & Tips</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredEnhancements.map((e) => (
                                    <tr key={e.code}>
                                        <td className="px-6 py-4 whitespace-nowrap align-top">
                                            <div className="text-sm font-medium text-gray-900">{e.name} ({e.code})</div>
                                            <div className="text-sm text-gray-500">{e.landUse}</div>
                                            {e.csaf && <span className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">CSAF</span>}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 align-top max-w-sm">{renderTextWithAcronyms(e.details)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium align-top">{e.scEstimate}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 align-top max-w-sm">{renderTextWithAcronyms(e.analysis)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                     {/* Mobile Card View */}
                    <div className="md:hidden divide-y divide-gray-200">
                         {filteredEnhancements.map((e) => (
                             <div key={e.code} className="p-4">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-gray-900">{e.name} ({e.code})</h4>
                                    <div className="text-right flex-shrink-0 ml-2">
                                        <p className="text-sm font-semibold text-primary-700">{e.scEstimate}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{e.landUse}</span>
                                    {e.csaf && <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">CSAF</span>}
                                </div>
                                <div className="mt-2 text-sm space-y-2">
                                    <p><strong className="text-gray-600">Details:</strong> {renderTextWithAcronyms(e.details)}</p>
                                    <p><strong className="text-gray-600">Analysis & Tips:</strong> {renderTextWithAcronyms(e.analysis)}</p>
                                </div>
                             </div>
                         ))}
                    </div>
                    {filteredEnhancements.length === 0 && (
                        <div className="text-center py-12 px-4">
                            <h3 className="text-lg font-medium text-gray-900">No Enhancements Found</h3>
                            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
