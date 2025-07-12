'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilityFeaturesProps {
  children: React.ReactNode;
}

export default function AccessibilityFeatures({ children }: AccessibilityFeaturesProps) {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    const handleKeyDown = () => {
      setIsKeyboardUser(true);
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const announceToScreenReader = (message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 1000);
  };

  return (
    <>
      {/* Screen reader announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      {/* Focus indicators for keyboard users */}
      <style jsx global>{`
        ${isKeyboardUser ? `
          *:focus {
            outline: 2px solid #0ea5e9 !important;
            outline-offset: 2px !important;
          }
        ` : ''}
      `}</style>

      {/* Skip to main content link */}
      <AnimatePresence>
        {isKeyboardUser && (
          <motion.a
            href="#main-content"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sky-500 text-white px-4 py-2 rounded-lg z-50"
            onClick={() => announceToScreenReader('Skipped to main content')}
          >
            Skip to main content
          </motion.a>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}

// High contrast mode toggle
export function HighContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleHighContrast = () => {
    const newMode = !isHighContrast;
    setIsHighContrast(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <button
      onClick={toggleHighContrast}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
      aria-label={isHighContrast ? 'Disable high contrast' : 'Enable high contrast'}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
      </svg>
    </button>
  );
}

// Font size controls
export function FontSizeControls() {
  const [fontSize, setFontSize] = useState('medium');

  const changeFontSize = (size: string) => {
    setFontSize(size);
    document.documentElement.className = document.documentElement.className.replace(/font-size-\w+/g, '');
    document.documentElement.classList.add(`font-size-${size}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeFontSize('small')}
        className={`p-1 rounded ${fontSize === 'small' ? 'bg-sky-500 text-white' : 'bg-gray-100'}`}
        aria-label="Decrease font size"
      >
        A-
      </button>
      <button
        onClick={() => changeFontSize('medium')}
        className={`p-1 rounded ${fontSize === 'medium' ? 'bg-sky-500 text-white' : 'bg-gray-100'}`}
        aria-label="Normal font size"
      >
        A
      </button>
      <button
        onClick={() => changeFontSize('large')}
        className={`p-1 rounded ${fontSize === 'large' ? 'bg-sky-500 text-white' : 'bg-gray-100'}`}
        aria-label="Increase font size"
      >
        A+
      </button>
    </div>
  );
} 