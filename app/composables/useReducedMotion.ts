export function useReducedMotion() {
  const reduced = ref(false)
  onMounted(() => {
    reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  return reduced
}