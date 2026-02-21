<script setup lang="ts">
const appConfig = useAppConfig()
const siteName = appConfig.site?.name ?? 'Portfolio'
const menuOpen = ref(false)

const anchors = [
  { href: '#hero', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Project' },
  { href: '#contact', label: 'Contact' }
]

function scrollToAnchor(e: Event, href: string) {
  if (href.startsWith('#')) {
    e.preventDefault()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
    menuOpen.value = false
  }
}
</script>

<template>
  <header class="app-header">
    <NuxtLink to="/" class="app-header__logo">
      {{ siteName }}
    </NuxtLink>
    <button
      type="button"
      class="app-header__burger"
      aria-label="Menu"
      aria-expanded="menuOpen"
      @click="menuOpen = !menuOpen"
    >
      <span class="app-header__burger-bar" />
      <span class="app-header__burger-bar" />
      <span class="app-header__burger-bar" />
    </button>
    <nav class="app-header__nav" :class="{ 'app-header__nav_open': menuOpen }">
      <a
        v-for="a in anchors"
        :key="a.href"
        :href="a.href"
        class="app-header__link"
        @click="(e) => scrollToAnchor(e, a.href)"
      >
        {{ a.label }}
      </a>
    </nav>
  </header>
</template>
