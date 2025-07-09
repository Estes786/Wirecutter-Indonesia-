import { useState, useEffect } from 'react';
import { Product, User } from '../types';

export const useAI = () => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const getPersonalizedRecommendations = async (user: User, products: Product[], limit: number = 6) => {
    setLoading(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // AI recommendation algorithm
    const scored = products.map(product => {
      let score = product.aiRecommendationScore;
      
      // Boost score based on user preferences
      if (user.preferences.categories.includes(product.category)) {
        score += 1.5;
      }
      
      // Consider price preference
      const minPrice = Math.min(...Object.values(product.prices));
      if (minPrice >= user.preferences.priceRange.min && minPrice <= user.preferences.priceRange.max) {
        score += 1.0;
      }
      
      // Boost trending products
      if (product.isTrending) {
        score += 0.5;
      }
      
      // Consider user history
      if (user.history.viewed.includes(product.id)) {
        score += 0.3;
      }
      
      return { ...product, finalScore: score };
    });
    
    // Sort by score and return top recommendations
    const sorted = scored.sort((a, b) => b.finalScore - a.finalScore);
    setRecommendations(sorted.slice(0, limit));
    setLoading(false);
  };

  const trackUserBehavior = (action: string, productId: string, userId: string) => {
    // Simulate tracking user behavior for AI learning
    console.log(`AI Tracking: ${action} on product ${productId} by user ${userId}`);
  };

  const predictTrends = (products: Product[]) => {
    // Simulate trend prediction
    return products.filter(p => p.socialMetrics.shares > 200 || p.userPersonalizationData.viewCount > 2000);
  };

  return {
    recommendations,
    loading,
    getPersonalizedRecommendations,
    trackUserBehavior,
    predictTrends,
  };
};