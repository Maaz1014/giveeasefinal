'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgressStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
  icon: string;
}

interface LiveUpdate {
  id: string;
  message: string;
  timestamp: Date;
  type: 'info' | 'success' | 'warning';
}

export default function ProgressTracker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [updates, setUpdates] = useState<LiveUpdate[]>([]);
  const [isActive, setIsActive] = useState(false);

  const steps: ProgressStep[] = [
    {
      id: '1',
      title: 'Analyzing Donation',
      description: 'AI is analyzing your donation details',
      status: 'pending',
      icon: '🔍'
    },
    {
      id: '2',
      title: 'Finding Matches',
      description: 'Searching for compatible NGOs',
      status: 'pending',
      icon: '🎯'
    },
    {
      id: '3',
      title: 'Verifying NGOs',
      description: 'Checking NGO credibility and needs',
      status: 'pending',
      icon: '✅'
    },
    {
      id: '4',
      title: 'Creating Matches',
      description: 'Generating optimal donation matches',
      status: 'pending',
      icon: '🤝'
    },
    {
      id: '5',
      title: 'Complete',
      description: 'Your matches are ready!',
      status: 'pending',
      icon: '🎉'
    }
  ];

  const mockUpdates: LiveUpdate[] = [
    { id: '1', message: 'Donation analysis complete - 3 potential matches found', timestamp: new Date(), type: 'success' },
    { id: '2', message: 'Verifying NGO credentials...', timestamp: new Date(), type: 'info' },
    { id: '3', message: 'Found 2 high-priority NGOs in your area', timestamp: new Date(), type: 'success' },
    { id: '4', message: 'Calculating optimal match scores', timestamp: new Date(), type: 'info' },
    { id: '5', message: 'Match quality: Excellent (95% compatibility)', timestamp: new Date(), type: 'success' }
  ];

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsActive(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && progress > 0) {
      const stepIndex = Math.floor((progress / 100) * steps.length);
      if (stepIndex !== currentStep && stepIndex < steps.length) {
        setCurrentStep(stepIndex);
        
        // Add live update
        const update = mockUpdates[stepIndex];
        if (update) {
          setUpdates(prev => [update, ...prev.slice(0, 4)]);
        }
      }
    }
  }, [progress, currentStep, isActive]);

  const startProgress = () => {
    setIsActive(true);
    setProgress(0);
    setCurrentStep(0);
    setUpdates([]);
  };

  const resetProgress = () => {
    setIsActive(false);
    setProgress(0);
    setCurrentStep(0);
    setUpdates([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Donation Matching Progress</h2>
        <p className="text-gray-600">Watch our AI find the perfect matches for your donation</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Matching Progress</span>
          <span className="text-sm font-bold text-sky-600">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-sky-500 to-blue-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="mb-8">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center space-x-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                index === currentStep && isActive
                  ? 'border-sky-500 bg-sky-50'
                  : index < currentStep
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                index === currentStep && isActive
                  ? 'bg-sky-500 text-white animate-pulse'
                  : index < currentStep
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}>
                {index < currentStep ? '✓' : step.icon}
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold ${
                  index === currentStep && isActive
                    ? 'text-sky-700'
                    : index < currentStep
                    ? 'text-green-700'
                    : 'text-gray-700'
                }`}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index === currentStep && isActive && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-sky-500 border-t-transparent rounded-full"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Updates */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Updates</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          <AnimatePresence>
            {updates.map((update) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-3 rounded-lg border-l-4 ${
                  update.type === 'success' ? 'border-green-500 bg-green-50' :
                  update.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                  'border-sky-500 bg-sky-50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={`text-sm ${
                    update.type === 'success' ? 'text-green-700' :
                    update.type === 'warning' ? 'text-yellow-700' :
                    'text-sky-700'
                  }`}>
                    {update.message}
                  </span>
                  <span className="text-xs text-gray-500">
                    {update.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startProgress}
          disabled={isActive}
          className="flex-1 bg-sky-500 text-white py-3 rounded-xl font-semibold hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Start Matching
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetProgress}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
        >
          Reset
        </motion.button>
      </div>

      {/* Stats */}
      {progress > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-sky-600">{Math.floor(progress / 20)}</div>
              <div className="text-sm text-gray-600">NGOs Found</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{Math.round(progress)}%</div>
              <div className="text-sm text-gray-600">Match Quality</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{Math.floor(progress / 10)}s</div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
} 