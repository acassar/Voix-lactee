<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CardComponent from '../common/CardComponent.vue'
import { ServicesFetcher } from '@/services/api/services/ServicesFetcher'

const services = ref<[string, string][]>()

onMounted(() => {
  loadServices()
})

async function loadServices() {
  services.value = (await ServicesFetcher.fetchServices()).data.map((e: unknown) => [
    e.title,
    e.content,
  ])
}
</script>

<template>
  <div class="flex-column justify-items-center p-8 bg-[var(--color-secondary)]">
    <h2 class="flex text-3xl text-white">Mes services</h2>
    <div class="flex align-center services md:flex-row flex-col">
      <CardComponent
        v-for="(service, index) in services"
        :key="index"
        :title="service[0]"
        :content="service[1]"
      ></CardComponent>
    </div>
  </div>
</template>

<style scoped>
.services {
  margin-top: 20px;
  flex-wrap: wrap;
}

.services .card {
  flex: 1;
  margin: 10px;
}
</style>
