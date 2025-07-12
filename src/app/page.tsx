'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SafeImage from '../components/SafeImage';
import Logo from '../components/Logo';
import LiveChat from '../components/LiveChat';
import UserTestimonials from '../components/UserTestimonials';
import EducationalContent from '../components/EducationalContent';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  const handleRefresh = () => {
    // Simulate refresh - in a real app, this would reload data
    console.log('Refreshing content...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full opacity-45"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 120, 240]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-60 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-35"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 80, 0],
            rotate: [0, -120, -240]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-37"
        />
        
        {/* Geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 transform rotate-45 opacity-20"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 transform -rotate-12 opacity-20"
        />
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 28, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-30 opacity-18"
        />
        <motion.div
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 32, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/3 left-1/3 w-18 h-18 bg-gradient-to-br from-purple-400 to-pink-500 transform -rotate-45 opacity-16"
        />
        
        {/* Triangles */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 opacity-15"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.85, 1]
          }}
          transition={{ 
            duration: 38, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/2 right-1/6 w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 transform -rotate-30 opacity-17"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        
        {/* Hexagons */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-1/4 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 opacity-14"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        
        {/* Wave-like elements */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-0 w-64 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
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
          className="absolute bottom-1/3 right-0 w-48 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        />
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
          className="absolute top-1/4 right-0 w-56 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, -35, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 left-0 w-52 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        />
        
        {/* Floating dots */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 left-1/2 w-3 h-3 bg-sky-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-indigo-400 rounded-full opacity-25"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-2/3 left-1/4 w-2.5 h-2.5 bg-purple-400 rounded-full opacity-28"
        />
        
        {/* More floating dots */}
        <motion.div
          animate={{ 
            y: [0, -18, 0],
            opacity: [0.3, 0.55, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-22"
        />
        <motion.div
          animate={{ 
            y: [0, 22, 0],
            opacity: [0.3, 0.65, 0.3]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -16, 0],
            opacity: [0.3, 0.58, 0.3]
          }}
          transition={{ 
            duration: 7.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-yellow-400 rounded-full opacity-24"
        />
        <motion.div
          animate={{ 
            y: [0, 19, 0],
            opacity: [0.3, 0.52, 0.3]
          }}
          transition={{ 
            duration: 6.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-3/4 left-1/5 w-2 h-2 bg-cyan-400 rounded-full opacity-18"
        />
        
        {/* Additional geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 52, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/6 right-1/5 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 transform rotate-45 opacity-12"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 48, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/6 left-1/5 w-6 h-6 bg-gradient-to-br from-lime-400 to-green-500 transform -rotate-30 opacity-10"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        
        {/* More triangles */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 56, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/5 right-1/6 w-10 h-10 bg-gradient-to-br from-fuchsia-400 to-pink-500 transform rotate-60 opacity-11"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.85, 1]
          }}
          transition={{ 
            duration: 44, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/5 left-1/6 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 transform -rotate-45 opacity-9"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        
        {/* More hexagons */}
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-2/5 right-1/8 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-8"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 54, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-2/5 left-1/8 w-7 h-7 bg-gradient-to-br from-rose-400 to-pink-500 opacity-7"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        
        {/* More wave lines */}
        <motion.div
          animate={{ 
            x: [0, 45, 0],
            opacity: [0.1, 0.28, 0.1]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 left-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, -55, 0],
            opacity: [0.1, 0.32, 0.1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 right-1/4 w-44 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
        />
        
        {/* Additional floating circles */}
        <motion.div
          animate={{ 
            x: [0, 70, 0],
            y: [0, -30, 0],
            rotate: [0, 120, 240]
          }}
          transition={{ 
            duration: 24, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/5 left-1/5 w-28 h-28 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full opacity-35"
        />
        <motion.div
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
            rotate: [0, -90, -180]
          }}
          transition={{ 
            duration: 26, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-3/4 right-1/5 w-22 h-22 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-32"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -35, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/5 left-3/4 w-26 h-26 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            x: [0, -45, 0],
            y: [0, 25, 0],
            rotate: [0, -120, -240]
          }}
          transition={{ 
            duration: 28, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-28"
        />
        
        {/* Additional geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 34, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/6 left-3/4 w-18 h-18 bg-gradient-to-br from-blue-400 to-indigo-500 transform rotate-60 opacity-25"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 36, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/6 right-3/4 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 transform -rotate-45 opacity-22"
        />
        <motion.div
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 42, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-2/3 left-1/6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-30 opacity-20"
        />
        <motion.div
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 38, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-2/3 right-1/6 w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 transform -rotate-60 opacity-18"
        />
        
        {/* Additional triangles */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 46, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/6 w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 transform rotate-45 opacity-24"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.85, 1]
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 right-1/6 w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-500 transform -rotate-30 opacity-21"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        
        {/* Additional hexagons */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 58, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/3 right-1/5 w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-500 opacity-19"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 62, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/3 left-1/5 w-11 h-11 bg-gradient-to-br from-rose-400 to-pink-500 opacity-17"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        
        {/* Additional floating dots */}
        <motion.div
          animate={{ 
            y: [0, -22, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 8.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/6 right-1/4 w-3.5 h-3.5 bg-blue-400 rounded-full opacity-35"
        />
        <motion.div
          animate={{ 
            y: [0, 18, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 9.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/6 left-1/4 w-2.5 h-2.5 bg-purple-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.65, 0.3]
          }}
          transition={{ 
            duration: 7.8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-green-400 rounded-full opacity-32"
        />
        <motion.div
          animate={{ 
            y: [0, 24, 0],
            opacity: [0.3, 0.58, 0.3]
          }}
          transition={{ 
            duration: 10.2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-2/3 left-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-28"
        />
        
        {/* More wave lines */}
        <motion.div
          animate={{ 
            x: [0, 45, 0],
            opacity: [0.1, 0.28, 0.1]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/6 left-0 w-72 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, -38, 0],
            opacity: [0.1, 0.24, 0.1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/6 right-0 w-60 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, 42, 0],
            opacity: [0.1, 0.26, 0.1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-5/6 left-0 w-68 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
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
              <Link href="/donate" className="px-4 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 font-medium">
                Donate
              </Link>
              <Link href="/matched-ngos" className="px-4 py-2 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 font-medium">
                Find NGOs
              </Link>
              <Link href="/login">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg"
                >
                  Login
                </motion.button>
              </Link>
              <Link href="/signup">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
                >
                  Sign Up
                </motion.button>
              </Link>

            </div>
            <div className="md:hidden">
              <button className="text-gray-700 p-2 rounded-lg hover:bg-sky-50 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main-content" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Connect
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600"> Generosity</span>
                <br />
                with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Purpose</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                GiveEase uses AI to match your donations with NGOs that need them most. 
                Make every donation count with our smart matching platform.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/donate">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Start Donating
                  </motion.button>
                </Link>
                <Link href="/matched-ngos">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-all"
                  >
                    Find NGOs
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="relative z-10">
                <SafeImage
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="People helping each other"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority={true}
                  type="hero"
                />
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 0.9, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/60 to-blue-100/60"></div>
        
        {/* Additional geometric elements for this section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 50, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 right-1/6 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 opacity-8"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 45, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-1/4 left-1/6 w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 transform -rotate-30 opacity-6"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Making a Real Impact</h2>
            <p className="text-xl text-gray-600">Join thousands of donors and NGOs making a difference</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Donations Matched", icon: "🎯", color: "from-sky-400 to-blue-500" },
              { number: "500+", label: "Verified NGOs", icon: "🏢", color: "from-indigo-400 to-purple-500" },
              { number: "50,000+", label: "Lives Impacted", icon: "❤️", color: "from-pink-400 to-rose-500" },
              { number: "95%", label: "Success Rate", icon: "⭐", color: "from-yellow-400 to-orange-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-sky-200 hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-blue-100 relative">
        {/* Additional geometric elements for this section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 55, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/3 left-1/8 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 transform rotate-60 opacity-7"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 0.85, 1]
            }}
            transition={{ 
              duration: 48, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-1/3 right-1/8 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 transform -rotate-45 opacity-5"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-15"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GiveEase?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform makes donation matching simple, efficient, and impactful
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Smart Matching",
                description: "AI-powered algorithm matches your donations with NGOs that need them most",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["Advanced AI algorithms", "Real-time matching", "Precision targeting"]
              },
              {
                icon: "⚡",
                title: "Quick & Easy",
                description: "Simple donation process that takes minutes, not hours",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["3-step process", "Instant matching", "Mobile friendly"]
              },
              {
                icon: "🔒",
                title: "Verified NGOs",
                description: "All NGOs are verified and registered with proper documentation",
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["Background verification", "Document validation", "Regular audits"]
              },
              {
                icon: "📊",
                title: "Transparent Impact",
                description: "Track how your donations make a difference in real-time",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                features: ["Impact tracking", "Progress reports", "Success stories"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative mb-4">
                  <SafeImage
                    src={feature.image}
                    alt={feature.title}
                    width={200}
                    height={120}
                    className="w-full h-32 object-cover rounded-xl mb-4"
                    type="card"
                  />
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute top-2 right-2 text-3xl"
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center">
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

      {/* How It Works Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to make your donation count
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us What You Have",
                description: "Select the type of items you want to donate and your location",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                details: ["Choose donation types", "Specify your location", "Add item descriptions"]
              },
              {
                step: "2",
                title: "AI Matches You",
                description: "Our AI finds NGOs that need exactly what you're offering",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                details: ["Smart algorithm matching", "Real-time processing", "Priority-based selection"]
              },
              {
                step: "3",
                title: "Connect & Donate",
                description: "Get in touch with matched NGOs and make your donation",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                details: ["Direct communication", "Flexible arrangements", "Impact tracking"]
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <SafeImage
                    src={step.image}
                    alt={step.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                    type="card"
                  />
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold"
                  >
                    {step.step}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-sky-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-blue-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from donors and NGOs making a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Donor",
                story: "I had boxes of children's books and clothes that my kids outgrew. GiveEase connected me with a local children's shelter that desperately needed these items. The process was so easy!",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                rating: 5
              },
              {
                name: "Hope for Children Foundation",
                role: "NGO",
                story: "Through GiveEase, we received 200+ books and educational materials that helped us set up a library for our children. The matching system is incredibly accurate!",
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Donor",
                story: "I donated medical supplies through GiveEase and was matched with a healthcare NGO that serves rural communities. The impact was immediate and meaningful.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                rating: 5
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <SafeImage
                    src={story.image}
                    alt={story.name}
                    width={60}
                    height={60}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    type="avatar"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                <div className="flex items-center">
                  {[...Array(story.rating)].map((_, i) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <SafeImage
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Community helping each other"
              width={1200}
              height={400}
              className="w-full h-64 object-cover"
              type="hero"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">Join the Movement</h3>
                <p className="text-xl">Be part of something bigger than yourself</p>
                <Link href="/donate">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all"
                  >
                    Start Donating Today
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <UserTestimonials />

      {/* Educational Content Section */}
      <EducationalContent />

      {/* Newsletter Signup Section */}
      <NewsletterSignup />

      {/* FAQ Section - Moved to the end */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about GiveEase
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How does the matching algorithm work?",
                answer: "Our AI analyzes your donation details and matches them with NGOs that have registered specific needs. The algorithm considers item type, location, urgency, and NGO credibility to ensure the best matches."
              },
              {
                question: "Is my personal information safe?",
                answer: "Yes, we prioritize your privacy. We only share your contact information with matched NGOs, and you can choose your preferred contact method. All data is encrypted and stored securely."
              },
              {
                question: "What types of items can I donate?",
                answer: "We accept a wide range of items including clothes, books, educational materials, medical supplies, electronics, furniture, toys, and more. Each NGO specifies exactly what they need."
              },
              {
                question: "How do I know the NGOs are legitimate?",
                answer: "All NGOs on our platform are verified through a rigorous process including document validation, background checks, and regular audits. We maintain high standards for all registered organizations."
              },
              {
                question: "What if I don't get matched with any NGOs?",
                answer: "If no immediate matches are found, we'll notify you and keep your donation request active. New NGOs register regularly, so matches may become available later."
              },
              {
                question: "Can I track the impact of my donation?",
                answer: "Yes! NGOs often provide updates on how your donations are being used. You can also opt to receive impact reports and success stories from the organizations you support."
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo size="lg" variant="modern" />
              <p className="mt-4 text-gray-400">
                Connecting generosity with purpose through AI-powered donation matching.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/donate" className="text-gray-400 hover:text-white transition-colors">Donate</Link></li>
                <li><Link href="/matched-ngos" className="text-gray-400 hover:text-white transition-colors">Find NGOs</Link></li>
                <li><Link href="/ngo-registration" className="text-gray-400 hover:text-white transition-colors">Register NGO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 GiveEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Live Chat */}
      <LiveChat />
        </div>
    );
  }
