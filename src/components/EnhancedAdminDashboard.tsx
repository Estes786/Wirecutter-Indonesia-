import React, { useState } from 'react';
import { Header } from './Admin/Layout/Header';
import { Sidebar } from './Admin/Layout/Sidebar';
import { MainDashboard } from './Admin/Dashboard/MainDashboard';
import { QuantumAnalytics } from './Admin/QuantumAnalytics'; // Pastikan ini di-import

const EnhancedAdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <MainDashboard />;
      case 'quantum-analytics': // Case untuk Quantum Analytics
        return <QuantumAnalytics />;
      case 'ai-engine':
        return <div className="text-center py-20"><h2 className="text-2xl font-bold">AI Engine</h2></div>;
      case 'analytics':
        return <div className="text-center py-20"><h2 className="text-2xl font-bold">Analytics</h2></div>;
      case 'users':
        return <div className="text-center py-20"><h2 className="text-2xl font-bold">Users</h2></div>;
      // ... case lainnya
      default:
        return <MainDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <div className="flex">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default EnhancedAdminDashboard;

