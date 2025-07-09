import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  Settings,
  Bot,
  Activity,
  Globe,
  Zap,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';
import { products } from '../data/products';
import { AnalyticsData } from '../types';

const AdminDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'products' | 'analytics' | 'performance' | 'ai'>('overview');
  const [isLoading, setIsLoading] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    revenue: 32000000,
    clicks: 2350,
    conversions: 4.6,
    activeUsers: 12543,
    topProducts: [
      { name: 'iPhone 15 Pro Max', clicks: 676, revenue: 2806000, conversion: 4.2 },
      { name: 'MacBook Air M3', clicks: 849, revenue: 3688000, conversion: 4.2 },
      { name: 'Sony WH-1000XM5', clicks: 172, revenue: 4086000, conversion: 7.7 },
      { name: 'Samsung QN90C Neo QLED', clicks: 426, revenue: 4795000, conversion: 11.1 },
    ],
    trends: [
      { date: 'Jan', revenue: 16000000, clicks: 1200 },
      { date: 'Feb', revenue: 18000000, clicks: 1400 },
      { date: 'Mar', revenue: 22000000, clicks: 1600 },
      { date: 'Apr', revenue: 26000000, clicks: 1800 },
      { date: 'May', revenue: 29000000, clicks: 2000 },
      { date: 'Jun', revenue: 32000000, clicks: 2350 },
    ]
  });

  const refreshData = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const aiInsights = [
    { title: 'Peak Traffic Hours', value: '14:00 - 16:00 WIB', trend: '+12%' },
    { title: 'Top Converting Category', value: 'Headphones', trend: '+7.7%' },
    { title: 'Predicted Revenue', value: 'Rp 38M (Next Month)', trend: '+18%' },
    { title: 'Optimization Score', value: '94/100', trend: '+3 pts' },
  ];

  const performanceMetrics = [
    { label: 'Page Load Time', value: '1.2s', status: 'excellent' },
    { label: 'Core Web Vitals', value: '96/100', status: 'good' },
    { label: 'SEO Score', value: '98/100', status: 'excellent' },
    { label: 'Mobile Score', value: '94/100', status: 'good' },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                Rp {analyticsData.revenue.toLocaleString()}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400">+12.5% from last month</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Clicks</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {analyticsData.clicks.toLocaleString()}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400">+8.2% from last month</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {analyticsData.conversions}%
              </p>
              <p className="text-sm text-purple-600 dark:text-purple-400">+0.3% from last month</p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {analyticsData.activeUsers.toLocaleString()}
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400">+15.3% from last month</p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Trend</h3>
          <div className="h-64 flex items-end space-x-2">
            {analyticsData.trends.map((point, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-red-500 to-pink-500 rounded-t-md transition-all duration-300 hover:opacity-80"
                  style={{ height: `${(point.revenue / 35000000) * 100}%` }}
                ></div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{point.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clicks & Conversions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Clicks & Conversions</h3>
          <div className="h-64 flex items-end space-x-1">
            {analyticsData.trends.map((point, index) => (
              <div key={index} className="flex-1 flex flex-col items-center space-y-1">
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t-md"
                  style={{ height: `${(point.clicks / 2500) * 80}%` }}
                ></div>
                <div
                  className="w-full bg-gradient-to-t from-orange-500 to-yellow-500 rounded-t-md"
                  style={{ height: `${(point.clicks / 2500) * 20}%` }}
                ></div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{point.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Products */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Performing Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 pb-2">Product</th>
                <th className="text-right text-sm font-medium text-gray-500 dark:text-gray-400 pb-2">Clicks</th>
                <th className="text-right text-sm font-medium text-gray-500 dark:text-gray-400 pb-2">Revenue</th>
                <th className="text-right text-sm font-medium text-gray-500 dark:text-gray-400 pb-2">Conversion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {analyticsData.topProducts.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">{product.name}</td>
                  <td className="py-3 text-sm text-gray-600 dark:text-gray-400 text-right">{product.clicks}</td>
                  <td className="py-3 text-sm text-gray-600 dark:text-gray-400 text-right">Rp {product.revenue.toLocaleString()}</td>
                  <td className="py-3 text-sm text-gray-600 dark:text-gray-400 text-right">{product.conversion}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product Management</h3>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 px-6 py-3">Product</th>
                <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 px-6 py-3">Category</th>
                <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 px-6 py-3">Rating</th>
                <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 px-6 py-3">Price Range</th>
                <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 px-6 py-3">Status</th>
                <th className="text-left text-sm font-medium text-gray-500 dark:text-gray-400 px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img src={product.imageUrl} alt={product.name} className="h-10 w-10 rounded-lg object-cover" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{product.reviewCount} reviews</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 capitalize">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{product.rating}/5</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    Rp {Math.min(...Object.values(product.prices)).toLocaleString()} - 
                    Rp {Math.max(...Object.values(product.prices)).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAI = () => (
    <div className="space-y-6">
      {/* AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiInsights.map((insight, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between mb-3">
              <Bot className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-green-600 dark:text-green-400">{insight.trend}</span>
            </div>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{insight.title}</h4>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{insight.value}</p>
          </div>
        ))}
      </div>

      {/* AI Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span>AI Recommendations</span>
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Personalization Engine</p>
              <p className="text-xs text-blue-700 dark:text-blue-300">94% accuracy in user preference matching</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm font-medium text-green-900 dark:text-green-100">Price Optimization</p>
              <p className="text-xs text-green-700 dark:text-green-300">18% improvement in conversion rates</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <p className="text-sm font-medium text-purple-900 dark:text-purple-100">Content Generation</p>
              <p className="text-xs text-purple-700 dark:text-purple-300">Auto-generated product descriptions</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{metric.value}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    metric.status === 'excellent' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Settings },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'performance', label: 'Performance', icon: Activity },
    { id: 'ai', label: 'AI Insights', icon: Bot },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Manage your Wirecutter Indonesia platform</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={refreshData}
              disabled={isLoading}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === tab.id
                  ? 'border-red-500 text-red-600 dark:text-red-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {selectedTab === 'overview' && renderOverview()}
        {selectedTab === 'products' && renderProducts()}
        {selectedTab === 'analytics' && renderOverview()}
        {selectedTab === 'performance' && renderAI()}
        {selectedTab === 'ai' && renderAI()}
      </div>
    </div>
  );
};

export default AdminDashboard;
