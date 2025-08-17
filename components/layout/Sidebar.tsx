
import React, { Fragment } from 'react';
import type { ViewType } from '../../types';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navigation: { name: ViewType; icon: (className: string) => React.ReactNode }[] = [
  { name: 'Dashboard', icon: (cn) => <HomeIcon className={cn} /> },
  { name: 'USDA NRCS', icon: (cn) => <SunIcon className={cn} /> },
  { name: 'USDA AMS', icon: (cn) => <ShoppingBagIcon className={cn} /> },
  { name: 'SCDA', icon: (cn) => <MapPinIcon className={cn} /> },
  { name: 'USDA NIFA', icon: (cn) => <AcademicCapIcon className={cn} /> },
  { name: 'Other Grants', icon: (cn) => <GlobeAltIcon className={cn} /> },
  { name: 'CSP Enhancements', icon: (cn) => <ListBulletIcon className={cn} /> },
  { name: 'Analysis', icon: (cn) => <ChartPieIcon className={cn} /> },
  { name: 'Grant Calculator', icon: (cn) => <CalculatorIcon className={cn} /> },
  { name: 'Forms', icon: (cn) => <DocumentTextIcon className={cn} /> },
];

export function Sidebar({ activeView, setActiveView, isSidebarOpen, setSidebarOpen }: SidebarProps): React.ReactNode {
  const handleNavClick = (view: ViewType) => {
    setActiveView(view);
    setSidebarOpen(false);
  };
    
  const navContent = (
    <>
        <div className="flex h-16 shrink-0 items-center px-4">
            <SparklesIcon className="h-8 w-auto text-primary-600" />
            <span className="ml-2 font-semibold text-lg text-gray-800">AgriGrant SC</span>
        </div>
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); handleNavClick(item.name); }}
                                    className={`
                                        ${activeView === item.name
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'}
                                        group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                                    `}
                                >
                                    {item.icon(activeView === item.name ? 'text-primary-700' : 'text-gray-400 group-hover:text-primary-700')}
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    </>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`relative z-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
        <div className={`fixed inset-0 bg-gray-900/80 ${isSidebarOpen ? 'block' : 'hidden'}`}></div>
        <div className="fixed inset-0 flex">
            <div className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white pb-4">
                    {navContent}
                </div>
            </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white">
            {navContent}
        </div>
      </div>
    </>
  );
}

// Icon components
const HomeIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M2.25 12v8.25a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-5.25h-6v5.25a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V12m-15 0a1.5 1.5 0 01.75-.75h16.5a1.5 1.5 0 01.75.75" /></svg>;
const SunIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>;
const ShoppingBagIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>;
const MapPinIcon = ({className}: {className:string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const AcademicCapIcon = ({className}: {className:string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path d="M12 14.25c-2.092 0-3.812-.91-4.99-2.313a10.457 10.457 0 01-3.697-4.687.75.75 0 011.026-.833l1.353.676a.75.75 0 00.923-.03L9 6.061.75.75 0 00.923.03l1.353-.676a.75.75 0 011.026.833 10.457 10.457 0 01-3.697 4.687C8.188 13.34 9.908 14.25 12 14.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25c2.092 0 3.812-.91 4.99-2.313a10.457 10.457 0 003.697-4.687.75.75 0 00-1.026-.833l-1.353.676a.75.75 0 01-.923-.03L15 6.061a.75.75 0 01.923-.03l-1.353-.676a.75.75 0 00-1.026.833 10.457 10.457 0 003.697 4.687C15.812 13.34 14.092 14.25 12 14.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15.75c0-1.09.914-1.99 2.05-1.99h12.4c1.136 0 2.05.9 2.05 1.99v.01c0 .121-.013.24-.038.355a23.1 23.1 0 01-4.78 4.78.75.75 0 01-1.06 0 23.1 23.1 0 01-4.78-4.78.75.75 0 01-.038-.355v-.01z" /></svg>;
const GlobeAltIcon = ({className}: {className:string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12.75a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-4.13 0-7.73 2.53-9.15 6v.01M12 2.25c4.13 0 7.73 2.53 9.15 6v.01M2.848 14.47a9.75 9.75 0 01-.25-2.22M21.152 14.47a9.75 9.75 0 00.25-2.22M3.75 12a9.75 9.75 0 0116.5 0M12 12v9.75m-9.75-9.75h19.5" /></svg>;
const ListBulletIcon = ({className}: {className:string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>;
const ChartPieIcon = ({className}: {className:string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>;
const CalculatorIcon = ({className}: {className:string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18.75m0 0H12.75m3 0l-3.75-3.75M15.75 9.75h3l-3-3v3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6.25 6.25a.375.375 0 11-.75 0 .375.375 0 01.75 0zM7.5 7.5a.375.375 0 100-.75.375.375 0 000 .75zM9 9a.375.375 0 100-.75.375.375 0 000 .75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 3.375c-.621 0-1.125.504-1.125 1.125v15c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125V4.5c0 .621-.504-1.125-1.125-1.125H3.375z" /></svg>;
const SparklesIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.423-1.423L13.125 18.5l1.188-.648a2.25 2.25 0 011.423-1.423L16.25 15l.648 1.188a2.25 2.25 0 011.423 1.423L19.5 18.5l-1.188.648a2.25 2.25 0 01-1.423 1.423z" /></svg>;
const DocumentTextIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>;