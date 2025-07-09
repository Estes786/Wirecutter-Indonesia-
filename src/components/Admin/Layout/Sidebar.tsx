import React from 'react';
import {
  LayoutDashboard,
  BrainCircuit,
  BarChart3, // Pastikan BarChart3 di-import
  Users,
  Sparkles,
  HeartHandshake,
  Smile,
  Settings,
  Bot
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'ai-engine', label: 'AI Engine', icon: BrainCircuit },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    // --- ITEM BARU DITAMBAHKAN DI SINI ---
    { id: 'quantum-analytics', label: 'Quantum Analytics', icon: Bot },
    // ------------------------------------
    { id: 'users', label: 'Users', icon: Users },
    { id: 'personalization', label: 'Personalization', icon: Sparkles },
    { id: 'sentiment', label: 'Sentiment', icon: Smile },
    { id: 'behavior', label: 'Behavior', icon: HeartHandshake },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white backdrop-blur-sm border-r border-white/20 h-screen sticky top-16">
      <div className="p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 text-left ${
              activeSection === item.id
                ? 'bg-blue-100 text-blue-700 shadow-lg'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <item.icon className="w-5 h-5 mr-4" />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white text-center">
              <div className="font-bold text-lg">Wirecutter AI</div>
              <p className="text-xs mt-1">Phase 1 Implementation</p>
              <p className="text-xs font-semibold mt-2">v1.0 Quantum</p>
          </div>
      </div>
    </aside>
  );
};

