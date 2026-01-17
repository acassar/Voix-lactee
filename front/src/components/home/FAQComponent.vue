<script setup lang="ts">
import ExpansionPanel from '../common/ExpansionPanel.vue'
</script>

<template>
  <div class="mx-40 py-20 flex-col justify-items-center">
    <h2>Questions fréquentes</h2>
    <ExpansionPanel class="m-2">
      <template #title>
        <h4 class="pb-3 text-black!">Comment savoir si l’accompagnement est fait pour nous ?</h4>
      </template>
      <template #content>
        <p>
          Chaque famille est unique, et l’accompagnement que je propose est personnalisé et flexible
          pour s’adapter à vos besoins, votre rythme et celui de votre bébé. Le plus simple pour
          savoir si cet accompagnement vous correspond est de me contacter. Nous pourrons alors
          échanger, poser vos questions et discuter de vos attentes. L’accompagnement commence
          toujours par un dialogue ouvert, afin que vous puissiez exprimer vos attentes et vos
          besoins.
        </p>
      </template>
    </ExpansionPanel>
  </div>
</template>

<style scoped></style>
