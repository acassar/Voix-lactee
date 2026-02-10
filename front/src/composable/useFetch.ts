import type { StrapiResponse } from '@/lib/api/Fetcher.type'
import { ref } from 'vue'

export function useFetch<T>() {
  const data = ref<StrapiResponse<T> | null>(null)
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)

  async function fetch(fetcherFunction: () => Promise<StrapiResponse<T>>) {
    loading.value = true
    error.value = null
    try {
      const response = await fetcherFunction()
      data.value = response
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue'
      error.value = errorMessage
      console.error('[useFetch] Error:', errorMessage, err)
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    fetch,
  }
}
