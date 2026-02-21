<script setup lang="ts">
const props = defineProps<{
  to: string
  external?: boolean
}>()

const isAnchor = computed(() => props.to.startsWith('#'))

function handleAnchorClick(e: MouseEvent) {
  if (!import.meta.client || !props.to.startsWith('#')) return
  e.preventDefault()
  const el = document.querySelector(props.to)
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <a
    v-if="props.external"
    :href="props.to"
    target="_blank"
    rel="noopener noreferrer"
    class="app-link"
  >
    <slot />
  </a>
  <a
    v-else-if="isAnchor"
    :href="props.to"
    class="app-link"
    @click="handleAnchorClick"
  >
    <slot />
  </a>
  <NuxtLink
    v-else
    :to="props.to"
    class="app-link"
  >
    <slot />
  </NuxtLink>
</template>
