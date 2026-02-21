<script setup lang="ts">
const props = defineProps<{
  to: string
  external?: boolean
}>()
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
  <NuxtLink
    v-else
    :to="props.to"
    class="app-link"
  >
    <slot />
  </NuxtLink>
</template>
