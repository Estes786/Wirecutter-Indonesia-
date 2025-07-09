import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ConversionDataPoint {
  period: string;
  value: number;
}

interface ConversionChartProps {
  data?: ConversionDataPoint[];
}

const defaultData: ConversionDataPoint[] = [
  { period: '6h', value: 245 },
  { period: '12h', value: 389 },
  { period: '18h', value: 456 },
  { period: '24h', value: 523 },
  { period: '30h', value: 478 },
  { period: '36h', value: 612 },
  { period: '42h', value: 689 },
  { period: '48h', value: 734 }
];

export const ConversionChart: React.FC<ConversionChartProps> = ({ 
  data = defaultData 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-600">Conversions</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">
            {data[data.length - 1]?.value || 0}
          </div>
          <div className="text-sm text-gray-500">Latest</div>
        </div>
      </div>

      <div className="relative h-64 bg-gray-50 rounded-lg p-4">
        <div className="absolute inset-0 flex items-end justify-between space-x-1 p-4">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                style={{ 
                  height: `${(item.value / maxValue) * 100}%`,
                  minHeight: '4px'
                }}
              ></div>
              <div className="text-xs text-gray-500 mt-2">{item.period}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-semibold text-green-600">
            +{((data[data.length - 1]?.value || 1) / (data[0]?.value || 1) * 100 - 100).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-500">Growth Rate</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-blue-600">
            {(data.reduce((sum, item) => sum + item.value, 0) / data.length).toFixed(0)}
          </div>
          <div className="text-xs text-gray-500">Average</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-purple-600">
            {data.reduce((sum, item) => sum + item.value, 0)}
          </div>
          <div className="text-xs text-gray-500">Total</div>
        </div>
      </div>
    </div>
  );
};

