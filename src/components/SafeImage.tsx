'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  fallbackSrc?: string;
  type?: 'hero' | 'card' | 'avatar' | 'general';
}

export default function SafeImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  fallbackSrc,
  type = 'general'
}: SafeImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Determine fallback based on type if not provided
  const getFallbackSrc = () => {
    if (fallbackSrc) return fallbackSrc;
    
    switch (type) {
      case 'hero':
        return '/placeholder-hero.svg';
      case 'avatar':
        return '/placeholder-avatar.svg';
      case 'card':
      case 'general':
      default:
        return '/placeholder-card.svg';
    }
  };

  // Reset state when src changes
  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    console.warn(`Image failed to load: ${src}, using fallback`);
    if (imageSrc !== getFallbackSrc()) {
      setImageSrc(getFallbackSrc());
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    console.log(`Image loaded successfully: ${src}`);
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        priority={priority}
        onError={handleError}
        onLoad={handleLoad}
        unoptimized={hasError} // Disable optimization for fallback images
      />
      
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
} 