'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SafeImage from '../../components/SafeImage';
import Logo from '../../components/Logo';

export default function Donate() {
  const [formData, setFormData] = useState({
    donationTypes: [] as string[],
    city: '',
    location: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
    preferredContact: 'email'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Redirect to matched NGOs page
    window.location.href = '/matched-ngos';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-100 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -30, 0],
            rotate: [0, 120, 240]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-32 left-8 w-24 h-24 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full opacity-25"
        />
        <motion.div
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
            rotate: [0, -120, -240]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-32 right-12 w-20 h-20 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -25, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-48 right-1/4 w-18 h-18 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-18"
        />
        <motion.div
          animate={{ 
            x: [0, -45, 0],
            y: [0, 35, 0],
            rotate: [0, -90, -180]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-48 left-1/4 w-22 h-22 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-16"
        />
        
        {/* Geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 28, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 transform rotate-45 opacity-15"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 32, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 transform -rotate-30 opacity-14"
        />
        
        {/* Triangles */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 36, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/5 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 opacity-12"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 34, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/2 right-1/5 w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 transform -rotate-60 opacity-13"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        
        {/* Diamonds */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 42, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/6 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 transform rotate-45 opacity-11"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        
        {/* Wave-like elements */}
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-0 w-48 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 right-0 w-44 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, 35, 0],
            opacity: [0.1, 0.22, 0.1]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-2/3 left-0 w-52 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        />
        
        {/* Floating dots */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-sky-400 rounded-full opacity-25"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-indigo-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -18, 0],
            opacity: [0.3, 0.55, 0.3]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-22"
        />
        
        {/* More floating dots */}
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.3, 0.48, 0.3]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-18"
        />
        <motion.div
          animate={{ 
            y: [0, 16, 0],
            opacity: [0.3, 0.62, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-green-400 rounded-full opacity-24"
        />
        <motion.div
          animate={{ 
            y: [0, -14, 0],
            opacity: [0.3, 0.54, 0.3]
          }}
          transition={{ 
            duration: 8.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-3/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 19, 0],
            opacity: [0.3, 0.58, 0.3]
          }}
          transition={{ 
            duration: 7.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-3/4 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-16"
        />
        
        {/* Additional geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/6 left-1/6 w-7 h-7 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-10"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 46, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/6 right-1/6 w-5 h-5 bg-gradient-to-br from-lime-400 to-green-500 transform -rotate-30 opacity-8"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        
        {/* More triangles */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 54, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/5 left-1/8 w-9 h-9 bg-gradient-to-br from-fuchsia-400 to-pink-500 transform rotate-60 opacity-9"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.85, 1]
          }}
          transition={{ 
            duration: 42, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/5 right-1/8 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 transform -rotate-45 opacity-7"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        
        {/* More hexagons */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 58, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-2/5 left-1/10 w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-6"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 52, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-2/5 right-1/10 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 opacity-5"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        
        {/* More wave lines */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/6 right-0 w-56 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, -45, 0],
            opacity: [0.1, 0.26, 0.1]
          }}
          transition={{ 
            duration: 24, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/6 left-0 w-64 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, 48, 0],
            opacity: [0.1, 0.28, 0.1]
          }}
          transition={{ 
            duration: 26, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-5/6 right-0 w-60 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
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
              <Link href="/ngo-registration" className="px-4 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 font-medium">
                NGO Registration
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us what you have to donate and we&apos;ll match you with NGOs that need your items
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Donation Types */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What would you like to donate?</h2>
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
              {formData.donationTypes.length === 0 && (
                <p className="text-red-500 text-sm mt-2">Please select at least one donation type</p>
              )}
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Neighborhood, landmark, or specific area"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description of Items *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe the items you want to donate (quantity, condition, size, etc.)..."
              />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Information Box */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-sky-900 mb-2">How it works</h3>
              <ul className="text-sky-800 space-y-1">
                <li>• We&apos;ll match your donation with NGOs that need your specific items</li>
                <li>• You&apos;ll receive contact information for matched NGOs</li>
                <li>• You can coordinate directly with the NGO for pickup or delivery</li>
                <li>• Your privacy is protected - we only share your contact info with matched NGOs</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={formData.donationTypes.length === 0}
                className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-blue-600 transition-all shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Find Matching NGOs
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Donation Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Donation Guidelines</h2>
            <p className="text-lg text-gray-600">Best practices for making meaningful donations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Matters",
                description: "Ensure items are in good, usable condition. Clean clothes, working electronics, and undamaged books make the biggest impact.",
                icon: "✨",
                tips: ["Clean and fresh items", "Working condition", "No major damage"]
              },
              {
                title: "Be Specific",
                description: "Provide detailed descriptions of your items including size, condition, and quantity to help NGOs make informed decisions.",
                icon: "📝",
                tips: ["Detailed descriptions", "Accurate quantities", "Condition notes"]
              },
              {
                title: "Think Local",
                description: "Local donations reduce transportation costs and environmental impact while supporting your community directly.",
                icon: "🏘️",
                tips: ["Local organizations", "Reduced transport", "Community impact"]
              }
            ].map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200"
              >
                <div className="text-3xl mb-4">{guideline.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{guideline.title}</h3>
                <p className="text-gray-600 mb-4">{guideline.description}</p>
                <ul className="space-y-1">
                  {guideline.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-sky-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Examples Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Donation Makes a Difference</h2>
            <p className="text-lg text-gray-600">See how different types of donations create real impact</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                type: "Books & Educational Materials",
                impact: "Help children access quality education and develop reading skills",
                example: "A donation of 50 children's books helped set up a library for 200 students in a rural school",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                type: "Clothes & Shoes",
                impact: "Provide dignity and protection for individuals in need",
                example: "Winter coats and shoes helped 150 homeless individuals stay warm during cold months",
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                type: "Medical Supplies",
                impact: "Support healthcare access in underserved communities",
                example: "Medical equipment donations enabled a clinic to serve 500+ patients monthly",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                type: "Electronics & Furniture",
                impact: "Enable organizations to operate efficiently and serve more people",
                example: "Office furniture and computers helped an NGO expand their services to 3 new locations",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <SafeImage
                  src={item.image}
                  alt={item.type}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                  type="card"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.type}</h3>
                  <p className="text-gray-600 mb-3">{item.impact}</p>
                  <p className="text-sm text-gray-500 italic">"{item.example}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Impact Stories</h2>
            <p className="text-lg text-gray-600">See how your donations create lasting change</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Education for All",
                description: "Books donated through GiveEase helped establish 15 libraries in rural schools",
                impact: "2,500+ students benefited",
                icon: "📚",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Healthcare Access",
                description: "Medical supplies reached 8 clinics serving remote communities",
                impact: "10,000+ patients treated",
                icon: "🏥",
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Community Support",
                description: "Clothing and essentials helped families during natural disasters",
                impact: "5,000+ families supported",
                icon: "👕",
                color: "from-purple-400 to-pink-500"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sky-200"
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
                  className={`text-4xl mb-4 bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}
                >
                  {story.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-3">{story.description}</p>
                <div className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {story.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-sky-100 to-blue-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Donors Say</h2>
            <p className="text-lg text-gray-600">Real experiences from people who made donations through GiveEase</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Martinez",
                location: "New York",
                story: "I donated my children's old toys and books through GiveEase. Within 2 days, I was connected with a children's shelter that was thrilled to receive them. The process was incredibly smooth!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "David Thompson",
                location: "Los Angeles",
                story: "I had office furniture from my business that I no longer needed. GiveEase matched me with a startup NGO that was setting up their first office. It felt great to help them get started!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Maria Rodriguez",
                location: "Chicago",
                story: "I donated medical supplies and was amazed by how quickly I was matched with a healthcare NGO serving rural communities. The impact was immediate and meaningful.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border border-sky-200"
              >
                <div className="flex items-center mb-4">
                  <SafeImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    type="avatar"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.story}"</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
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
            <p className="text-lg text-gray-600">Everything you need to know about donating through GiveEase</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What happens after I submit my donation?",
                answer: "Our AI system will analyze your donation and match you with NGOs that need your specific items. You'll receive contact information for matched NGOs within 24-48 hours."
              },
              {
                question: "Do I need to pay anything to donate?",
                answer: "No, donating through GiveEase is completely free. We're a nonprofit platform dedicated to connecting donors with NGOs that need their items."
              },
              {
                question: "What if I don't get matched with any NGOs?",
                answer: "If no immediate matches are found, we'll keep your donation request active in our system. New NGOs register regularly, so matches may become available later."
              },
              {
                question: "How do I arrange pickup or delivery?",
                answer: "Once matched, you'll coordinate directly with the NGO. Most NGOs offer pickup services, or you can arrange delivery based on your convenience and their needs."
              },
              {
                question: "Is my personal information safe?",
                answer: "Yes, we prioritize your privacy. We only share your contact information with matched NGOs, and you can choose your preferred contact method."
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
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-sky-100 mb-8"
          >
            Start your donation journey today and connect with NGOs that need your items
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/matched-ngos">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Donating Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 