import React, { useState } from 'react';
import { Smartphone, Laptop, Headphones, Tv, ChefHat, Gamepad2, ArrowRight, TrendingUp, Users } from 'lucide-react';
import { categories } from '../data/products';

const Categories: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const icons = {
      smartphone: Smartphone,
      laptop: Laptop,
      headphones: Headphones,
      tv: Tv,
      'chef-hat': ChefHat,
      'gamepad-2': Gamepad2,
    };
    const Icon = icons[iconName as keyof typeof icons] || Smartphone;
    return <Icon className="h-8 w-8" />;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse Categories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the best products in every category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Trending Badge */}
              {category.trending && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>Trending</span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6 relative">
                <div className={`
                  p-4 rounded-2xl transition-all duration-300 inline-flex
                  ${hoveredCategory === category.id 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg transform scale-110' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }
                `}>
                  {getIcon(category.icon)}
                </div>
                
                {/* Animated Background */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-all duration-300
                  ${hoveredCategory === category.id 
                    ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20 scale-150' 
                    : 'scale-100'
                  }
                `} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {category.name}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{category.productCount} products</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <button className="text-red-600 dark:text-red-400 font-medium hover:text-red-700 dark:hover:text-red-300 transition-colors">
                    Explore
                  </button>
                  <ArrowRight className={`
                    h-5 w-5 transition-all duration-300
                    ${hoveredCategory === category.id 
                      ? 'text-red-600 dark:text-red-400 transform translate-x-1' 
                      : 'text-gray-400 dark:text-gray-500'
                    }
                  `} />
                </div>
              </div>

              {/* Hover Effects */}
              <div className={`
                absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300
              `} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;