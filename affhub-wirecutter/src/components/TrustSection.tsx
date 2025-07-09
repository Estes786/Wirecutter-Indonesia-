import React from 'react';
import { Shield, Users, Award, CheckCircle, TrendingUp, Clock, Star, Globe } from 'lucide-react';

const TrustSection: React.FC = () => {
  const trustStats = [
    {
      icon: Shield,
      value: '100%',
      label: 'Independent Reviews',
      description: 'Unbiased product testing and reviews',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Expert Tested',
      description: 'Products tested by industry experts',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      value: '1M+',
      label: 'Happy Customers',
      description: 'Satisfied customers trust our recommendations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle,
      value: '99.9%',
      label: 'Verified Deals',
      description: 'All affiliate links verified and updated',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testingProcess = [
    {
      step: 1,
      title: 'Research',
      description: 'Extensive market research and product analysis',
      icon: Globe
    },
    {
      step: 2,
      title: 'Testing',
      description: 'Hands-on testing in real-world conditions',
      icon: Star
    },
    {
      step: 3,
      title: 'Review',
      description: 'Detailed analysis and recommendation',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Trust Wirecutter Indonesia?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted source for product recommendations
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustStats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>

              {/* Stats */}
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-200">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Testing Process */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Our Testing Process</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Every product goes through our rigorous testing methodology to ensure you get the best recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testingProcess.map((process, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>

                {/* Icon */}
                <div className="inline-flex p-3 bg-white/10 rounded-xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <process.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                <p className="text-gray-400">{process.description}</p>

                {/* Connecting Line */}
                {index < testingProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-32 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Community Trust */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold">Community Driven</h4>
              <p className="text-gray-400">
                Real feedback from Indonesian users helps improve our recommendations
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold">Always Updated</h4>
              <p className="text-gray-400">
                Our AI system continuously updates prices and availability in real-time
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold">Verified Deals</h4>
              <p className="text-gray-400">
                All affiliate links are verified and lead to legitimate stores
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;