
import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/views/Dashboard';
import { GrantPrograms } from './components/views/GrantPrograms';
import { CspEnhancements } from './components/views/CspEnhancements';
import { Analysis } from './components/views/Analysis';
import { GrantCalculator } from './components/views/GrantCalculator';
import { Forms } from './components/views/Forms';
import { nrcsPrograms, amsPrograms, otherPrograms, scdaPrograms, nifaPrograms } from './data/grantData';
import type { ViewType } from './types';

export default function App(): React.ReactNode {
  const [activeView, setActiveView] = useState<ViewType>('Dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard setActiveView={setActiveView} />;
      case 'USDA NRCS':
        return <GrantPrograms title="USDA NRCS Programs" programs={nrcsPrograms} />;
      case 'USDA AMS':
        return <GrantPrograms title="USDA AMS Programs" programs={amsPrograms} />;
      case 'SCDA':
        return <GrantPrograms title="South Carolina Dept. of Agriculture (SCDA) Programs" programs={scdaPrograms} />;
      case 'USDA NIFA':
          return <GrantPrograms title="USDA NIFA Programs" programs={nifaPrograms} />;
      case 'Other Grants':
        return <GrantPrograms title="Other Federal & Partner Grants" programs={otherPrograms} />;
      case 'CSP Enhancements':
        return <CspEnhancements />;
      case 'Analysis':
        return <Analysis />;
      case 'Grant Calculator':
        return <GrantCalculator />;
      case 'Forms':
        return <Forms />;
      default:
        return <Dashboard setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeView={activeView} setActiveView={setActiveView} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-72">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}