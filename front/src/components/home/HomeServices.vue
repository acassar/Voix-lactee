<script setup lang="ts">
import CardComponent from '../common/CardComponent.vue'
</script>

<template>
  <div class="flex-column justify-items-center p-8 bg-[var(--color-secondary)]">
    <h2 class="flex text-3xl text-white">Mes services</h2>
    <div class="flex align-center services">
      <CardComponent
        title="Portage"
        content="Apprendre à porter bébé de manière sûre et confortable pour créer un lien puissant et apaisant. et trouver les moyens de portage qui vous correspondent."
      ></CardComponent>
      <CardComponent
        title="Massage bébé"
        content=" Favoriser la détente et le bien-être de bébé en apprenant des gestes simples, dans le respect de son rythme pour renforcer le lien et soulager les petits maux de bébés."
      ></CardComponent>
      <CardComponent
        title="Bain enveloppé"
        content="Découvrir une nouvelle façon de partager un moment de détente et de connexion, dans la douceur et le respect des besoins de votre bébé."
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
