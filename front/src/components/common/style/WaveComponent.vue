<script setup lang="ts">
const props = defineProps<{
  color: string
  rotate?: boolean
}>()
</script>

<template>
  <div class="wave" v-bind="props">
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
      <path
        d="M0,40 C120,80 320,0 520,20 720,40 920,80 1120,50 1320,20 1440,40 1440,40 L1440,0 L0,0 Z"
        :fill="color"
      />
    </svg>
  </div>
</template>

<style scoped>
.wave > svg {
  display: block;
  width: 100%;
}

.wave[rotate='true'] {
  transform: rotate(180deg);
  margin: -1px 0;
}
</style>
