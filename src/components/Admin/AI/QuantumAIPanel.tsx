import React, { useState } from 'react';
import { Brain, Zap, Target, TrendingUp, Eye, Heart, Globe } from 'lucide-react';

interface QuantumPanelProps {
  engine: {
    neuralProfiler: {
      behaviorGenetics: {
        navigationFlow: string[];
        patterns: string[];
      };
      devicePreferences: string[];
      purchasePatterns: {
        brandLoyalty: number;
        pricesSensitivity: number;
      };
    };
    adaptivePersonality: {
      traits: string[];
      preferences: {
        communicationStyle: string;
        decisionSpeed: string;
      };
    };
  };
}

export const QuantumAIPanel: React.FC<QuantumPanelProps> = ({ engine }) => {
  const [activeTab, setActiveTab] = useState<'neural' | 'adaptive' | 'predictive'>('neural');
  
  const tabs = [
    { id: 'neural' as const, label: 'Neural Profiler', icon: Brain },
    { id: 'adaptive' as const, label: 'Adaptive Personality', icon: Zap },
    { id: 'predictive' as const, label: 'Desire Prediction', icon: Target }
  ];

  const renderNeuralProfiler = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 text-emerald-600">
            <Brain className="w-full h-full" />
          </div>
          <h4 className="font-semibold text-emerald-900">Behavior Genetics</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-emerald-700">Navigation Flow</span>
            <span className="text-sm font-medium text-emerald-900">
              {engine.neuralProfiler.behaviorGenetics.navigationFlow.join(' → ')}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-emerald-700">Behavior Patterns</span>
            <div className="flex space-x-2">
              {engine.neuralProfiler.behaviorGenetics.patterns.map((pattern, index) => (
                <span key={index} className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">
                  {pattern}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 text-blue-600">
            <TrendingUp className="w-full h-full" />
          </div>
          <h4 className="font-semibold text-blue-900">Device Preferences</h4>
        </div>
        <div className="space-y-3">
          {engine.neuralProfiler.devicePreferences.map((device, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-blue-700">{device}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 text-purple-600">
            <Heart className="w-full h-full" />
          </div>
          <h4 className="font-semibold text-purple-900">Purchase Patterns</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-purple-700">Brand Loyalty</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 h-2 bg-purple-200 rounded-full">
                <div 
                  className="h-full bg-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${engine.neuralProfiler.purchasePatterns.brandLoyalty * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-purple-900">
                {Math.round(engine.neuralProfiler.purchasePatterns.brandLoyalty * 100)}%
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-purple-700">Price Sensitivity</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 h-2 bg-purple-200 rounded-full">
                <div 
                  className="h-full bg-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${engine.neuralProfiler.purchasePatterns.pricesSensitivity * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-purple-900">
                {Math.round(engine.neuralProfiler.purchasePatterns.pricesSensitivity * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdaptivePersonality = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 text-orange-600">
            <Zap className="w-full h-full" />
          </div>
          <h4 className="font-semibold text-orange-900">Personality Traits</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {engine.adaptivePersonality.traits.map((trait, index) => (
            <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
              {trait}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 text-cyan-600">
            <Globe className="w-full h-full" />
          </div>
          <h4 className="font-semibold text-cyan-900">Communication Preferences</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-cyan-700">Communication Style</span>
            <span className="text-sm font-medium text-cyan-900 capitalize">
              {engine.adaptivePersonality.preferences.communicationStyle}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-cyan-700">Decision Speed</span>
            <span className="text-sm font-medium text-cyan-900 capitalize">
              {engine.adaptivePersonality.preferences.decisionSpeed}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Quantum AI Engine</h3>
          <p className="text-gray-600 text-sm">Advanced behavioral analysis and prediction</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600 font-medium">Active</span>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'neural' && renderNeuralProfiler()}
      {activeTab === 'adaptive' && renderAdaptivePersonality()}
      {activeTab === 'predictive' && renderAdaptivePersonality()}
    </div>
  );
};

