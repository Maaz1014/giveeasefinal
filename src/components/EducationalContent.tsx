'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Guide {
  id: number;
  title: string;
  description: string;
  icon: string;
  tips: string[];
  category: string;
}

export default function EducationalContent() {
  const [activeCategory, setActiveCategory] = useState('donation');

  const guides: Guide[] = [
    // Donation Tips
    {
      id: 1,
      title: "How to Donate Effectively",
      description: "Learn the best practices for making impactful donations",
      icon: "🎯",
      category: "donation",
      tips: [
        "Clean and organize items before donating",
        "Check NGO requirements and preferences",
        "Include detailed descriptions of items",
        "Consider the long-term impact of your donation"
      ]
    },
    {
      id: 2,
      title: "Preparing Items for Donation",
      description: "Essential steps to prepare your items for maximum impact",
      icon: "🧹",
      category: "donation",
      tips: [
        "Clean and sanitize all items thoroughly",
        "Test electronics to ensure they work",
        "Package items securely for transport",
        "Include instruction manuals when available"
      ]
    },
    {
      id: 3,
      title: "Choosing the Right NGO",
      description: "How to select NGOs that align with your values",
      icon: "🔍",
      category: "donation",
      tips: [
        "Research NGO mission and values",
        "Check their verification status",
        "Read reviews and testimonials",
        "Consider their specific needs"
      ]
    },
    {
      id: 4,
      title: "Seasonal Donation Strategies",
      description: "Timing your donations for maximum impact",
      icon: "📅",
      category: "donation",
      tips: [
        "Donate warm clothes before winter",
        "School supplies before academic year",
        "Holiday gifts for children in need",
        "Consider NGO seasonal needs"
      ]
    },

    // Trust & Safety
    {
      id: 5,
      title: "Understanding NGO Verification",
      description: "How we ensure all NGOs are legitimate and trustworthy",
      icon: "✅",
      category: "trust",
      tips: [
        "All NGOs undergo background verification",
        "Regular audits and compliance checks",
        "Document validation and legal review",
        "Community feedback and ratings system"
      ]
    },
    {
      id: 6,
      title: "Red Flags to Watch For",
      description: "Warning signs when evaluating donation opportunities",
      icon: "⚠️",
      category: "trust",
      tips: [
        "Avoid NGOs with unclear missions",
        "Beware of pressure tactics",
        "Check for proper documentation",
        "Verify contact information"
      ]
    },
    {
      id: 7,
      title: "Safe Donation Practices",
      description: "Protecting yourself while helping others",
      icon: "🛡️",
      category: "trust",
      tips: [
        "Never share personal financial info",
        "Use secure payment methods",
        "Keep records of all donations",
        "Report suspicious activity"
      ]
    },
    {
      id: 8,
      title: "Verification Process Explained",
      description: "How we verify each NGO on our platform",
      icon: "🔐",
      category: "trust",
      tips: [
        "Legal registration verification",
        "Financial transparency review",
        "Impact assessment evaluation",
        "Ongoing monitoring system"
      ]
    },

    // Impact Tracking
    {
      id: 9,
      title: "Measuring Your Impact",
      description: "Track how your donations create real change",
      icon: "📊",
      category: "impact",
      tips: [
        "Receive impact reports from NGOs",
        "Track donation journey and outcomes",
        "See photos and stories of impact",
        "Get updates on long-term results"
      ]
    },
    {
      id: 10,
      title: "Understanding Impact Metrics",
      description: "How to interpret donation impact data",
      icon: "📈",
      category: "impact",
      tips: [
        "Learn to read impact reports",
        "Understand quantitative vs qualitative data",
        "Track cumulative impact over time",
        "Compare different types of impact"
      ]
    },
    {
      id: 11,
      title: "Sharing Your Impact Story",
      description: "How to share your donation journey with others",
      icon: "📢",
      category: "impact",
      tips: [
        "Document your donation process",
        "Share impact stories on social media",
        "Inspire others to donate",
        "Create awareness about causes"
      ]
    },
    {
      id: 12,
      title: "Long-term Impact Assessment",
      description: "Evaluating sustained impact of your donations",
      icon: "🎯",
      category: "impact",
      tips: [
        "Follow up with NGOs regularly",
        "Track sustained outcomes",
        "Evaluate community changes",
        "Measure lasting benefits"
      ]
    },

    // Financial Benefits
    {
      id: 13,
      title: "Tax Benefits of Donating",
      description: "Understand the financial benefits of charitable giving",
      icon: "💰",
      category: "financial",
      tips: [
        "Keep detailed records of donations",
        "Understand tax deduction limits",
        "Get receipts from verified NGOs",
        "Consult with tax professionals"
      ]
    },
    {
      id: 14,
      title: "Maximizing Tax Deductions",
      description: "Strategies to maximize your tax benefits",
      icon: "💡",
      category: "financial",
      tips: [
        "Donate appreciated assets",
        "Use donor-advised funds",
        "Bunch donations strategically",
        "Consider employer matching"
      ]
    },
    {
      id: 15,
      title: "Documentation for Tax Purposes",
      description: "Essential documents for tax deductions",
      icon: "📋",
      category: "financial",
      tips: [
        "Keep all donation receipts",
        "Document fair market value",
        "Maintain organized records",
        "Save correspondence with NGOs"
      ]
    },
    {
      id: 16,
      title: "Corporate Donation Programs",
      description: "Leveraging employer donation programs",
      icon: "🏢",
      category: "financial",
      tips: [
        "Check employer matching programs",
        "Understand corporate policies",
        "Maximize matching opportunities",
        "Track corporate contributions"
      ]
    },

    // Sustainability
    {
      id: 17,
      title: "Sustainable Donation Practices",
      description: "Make environmentally conscious donation choices",
      icon: "🌱",
      category: "sustainability",
      tips: [
        "Choose items with long lifespan",
        "Consider environmental impact",
        "Support eco-friendly NGOs",
        "Reduce waste through smart donating"
      ]
    },
    {
      id: 18,
      title: "Eco-Friendly Donation Items",
      description: "Environmentally responsible donation choices",
      icon: "♻️",
      category: "sustainability",
      tips: [
        "Donate reusable items",
        "Choose biodegradable materials",
        "Support green initiatives",
        "Reduce carbon footprint"
      ]
    },
    {
      id: 19,
      title: "Circular Economy Donations",
      description: "Participating in the circular economy",
      icon: "🔄",
      category: "sustainability",
      tips: [
        "Extend item lifecycles",
        "Support repair and reuse",
        "Choose quality over quantity",
        "Promote sustainable practices"
      ]
    },
    {
      id: 20,
      title: "Green NGO Partnerships",
      description: "Supporting environmentally focused organizations",
      icon: "🌿",
      category: "sustainability",
      tips: [
        "Research environmental impact",
        "Support conservation efforts",
        "Choose sustainable practices",
        "Promote green initiatives"
      ]
    },

    // Building Relationships
    {
      id: 21,
      title: "Building Trust with NGOs",
      description: "Establish lasting relationships with organizations",
      icon: "🤝",
      category: "relationships",
      tips: [
        "Communicate clearly about your donation",
        "Follow up on impact reports",
        "Share feedback and suggestions",
        "Consider regular donations to trusted NGOs"
      ]
    },
    {
      id: 22,
      title: "Volunteering Beyond Donations",
      description: "Ways to get involved beyond financial support",
      icon: "👥",
      category: "relationships",
      tips: [
        "Offer your time and skills",
        "Participate in NGO events",
        "Share expertise and knowledge",
        "Build community connections"
      ]
    },
    {
      id: 23,
      title: "Networking with Other Donors",
      description: "Connecting with the donor community",
      icon: "🌐",
      category: "relationships",
      tips: [
        "Join donor communities",
        "Share experiences and tips",
        "Learn from other donors",
        "Build supportive networks"
      ]
    },
    {
      id: 24,
      title: "Long-term Partnership Building",
      description: "Developing sustained relationships with NGOs",
      icon: "🤲",
      category: "relationships",
      tips: [
        "Commit to ongoing support",
        "Provide regular feedback",
        "Participate in NGO planning",
        "Advocate for their mission"
      ]
    }
  ];

  const categories = [
    { id: 'donation', name: 'Donation Tips' },
    { id: 'trust', name: 'Trust & Safety' },
    { id: 'impact', name: 'Impact Tracking' },
    { id: 'financial', name: 'Tax Benefits' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'relationships', name: 'Building Relationships' }
  ];

  const filteredGuides = guides.filter(guide => guide.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Resources</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how to make the most impact with your donations through our comprehensive guides
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{guide.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                  <p className="text-sm text-gray-600">{guide.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {guide.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="text-blue-100 mb-6">
              Start your donation journey today and see the difference you can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Donating
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 