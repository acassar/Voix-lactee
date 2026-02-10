/**
 * Rate limiting and caching utility for API calls
 */

const requestTracker = new Map<string, number>()
const MIN_DELAY_MS = 1000 // Minimum 1s between requests to same endpoint

/**
 * Check if we can make a request to this endpoint
 * @param key Unique identifier (usually the URL)
 * @returns true if request is allowed, false if rate limited
 */
export const canMakeRequest = (key: string): boolean => {
  const lastRequestTime = requestTracker.get(key)
  if (!lastRequestTime) return true

  const timeSinceLastRequest = Date.now() - lastRequestTime
  return timeSinceLastRequest >= MIN_DELAY_MS
}

/**
 * Record a request to track rate limiting
 * @param key Unique identifier (usually the URL)
 */
export const recordRequest = (key: string): void => {
  requestTracker.set(key, Date.now())
}

/**
 * Wait until we can make a request
 * @param key Unique identifier (usually the URL)
 */
export const waitUntilCanRequest = async (key: string): Promise<void> => {
  while (!canMakeRequest(key)) {
    const lastRequestTime = requestTracker.get(key)!
    const timeToWait = MIN_DELAY_MS - (Date.now() - lastRequestTime)
    await new Promise((resolve) => setTimeout(resolve, Math.max(0, timeToWait)))
  }
}

/**
 * Simple in-memory cache with TTL
 */
const cache = new Map<string, { data: unknown; expiresAt: number }>()

/**
 * Get cached value if still valid
 * @param key Cache key
 * @returns Cached data or null if expired/missing
 */
export const getCachedData = (key: string): unknown | null => {
  const cached = cache.get(key)
  if (!cached) return null

  if (Date.now() > cached.expiresAt) {
    cache.delete(key)
    return null
  }

  return cached.data
}

/**
 * Set cache with TTL
 * @param key Cache key
 * @param data Data to cache
 * @param ttlMs Time to live in milliseconds (default: 5 minutes)
 */
export const setCachedData = (key: string, data: unknown, ttlMs = 5 * 60 * 1000): void => {
  cache.set(key, {
    data,
    expiresAt: Date.now() + ttlMs,
  })
}

/**
 * Clear cache for a specific key
 */
export const clearCache = (key: string): void => {
  cache.delete(key)
}
