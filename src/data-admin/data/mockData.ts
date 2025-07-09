import { QuantumPersonalizationEngine, DashboardMetrics } from '../types/ai-types';

export const mockQuantumEngine: QuantumPersonalizationEngine = {
  neuralProfiler: {
    behaviorGenetics: {
      browsingPatterns: [85, 72, 91, 68, 77],
      clickHeatmaps: {
        'product-grid': 0.87,
        'search-bar': 0.92,
        'filter-panel': 0.64,
        'recommendation': 0.78
      },
      timeSpentAnalysis: {
        'homepage': 45,
        'product-page': 127,
        'comparison': 89,
        'checkout': 34
      },
      devicePreferences: ['Mobile', 'Desktop'],
      navigationFlow: [
        'homepage → search → product → comparison → checkout',
        'homepage → category → product → checkout',
        'direct → product → checkout'
      ]
    },
    purchasePatterns: {
      riskTolerance: 0.73,
      brandLoyalty: 0.82,
      pricesensitivity: 0.68,
      socialInfluence: 0.75,
      impulsivity: 0.45,
      qualityOrientation: 0.89
    },
    emotionalTriggers: {
      currentMood: 'optimistic',
      emotionalTriggers: ['discount', 'limited-time', 'social-proof', 'quality-assurance'],
      satisfactionLevel: 0.84,
      frustrationPoints: ['slow-loading', 'complex-checkout', 'unclear-pricing'],
      motivationalDrivers: ['value-for-money', 'brand-reputation', 'peer-recommendation']
    },
    culturalPreferences: {
      regionalPreferences: {
        'Jakarta': 0.85,
        'Surabaya': 0.72,
        'Bandung': 0.68,
        'Medan': 0.61
      },
      culturalValues: {
        'family-oriented': 0.89,
        'community-focused': 0.82,
        'tradition-respectful': 0.76,
        'innovation-embracing': 0.71
      },
      localTrends: ['ramadan-special', 'lebaran-deals', 'back-to-school', 'year-end-sale'],
      religiousConsiderations: ['halal-certified', 'prayer-time-aware', 'islamic-finance'],
      familyInfluence: 0.87,
      communityOrientation: 0.79
    }
  },
  adaptivePersonality: {
    currentMood: {
      energy: 0.78,
      focus: 0.82,
      curiosity: 0.85,
      urgency: 0.65,
      satisfaction: 0.84
    },
    contextualState: {
      timeOfDay: 'Evening',
      dayOfWeek: 'Wednesday',
      seasonalContext: 'Dry Season',
      weatherImpact: 0.72,
      locationContext: 'Urban Jakarta'
    },
    socialInfluence: {
      socialCircleInfluence: 0.76,
      trendFollowing: 0.68,
      statusSeeking: 0.54,
      communityValidation: 0.81
    },
    economicStatus: {
      estimatedBudget: 2500000,
      spendingCapacity: 0.73,
      financialStability: 0.82,
      priceFlexibility: 0.67
    }
  },
  desirePrediction: {
    futureNeeds: {
      nextPurchaseCategory: 'Electronics',
      timeframePrediction: 14,
      confidenceLevel: 0.87,
      alternativeOptions: ['Smartphone', 'Laptop', 'Smart Watch', 'Headphones']
    },
    unconsciousDesires: {
      hiddenDesires: ['premium-status', 'social-validation', 'efficiency-gains'],
      unspokenNeeds: ['time-saving', 'stress-reduction', 'social-connection'],
      latentPreferences: {
        'minimalist-design': 0.78,
        'premium-materials': 0.85,
        'eco-friendly': 0.72,
        'tech-innovation': 0.89
      },
      behaviorContradictions: ['price-conscious vs premium-seeking', 'brand-loyal vs deal-hunting']
    },
    trendPrecognition: {
      emergingTrends: ['sustainable-tech', 'health-monitoring', 'remote-work-tools', 'smart-home'],
      trendLifecycle: {
        'sustainable-tech': 0.85,
        'health-monitoring': 0.92,
        'remote-work-tools': 0.78,
        'smart-home': 0.74
      },
      viralPotential: 0.83,
      marketTiming: 'Early Adopter Phase'
    },
    seasonalPreferences: {
      monthlyPreferences: {
        'January': 0.82,
        'February': 0.78,
        'March': 0.85,
        'April': 0.74,
        'May': 0.88,
        'June': 0.79
      },
      holidayInfluence: {
        'ramadan': 0.95,
        'lebaran': 0.98,
        'independence-day': 0.76,
        'new-year': 0.89
      },
      weatherPatterns: {
        'rainy-season': 0.72,
        'dry-season': 0.81,
        'hot-weather': 0.68,
        'cool-weather': 0.85
      },
      culturalEvents: ['ramadan-fasting', 'lebaran-celebration', 'independence-day', 'chinese-new-year']
    }
  }
};

export const mockDashboardMetrics: DashboardMetrics = {
  revenue: 32000000,
  userCount: 12543,
  conversionRate: 4.6,
  aiAccuracy: 96.2,
  engagementBoost: 312.5,
  conversionImprovement: 423.8
};

export const mockConversionData = [
  { month: 'October', baseline: 4.2, aiEnhanced: 8.9 },
  { month: 'November', baseline: 4.6, aiEnhanced: 9.8 },
  { month: 'December', baseline: 4.8, aiEnhanced: 10.5 },
  { month: 'January', baseline: 4.4, aiEnhanced: 11.2 },
  { month: 'February', baseline: 4.7, aiEnhanced: 12.1 },
  { month: 'March', baseline: 4.9, aiEnhanced: 13.4 }
];