export interface Product {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  affiliateLinks: {
    shopee?: string;
    tokopedia?: string;
    lazada?: string;
    blibli?: string;
  };
  prices: {
    shopee?: number;
    tokopedia?: number;
    lazada?: number;
    blibli?: number;
  };
  features: string[];
  imageUrl: string;
  isEditorChoice: boolean;
  isTrending: boolean;
  // AI-powered enhancements
  aiRecommendationScore: number;
  userPersonalizationData: {
    viewCount: number;
    clickCount: number;
    conversionRate: number;
    lastViewed: string;
  };
  communityRating: number;
  expertRating: number;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
  priceHistory: {
    date: string;
    price: number;
    store: string;
  }[];
  socialMetrics: {
    shares: number;
    likes: number;
    comments: number;
  };
  automatedUpdates: boolean;
  pros: string[];
  cons: string[];
  quickSpecs: {
    [key: string]: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
  trending: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  preferences: {
    categories: string[];
    priceRange: {
      min: number;
      max: number;
    };
    brands: string[];
  };
  history: {
    viewed: string[];
    clicked: string[];
    purchased: string[];
  };
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  verified: boolean;
  type: 'expert' | 'community';
}

export interface AnalyticsData {
  revenue: number;
  clicks: number;
  conversions: number;
  activeUsers: number;
  topProducts: {
    name: string;
    clicks: number;
    revenue: number;
    conversion: number;
  }[];
  trends: {
    date: string;
    revenue: number;
    clicks: number;
  }[];
}