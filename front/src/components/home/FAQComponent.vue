<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ExpansionPanel from '../common/ExpansionPanel.vue'
import LoadingSpinner from '../common/LoadingSpinner.vue'
import ErrorAlert from '../common/ErrorAlert.vue'
import { FAQFetcher, type FAQItem } from '@/services/api/faq/FAQFetcher'
import { useFetch } from '@/composable/useFetch'

const questions = ref<[string, string][]>()
const { data, error, loading, fetch } = useFetch<FAQItem[]>()

onMounted(() => {
  loadFAQs()
})

async function loadFAQs() {
  await fetch(FAQFetcher.fetchFAQs)
  questions.value = data.value?.data?.map((e) => [e.title, e.content])
}
</script>

<template>
  <div class="bg-[var(--color-background)] p-12 md:p-8 sm:p-6">
    <div class="max-w-3xl mx-auto">
      <div class="flex flex-col items-center mb-12">
        <h2
          class="text-3xl md:text-2xl sm:text-xl text-[var(--color-primary)] font-bold text-center m-0"
        >
          {{ $t('faq.title') }}
        </h2>
        <div class="w-24 h-1 bg-[var(--color-primary)] rounded mt-4"></div>
      </div>

      <!-- Loading State -->
      <LoadingSpinner v-if="loading" />

      <!-- Error State -->
      <ErrorAlert v-else-if="error" title="Erreur lors du chargement des FAQ" :message="error" />

      <!-- FAQ List -->
      <div v-else class="flex flex-col gap-4 md:gap-3">
        <ExpansionPanel
          class="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          v-for="question in questions"
          :key="question[0]"
        >
          <template #title>
            <h4
              class="text-[var(--color-primary)] font-semibold m-0 p-4 md:p-3 md:text-base sm:text-sm"
            >
              {{ question[0] }}
            </h4>
          </template>
          <template #content>
            <p
              class="text-[var(--color-text)] leading-relaxed p-0 px-4 pb-4 md:px-3 md:pb-3 sm:text-sm m-0"
            >
              {{ question[1] }}
            </p>
          </template>
        </ExpansionPanel>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
