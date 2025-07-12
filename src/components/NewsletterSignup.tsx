'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest impact stories, donation tips, and community updates delivered to your inbox
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="text-green-500 text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-600">
                  You'll receive our next update soon. Welcome to the GiveEase community!
                </p>
              </motion.div>
            )}

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Weekly</div>
                <div className="text-sm text-gray-600">Impact Stories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Monthly</div>
                <div className="text-sm text-gray-600">Donation Tips</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Quarterly</div>
                <div className="text-sm text-gray-600">Community Reports</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 