export interface Fetcher {
  get: (url: string, options?: RequestInit) => Promise<Response>
  post: (url: string, body?: Record<string, unknown>, options?: RequestInit) => Promise<Response>
}

export const fetcher: Fetcher = {
  get: async (url: string, options: RequestInit = {}) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
      method: 'GET',
      ...options,
    })
    return response
  },

  post: async (url: string, body: Record<string, unknown> = {}, options: RequestInit = {}) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
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
