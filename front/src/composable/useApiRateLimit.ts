/**
 * Composable for handling API rate limiting in Vue components
 */

import { ref, computed } from 'vue'
import { canMakeRequest, waitUntilCanRequest, recordRequest } from '@/lib/api/RateLimit'

export const useApiRateLimit = (endpointKey: string) => {
  const isRateLimited = ref(false)
  const secondsToWait = ref(0)

  const checkAndWait = async () => {
    if (!canMakeRequest(endpointKey)) {
      isRateLimited.value = true

      const checkInterval = setInterval(() => {
        if (canMakeRequest(endpointKey)) {
          isRateLimited.value = false
          secondsToWait.value = 0
          clearInterval(checkInterval)
        } else {
          secondsToWait.value = Math.ceil(1) // Show countdown if needed
        }
      }, 100)
    }

    await waitUntilCanRequest(endpointKey)
    recordRequest(endpointKey)
  }

  return {
    isRateLimited: computed(() => isRateLimited.value),
    secondsToWait: computed(() => secondsToWait.value),
    checkAndWait,
  }
}
