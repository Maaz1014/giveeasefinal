'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchFilters {
  location: string;
  cause: string;
  itemType: string;
  urgency: string;
  distance: number;
}

interface SearchResult {
  id: string;
  name: string;
  location: string;
  cause: string;
  itemsNeeded: string[];
  urgency: string;
  distance: number;
  rating: number;
  verified: boolean;
}

export default function AdvancedSearch() {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    cause: '',
    itemType: '',
    urgency: '',
    distance: 50
  });
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const causes = [
    'Children & Education',
    'Healthcare & Medical',
    'Food & Hunger',
    'Environment',
    'Animal Welfare',
    'Community Development',
    'Disaster Relief',
    'Women Empowerment'
  ];

  const itemTypes = [
    'Books & Educational',
    'Clothing & Textiles',
    'Medical Supplies',
    'Food & Groceries',
    'Electronics',
    'Toys & Games',
    'Furniture',
    'Sports Equipment'
  ];

  const urgencyLevels = [
    'Any',
    'Low',
    'Medium',
    'High',
    'Critical'
  ];

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: '1',
      name: 'Hope for Children Foundation',
      location: 'New York, NY',
      cause: 'Children & Education',
      itemsNeeded: ['Books', 'School Supplies', 'Toys'],
      urgency: 'High',
      distance: 2.5,
      rating: 4.8,
      verified: true
    },
    {
      id: '2',
      name: 'Community Health Center',
      location: 'Los Angeles, CA',
      cause: 'Healthcare & Medical',
      itemsNeeded: ['Medical Supplies', 'Equipment'],
      urgency: 'Critical',
      distance: 5.2,
      rating: 4.9,
      verified: true
    },
    {
      id: '3',
      name: 'Green Earth Initiative',
      location: 'Chicago, IL',
      cause: 'Environment',
      itemsNeeded: ['Recycling Bins', 'Garden Tools'],
      urgency: 'Medium',
      distance: 8.1,
      rating: 4.6,
      verified: true
    }
  ];

  const handleFilterChange = (key: keyof SearchFilters, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredResults = mockResults.filter(result => {
    const matchesLocation = !filters.location || result.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesCause = !filters.cause || result.cause === filters.cause;
    const matchesItemType = !filters.itemType || result.itemsNeeded.some(item => item.toLowerCase().includes(filters.itemType.toLowerCase()));
    const matchesUrgency = !filters.urgency || filters.urgency === 'Any' || result.urgency === filters.urgency;
    const matchesDistance = result.distance <= filters.distance;
    
    return matchesLocation && matchesCause && matchesItemType && matchesUrgency && matchesDistance;
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Search Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Find NGOs Near You</h2>
        <p className="text-gray-600">Discover organizations that need your donations</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search NGOs by name, location, or cause..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
              <span>Filters</span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 p-4 bg-gray-50 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  placeholder="City, State"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* Cause */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cause</label>
                <select
                  value={filters.cause}
                  onChange={(e) => handleFilterChange('cause', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="">All Causes</option>
                  {causes.map(cause => (
                    <option key={cause} value={cause}>{cause}</option>
                  ))}
                </select>
              </div>

              {/* Item Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Item Type</label>
                <select
                  value={filters.itemType}
                  onChange={(e) => handleFilterChange('itemType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="">All Items</option>
                  {itemTypes.map(item => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                <select
                  value={filters.urgency}
                  onChange={(e) => handleFilterChange('urgency', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {urgencyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Distance Slider */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Distance: {filters.distance} miles
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={filters.distance}
                onChange={(e) => handleFilterChange('distance', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {filteredResults.length} NGOs found
          </h3>
          <div className="text-sm text-gray-600">
            Showing results within {filters.distance} miles
          </div>
        </div>

        {filteredResults.map((result, index) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{result.name}</h4>
                  {result.verified && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                      ✓ Verified
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-2">{result.location} • {result.cause}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span>📍 {result.distance} miles away</span>
                  <span>⭐ {result.rating} rating</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    result.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                    result.urgency === 'High' ? 'bg-orange-100 text-orange-800' :
                    result.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {result.urgency} Priority
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.itemsNeeded.map(item => (
                    <span key={item} className="px-3 py-1 bg-sky-100 text-sky-800 text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: linear-gradient(to right, #0ea5e9, #3b82f6);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
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