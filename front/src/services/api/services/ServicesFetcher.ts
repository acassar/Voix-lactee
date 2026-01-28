import { fetcher } from '@/lib/api/Fetcher'

const SERVICES_API_ENDPOINT = '/services'

export const ServicesFetcher = {
  fetchServices: async () => {
    const response = await fetcher.get(SERVICES_API_ENDPOINT)
    return response.json()
  },
}
