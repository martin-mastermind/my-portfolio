<script setup lang="ts">
const menuOpen = ref(false)
const colorMode = useColorMode()

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

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="app-header">
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
    <div class="app-header__actions">
      <button
        type="button"
        class="app-header__theme-btn"
        aria-label="Переключить тему"
        @click="toggleTheme"
      >
        <Icon v-if="colorMode.value === 'dark'" name="heroicons:sun-solid" class="app-header__theme-icon" />
        <Icon v-else name="heroicons:moon-solid" class="app-header__theme-icon" />
      </button>
      <button
        type="button"
        class="app-header__burger"
        aria-label="Menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span class="app-header__burger-bar" />
        <span class="app-header__burger-bar" />
        <span class="app-header__burger-bar" />
      </button>
    </div>
  </header>
</template>
