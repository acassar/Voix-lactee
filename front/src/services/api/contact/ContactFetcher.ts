import { fetcher } from '@/lib/api/Fetcher'
import type { StrapiResponse } from '@/lib/api/Fetcher.type'

const CONTACTS_API_ENDPOINT = '/contacts'

export type ContactPayload = {
  name: string
  email: string
  phone?: string | null
  message: string
}

export type Contact = ContactPayload & {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
}

export const ContactFetcher = {
  submitContact: async (data: ContactPayload): Promise<StrapiResponse<Contact>> => {
    const response = await fetcher.post(CONTACTS_API_ENDPOINT, {
      data,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      const serverMessage = errorData?.error?.message || errorData?.message

      if (response.status === 429) {
        throw new Error('Trop de requêtes. Veuillez patienter quelques minutes.')
      } else if (serverMessage) {
        throw new Error(serverMessage)
      }
      throw new Error("Erreur lors de l'envoi du formulaire.")
    }

    return response.json()
  },
}
