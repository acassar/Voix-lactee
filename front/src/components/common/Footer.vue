<script setup lang="ts"></script>

<template>
  <footer class="bg-[var(--color-text)] text-white py-8 md:py-6">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        <!-- Brand / Title -->
        <div class="text-center md:text-left">
          <p class="text-sm font-semibold">{{ $t('app.name') || 'Voix Lactée' }}</p>
        </div>

        <!-- Contact Info -->
        <div class="text-center text-xs opacity-80">
          <p>{{ $t('footer.contact_admin') }} | {{ $t('footer.question') }}</p>
        </div>

        <!-- Copyright -->
        <div class="text-center md:text-right text-xs opacity-60">
          <p>&copy; {{ new Date().getFullYear() }} Voix Lactée. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
