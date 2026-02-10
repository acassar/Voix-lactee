<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import FormField from '../common/FormField.vue'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api'

    const response = await fetch(`${API_URL}/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          message: form.message,
        },
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }

    // Success: reset form and show message
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
    successMessage.value = t('contact.success')
  } catch (error) {
    errorMessage.value = t('contact.error')
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="py-16 md:py-24 px-4 md:px-8">
    <div class="max-w-2xl mx-auto">
      <!-- Title -->
      <div class="flex flex-col items-center mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
          {{ $t('contact.title') }}
        </h2>
        <div class="w-24 h-1 bg-[var(--color-primary)] rounded my-4"></div>
        <p class="text-lg text-[var(--color-text)] opacity-80 mt-4">
          {{ $t('contact.description') }}
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="space-y-6">
        <FormField
          id="name"
          v-model="form.name"
          :label="$t('contact.name')"
          :placeholder="$t('contact.name_placeholder')"
          required
        />

        <FormField
          id="email"
          v-model="form.email"
          type="email"
          :label="$t('contact.email')"
          :placeholder="$t('contact.email_placeholder')"
          required
        />

        <FormField
          id="phone"
          v-model="form.phone"
          type="tel"
          :label="$t('contact.phone')"
          :optional-label="$t('contact.optional')"
          :placeholder="$t('contact.phone_placeholder')"
        />

        <FormField
          id="message"
          v-model="form.message"
          :label="$t('contact.message')"
          :placeholder="$t('contact.message_placeholder')"
          :is-area="true"
          :rows="5"
          required
        />

        <!-- Submit Button -->
        <div class="pt-4">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {{ isSubmitting ? $t('contact.submitting') : $t('contact.submit') }}
          </button>
        </div>

        <!-- Success Message -->
        <div
          v-if="successMessage"
          class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
        >
          {{ successMessage }}
        </div>

        <!-- Error Message -->
        <div
          v-if="errorMessage"
          class="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
        >
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </section>
</template>
