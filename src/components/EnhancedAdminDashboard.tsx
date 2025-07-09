import React, { useState } from 'react';
import { Header } from './Admin/Layout/Header';
import { Sidebar } from './Admin/Layout/Sidebar';
import { MainDashboard } from './Admin/Dashboard/MainDashboard';

const EnhancedAdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <MainDashboard />;
      case 'ai-engine':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Engine Deep Dive</h2>
            <p className="text-gray-600">Advanced AI configuration and monitoring tools</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h2>
            <p className="text-gray-600">Detailed performance metrics and insights</p>
          </div>
        );
      // ... tambahkan case lainnya sesuai kebutuhan
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

