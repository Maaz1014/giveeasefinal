'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from '../../components/Logo';
import SafeImage from '../../components/SafeImage';

interface User {
  id: string;
  name: string;
  email: string;
  location?: string;
  interests?: string[];
  avatar: string;
}

interface Donation {
  id: string;
  item: string;
  ngo: string;
  date: string;
  status: 'completed' | 'pending' | 'in-transit';
  impact: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Redirect to login if no user
      window.location.href = '/login';
    }

    // Simulate donation data
    setDonations([
      {
        id: '1',
        item: 'Laptop Computer',
        ngo: 'Tech for Education',
        date: '2024-01-15',
        status: 'completed',
        impact: '30 students educated'
      },
      {
        id: '2',
        item: 'Medical Supplies',
        ngo: 'Health First Clinic',
        date: '2024-01-10',
        status: 'completed',
        impact: '50+ patients treated'
      },
      {
        id: '3',
        item: 'Books Collection',
        ngo: 'Community Library',
        date: '2024-01-05',
        status: 'in-transit',
        impact: '200+ children reading'
      }
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const totalImpact = donations.reduce((acc, donation) => {
    const impactNumber = parseInt(donation.impact.match(/\d+/)?.[0] || '0');
    return acc + impactNumber;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <Logo size="md" variant="modern" />
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <SafeImage
                  src={user.avatar}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                  type="avatar"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Logout
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center space-x-4">
            <SafeImage
              src={user.avatar}
              alt={user.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover"
              type="avatar"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
              <p className="text-gray-600">
                {user.location ? `Based in ${user.location}` : 'Ready to make a difference'}
              </p>
              {user.interests && user.interests.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {user.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Donations</p>
                <p className="text-2xl font-bold text-gray-900">{donations.length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Lives Impacted</p>
                <p className="text-2xl font-bold text-gray-900">{totalImpact}+</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {donations.filter(d => d.status === 'completed').length}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', icon: '📊' },
                { id: 'donations', name: 'My Donations', icon: '📦' },
                { id: 'impact', name: 'Impact', icon: '🎯' },
                { id: 'settings', name: 'Settings', icon: '⚙️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {donations.slice(0, 3).map((donation) => (
                    <div key={donation.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        donation.status === 'completed' ? 'bg-green-500' :
                        donation.status === 'in-transit' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{donation.item}</p>
                        <p className="text-sm text-gray-600">{donation.ngo}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{new Date(donation.date).toLocaleDateString()}</p>
                        <p className="text-xs text-gray-500 capitalize">{donation.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'donations' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">All Donations</h3>
                <div className="space-y-4">
                  {donations.map((donation) => (
                    <div key={donation.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{donation.item}</h4>
                          <p className="text-sm text-gray-600">{donation.ngo}</p>
                          <p className="text-sm text-blue-600">{donation.impact}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">{new Date(donation.date).toLocaleDateString()}</p>
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            donation.status === 'completed' ? 'bg-green-100 text-green-800' :
                            donation.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {donation.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'impact' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Total Lives Impacted</h4>
                    <p className="text-3xl font-bold">{totalImpact}+</p>
                    <p className="text-blue-100 text-sm mt-2">Through your generous donations</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">NGOs Supported</h4>
                    <p className="text-3xl font-bold">{new Set(donations.map(d => d.ngo)).size}</p>
                    <p className="text-green-100 text-sm mt-2">Different organizations helped</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Profile Information</p>
                      <p className="text-sm text-gray-600">Update your personal details</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">Edit</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Notification Preferences</p>
                      <p className="text-sm text-gray-600">Manage your email notifications</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">Configure</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Privacy Settings</p>
                      <p className="text-sm text-gray-600">Control your data and privacy</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">Manage</button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Make a Donation
              </motion.button>
            </Link>
            <Link href="/matched-ngos">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all"
              >
                Find NGOs
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Browse Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 