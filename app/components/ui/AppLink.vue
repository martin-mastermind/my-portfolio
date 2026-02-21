<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const route = useRoute()
const resolvedTo = computed(() => {
  if (props.to.startsWith('#')) {
    return { path: route.path, hash: props.to }
  }
  return props.to
})

function handleClick(e: MouseEvent) {
  if (props.to.startsWith('#')) {
    e.preventDefault()
    const el = document.querySelector(props.to)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <NuxtLink
    :to="resolvedTo"
    class="app-link"
    @click="handleClick"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
.app-link {
  color: var(--color-accent);
  cursor: pointer;
}

.app-link:hover {
  text-decoration: none;
}
</style>
