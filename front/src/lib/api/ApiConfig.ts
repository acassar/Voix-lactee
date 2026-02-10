/**
 * API Configuration
 * Manage rate limiting and caching per endpoint
 */

export const API_CONFIG = {
  // GET endpoints - with caching
  services: {
    cache: true,
    cacheTTL: 10 * 60 * 1000, // 10 minutes
  },
  faq: {
    cache: true,
    cacheTTL: 10 * 60 * 1000, // 10 minutes
  },
  about: {
    cache: true,
    cacheTTL: 15 * 60 * 1000, // 15 minutes
  },

  // POST endpoints - no cache, stricter rate limiting (handled via RateLimit.ts)
  contacts: {
    cache: false,
    minDelayMs: 300000, // 5 minutes between contact submissions
  },
}
