import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, TrendingUp, Users, MessageCircle, Share2, Heart, Award } from 'lucide-react';
import { products } from '../data/products';
import { useAI } from '../hooks/useAI';
import SmartAffiliateButton from './SmartAffiliateButton';

const FeaturedReviews: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'trending' | 'editor' | 'community'>('trending');
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const { trackUserBehavior } = useAI();

  const featuredProducts = products.filter(p => p.isEditorChoice || p.isTrending);

  const getFilteredProducts = () => {
    switch (selectedTab) {
      case 'trending':
        return featuredProducts.filter(p => p.isTrending);
      case 'editor':
        return featuredProducts.filter(p => p.isEditorChoice);
      case 'community':
        return featuredProducts.sort((a, b) => b.communityRating - a.communityRating);
      default:
        return featuredProducts;
    }
  };

  const toggleLike = (productId: string) => {
    const newLiked = new Set(likedProducts);
    if (newLiked.has(productId)) {
      newLiked.delete(productId);
    } else {
      newLiked.add(productId);
    }
    setLikedProducts(newLiked);
    trackUserBehavior('like', productId, 'user1');
  };

  const handleShare = (product: any) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this amazing product: ${product.name}`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
    trackUserBehavior('share', product.id, 'user1');
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Reviews
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            In-depth reviews of the best products
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg max-w-md mx-auto">
          <button
            onClick={() => setSelectedTab('trending')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
              selectedTab === 'trending'
                ? 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            <span>Trending</span>
          </button>
          <button
            onClick={() => setSelectedTab('editor')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
              selectedTab === 'editor'
                ? 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>Editor's Choice</span>
          </button>
          <button
            onClick={() => setSelectedTab('community')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
              selectedTab === 'community'
                ? 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Community</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {getFilteredProducts().map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {product.isEditorChoice && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Award className="h-3 w-3" />
                      <span>Editor's Choice</span>
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>Trending</span>
                    </span>
                  )}
                </div>

                {/* Social Actions */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => toggleLike(product.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                      likedProducts.has(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${likedProducts.has(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => handleShare(product)}
                    className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white transition-all duration-200"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>

                {/* AI Score */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  AI Score: {product.aiRecommendationScore}/10
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-red-600 dark:text-red-400 font-medium uppercase tracking-wide">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Updated 15 January 2024
                  </p>
                </div>

                {/* Ratings */}
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Community vs Expert Rating */}
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-400">Community: {product.communityRating}/5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600 dark:text-gray-400">Expert: {product.expertRating}/5</span>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Quick Specs</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(product.quickSpecs).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">{key}:</span>
                        <span className="text-gray-900 dark:text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {product.pros.slice(0, 2).map((pro, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-600 dark:text-gray-400">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {product.cons.slice(0, 2).map((con, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">✗</span>
                          <span className="text-gray-600 dark:text-gray-400">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Best Price</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        Rp {Math.min(...Object.values(product.prices)).toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">AI Recommendation</p>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">
                          {product.aiRecommendationScore >= 8 ? 'Highly Recommended' : 'Recommended'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <SmartAffiliateButton
                    product={product}
                    variant="primary"
                    className="w-full"
                  />
                </div>

                {/* Social Metrics */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Share2 className="h-4 w-4" />
                      <span>{product.socialMetrics.shares}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{product.socialMetrics.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className={`w-2 h-2 rounded-full ${
                      product.stockStatus === 'in-stock' ? 'bg-green-500' : 
                      product.stockStatus === 'low-stock' ? 'bg-yellow-500' : 
                      'bg-red-500'
                    }`}></span>
                    <span className="capitalize">{product.stockStatus.replace('-', ' ')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;