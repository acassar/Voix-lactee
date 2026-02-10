<script setup lang="ts">
import WaveComponent from '@/components/common/style/WaveComponent.vue'
import FAQComponent from '@/components/home/FAQComponent.vue'
import HomeServices from '@/components/home/HomeServices.vue'
import TopHero from '@/components/home/TopHero.vue'
import ContactForm from '@/components/home/ContactForm.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<template>
  <div class="home-page">
    <TopHero />
    <WaveComponent color="var(--color-secondary)" rotate></WaveComponent>
    <HomeServices />
    <WaveComponent color="var(--color-secondary)"></WaveComponent>
    <div class="faq-section">
      <FAQComponent />
    </div>
    <!-- <WaveComponent color="var(--color-secondary)" rotate></WaveComponent>
    <WaveComponent color="var(--color-secondary)"></WaveComponent> -->
    <ContactForm />
    <Footer />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.faq-section {
  background-color: var(--color-background);
  padding: 2rem 0;
  flex: 1;
}
</style>
