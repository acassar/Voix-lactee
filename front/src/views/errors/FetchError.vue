<script setup lang="ts">
const handleRefresh = () => {
  window.location.reload()
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-full min-h-screen bg-[var(--color-background)] px-4"
  >
    <div class="text-center max-w-2xl">
      <div class="mb-8">
        <span class="text-8xl md:text-9xl font-bold text-[var(--color-secondary)] opacity-20"
          >⚠</span
        >
      </div>
      <h1 class="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
        {{ $t('error.fetch_error_title') }}
      </h1>
      <p class="text-lg md:text-xl text-[var(--color-text)] mb-4 leading-relaxed">
        {{ $t('error.fetch_error_description') }}
      </p>
      <p class="text-base text-[var(--color-text)]/70 mb-8">
        {{ $t('error.fetch_error_help') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="handleRefresh"
          class="px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          {{ $t('error.refresh_page') }}
        </button>
        <router-link
          to="/"
          class="px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)]/10 transition"
        >
          {{ $t('error.back_home') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
