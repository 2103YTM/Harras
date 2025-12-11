import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DataFingerprint from './components/DataFingerprint';
import BlockchainLogs from './components/BlockchainLogs';
import AIAnalysis from './components/AIAnalysis';
import Settings from './components/Settings';
import Contact from './components/Contact';
import Login from './components/Login';
import { PageView } from './types';
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState<PageView>('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard onNavigate={setActivePage} />;
      case 'fingerprint':
        return <DataFingerprint />;
      case 'blockchain':
        return <BlockchainLogs />;
      case 'ai-analysis':
        return <AIAnalysis />;
      case 'settings':
        return <Settings />;
      case 'contact':
        return <Contact />;
      default:
        return <Dashboard onNavigate={setActivePage} />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-row-reverse relative overflow-hidden font-sans">
      
      {/* Background Graphic: Diriyah Silhouette + Cyber Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
         <div className="cyber-grid absolute inset-0"></div>
         {/* Simulated geometric skyline at bottom */}
         <div className="absolute bottom-0 w-full h-64 bg-repeat-x opacity-20" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23166534' fill-opacity='1' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom'
              }}>
         </div>
      </div>

      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />

      <main className="flex-1 mr-64 p-8 relative z-10 overflow-y-auto h-screen">
        {renderContent()}
        
        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-400 text-sm">
            <p>&copy; 2024 نظام حرّص - جميع الحقوق محفوظة</p>
            <div className="flex justify-center gap-4 mt-2">
                <span>{CONTACT_INFO.phone}</span>
                <span>|</span>
                <span>{CONTACT_INFO.email}</span>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;