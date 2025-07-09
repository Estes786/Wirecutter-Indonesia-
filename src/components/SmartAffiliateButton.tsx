import React, { useState, useEffect } from 'react';
import { ExternalLink, TrendingDown, Clock, Award, Zap } from 'lucide-react';
import { Product } from '../types';

interface SmartAffiliateButtonProps {
  product: Product;
  variant?: 'primary' | 'secondary' | 'minimal';
  className?: string;
}

const SmartAffiliateButton: React.FC<SmartAffiliateButtonProps> = ({ 
  product, 
  variant = 'primary',
  className = ''
}) => {
  const [bestDeal, setBestDeal] = useState<{ store: string; price: number; url: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPriceDropAlert, setShowPriceDropAlert] = useState(false);

  useEffect(() => {
    // AI-powered best deal detection
    const detectBestDeal = () => {
      const deals = Object.entries(product.prices).map(([store, price]) => ({
        store,
        price,
        url: product.affiliateLinks[store as keyof typeof product.affiliateLinks] || '#'
      }));

      const best = deals.reduce((prev, current) => 
        prev.price < current.price ? prev : current
      );

      setBestDeal(best);

      // Check for recent price drops
      const recentDrop = product.priceHistory.some(
        (history) => 
          Date.now() - new Date(history.date).getTime() < 24 * 60 * 60 * 1000 &&
          history.price < best.price * 1.1
      );

      setShowPriceDropAlert(recentDrop);
    };

    detectBestDeal();
  }, [product]);

  const handleClick = async (store: string, url: string) => {
    setIsLoading(true);
    
    // Simulate AI optimization and tracking
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Track click for AI learning
    console.log(`AI Tracking: Affiliate click for ${product.name} at ${store}`);
    
    // Open affiliate link
    window.open(url, '_blank');
    
    setIsLoading(false);
  };

  const getStoreIcon = (store: string) => {
    const icons = {
      shopee: '🛒',
      tokopedia: '🛍️',
      lazada: '🛒',
      blibli: '🛍️'
    };
    return icons[store as keyof typeof icons] || '🛒';
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105';
      case 'secondary':
        return 'bg-white hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-lg border border-gray-300 shadow-sm';
      case 'minimal':
        return 'text-green-600 hover:text-green-700 font-medium py-1 px-2 rounded transition-colors';
      default:
        return 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105';
    }
  };

  if (!bestDeal) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Price Drop Alert */}
      {showPriceDropAlert && (
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-lg flex items-center space-x-2 animate-pulse">
          <TrendingDown className="h-4 w-4" />
          <span className="text-sm font-medium">Price Drop Alert! Save up to 15%</span>
        </div>
      )}

      {/* Main CTA Button */}
      <button
        onClick={() => handleClick(bestDeal.store, bestDeal.url)}
        disabled={isLoading}
        className={`${getVariantStyles()} transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group ${className}`}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <span>{getStoreIcon(bestDeal.store)}</span>
            <span>Buy at {bestDeal.store.charAt(0).toUpperCase() + bestDeal.store.slice(1)}</span>
            <ExternalLink className="h-4 w-4" />
          </>
        )}
        
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 transform translate-x-full group-hover:translate-x-0"></div>
      </button>

      {/* Best Deal Indicator */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
          <Award className="h-4 w-4" />
          <span className="font-medium">Best Deal</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4" />
          <span>Price updated: 2 hours ago</span>
        </div>
      </div>

      {/* Compare Prices */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-2">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Compare Prices</h4>
        {Object.entries(product.prices).map(([store, price]) => (
          <div key={store} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <span className="text-base">{getStoreIcon(store)}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">{store}</span>
              {store === bestDeal.store && (
                <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                  Best Price
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Rp {price.toLocaleString()}
              </span>
              <button
                onClick={() => handleClick(store, product.affiliateLinks[store as keyof typeof product.affiliateLinks] || '#')}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
        <div className="flex items-start space-x-2">
          <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-purple-900 dark:text-purple-100">AI Insight</p>
            <p className="text-xs text-purple-700 dark:text-purple-300">
              {product.aiRecommendationScore >= 8 
                ? `Highly recommended! AI predicts ${Math.round(product.userPersonalizationData.conversionRate)}% satisfaction rate.`
                : `Good choice! Based on similar user preferences, this product scores ${product.aiRecommendationScore}/10.`
              }
            </p>
          </div>
        </div>
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2 text-sm">
        <div className={`w-2 h-2 rounded-full ${
          product.stockStatus === 'in-stock' ? 'bg-green-500' : 
          product.stockStatus === 'low-stock' ? 'bg-yellow-500' : 
          'bg-red-500'
        }`}></div>
        <span className="text-gray-600 dark:text-gray-400 capitalize">
          {product.stockStatus === 'in-stock' ? 'In Stock' : 
           product.stockStatus === 'low-stock' ? 'Low Stock - Order Soon!' : 
           'Out of Stock'}
        </span>
      </div>
    </div>
  );
};

export default SmartAffiliateButton;