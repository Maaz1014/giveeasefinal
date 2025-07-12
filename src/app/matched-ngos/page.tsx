'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from '../../components/Logo';

interface NGO {
  id: string;
  name: string;
  type: string;
  description: string;
  donationTypes: string[];
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  website?: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  priority: 'high' | 'medium' | 'low';
  establishedYear: number;
  verified: boolean;
}

export default function MatchedNGOs() {
  const [ngos, setNgos] = useState<NGO[]>([]);
  const [filteredNGOs, setFilteredNGOs] = useState<NGO[]>([]);
  const [selectedDonationType, setSelectedDonationType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Mock data - in real app this would come from your backend
  useEffect(() => {
    const mockNGOs: NGO[] = [
      {
        id: '1',
        name: 'Hope for Children Foundation',
        type: 'Children Welfare',
        description: 'We provide education and basic needs for underprivileged children in rural areas. Currently in urgent need of books, clothes, and educational materials.',
        donationTypes: ['Books', 'Clothes', 'Educational Materials', 'Toys'],
        contactPerson: 'Sarah Johnson',
        contactEmail: 'sarah@hopeforchildren.org',
        contactPhone: '+1 (555) 123-4567',
        address: '123 Hope Street, Downtown, City',
        website: 'https://hopeforchildren.org',
        priority: 'high',
        establishedYear: 2015,
        verified: true
      },
      {
        id: '2',
        name: 'Community Health Initiative',
        type: 'Healthcare',
        description: 'Providing medical care and supplies to underserved communities. We need medical supplies, clothes, and food items.',
        donationTypes: ['Medical Supplies', 'Clothes', 'Food'],
        contactPerson: 'Dr. Michael Chen',
        contactEmail: 'michael@communityhealth.org',
        contactPhone: '+1 (555) 234-5678',
        address: '456 Health Avenue, Medical District, City',
        priority: 'high',
        establishedYear: 2010,
        verified: true
      },
      {
        id: '3',
        name: 'Green Earth Environmental',
        type: 'Environment',
        description: 'Working to protect the environment and promote sustainable practices. Accepting electronics and furniture for recycling.',
        donationTypes: ['Electronics', 'Furniture'],
        contactPerson: 'Emma Rodriguez',
        contactEmail: 'emma@greenearth.org',
        contactPhone: '+1 (555) 345-6789',
        address: '789 Green Street, Eco District, City',
        website: 'https://greenearth.org',
        priority: 'medium',
        establishedYear: 2018,
        verified: true
      },
      {
        id: '4',
        name: 'Senior Care Support',
        type: 'Elderly Care',
        description: 'Supporting elderly individuals with daily needs and companionship. We need clothes, medical supplies, and furniture.',
        donationTypes: ['Clothes', 'Medical Supplies', 'Furniture'],
        contactPerson: 'Robert Wilson',
        contactEmail: 'robert@seniorcare.org',
        contactPhone: '+1 (555) 456-7890',
        address: '321 Senior Lane, Care District, City',
        priority: 'medium',
        establishedYear: 2012,
        verified: true
      },
      {
        id: '5',
        name: 'Women Empowerment Network',
        type: 'Women Empowerment',
        description: 'Empowering women through education and skill development. We need books, educational materials, and clothes.',
        donationTypes: ['Books', 'Educational Materials', 'Clothes'],
        contactPerson: 'Lisa Thompson',
        contactEmail: 'lisa@womenempower.org',
        contactPhone: '+1 (555) 567-8901',
        address: '654 Empowerment Road, Women District, City',
        priority: 'high',
        establishedYear: 2016,
        verified: true
      }
    ];

    setNgos(mockNGOs);
    setFilteredNGOs(mockNGOs);
    setLoading(false);
  }, []);

  const donationTypes = [
    'Clothes', 'Food', 'Books', 'Medical Supplies', 'Educational Materials', 
    'Toys', 'Electronics', 'Furniture', 'Other'
  ];

  useEffect(() => {
    let filtered = ngos;

    // Filter by donation type
    if (selectedDonationType !== 'all') {
      filtered = filtered.filter(ngo => 
        ngo.donationTypes.includes(selectedDonationType)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(ngo =>
        ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredNGOs(filtered);
  }, [ngos, selectedDonationType, searchTerm]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleContact = (ngo: NGO, method: 'email' | 'phone') => {
    if (method === 'email') {
      window.open(`mailto:${ngo.contactEmail}?subject=Donation Inquiry from GiveEase`);
    } else {
      window.open(`tel:${ngo.contactPhone}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <Logo size="md" variant="modern" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 font-medium">
                Home
              </Link>
              <Link href="/donate" className="px-4 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 font-medium">
                Donate
              </Link>
              <Link href="/ngo-registration" className="px-4 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 font-medium">
                NGO Registration
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Matched NGOs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the NGOs that need your donations. Contact them directly to arrange your donation.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search NGOs
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, type, or description..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="donationType" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Donation Type
              </label>
              <select
                id="donationType"
                value={selectedDonationType}
                onChange={(e) => setSelectedDonationType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Donation Types</option>
                {donationTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Found {filteredNGOs.length} matching NGO{filteredNGOs.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* NGO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNGOs.map((ngo, index) => (
            <motion.div
              key={ngo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{ngo.name}</h3>
                    <p className="text-sm text-gray-600">{ngo.type}</p>
                  </div>
                  {ngo.verified && (
                    <div className="flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{ngo.description}</p>

                <div className="mb-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ngo.priority)}`}>
                    {ngo.priority} Priority
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Needs:</h4>
                  <div className="flex flex-wrap gap-1">
                    {ngo.donationTypes.map(type => (
                      <span key={type} className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Contact: {ngo.contactPerson}</p>
                      <p className="text-sm text-gray-600">{ngo.address}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleContact(ngo, 'email')}
                        className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-3 py-1 rounded text-sm hover:from-sky-600 hover:to-blue-600 transition-all"
                      >
                        Email
                      </button>
                      <button
                        onClick={() => handleContact(ngo, 'phone')}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded text-sm hover:from-blue-600 hover:to-indigo-600 transition-all"
                      >
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredNGOs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No matching NGOs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or donation types.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 