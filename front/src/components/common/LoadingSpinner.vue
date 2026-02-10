<script setup lang="ts">
defineProps<{
  message?: string
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div class="flex justify-center py-16 md:py-12">
    <div class="flex flex-col items-center gap-6">
      <!-- Spinner with primary color -->
      <div class="relative">
        <div
          class="animate-spin rounded-full border-4 border-[var(--color-background)] border-t-[var(--color-primary)] border-r-[var(--color-primary)]"
          :class="{
            'h-12 w-12': size === 'sm' || !size,
            'h-16 w-16': size === 'md',
            'h-20 w-20': size === 'lg',
          }"
        ></div>
      </div>

      <!-- Message text -->
      <p class="text-[var(--color-primary)] font-semibold text-base md:text-sm">
        {{ message || 'Chargement...' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse-opacity {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
