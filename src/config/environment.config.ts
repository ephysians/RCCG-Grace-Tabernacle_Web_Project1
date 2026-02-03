/**
 * Environment Configuration
 * Centralized configuration for environment variables with type safety
 */

interface EnvironmentConfig {
  app: {
    name: string;
    url: string;
    env: 'development' | 'production' | 'test';
  };
  api: {
    prayerUrl: string;
  };
  features: {
    analytics: boolean;
    debugMode: boolean;
  };
}

const getEnvironmentConfig = (): EnvironmentConfig => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    app: {
      name: process.env.NEXT_PUBLIC_APP_NAME || 'RCCG Grace Tabernacle',
      url:
        process.env.NEXT_PUBLIC_APP_URL ||
        (isProduction
          ? 'https://rccg-grace-tabernacle.vercel.app'
          : 'http://localhost:3000'),
      env:
        (process.env.NEXT_PUBLIC_APP_ENV as EnvironmentConfig['app']['env']) ||
        process.env.NODE_ENV ||
        'development',
    },
    api: {
      prayerUrl: process.env.NEXT_PUBLIC_PRAYER_API_URL || '/api/prayer',
    },
    features: {
      analytics: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== undefined,
      debugMode: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true' && !isProduction,
    },
  };
};

export const env = getEnvironmentConfig();

// Validation function to ensure required environment variables are set
export const validateEnvironment = (): string[] => {
  const requiredEnvVars = ['NEXT_PUBLIC_APP_NAME', 'NEXT_PUBLIC_APP_URL'];

  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  return missingVars;
};

// Runtime environment validation
if (typeof window === 'undefined') {
  validateEnvironment();
}
