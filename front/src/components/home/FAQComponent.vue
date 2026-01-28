<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ExpansionPanel from '../common/ExpansionPanel.vue'
import { FAQFetcher, type FAQItem } from '@/services/api/faq/FAQFetcher'
import { useFetch } from '@/composable/useFetch'

const questions = ref<[string, string][]>()
const { data, fetch } = useFetch<FAQItem[]>()

onMounted(() => {
  loadFAQs()
})

async function loadFAQs() {
  await fetch(FAQFetcher.fetchFAQs)
  questions.value = data.value?.data?.map((e) => [e.title, e.content])
}
</script>

<template>
  <div class="mx-20 py-20 xl:px-80 lg:px-40 flex-col justify-items-center">
    <h2>Questions fréquentes</h2>

    <ExpansionPanel class="m-2 panel" v-for="question in questions" :key="question[0]">
      <template #title>
        <h4 class="pb-3 text-black! flex title">{{ question[0] }}</h4>
      </template>
      <template #content>
        <p>
          {{ question[1] }}
        </p>
      </template>
    </ExpansionPanel>
  </div>
</template>

<style scoped>
.panel {
  flex: 1 1 100%;
  width: 100%;
}
</style>
