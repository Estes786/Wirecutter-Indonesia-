import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Award, Sparkles } from 'lucide-react';
import { useAI } from '../hooks/useAI';
import { products } from '../data/products';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { recommendations, loading, getPersonalizedRecommendations, trackUserBehavior } = useAI();

  const heroSlides = [
    {
      title: "AI-Powered Product Recommendations",
      subtitle: "Discover the perfect products tailored just for you",
      description: "Our advanced AI analyzes your preferences and behavior to recommend products you'll love",
      cta: "Get Personalized Recommendations",
      icon: <Sparkles className="h-6 w-6" />,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Expert Reviews You Can Trust",
      subtitle: "In-depth analysis from Indonesian product experts",
      description: "Every product is thoroughly tested and reviewed by our team of Indonesian experts",
      cta: "Browse Expert Reviews",
      icon: <Award className="h-6 w-6" />,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Best Deals Across Indonesia",
      subtitle: "Compare prices from Shopee, Tokopedia, Lazada & more",
      description: "Find the best deals and never overpay with our real-time price comparison",
      cta: "Find Best Deals",
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate getting personalized recommendations
    const mockUser = {
      id: '1',
      name: 'User',
      email: 'user@example.com',
      avatar: '',
      preferences: {
        categories: ['smartphone', 'laptop'],
        priceRange: { min: 0, max: 50000000 },
        brands: ['Apple', 'Samsung', 'Sony']
      },
      history: {
        viewed: ['1', '2'],
        clicked: ['1'],
        purchased: []
      }
    };

    getPersonalizedRecommendations(mockUser, products, 3);
  }, []);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              {currentSlideData.icon}
              <span className="text-sm font-medium">Powered by AI</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {currentSlideData.title}
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-purple-200">
                {currentSlideData.subtitle}
              </h2>
              
              <p className="text-lg text-gray-300 max-w-xl">
                {currentSlideData.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className={`bg-gradient-to-r ${currentSlideData.gradient} hover:opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg`}
                onClick={() => trackUserBehavior('hero_cta_click', 'hero', 'user1')}
              >
                <span>{currentSlideData.cta}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 border border-white/20">
                Browse Categories
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center lg:justify-start space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - AI Recommendations */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">AI Recommendations</h3>
                  <p className="text-sm text-gray-300">Personalized for you</p>
                </div>
              </div>

              {loading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {recommendations.slice(0, 3).map((product, index) => (
                    <div key={product.id} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">{product.name}</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-300">
                          <span>★ {product.rating}</span>
                          <span>•</span>
                          <span>AI Score: {product.aiRecommendationScore}/10</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">from</p>
                        <p className="text-sm font-semibold text-white">
                          Rp {Math.min(...Object.values(product.prices)).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Products</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">1M+</div>
                <div className="text-sm text-gray-300">Reviews</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-sm text-gray-300">Satisfied</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;