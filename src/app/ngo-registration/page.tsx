'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SafeImage from '../../components/SafeImage';
import Logo from '../../components/Logo';

export default function NGORegistration() {
  const [formData, setFormData] = useState({
    ngoName: '',
    registrationNumber: '',
    ngoType: '',
    establishedYear: '',
    website: '',
    contactPersonName: '',
    contactEmail: '',
    contactPhone: '',
    address: '',
    description: '',
    donationTypes: [] as string[],
    socialMedia: {
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: ''
    }
  });

  const donationTypeOptions = [
    'Clothes', 'Books', 'Educational Materials', 'Medical Supplies', 
    'Food', 'Toys', 'Electronics', 'Furniture', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDonationTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      donationTypes: prev.donationTypes.includes(type)
        ? prev.donationTypes.filter(t => t !== type)
        : [...prev.donationTypes, type]
    }));
  };

  const handleSocialMediaChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('NGO Registration:', formData);
    alert('Thank you for registering your NGO! We will review your application and contact you within 2-3 business days.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-100 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <motion.div
          animate={{ 
            x: [0, 70, 0],
            y: [0, -25, 0],
            rotate: [0, 150, 300]
          }}
          transition={{ 
            duration: 24, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-28 left-16 w-28 h-28 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full opacity-25"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 35, 0],
            rotate: [0, -150, -300]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-28 right-8 w-22 h-22 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -20, 0],
            rotate: [0, 120, 240]
          }}
          transition={{ 
            duration: 26, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-40 right-1/4 w-20 h-20 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-18"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            rotate: [0, -120, -240]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-16"
        />
        
        {/* Geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 32, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/3 left-1/3 w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 transform rotate-30 opacity-15"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 36, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 transform -rotate-45 opacity-14"
        />
        
        {/* Triangles */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/5 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 opacity-12"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 38, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/2 right-1/5 w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 transform -rotate-30 opacity-11"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        
        {/* Hexagons */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 44, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-1/6 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 opacity-10"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        
        {/* Diamonds */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 46, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 left-1/6 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 transform rotate-45 opacity-9"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        
        {/* Wave-like elements */}
        <motion.div
          animate={{ 
            x: [0, 35, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 left-0 w-56 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            opacity: [0.1, 0.18, 0.1]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 right-0 w-48 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            opacity: [0.1, 0.22, 0.1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-2/3 left-0 w-52 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        />
        
        {/* Floating dots */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 left-1/2 w-2.5 h-2.5 bg-sky-400 rounded-full opacity-22"
        />
        <motion.div
          animate={{ 
            y: [0, 18, 0],
            opacity: [0.3, 0.55, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-indigo-400 rounded-full opacity-18"
        />
        <motion.div
          animate={{ 
            y: [0, -16, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-2/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 14, 0],
            opacity: [0.3, 0.48, 0.3]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-2/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-16"
        />
        
        {/* More floating dots */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.52, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full opacity-14"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.3, 0.64, 0.3]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-yellow-400 rounded-full opacity-26"
        />
        <motion.div
          animate={{ 
            y: [0, -13, 0],
            opacity: [0.3, 0.56, 0.3]
          }}
          transition={{ 
            duration: 8.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-3/4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-18"
        />
        <motion.div
          animate={{ 
            y: [0, 17, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 9.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-3/4 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-12"
        />
        
        {/* Additional geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 48, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/6 right-1/6 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-8"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 44, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/6 left-1/6 w-4 h-4 bg-gradient-to-br from-lime-400 to-green-500 transform -rotate-30 opacity-6"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        
        {/* More triangles */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 52, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/5 left-1/8 w-8 h-8 bg-gradient-to-br from-fuchsia-400 to-pink-500 transform rotate-60 opacity-7"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.85, 1]
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/5 right-1/8 w-5 h-5 bg-gradient-to-br from-amber-400 to-yellow-500 transform -rotate-45 opacity-5"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        
        {/* More hexagons */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 56, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-2/5 left-1/12 w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-4"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-2/5 right-1/12 w-5 h-5 bg-gradient-to-br from-rose-400 to-pink-500 opacity-3"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        
        {/* More wave lines */}
        <motion.div
          animate={{ 
            x: [0, 55, 0],
            opacity: [0.1, 0.32, 0.1]
          }}
          transition={{ 
            duration: 28, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/6 left-0 w-76 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, -52, 0],
            opacity: [0.1, 0.28, 0.1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/6 right-0 w-68 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, 58, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 32, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-5/6 left-0 w-72 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />
      </div>
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
              <Link href="/matched-ngos" className="px-4 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 font-medium">
                Find NGOs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">NGO Registration</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Register your NGO to connect with donors and receive the items you need most
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* NGO Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">NGO Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ngoName" className="block text-sm font-medium text-gray-700 mb-2">
                    NGO Name *
                  </label>
                  <input
                    type="text"
                    id="ngoName"
                    name="ngoName"
                    value={formData.ngoName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter NGO name"
                  />
                </div>

                <div>
                  <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Registration Number *
                  </label>
                  <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter registration number"
                  />
                </div>

                <div>
                  <label htmlFor="ngoType" className="block text-sm font-medium text-gray-700 mb-2">
                    NGO Type *
                  </label>
                  <select
                    id="ngoType"
                    name="ngoType"
                    value={formData.ngoType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select NGO type</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="environment">Environment</option>
                    <option value="poverty">Poverty Alleviation</option>
                    <option value="women">Women Empowerment</option>
                    <option value="children">Children Welfare</option>
                    <option value="disability">Disability Support</option>
                    <option value="elderly">Elderly Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="establishedYear" className="block text-sm font-medium text-gray-700 mb-2">
                    Established Year *
                  </label>
                  <input
                    type="number"
                    id="establishedYear"
                    name="establishedYear"
                    value={formData.establishedYear}
                    onChange={handleInputChange}
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter year"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://your-ngo.org"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactPersonName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    id="contactPersonName"
                    name="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter contact person name"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="contact@your-ngo.org"
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter complete address"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                NGO Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your NGO's mission, activities, and the communities you serve..."
              />
            </div>

            {/* Donation Types Needed */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Donation Types Needed</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {donationTypeOptions.map((type) => (
                  <label key={type} className="flex items-center space-x-3 cursor-pointer p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.donationTypes.includes(type)}
                      onChange={() => handleDonationTypeChange(type)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-gray-700 font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Social Media (Optional)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-2">
                    Facebook
                  </label>
                  <input
                    type="url"
                    id="facebook"
                    value={formData.socialMedia.facebook}
                    onChange={(e) => handleSocialMediaChange('facebook', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://facebook.com/your-ngo"
                  />
                </div>

                <div>
                  <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-2">
                    Twitter
                  </label>
                  <input
                    type="url"
                    id="twitter"
                    value={formData.socialMedia.twitter}
                    onChange={(e) => handleSocialMediaChange('twitter', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://twitter.com/your-ngo"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    value={formData.socialMedia.linkedin}
                    onChange={(e) => handleSocialMediaChange('linkedin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://linkedin.com/company/your-ngo"
                  />
                </div>

                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-2">
                    Instagram
                  </label>
                  <input
                    type="url"
                    id="instagram"
                    value={formData.socialMedia.instagram}
                    onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://instagram.com/your-ngo"
                  />
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Required Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ngoCertificate" className="block text-sm font-medium text-gray-700 mb-2">
                    NGO Certificate *
                  </label>
                  <input
                    type="file"
                    id="ngoCertificate"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Upload NGO registration certificate (PDF, JPG, PNG)</p>
                </div>

                <div>
                  <label htmlFor="governmentId" className="block text-sm font-medium text-gray-700 mb-2">
                    Government ID *
                  </label>
                  <input
                    type="file"
                    id="governmentId"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">Upload government-issued ID (PDF, JPG, PNG)</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-blue-600 transition-all shadow-lg"
              >
                Submit NGO Registration
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Registering Your NGO</h2>
            <p className="text-lg text-gray-600">Join our network and access resources to amplify your impact</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Access to Donors",
                description: "Connect with donors who have exactly what you need, when you need it",
                icon: "🤝",
                benefits: ["Direct donor matching", "Real-time notifications", "Priority access"]
              },
              {
                title: "Verified Status",
                description: "Build trust with donors through our verification and credibility system",
                icon: "✅",
                benefits: ["Credibility badge", "Trust indicators", "Background verification"]
              },
              {
                title: "Resource Optimization",
                description: "Focus on your mission while we handle donor matching and logistics",
                icon: "⚡",
                benefits: ["Time savings", "Efficient matching", "Reduced overhead"]
              },
              {
                title: "Community Network",
                description: "Join a network of NGOs and share best practices and resources",
                icon: "🌐",
                benefits: ["Peer networking", "Knowledge sharing", "Collaboration opportunities"]
              },
              {
                title: "Impact Tracking",
                description: "Track and showcase your impact with detailed analytics and reporting",
                icon: "📊",
                benefits: ["Impact metrics", "Success stories", "Donor reports"]
              },
              {
                title: "Free Platform",
                description: "Use our platform completely free - no fees, no hidden costs",
                icon: "💝",
                benefits: ["Zero platform fees", "No hidden costs", "Full access"]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-1">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-sky-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Requirements</h2>
            <p className="text-lg text-gray-600">What you need to register your NGO with GiveEase</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Legal Registration",
                description: "Your NGO must be legally registered and in good standing with relevant authorities",
                requirements: ["Valid registration certificate", "Active status", "Compliance with regulations"]
              },
              {
                title: "Mission Alignment",
                description: "Your organization's mission should align with our platform's goals of helping communities",
                requirements: ["Clear mission statement", "Community focus", "Non-profit status"]
              },
              {
                title: "Contact Information",
                description: "Provide accurate and up-to-date contact information for effective communication",
                requirements: ["Valid email address", "Working phone number", "Physical address"]
              },
              {
                title: "Donation Needs",
                description: "Clearly specify what types of donations your organization needs",
                requirements: ["Specific item types", "Quantity estimates", "Urgency levels"]
              }
            ].map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{requirement.title}</h3>
                <p className="text-gray-600 mb-4">{requirement.description}</p>
                <ul className="space-y-2">
                  {requirement.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-sky-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/40 to-blue-100/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Register Your NGO?</h2>
            <p className="text-lg text-gray-600">Join hundreds of NGOs already benefiting from GiveEase</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Smart Matching",
                description: "AI-powered algorithm connects you with donors who have exactly what you need",
                icon: "🎯",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Verified Donors",
                description: "All donors are verified and their donations are quality-checked",
                icon: "✅",
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Quick Setup",
                description: "Complete registration in minutes and start receiving donations within days",
                icon: "⚡",
                color: "from-yellow-400 to-orange-500"
              },
              {
                title: "Impact Tracking",
                description: "Track how donations help your organization and share success stories",
                icon: "📊",
                color: "from-purple-400 to-pink-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sky-200"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 3, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className={`text-4xl mb-4 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gradient-to-br from-sky-100 to-blue-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">NGO Success Stories</h2>
            <p className="text-lg text-gray-600">See how registered NGOs have benefited from GiveEase</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Hope for Children Foundation",
                type: "Children Welfare",
                story: "Since registering with GiveEase, we've received over 500 books and educational materials. The matching system is incredibly accurate!",
                impact: "500+ items received",
                image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Community Health Initiative",
                type: "Healthcare",
                story: "GiveEase connected us with donors who provided essential medical supplies. This helped us serve 300+ additional patients monthly.",
                impact: "300+ patients served",
                image: "https://images.unsplash.com/photo-1588776814546-ec7e5c6b1d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Green Earth Environmental",
                type: "Environment",
                story: "Through GiveEase, we received office furniture and electronics that helped us expand our operations to three new locations.",
                impact: "3 new locations",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl overflow-hidden border border-sky-200"
              >
                <SafeImage
                  src={story.image}
                  alt={story.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                  type="card"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{story.type}</p>
                  <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                  <div className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {story.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about NGO registration</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How long does the registration process take?",
                answer: "After submitting your application, our team will review it within 2-3 business days. You'll receive an email confirmation once your NGO is approved and listed on our platform."
              },
              {
                question: "Is there a cost to register?",
                answer: "No, registering your NGO with GiveEase is completely free. We're committed to helping NGOs access the resources they need without any financial barriers."
              },
              {
                question: "What happens after my NGO is registered?",
                answer: "Once registered, your NGO will be visible to donors on our platform. You'll receive notifications when donors have items that match your needs, and you can contact them directly."
              },
              {
                question: "Can I update my NGO information later?",
                answer: "Yes, you can update your NGO information, donation needs, and contact details at any time through your dashboard after registration."
              },
              {
                question: "What if my NGO doesn't meet the requirements?",
                answer: "If your NGO doesn't meet our requirements, we'll provide feedback on what's needed. We're happy to work with you to help your organization qualify for registration."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Ready to Join GiveEase?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-sky-100 mb-8"
          >
            Register your NGO today and start connecting with donors who want to help
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Register Your NGO Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 