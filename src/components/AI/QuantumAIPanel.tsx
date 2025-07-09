import React, { useState } from 'react';
import { Brain, Zap, Target, TrendingUp, Eye, Heart, Globe } from 'lucide-react';
import { QuantumPersonalizationEngine } from '../../types/ai-types';

interface QuantumAIPanelProps {
  engine: QuantumPersonalizationEngine;
}

export const QuantumAIPanel: React.FC<QuantumAIPanelProps> = ({ engine }) => {
  const [activeTab, setActiveTab] = useState<'neural' | 'adaptive' | 'predictive'>('neural');

  const tabs = [
    { id: 'neural', label: 'Neural Profiler', icon: Brain },
    { id: 'adaptive', label: 'Adaptive Personality', icon: Zap },
    { id: 'predictive', label: 'Desire Prediction', icon: Target }
  ];

  const renderNeuralProfiler = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <Eye className="w-5 h-5 text-emerald-600" />
          </div>
          <h4 className="font-semibold text-emerald-900">Behavior Genetics</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-emerald-700">Navigation Flow</span>
            <span className="text-sm font-medium text-emerald-900">
              {engine.neuralProfiler.behaviorGenetics.navigationFlow.length} patterns
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-emerald-700">Device Preferences</span>
            <span className="text-sm font-medium text-emerald-900">
              {engine.neuralProfiler.behaviorGenetics.devicePreferences.join(', ')}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Heart className="w-5 h-5 text-blue-600" />
          </div>
          <h4 className="font-semibold text-blue-900">Psychological Profile</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-700">Brand Loyalty</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 h-2 bg-blue-200 rounded-full">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${engine.neuralProfiler.purchasePatterns.brandLoyalty * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium text-blue-900">
                {Math.round(engine.neuralProfiler.purchasePatterns.brandLoyalty * 100)}%
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-700">Price Sensitivity</span>
            <div className="flex items-center space-x-2">
              <div className="w-20 h-2 bg-blue-200 rounded-full">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${engine.neuralProfiler.purchasePatterns.pricesensitivity * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium text-blue-900">
                {Math.round(engine.neuralProfiler.purchasePatterns.pricesensitivity * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Heart className="w-5 h-5 text-purple-600" />
          </div>
          <h4 className="font-semibold text-purple-900">Emotional Triggers</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-purple-700">Current Mood</span>
            <span className="text-sm font-medium text-purple-900 capitalize">
              {engine.neuralProfiler.emotionalTriggers.currentMood}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-purple-700">Satisfaction Level</span>
            <span className="text-sm font-medium text-purple-900">
              {Math.round(engine.neuralProfiler.emotionalTriggers.satisfactionLevel * 100)}%
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Globe className="w-5 h-5 text-orange-600" />
          </div>
          <h4 className="font-semibold text-orange-900">Cultural Preferences</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-orange-700">Community Orientation</span>
            <span className="text-sm font-medium text-orange-900">
              {Math.round(engine.neuralProfiler.culturalPreferences.communityOrientation * 100)}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-orange-700">Family Influence</span>
            <span className="text-sm font-medium text-orange-900">
              {Math.round(engine.neuralProfiler.culturalPreferences.familyInfluence * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdaptivePersonality = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-cyan-100 rounded-lg">
            <Zap className="w-5 h-5 text-cyan-600" />
          </div>
          <h4 className="font-semibold text-cyan-900">Current Mood</h4>
        </div>
        <div className="space-y-3">
          {Object.entries(engine.adaptivePersonality.currentMood).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-sm text-cyan-700 capitalize">{key}</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-2 bg-cyan-200 rounded-full">
                  <div 
                    className="h-full bg-cyan-500 rounded-full transition-all duration-300"
                    style={{ width: `${value * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-cyan-900">
                  {Math.round(value * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Globe className="w-5 h-5 text-green-600" />
          </div>
          <h4 className="font-semibold text-green-900">Contextual State</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-green-700">Time Context</span>
            <span className="text-sm font-medium text-green-900">
              {engine.adaptivePersonality.contextualState.timeOfDay}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-green-700">Location</span>
            <span className="text-sm font-medium text-green-900">
              {engine.adaptivePersonality.contextualState.locationContext}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-green-700">Weather Impact</span>
            <span className="text-sm font-medium text-green-900">
              {Math.round(engine.adaptivePersonality.contextualState.weatherImpact * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDesirePrediction = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-violet-100 rounded-lg">
            <Target className="w-5 h-5 text-violet-600" />
          </div>
          <h4 className="font-semibold text-violet-900">Future Needs</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-violet-700">Next Purchase</span>
            <span className="text-sm font-medium text-violet-900">
              {engine.desirePrediction.futureNeeds.nextPurchaseCategory}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-violet-700">Confidence Level</span>
            <span className="text-sm font-medium text-violet-900">
              {Math.round(engine.desirePrediction.futureNeeds.confidenceLevel * 100)}%
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-pink-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-pink-600" />
          </div>
          <h4 className="font-semibold text-pink-900">Trend Prediction</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-pink-700">Viral Potential</span>
            <span className="text-sm font-medium text-pink-900">
              {Math.round(engine.desirePrediction.trendPrecognition.viralPotential * 100)}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-pink-700">Market Timing</span>
            <span className="text-sm font-medium text-pink-900">
              {engine.desirePrediction.trendPrecognition.marketTiming}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Quantum AI Engine</h3>
          <p className="text-gray-600 text-sm">Advanced personalization intelligence</p>
        </div>
      </div>

      <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'neural' && renderNeuralProfiler()}
        {activeTab === 'adaptive' && renderAdaptivePersonality()}
        {activeTab === 'predictive' && renderDesirePrediction()}
      </div>
    </div>
  );
};