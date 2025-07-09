// Mock data untuk dashboard enhanced
export const mockDashboardMetrics = {
  revenue: 32000000,
  userCount: 12543,
  conversionRate: 8.4,
  aiAccuracy: 94.7
};

export const mockQuantumEngine = {
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

export const mockConversionData = [
  { period: '6h', value: 245 },
  { period: '12h', value: 389 },
  { period: '18h', value: 456 },
  { period: '24h', value: 523 },
  { period: '30h', value: 478 },
  { period: '36h', value: 612 },
  { period: '42h', value: 689 },
  { period: '48h', value: 734 }
];

// Export default untuk kompatibilitas
export default {
  mockDashboardMetrics,
  mockQuantumEngine,
  mockConversionData
};

