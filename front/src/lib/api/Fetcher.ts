import { waitUntilCanRequest, recordRequest, getCachedData, setCachedData } from './RateLimit'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api'

console.log('[Fetcher] API Base URL:', API_BASE_URL)

export interface Fetcher {
  get: (url: string, options?: RequestInit & { cache?: boolean }) => Promise<Response>
  post: (url: string, body?: Record<string, unknown>, options?: RequestInit) => Promise<Response>
}

export const fetcher: Fetcher = {
  get: async (url: string, options: RequestInit & { cache?: boolean } = {}) => {
    const fullUrl = `${API_BASE_URL}${url}`
    const { cache: useCache = true, ...fetchOptions } = options

    // Check cache first
    if (useCache) {
      const cached = getCachedData(fullUrl)
      if (cached) {
        const response = new Response(JSON.stringify(cached), {
          status: 200,
          headers: { 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
        })
        return response
      }
    }

    // Apply rate limiting
    await waitUntilCanRequest(fullUrl)
    recordRequest(fullUrl)

    const response = await fetch(fullUrl, {
      method: 'GET',
      ...fetchOptions,
    })

    // Cache successful responses
    if (useCache && response.ok) {
      const data = await response.clone().json()
      setCachedData(fullUrl, data)
    }

    return response
  },

  post: async (url: string, body: Record<string, unknown> = {}, options: RequestInit = {}) => {
    const fullUrl = `${API_BASE_URL}${url}`

    // Apply rate limiting (stricter for POST)
    await waitUntilCanRequest(fullUrl)
    recordRequest(fullUrl)

    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(body),
      ...options,
    })

    return response
  },
}
