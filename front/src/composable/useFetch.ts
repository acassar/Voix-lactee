import type { StrapiResponse } from '@/lib/api/Fetcher.type'
import { ref } from 'vue'

export function useFetch<T>() {
  const data = ref<StrapiResponse<T> | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref<boolean>(false)

  async function fetch(fetcherFunction: () => Promise<StrapiResponse<T>>) {
    loading.value = true
    try {
      const response = await fetcherFunction()
      data.value = response
    } catch (err) {
      error.value = err as Error
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
