<script setup lang="ts">
import WaveComponent from '@/components/common/style/WaveComponent.vue'
import FAQComponent from '@/components/home/FAQComponent.vue'
import HomeServices from '@/components/home/HomeServices.vue'
import TopHero from '@/components/home/TopHero.vue'
</script>

<template>
  <div>
    <TopHero />
    <WaveComponent color="var(--color-secondary)" rotate></WaveComponent>
    <HomeServices />
    <WaveComponent color="var(--color-secondary)"></WaveComponent>
    <FAQComponent />
  </div>
</template>

<style scoped></style>
