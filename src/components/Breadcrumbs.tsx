'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav 
      className={`flex items-center space-x-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            {index > 0 && (
              <motion.svg
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.1 }}
                className="w-4 h-4 text-gray-400 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </motion.svg>
            )}
            
            {item.current ? (
              <span className="text-gray-900 font-medium">
                {item.label}
              </span>
            ) : item.href ? (
              <Link
                href={item.href}
                className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-600">
                {item.label}
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </nav>
  );
}

// Predefined breadcrumb configurations
export function HomeBreadcrumbs({ currentPage }: { currentPage: string }) {
  return (
    <Breadcrumbs
      items={[
        { label: 'Home', href: '/' },
        { label: currentPage, current: true }
      ]}
    />
  );
}

export function DonationBreadcrumbs() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Home', href: '/' },
        { label: 'Donate', href: '/donate' },
        { label: 'Select Items', current: true }
      ]}
    />
  );
}

export function NGORegistrationBreadcrumbs() {
  return (
    <Breadcrumbs
      items={[
        { label: 'Home', href: '/' },
        { label: 'NGO Registration', current: true }
      ]}
    />
  );
} 