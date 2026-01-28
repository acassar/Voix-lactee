import { fetcher } from '@/lib/api/Fetcher'

const FAQ_API_ENDPOINT = '/faq-items'

export type FAQItem = {
  title: string
  content: string
}

export const FAQFetcher = {
  fetchFAQs: async () => {
    const response = await fetcher.get(FAQ_API_ENDPOINT)
    return response.json()
  },
}
