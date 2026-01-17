import { fetcher } from '@/domain/api/Fetcher'

const FAQ_API_ENDPOINT = '/faq-items'

export const FAQFetcher = {
  fetchFAQs: async () => {
    const response = await fetcher.get(FAQ_API_ENDPOINT)
    return response.json()
  },
}
