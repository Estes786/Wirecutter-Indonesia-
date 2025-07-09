import React from 'react';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Brain, 
  Target,
  Zap,
  Eye,
  Heart
} from 'lucide-react';
import { MetricsCard } from './MetricsCard';
import { QuantumAIPanel } from '../AI/QuantumAIPanel';
import { ConversionChart } from '../Charts/ConversionChart';
import { mockDashboardMetrics, mockQuantumEngine, mockConversionData } from '../../data/mockData';

export const MainDashboard: React.FC = () => {
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
          title="Total Revenue"
          value={formatCurrency(mockDashboardMetrics.revenue)}
          change={18.5}
          changeType="increase"
          icon={<DollarSign className="w-6 h-6 text-emerald-600" />}
          description="Monthly recurring revenue"
          gradient="from-emerald-500 to-teal-600"
        />
        
        <MetricsCard
          title="Active Users"
          value={formatNumber(mockDashboardMetrics.userCount)}
          change={12.3}
          changeType="increase"
          icon={<Users className="w-6 h-6 text-blue-600" />}
          description="Engaged users this month"
          gradient="from-blue-500 to-indigo-600"
        />
        
        <MetricsCard
          title="Conversion Rate"
          value={`${mockDashboardMetrics.conversionRate}%`}
          change={mockDashboardMetrics.conversionImprovement}
          changeType="increase"
          icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
          description="AI-enhanced conversion"
          gradient="from-purple-500 to-pink-600"
        />
        
        <MetricsCard
          title="AI Accuracy"
          value={`${mockDashboardMetrics.aiAccuracy}%`}
          change={mockDashboardMetrics.aiAccuracy - 85}
          changeType="increase"
          icon={<Brain className="w-6 h-6 text-orange-600" />}
          description="Personalization accuracy"
          gradient="from-orange-500 to-red-600"
        />
      </div>

      {/* AI Enhancement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricsCard
          title="Personalization Boost"
          value="500%"
          change={500}
          changeType="increase"
          icon={<Target className="w-6 h-6 text-cyan-600" />}
          description="Accuracy improvement"
          gradient="from-cyan-500 to-blue-600"
        />
        
        <MetricsCard
          title="Engagement Boost"
          value={`${mockDashboardMetrics.engagementBoost}%`}
          change={mockDashboardMetrics.engagementBoost}
          changeType="increase"
          icon={<Heart className="w-6 h-6 text-pink-600" />}
          description="User engagement increase"
          gradient="from-pink-500 to-rose-600"
        />
        
        <MetricsCard
          title="Behavioral Insights"
          value="Advanced"
          change={96.2}
          changeType="increase"
          icon={<Eye className="w-6 h-6 text-violet-600" />}
          description="Real-time analysis"
          gradient="from-violet-500 to-purple-600"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Quantum AI Panel */}
        <div className="xl:col-span-2">
          <QuantumAIPanel engine={mockQuantumEngine} />
        </div>
        
        {/* Conversion Chart */}
        <div className="xl:col-span-2">
          <ConversionChart data={mockConversionData} />
        </div>
      </div>

      {/* Phase 1 Implementation Status */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-emerald-100 rounded-xl">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-900">Phase 1 Implementation Status</h3>
              <p className="text-emerald-700">Week 1-2 Progress</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-emerald-900">96.2%</p>
            <p className="text-emerald-700 text-sm">Completion Rate</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-emerald-800 font-medium">Quantum AI Layer</span>
              <span className="text-emerald-600 font-bold">✓ Complete</span>
            </div>
            <p className="text-emerald-700 text-sm">Neural profiling and behavioral genetics implemented</p>
          </div>
          
          <div className="bg-white/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-emerald-800 font-medium">Cultural AI</span>
              <span className="text-emerald-600 font-bold">✓ Complete</span>
            </div>
            <p className="text-emerald-700 text-sm">Indonesian cultural preferences integrated</p>
          </div>
          
          <div className="bg-white/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-emerald-800 font-medium">Personalization Engine</span>
              <span className="text-emerald-600 font-bold">✓ Complete</span>
            </div>
            <p className="text-emerald-700 text-sm">Adaptive personality and desire prediction active</p>
          </div>
        </div>
      </div>
    </div>
  );
};