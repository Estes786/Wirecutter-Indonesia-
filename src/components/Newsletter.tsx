import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Gift, TrendingUp, Users, Bell } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Deals',
      description: 'Get early access to the best deals and discounts',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Product Updates',
      description: 'Be the first to know about new products and reviews',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Community Insights',
      description: 'Insights from our community of Indonesian users',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-pink-600 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-32 translate-y-32"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated with Best Deals
          </h2>
          
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Get the latest product reviews, exclusive deals, and buying guides delivered to your inbox
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${benefit.color} mb-4`}>
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-pink-100">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Form */}
        {!isSubscribed ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <p className="text-sm text-pink-100 mt-4">
              Join 50,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Community!</h3>
            <p className="text-pink-100 mb-6">
              Check your email for a confirmation link and exclusive welcome offer.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Subscribe another email
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-sm text-pink-200">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Weekly</div>
            <div className="text-sm text-pink-200">Updates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Zero</div>
            <div className="text-sm text-pink-200">Spam</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;