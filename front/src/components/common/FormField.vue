<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    id: string
    label: string
    modelValue: string
    type?: string
    placeholder?: string
    required?: boolean
    optionalLabel?: string
    isArea?: boolean
    rows?: number
    inputClass?: string
    wrapperClass?: string
    labelClass?: string
    optionalClass?: string
  }>(),
  {
    type: 'text',
    placeholder: '',
    required: false,
    optionalLabel: '',
    isArea: false,
    rows: 5,
    inputClass: '',
    wrapperClass: '',
    labelClass: '',
    optionalClass: '',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const baseInputClass =
  'w-full px-4 py-3 border border-[var(--color-primary)] border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 transition'

const finalInputClass = computed(() => {
  const areaClass = props.isArea ? ' resize-none' : ''
  const extraClass = props.inputClass ? ` ${props.inputClass}` : ''
  return `${baseInputClass}${areaClass}${extraClass}`.trim()
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div :class="wrapperClass">
    <label
      :for="id"
      :class="['block text-sm font-semibold text-[var(--color-primary)] mb-2', labelClass]"
    >
      {{ label }}
      <span
        v-if="optionalLabel"
        :class="['text-opacity-60 text-[var(--color-text)]', optionalClass]"
      >
        ({{ optionalLabel }})
      </span>
    </label>

    <component
      :is="isArea ? 'textarea' : 'input'"
      :id="id"
      :value="modelValue"
      :type="isArea ? undefined : type"
      :rows="isArea ? rows : undefined"
      :required="required"
      :placeholder="placeholder"
      :class="finalInputClass"
      @input="handleInput"
    />
  </div>
</template>

<style scoped>
input,
textarea {
  background-color: white;
}
</style>
