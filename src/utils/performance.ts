/**
 * Performance Optimization Utilities
 * Production-ready performance enhancements
 */

import { useEffect } from 'react';

import { env } from '@/config/environment.config';

// Preload critical resources
export const preloadCriticalResources = (): void => {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontPreloads = ['/assets/fonts/inter-var.woff2'];

  fontPreloads.forEach((href) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Service Worker registration for caching
export const registerServiceWorker = async (): Promise<void> => {
  if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    env.app.env === 'production'
  ) {
    try {
      await navigator.serviceWorker.register('/sw.js');
    } catch {
      // Ignore registration errors in production builds.
    }
  }
};

// Performance monitoring hook
export const usePerformanceMonitoring = (): void => {
  useEffect(() => {
    if (!env.features.debugMode) return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      if (typeof window !== 'undefined') {
        (window as Window & { __perfEntries?: PerformanceEntry[] }).__perfEntries = entries;
      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    return () => observer.disconnect();
  }, []);
};

// Image optimization helper
export const getOptimizedImageProps = (src: string, alt: string) => ({
  src,
  alt,
  loading: 'lazy' as const,
  decoding: 'async' as const,
  style: { contentVisibility: 'auto' },
});
