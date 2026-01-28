import { fetcher } from '@/lib/api/Fetcher'
import type { StrapiResponse } from '@/lib/api/Fetcher.type'

const SERVICES_API_ENDPOINT = '/services'

export type Service = {
  title: string
  content: string
}

export const ServicesFetcher = {
  fetchServices: async (): Promise<StrapiResponse<Service[]>> => {
    const response = await fetcher.get(SERVICES_API_ENDPOINT)
    return response.json()
  },
}
