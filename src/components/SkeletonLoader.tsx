'use client';

import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'image' | 'avatar' | 'button';
  className?: string;
  lines?: number;
}

export default function SkeletonLoader({ 
  type = 'card', 
  className = '', 
  lines = 3 
}: SkeletonLoaderProps) {
  const shimmer = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
            <div className={`w-16 h-16 rounded-xl ${shimmer} mb-4`} />
            <div className={`h-6 rounded-lg ${shimmer} mb-3 w-3/4`} />
            <div className={`h-4 rounded ${shimmer} mb-2 w-full`} />
            <div className={`h-4 rounded ${shimmer} mb-2 w-2/3`} />
            <div className={`h-4 rounded ${shimmer} w-1/2`} />
          </div>
        );

      case 'text':
        return (
          <div className={`space-y-3 ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`h-4 rounded ${shimmer} ${i === lines - 1 ? 'w-2/3' : 'w-full'}`}
              />
            ))}
          </div>
        );

      case 'image':
        return (
          <div className={`aspect-video rounded-xl ${shimmer} ${className}`} />
        );

      case 'avatar':
        return (
          <div className={`w-12 h-12 rounded-full ${shimmer} ${className}`} />
        );

      case 'button':
        return (
          <div className={`h-12 rounded-xl ${shimmer} ${className}`} />
        );

      default:
        return (
          <div className={`h-4 rounded ${shimmer} ${className}`} />
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {renderSkeleton()}
    </motion.div>
  );
}

// Specialized skeleton components
export function CardSkeleton({ className = '' }: { className?: string }) {
  return <SkeletonLoader type="card" className={className} />;
}

export function TextSkeleton({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return <SkeletonLoader type="text" lines={lines} className={className} />;
}

export function ImageSkeleton({ className = '' }: { className?: string }) {
  return <SkeletonLoader type="image" className={className} />;
}

export function AvatarSkeleton({ className = '' }: { className?: string }) {
  return <SkeletonLoader type="avatar" className={className} />;
}

export function ButtonSkeleton({ className = '' }: { className?: string }) {
  return <SkeletonLoader type="button" className={className} />;
} 