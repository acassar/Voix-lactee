<script setup lang="ts">
defineProps<{
  title?: string
  content?: string
}>()
</script>

<template>
  <div class="card p-4 m-4 border rounded-[12px] shadow">
    <div>
      <h2 class="card-title" v-if="title">{{ title }}</h2>
      <slot name="title"></slot>
    </div>
    <div>
      <p v-if="content">{{ content }}</p>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  /* background-color: var(--color-background); */
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
