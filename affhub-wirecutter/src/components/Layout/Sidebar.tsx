import React from 'react';
import { 
  BarChart3, 
  Brain, 
  Target, 
  Users, 
  TrendingUp, 
  Settings,
  Globe,
  Heart,
  Eye,
  Zap
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'ai-engine', label: 'AI Engine', icon: Brain },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'personalization', label: 'Personalization', icon: Target },
    { id: 'cultural-ai', label: 'Cultural AI', icon: Globe },
    { id: 'sentiment', label: 'Sentiment', icon: Heart },
    { id: 'behavior', label: 'Behavior', icon: Eye },
    { id: 'optimization', label: 'Optimization', icon: Zap },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-white/20 h-screen sticky top-16">
      <div className="p-6">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
          <div className="flex items-center space-x-3 mb-2">
            <Brain className="w-6 h-6" />
            <span className="font-semibold">AI Status</span>
          </div>
          <div className="text-sm opacity-90">
            <p>Phase 1 Implementation</p>
            <p className="font-medium">96.2% Accuracy</p>
          </div>
        </div>
      </div>
    </div>
  );
};