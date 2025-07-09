import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: LucideIcon;
  className?: string;
  description?: string;
  gradient?: string;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  className = "w-6 h-6 text-emerald-600",
  description,
  gradient = "from-blue-500 to-purple-600"
}) => {
  const getTrendIcon = () => {
    switch (changeType) {
      case 'increase':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'decrease':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'increase':
        return 'text-green-500';
      case 'decrease':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="relative group">
      <div className={`bg-gradient-to-r ${gradient} rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group-hover:scale-105`}>
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-sm`}>
            <Icon className={className} />
          </div>
          <div className="flex items-center space-x-2">
            {getTrendIcon()}
            <span className={`text-sm font-medium ${getChangeColor()}`}>
              {changeType === 'increase' ? '+' : changeType === 'decrease' ? '-' : ''}
              {Math.abs(change).toFixed(1)}%
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-white/80 text-sm font-medium">{title}</h3>
          <p className="text-2xl font-bold text-white">{value}</p>
          {description && (
            <p className="text-white/60 text-xs">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

