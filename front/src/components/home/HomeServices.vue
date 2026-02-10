<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CardComponent from '../common/CardComponent.vue'
import LoadingSpinner from '../common/LoadingSpinner.vue'
import ErrorAlert from '../common/ErrorAlert.vue'
import { ServicesFetcher, type Service } from '@/services/api/services/ServicesFetcher'
import { useFetch } from '@/composable/useFetch'

const services = ref<[string, string][]>()
const { data, error, loading, fetch } = useFetch<Service[]>()

onMounted(() => {
  loadServices()
})

async function loadServices() {
  await fetch(ServicesFetcher.fetchServices)
  services.value = data.value?.data?.map((e) => [e.title, e.content])
}
</script>

<template>
  <div
    class="bg-[var(--color-secondary)] p-12 md:p-8 sm:p-6 min-h-[550px] md:min-h-auto flex items-center"
  >
    <div class="max-w-6xl mx-auto w-full">
      <div class="flex flex-col items-center mb-12">
        <h2 class="text-3xl md:text-2xl sm:text-xl text-white font-bold text-center m-0">
          {{ $t('services.title') }}
        </h2>
        <div class="w-24 h-1 bg-[var(--color-primary)] rounded mt-4"></div>
      </div>

      <!-- Loading State -->
      <LoadingSpinner v-if="loading" />

      <!-- Error State -->
      <ErrorAlert
        v-else-if="error"
        title="Erreur lors du chargement des services"
        :message="error"
      />

      <!-- Services List -->
      <div v-else class="flex flex-wrap justify-center gap-8 md:gap-6 sm:gap-4">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="w-[280px] flex justify-center"
        >
          <CardComponent :title="service[0]" :content="service[1]" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
