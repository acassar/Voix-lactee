<script setup lang="ts">
defineProps<{
  title?: string
  message: string
}>()
</script>

<template>
  <div class="border-l-4 border-l-[#d9534f] bg-[#f9f0ee] p-4 md:p-5 rounded-lg shadow-sm">
    <!-- Title -->
    <p v-if="title" class="text-[#d9534f] font-semibold m-0 mb-2">{{ title }}</p>
    <!-- Message -->
    <p class="text-[#8a3933] text-sm leading-relaxed m-0">{{ message }}</p>
  </div>
</template>

<style scoped></style>
