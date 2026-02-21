<script setup lang="ts">
const props = withDefaults(
  defineProps<{ message: string; type?: 'success' | 'error'; duration?: number }>(),
  { type: 'success', duration: 4000 }
)

const visible = ref(true)
let timer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

const emit = defineEmits<{ close: [] }>()

function close() {
  visible.value = false
}
</script>

<template>
  <Teleport to="body">
    <Transition name="toast" @after-leave="emit('close')">
      <div
        v-show="visible"
        class="toast"
        :class="`toast--${type}`"
        role="status"
        @click="close"
      >
        {{ message }}
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius);
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: var(--shadow-card);
  cursor: pointer;
  z-index: 100;
  max-width: min(90vw, 22rem);
}

.toast--success {
  background: var(--color-success, #16a34a);
  color: #fff;
}

.toast--error {
  background: var(--color-error, #dc2626);
  color: #fff;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.25s var(--ease-out-snappy), transform 0.25s var(--ease-out-snappy);
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}
</style>
