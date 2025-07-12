import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'default' | 'modern' | 'minimal' | 'animated';
}

export default function Logo({ size = 'md', className = '', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const renderIcon = () => {
    const iconSizes = {
      sm: size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-6 h-6' : 'w-7 h-7',
      md: size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-6 h-6' : 'w-7 h-7',
      lg: size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-6 h-6' : 'w-7 h-7'
    };

    switch (variant) {
      case 'modern':
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center mr-3 relative overflow-hidden group hover:scale-110 hover:shadow-3xl transition-all duration-500 border border-white/20`}>
            {/* Enhanced animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 via-transparent to-purple-300/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            
            {/* Floating particles */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-full animate-ping"></div>
            <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-600/50 blur-sm group-hover:blur-md transition-all duration-500"></div>
            
            <svg 
              className={`${iconSizes[size]} text-white relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 drop-shadow-lg`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              {/* Clean heart symbol */}
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              
              {/* Connection dots for visual interest */}
              <circle cx="10" cy="15" r="0.4" fill="white" opacity="0.9"/>
              <circle cx="14" cy="15" r="0.4" fill="white" opacity="0.9"/>
              <circle cx="12" cy="17" r="0.3" fill="white" opacity="0.8"/>
              
              {/* Heart pulse lines */}
              <path d="M10 12l1 1-1 1-1-1 1-1zm4 0l1 1-1 1-1-1 1-1z" fill="white" opacity="0.7"/>
            </svg>
            
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-300"></div>
          </div>
        );

      case 'minimal':
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-slate-700 to-slate-900 rounded-full shadow-lg flex items-center justify-center mr-3 border-2 border-slate-600/30`}>
            <svg 
              className={`${iconSizes[size]} text-slate-300`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              {/* Simple geometric heart */}
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        );

      case 'animated':
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-lg flex items-center justify-center mr-3 relative overflow-hidden group hover:scale-110 transition-all duration-500`}>
            {/* Animated particles */}
            <div className="absolute inset-0">
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
            <svg 
              className={`${iconSizes[size]} text-white relative z-10 group-hover:rotate-12 transition-transform duration-300`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              {/* Animated heart with pulse effect */}
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              {/* Sparkle effect */}
              <path d="M8 6l1 1-1 1-1-1 1-1zm8 0l1 1-1 1-1-1 1-1z" fill="white" opacity="0.8"/>
            </svg>
          </div>
        );

      default:
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center mr-3 hover:shadow-xl transition-shadow duration-300`}>
            <svg 
              className={`${iconSizes[size]} text-white`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              {/* Enhanced heart with better details */}
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              {/* Enhanced hands reaching out */}
              <path d="M8 12h2v4H8v-4zm6 0h2v4h-2v-4z" fill="white" opacity="0.9"/>
              {/* Connection dots */}
              <circle cx="10" cy="14" r="0.5" fill="white" opacity="0.7"/>
              <circle cx="14" cy="14" r="0.5" fill="white" opacity="0.7"/>
            </svg>
          </div>
        );
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      {renderIcon()}
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={`font-bold text-gray-900 ${textSizes[size]} tracking-tight`}>
          Give
          <span className={`${
            variant === 'modern' ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600' :
            variant === 'minimal' ? 'text-slate-600' :
            variant === 'animated' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600' :
            'text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600'
          }`}>
            Ease
          </span>
        </span>
        {size === 'lg' && (
          <span className={`text-xs font-medium ${
            variant === 'modern' ? 'text-blue-600' :
            variant === 'minimal' ? 'text-slate-500' :
            variant === 'animated' ? 'text-purple-600' :
            'text-gray-500'
          }`}>
            Connecting Generosity
          </span>
        )}
      </div>
    </div>
  );
}

// Alternative simplified logo for smaller spaces
export function LogoIcon({ size = 'md', className = '', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const renderIconOnly = () => {
    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    switch (variant) {
      case 'modern':
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center ${className} hover:scale-110 hover:shadow-3xl transition-all duration-500 border border-white/20 relative overflow-hidden group`}>
            {/* Enhanced animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 via-transparent to-purple-300/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            
            {/* Floating particles */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-full animate-ping"></div>
            <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-600/50 blur-sm group-hover:blur-md transition-all duration-500"></div>
            
            <svg className={`${iconSizes[size]} text-white relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 drop-shadow-lg`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:border-white/50 transition-all duration-300"></div>
          </div>
        );

      case 'minimal':
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-slate-700 to-slate-900 rounded-full shadow-lg flex items-center justify-center ${className} border-2 border-slate-600/30`}>
            <svg className={`${iconSizes[size]} text-slate-300`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        );

      case 'animated':
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-lg flex items-center justify-center ${className} hover:scale-110 transition-all duration-500`}>
            <svg className={`${iconSizes[size]} text-white hover:rotate-12 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        );

      default:
        return (
          <div className={`${sizeClasses[size]} bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center ${className} hover:shadow-xl transition-shadow duration-300`}>
            <svg className={`${iconSizes[size]} text-white`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        );
    }
  };

  return renderIconOnly();
} 