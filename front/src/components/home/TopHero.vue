<script setup lang="ts"></script>

<template>
  <div class="p-8 md:p-6 sm:p-4 min-h-[500px] md:min-h-auto">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center">
      <div class="flex flex-col justify-center p-8 md:p-4">
        <h1
          class="mb-6 text-4xl md:text-3xl sm:text-2xl text-[var(--color-primary)] font-bold leading-tight"
        >
          Voix Lactée
        </h1>
        <p
          class="text-lg md:text-base sm:text-sm text-[var(--color-text)] leading-relaxed font-medium"
        >
          Bienvenue dans cet espace dédié à la parentalité et au lien avec votre bébé. Je vous
          accompagne avec douceur et bienveillance à chaque étape, pour que ces premiers moments de
          vie soient sereins, précieux et remplis de connexion.
        </p>
      </div>
      <div
        class="hero-crop w-full overflow-hidden rounded-lg shadow-lg h-[280px] md:h-[350px] lg:h-[500px]"
      >
        <img
          src="@/assets/images/portage_bebe.jpg"
          alt="Bébé portage"
          class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
