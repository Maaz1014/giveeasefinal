'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface MobileGesturesProps {
  children: React.ReactNode;
  onRefresh?: () => void;
  className?: string;
}

export default function MobileGestures({ children, onRefresh, className = '' }: MobileGesturesProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 100], [0, 1]);
  const scale = useTransform(y, [0, 100], [0.8, 1]);

  useEffect(() => {
    let startY = 0;
    let currentY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;
      
      // Only allow pull-to-refresh when at the top of the page
      if (window.scrollY === 0 && deltaY > 0) {
        y.set(deltaY);
      }
    };

    const handleTouchEnd = () => {
      if (y.get() > 80 && onRefresh) {
        setIsRefreshing(true);
        onRefresh();
        setTimeout(() => setIsRefreshing(false), 1000);
      }
      y.set(0);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [y, onRefresh]);

  return (
    <div className={`relative ${className}`}>
      {/* Pull-to-refresh indicator */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-white rounded-full p-3 shadow-lg border border-gray-200">
          <motion.div
            animate={{ rotate: isRefreshing ? 360 : 0 }}
            transition={{ duration: isRefreshing ? 1 : 0, repeat: isRefreshing ? Infinity : 0 }}
            className="w-6 h-6 border-2 border-sky-500 border-t-transparent rounded-full"
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
}

// Swipe gesture component for cards
export function SwipeableCard({ 
  children, 
  onSwipeLeft, 
  onSwipeRight,
  className = '' 
}: {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  className?: string;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 0, 100], [-10, 0, 10]);
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100 && onSwipeRight) {
      onSwipeRight();
    } else if (info.offset.x < -100 && onSwipeLeft) {
      onSwipeLeft();
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      onDragEnd={handleDragEnd}
      style={{ x, rotate, opacity }}
      className={`cursor-grab active:cursor-grabbing ${className}`}
    >
      {children}
    </motion.div>
  );
} 