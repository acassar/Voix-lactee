<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title?: string
  content?: string
}>()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="card p-4 m-4 border rounded-[12px] shadow">
    <div class="cursor-pointer flex justify-between items-center" @click="toggle">
      <div>
        <h2 class="card-title" v-if="title">{{ title }}</h2>
        <slot class="panel-title" name="title"></slot>
      </div>
      <span class="transition-transform duration-300" :class="{ 'rotate-180': isOpen }">▼</span>
    </div>
    <div
      class="overflow-hidden transition-all duration-300"
      :class="{ 'max-h-0': !isOpen, 'max-h-96': isOpen }"
    >
      <div class="mt-4">
        <p v-if="content">{{ content }}</p>
        <slot class="panel-content" name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  border: 1px solid var(--color-primary);
  padding: var(--spacing-base);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}
</style>
