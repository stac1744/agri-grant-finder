
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
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          {navContent}
        </div>
      </div>
    </>
  );
}

// Icon components
const HomeIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M3 13.5V21h6v-6h6v6h6v-7.5M12 3v5.732" /></svg>;
const SunIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>;
const ShoppingBagIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>;
const GlobeAltIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253m0 0A11.953 11.953 0 0112 7.5c2.998 0 5.74 1.1 7.843 2.918" /></svg>;
const ListBulletIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>;
const ChartPieIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 12h-3a7.5 7.5 0 000-12h3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 00-7.5 7.5h7.5V6z" /></svg>;
const SparklesIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.456-2.456L12.75 18l1.178-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.178a3.375 3.375 0 002.456 2.456l1.178.398-1.178.398a3.375 3.375 0 00-2.456 2.456z" /></svg>;
const AcademicCapIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path d="M12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM17.25 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>;
const MapPinIcon = ({className}: {className: string}) => <svg className={`h-6 w-6 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
