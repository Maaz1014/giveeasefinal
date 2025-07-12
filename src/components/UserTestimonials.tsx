'use client';

import { motion } from 'framer-motion';
import SafeImage from './SafeImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  story: string;
  image: string;
  rating: number;
  impact: string;
}

export default function UserTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Donor",
      story: "GiveEase made donating so easy! I donated my old laptop and was matched with a local school. The impact was immediate - they now have a computer lab for their students.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      impact: "1 laptop → 30 students educated"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Healthcare Worker",
      story: "I donated medical supplies through GiveEase and was matched with a rural clinic. The process was seamless, and I received updates on how my donation helped 50+ patients.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      impact: "Medical supplies → 50+ patients treated"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Teacher",
      story: "Donated books to a community library through GiveEase. The matching algorithm found the perfect NGO that serves underprivileged children. Highly recommend!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      impact: "50 books → 200+ children reading"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Business Owner",
      story: "GiveEase helped me donate office furniture to a startup incubator. The transparency and impact tracking made the whole experience rewarding.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      impact: "Office furniture → 10 startups supported"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Stories, Real Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our community is making a difference through AI-powered donation matching
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <SafeImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  type="avatar"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 italic">"{testimonial.story}"</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                  {testimonial.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
            <p className="text-gray-600 mb-6">
              Be part of thousands of donors making a difference through AI-powered matching
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-sm text-gray-600">Happy Donors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Verified NGOs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 