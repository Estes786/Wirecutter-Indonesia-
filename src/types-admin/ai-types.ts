// Types untuk AI dashboard components

export interface QuantumPanelProps {
  engine: {
    neuralProfiler: {
      behaviorGenetics: {
        navigationFlow: string[];
        patterns: string[];
      };
      devicePreferences: string[];
      purchasePatterns: {
        brandLoyalty: number;
        pricesSensitivity: number;
      };
    };
    adaptivePersonality: {
      traits: string[];
      preferences: {
        communicationStyle: string;
        decisionSpeed: string;
      };
    };
  };
}

export interface MetricsCardProps {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: any;
  className?: string;
  description?: string;
  gradient?: string;
}

export interface ConversionDataPoint {
  period: string;
  value: number;
}

export interface DashboardMetrics {
  revenue: number;
  userCount: number;
  conversionRate: number;
  aiAccuracy: number;
}

// Export default untuk kompatibilitas
export default {
  QuantumPanelProps,
  MetricsCardProps,
  ConversionDataPoint,
  DashboardMetrics
};

