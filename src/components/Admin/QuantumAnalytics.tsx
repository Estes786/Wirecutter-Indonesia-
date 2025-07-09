import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Brain, 
  Heart, 
  Smile, 
  Shield, 
  Star,
  BarChart3,
  PieChart,
  Activity,
  Sparkles
} from 'lucide-react';

// TypeScript Interfaces
interface QuantumMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  probability: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface EmotionalMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  sentiment: 'positive' | 'negative' | 'neutral';
  icon: React.ComponentType<{ className?: string }>;
}

interface TimelineData {
  timestamp: string;
  value: number;
}

interface UniverseData {
  name: string;
  revenue: number;
  probability: number;
  color: string;
}

// Mock Data
const quantumMetrics: QuantumMetric[] = [
  {
    id: 'parallel-revenue',
    name: 'Parallel Universe Revenue',
    value: 847392.50,
    unit: 'USD',
    change: 23.4,
    trend: 'up',
    probability: 87.3,
    icon: Sparkles
  },
  {
    id: 'multidimensional-conversion',
    name: 'Multidimensional Conversion',
    value: 34.7,
    unit: '%',
    change: 5.2,
    trend: 'up',
    probability: 92.1,
    icon: BarChart3
  },
  {
    id: 'quantum-behavior',
    name: 'Quantum User Behavior',
    value: 2847,
    unit: 'interactions',
    change: -2.1,
    trend: 'down',
    probability: 78.9,
    icon: Brain
  },
  {
    id: 'probability-revenue',
    name: 'Probability Revenue',
    value: 156483.20,
    unit: 'USD',
    change: 15.8,
    trend: 'up',
    probability: 94.2,
    icon: Activity
  }
];

const emotionalMetrics: EmotionalMetric[] = [
  {
    id: 'happiness-roi',
    name: 'Happiness ROI',
    value: 287.4,
    unit: '%',
    change: 12.3,
    trend: 'up',
    sentiment: 'positive',
    icon: Smile
  },
  {
    id: 'satisfaction-conversion',
    name: 'Satisfaction Conversion',
    value: 68.9,
    unit: '%',
    change: 4.7,
    trend: 'up',
    sentiment: 'positive',
    icon: Heart
  },
  {
    id: 'trust-monetization',
    name: 'Trust Monetization',
    value: 453621.80,
    unit: 'USD',
    change: 8.2,
    trend: 'up',
    sentiment: 'positive',
    icon: Shield
  },
  {
    id: 'loyalty-profitability',
    name: 'Loyalty Profitability',
    value: 195.3,
    unit: '%',
    change: -1.4,
    trend: 'down',
    sentiment: 'neutral',
    icon: Star
  }
];

const universeData: UniverseData[] = [
  { name: 'Alpha Universe', revenue: 234567, probability: 89.2, color: 'from-purple-400 to-pink-400' },
  { name: 'Beta Universe', revenue: 187432, probability: 76.8, color: 'from-blue-400 to-cyan-400' },
  { name: 'Gamma Universe', revenue: 298754, probability: 94.1, color: 'from-green-400 to-emerald-400' },
  { name: 'Delta Universe', revenue: 126589, probability: 67.3, color: 'from-orange-400 to-red-400' }
];

const timelineData: TimelineData[] = [
  { timestamp: '00:00', value: 45 },
  { timestamp: '04:00', value: 52 },
  { timestamp: '08:00', value: 78 },
  { timestamp: '12:00', value: 89 },
  { timestamp: '16:00', value: 67 },
  { timestamp: '20:00', value: 84 },
  { timestamp: '24:00', value: 92 }
];

const QuantumAnalytics: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'quantum' | 'emotional'>('quantum');
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toFixed(1);
  };

  const MetricCard: React.FC<{ metric: QuantumMetric | EmotionalMetric; type: 'quantum' | 'emotional' }> = ({ metric, type }) => {
    const IconComponent = metric.icon;
    const isQuantum = type === 'quantum';
    const probability = isQuantum ? (metric as QuantumMetric).probability : 85;
    const sentiment = !isQuantum ? (metric as EmotionalMetric).sentiment : 'positive';

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${isQuantum ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                metric.trend === 'up' ? 'bg-green-100 text-green-800' : 
                metric.trend === 'down' ? 'bg-red-100 text-red-800' : 
                'bg-gray-100 text-gray-800'
              }`}>
                {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'} {Math.abs(metric.change)}%
              </div>
            </div>
          </div>

          <h3 className="text-gray-600 text-sm font-medium mb-2">{metric.name}</h3>
          
          <div className="flex items-baseline mb-3">
            <span className="text-2xl font-bold text-gray-900">
              {metric.unit === 'USD' ? '$' : ''}{formatNumber(metric.value)}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              {metric.unit !== 'USD' ? metric.unit : ''}
            </span>
          </div>

          {isQuantum && (
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Quantum Probability</span>
                <span>{probability}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${probability}%` }}
                />
              </div>
            </div>
          )}

          {!isQuantum && (
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Emotional State</span>
                <span className={`font-medium ${
                  sentiment === 'positive' ? 'text-green-600' : 
                  sentiment === 'negative' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    sentiment === 'positive' ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                    sentiment === 'negative' ? 'bg-gradient-to-r from-red-400 to-red-500' :
                    'bg-gradient-to-r from-gray-400 to-gray-500'
                  }`}
                  style={{ width: `${probability}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const UniverseCard: React.FC<{ universe: UniverseData; index: number }> = ({ universe, index }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
      <div className={`absolute inset-0 bg-gradient-to-br ${universe.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{universe.name}</h3>
          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${universe.color} animate-pulse`} />
        </div>
        
        <div className="mb-4">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            ${formatNumber(universe.revenue)}
          </div>
          <div className="text-sm text-gray-500">Revenue Generated</div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Probability Field</span>
            <span>{universe.probability}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`bg-gradient-to-r ${universe.color} h-2 rounded-full transition-all duration-1000`}
              style={{ 
                width: `${universe.probability}%`,
                animationDelay: `${index * 200}ms`
              }}
            />
          </div>
        </div>

        <div className="text-xs text-gray-400">
          Last quantum sync: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );

  const QuantumWave: React.FC = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Zap className="w-5 h-5 mr-2 text-purple-500" />
        Quantum Wave Analysis
      </h3>
      
      <div className="h-32 relative">
        <svg className="w-full h-full" viewBox="0 0 400 100">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          
          <path
            d={`M 0 50 Q 50 ${20 + animationPhase * 5} 100 50 T 200 50 T 300 50 T 400 50`}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            className="animate-pulse"
          />
          
          <path
            d={`M 0 60 Q 60 ${40 + animationPhase * 3} 120 60 T 240 60 T 360 60 T 400 60`}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            opacity="0.6"
          />
          
          <path
            d={`M 0 40 Q 40 ${60 + animationPhase * 4} 80 40 T 160 40 T 320 40 T 400 40`}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="text-center">
          <div className="text-lg font-semibold text-purple-600">47.2Hz</div>
          <div className="text-xs text-gray-500">Frequency</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-pink-600">89.3%</div>
          <div className="text-xs text-gray-500">Coherence</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-cyan-600">156ms</div>
          <div className="text-xs text-gray-500">Response</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
            <Sparkles className="w-8 h-8 mr-3 text-purple-500" />
            Quantum Analytics
          </h1>
          <p className="text-gray-600">Advanced multidimensional analytics from parallel universes</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm border border-gray-200 w-fit">
          <button
            onClick={() => setSelectedTab('quantum')}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
              selectedTab === 'quantum'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Quantum Metrics
          </button>
          <button
            onClick={() => setSelectedTab('emotional')}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
              selectedTab === 'emotional'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Emotional Revenue
          </button>
        </div>

        {/* Quantum Metrics Tab */}
        {selectedTab === 'quantum' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quantumMetrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} type="quantum" />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <QuantumWave />
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-purple-500" />
                  Probability Distribution
                </h3>
                
                <div className="space-y-3">
                  {['High Probability', 'Medium Probability', 'Low Probability', 'Quantum Uncertainty'].map((label, index) => (
                    <div key={label} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full mr-3 ${
                          index === 0 ? 'bg-green-500' :
                          index === 1 ? 'bg-yellow-500' :
                          index === 2 ? 'bg-orange-500' : 'bg-red-500'
                        }`} />
                        <span className="text-sm text-gray-600">{label}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {[45, 28, 18, 9][index]}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
                Parallel Universe Revenue
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {universeData.map((universe, index) => (
                  <UniverseCard key={universe.name} universe={universe} index={index} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Emotional Revenue Tab */}
        {selectedTab === 'emotional' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emotionalMetrics.map((metric) => (
                <MetricCard key={metric.id} metric={metric} type="emotional" />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-pink-500" />
                  Emotional Timeline
                </h3>
                
                <div className="h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 100">
                    <defs>
                      <linearGradient id="emotionalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#EF4444" />
                      </linearGradient>
                    </defs>
                    
                    {timelineData.map((point, index) => (
                      <g key={index}>
                        <circle
                          cx={index * 60 + 40}
                          cy={100 - point.value}
                          r="4"
                          fill="url(#emotionalGradient)"
                          className="animate-pulse"
                        />
                        {index > 0 && (
                          <line
                            x1={(index - 1) * 60 + 40}
                            y1={100 - timelineData[index - 1].value}
                            x2={index * 60 + 40}
                            y2={100 - point.value}
                            stroke="url(#emotionalGradient)"
                            strokeWidth="2"
                          />
                        )}
                      </g>
                    ))}
                  </svg>
                </div>
                
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  {timelineData.map((point) => (
                    <span key={point.timestamp}>{point.timestamp}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Smile className="w-5 h-5 mr-2 text-blue-500" />
                  Sentiment Analysis
                </h3>
                
                <div className="space-y-4">
                  {[
                    { label: 'Extremely Happy', value: 32, color: 'bg-green-500' },
                    { label: 'Very Satisfied', value: 28, color: 'bg-blue-500' },
                    { label: 'Moderately Pleased', value: 24, color: 'bg-yellow-500' },
                    { label: 'Neutral', value: 16, color: 'bg-gray-500' }
                  ].map((sentiment) => (
                    <div key={sentiment.label} className="flex items-center">
                      <div className="w-24 text-sm text-gray-600">{sentiment.label}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                        <div 
                          className={`${sentiment.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${sentiment.value}%` }}
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-900 w-12">{sentiment.value}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Loyalty Heat Map
              </h3>
              
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded ${
                      Math.random() > 0.7 ? 'bg-green-500' :
                      Math.random() > 0.5 ? 'bg-yellow-500' :
                      Math.random() > 0.3 ? 'bg-orange-500' : 'bg-gray-200'
                    } transition-all duration-300 hover:scale-110`}
                    style={{ 
                      animationDelay: `${i * 50}ms`,
                      opacity: 0.8 + Math.random() * 0.2
                    }}
                  />
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>Less Loyal</span>
                <span>More Loyal</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuantumAnalytics;