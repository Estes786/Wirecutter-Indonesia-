import React from 'react';
import { TrendingUp } from 'lucide-react';

interface ConversionChartProps {
  data: {
    month: string;
    baseline: number;
    aiEnhanced: number;
  }[];
}

export const ConversionChart: React.FC<ConversionChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.flatMap(d => [d.baseline, d.aiEnhanced]));

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Conversion Analytics</h3>
            <p className="text-gray-600 text-sm">AI vs Baseline Performance</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">{item.month}</span>
              <div className="flex space-x-4">
                <span className="text-gray-600">
                  Baseline: {item.baseline.toFixed(1)}%
                </span>
                <span className="text-blue-600 font-medium">
                  AI Enhanced: {item.aiEnhanced.toFixed(1)}%
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex space-x-2">
                {/* Baseline Bar */}
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gray-400 rounded-full transition-all duration-1000"
                    style={{ width: `${(item.baseline / maxValue) * 100}%` }}
                  />
                </div>
                
                {/* AI Enhanced Bar */}
                <div className="flex-1 bg-blue-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                    style={{ width: `${(item.aiEnhanced / maxValue) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Improvement Indicator */}
              <div className="absolute -top-8 right-0 text-xs font-medium text-green-600">
                +{((item.aiEnhanced - item.baseline) / item.baseline * 100).toFixed(0)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Baseline</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <span className="text-sm text-gray-600">AI Enhanced</span>
        </div>
      </div>
    </div>
  );
};