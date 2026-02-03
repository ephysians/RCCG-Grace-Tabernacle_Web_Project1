/**
 * Security Utilities
 * Production security enhancements and validation
 */

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>"'&]/g, (match) => {
      const entityMap: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;',
      };
      return entityMap[match];
    })
    .trim();
};

// Rate limiting helper (client-side)
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];

    // Remove old requests outside the window
    const validRequests = requests.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    if (validRequests.length >= this.maxRequests) {
      return false;
    }

    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    return true;
  }
}

export const rateLimiter = new RateLimiter();

// CSRF token generation (for forms)
export const generateCSRFToken = (): string => {
  if (typeof window === 'undefined') return '';

  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

// Content Security Policy helper
export const getCSPHeader = (): string => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  const directives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ];

  if (isDevelopment) {
    directives.push("script-src 'self' 'unsafe-inline' 'unsafe-eval' localhost:*");
    directives.push("connect-src 'self' ws: wss: localhost:*");
  }

  return directives.join('; ');
};

// Validate environment for security
export const validateSecurityConfig = (): string[] => {
  if (process.env.NODE_ENV === 'production') {
    const requiredSecurityVars = ['NEXTAUTH_SECRET', 'NEXTAUTH_URL'];

    const missingVars = requiredSecurityVars.filter(
      (varName) => !process.env[varName]
    );

    return missingVars;
  }

  return [];
};
