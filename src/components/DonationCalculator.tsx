'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImpactMetric {
  label: string;
  value: number;
  unit: string;
  icon: string;
  color: string;
}

export default function DonationCalculator() {
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationType, setDonationType] = useState('money');
  const [showCalculator, setShowCalculator] = useState(false);

  const impactMetrics: ImpactMetric[] = [
    {
      label: 'Children Fed',
      value: Math.floor(donationAmount / 2),
      unit: 'children',
      icon: '🍽️',
      color: 'from-green-400 to-emerald-500'
    },
    {
      label: 'Books Provided',
      value: Math.floor(donationAmount / 5),
      unit: 'books',
      icon: '📚',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      label: 'Medical Supplies',
      value: Math.floor(donationAmount / 10),
      unit: 'items',
      icon: '🏥',
      color: 'from-red-400 to-pink-500'
    },
    {
      label: 'Education Hours',
      value: Math.floor(donationAmount / 3),
      unit: 'hours',
      icon: '🎓',
      color: 'from-purple-400 to-violet-500'
    }
  ];

  const donationTypes = [
    { id: 'money', label: 'Money', icon: '💰' },
    { id: 'clothes', label: 'Clothes', icon: '👕' },
    { id: 'books', label: 'Books', icon: '📚' },
    { id: 'food', label: 'Food', icon: '🍎' },
    { id: 'toys', label: 'Toys', icon: '🧸' }
  ];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setDonationAmount(Math.max(0, Math.min(1000, value));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Calculator Toggle */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowCalculator(!showCalculator)}
        className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white py-4 px-6 rounded-xl font-semibold text-lg mb-6 hover:from-sky-600 hover:to-blue-600 transition-all duration-300"
      >
        <div className="flex items-center justify-center space-x-2">
          <span className="text-2xl">🧮</span>
          <span>Donation Impact Calculator</span>
          <motion.svg
            animate={{ rotate: showCalculator ? 180 : 0 }}
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </motion.button>

      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Donation Type Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What are you donating?</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {donationTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDonationType(type.id)}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      donationType === type.id
                        ? 'border-sky-500 bg-sky-50'
                        : 'border-gray-200 hover:border-sky-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-1">{type.icon}</div>
                      <div className="text-sm font-medium text-gray-700">{type.label}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Amount Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Donation Amount</h3>
                <span className="text-2xl font-bold text-sky-600">${donationAmount}</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={donationAmount}
                  onChange={handleAmountChange}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$250</span>
                  <span>$500</span>
                  <span>$750</span>
                  <span>$1000</span>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center text-2xl`}>
                        {metric.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600">{metric.label}</div>
                        <div className="text-2xl font-bold text-gray-900">
                          {metric.value} {metric.unit}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Real-time Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-xl p-4 text-center"
            >
              <div className="text-sm opacity-90 mb-1">Total Impact Score</div>
              <motion.div
                key={donationAmount}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl font-bold"
              >
                {impactMetrics.reduce((sum, metric) => sum + metric.value, 0)} points
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="text-gray-600 mb-4">
                Ready to make this impact? Start your donation journey now!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Start Donating
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #0ea5e9, #3b82f6);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #0ea5e9, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
} 