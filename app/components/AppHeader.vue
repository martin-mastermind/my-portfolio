<script setup lang="ts">
const appConfig = useAppConfig()
const siteName = appConfig.site?.name ?? 'Portfolio'
const menuOpen = ref(false)
const theme = useTheme()

onMounted(() => {
  theme.init()
})

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
    <div class="app-header__actions">
      <button
        type="button"
        class="app-header__theme-btn"
        aria-label="Переключить тему"
        @click="theme.toggle()"
      >
        <Icon v-if="theme.effective === 'dark'" name="heroicons:sun-solid" class="app-header__theme-icon" />
        <Icon v-else name="heroicons:moon-solid" class="app-header__theme-icon" />
      </button>
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
    </div>
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
