import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  TrendingUp,
  DollarSign,
  Zap,
  Eye,
  Brain,
  Target,
  Globe,
  Activity
} from 'lucide-react';
import { MetricsCard } from './MetricsCard';
import { QuantumAIPanel } from '../AI/QuantumAIPanel';
import { ConversionChart } from '../Charts/ConversionChart';

// Mock data langsung di file ini untuk menghindari import error
const mockDashboardMetrics = {
  revenue: 32000000,
  userCount: 12543,
  conversionRate: 8.4,
  aiAccuracy: 94.7
};

const mockQuantumEngine = {
  neuralProfiler: {
    behaviorGenetics: {
      navigationFlow: ['homepage', 'categories', 'product-detail', 'checkout'],
      patterns: ['browse-heavy', 'quick-decision', 'comparison-focused']
    },
    devicePreferences: ['mobile-first', 'desktop-secondary'],
    purchasePatterns: {
      brandLoyalty: 0.73,
      pricesSensitivity: 0.45
    }
  },
  adaptivePersonality: {
    traits: ['analytical', 'price-conscious', 'brand-loyal'],
    preferences: {
      communicationStyle: 'direct',
      decisionSpeed: 'moderate'
    }
  }
};

const mockConversionData = [
  { period: '6h', value: 245 },
  { period: '12h', value: 389 },
  { period: '18h', value: 456 },
  { period: '24h', value: 523 },
  { period: '30h', value: 478 },
  { period: '36h', value: 612 },
  { period: '42h', value: 689 },
  { period: '48h', value: 734 }
];

export const MainDashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value);
  };

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Monthly Revenue"
          value={formatCurrency(mockDashboardMetrics.revenue)}
          change={18.5}
          changeType="increase"
          icon={DollarSign}
          className="w-6 h-6 text-emerald-600"
          description="Monthly recurring revenue"
          gradient="from-emerald-500 to-teal-600"
        />
        
        <MetricsCard
          title="Active Users"
          value={formatNumber(mockDashboardMetrics.userCount)}
          change={12.3}
          changeType="increase"
          icon={Users}
          className="w-6 h-6 text-blue-600"
          description="Engaged users this month"
          gradient="from-blue-500 to-indigo-600"
        />
        
        <MetricsCard
          title="Conversion Rate"
          value={`${(mockDashboardMetrics.conversionRate * 100).toFixed(1)}%`}
          change={mockDashboardMetrics.conversionRate}
          changeType="increase"
          icon={TrendingUp}
          className="w-6 h-6 text-purple-600"
          description="AI-enhanced conversion"
          gradient="from-purple-500 to-pink-600"
        />
        
        <MetricsCard
          title="AI Accuracy"
          value={`${(mockDashboardMetrics.aiAccuracy * 100).toFixed(1)}%`}
          change={mockDashboardMetrics.aiAccuracy - 85}
          changeType="increase"
          icon={Brain}
          className="w-6 h-6 text-orange-600"
          description="ML prediction success rate"
          gradient="from-orange-500 to-red-600"
        />
      </div>

      {/* AI Enhancement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricsCard
          title="Neural Optimization Boost"
          value="300%"
          change={45}
          changeType="increase"
          icon={Brain}
          className="w-6 h-6 text-cyan-600"
          description="AI-driven performance enhancement"
          gradient="from-cyan-500 to-blue-600"
        />
        
        <MetricsCard
          title="Quantum Processing Speed"
          value="2.4ms"
          change={-15}
          changeType="decrease"
          icon={Zap}
          className="w-6 h-6 text-yellow-600"
          description="Average response time"
          gradient="from-yellow-500 to-orange-600"
        />
        
        <MetricsCard
          title="Predictive Accuracy"
          value="94.7%"
          change={8.2}
          changeType="increase"
          icon={Target}
          className="w-6 h-6 text-green-600"
          description="ML prediction success rate"
          gradient="from-green-500 to-emerald-600"
        />
      </div>

      {/* Quantum AI Panel */}
      <QuantumAIPanel engine={mockQuantumEngine} />

      {/* Conversion Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Conversion Analytics</h3>
            <p className="text-gray-600 text-sm">Real-time conversion tracking</p>
          </div>
          <div className="flex space-x-2">
            {['24h', '7d', '30d', '90d'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedTimeframe(period)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  selectedTimeframe === period
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <ConversionChart data={mockConversionData} />
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100 text-sm">Global Reach</p>
              <p className="text-2xl font-bold">127</p>
              <p className="text-indigo-200 text-xs">Countries served</p>
            </div>
            <Globe className="h-8 w-8 text-indigo-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Active Sessions</p>
              <p className="text-2xl font-bold">1,247</p>
              <p className="text-purple-200 text-xs">Real-time users</p>
            </div>
            <Eye className="h-8 w-8 text-purple-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

