<script setup lang="ts">
const menuOpen = ref(false)
const colorMode = useColorMode()

const anchors = [
  { href: '#hero', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Project' },
  { href: '#contact', label: 'Contacts' }
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
        aria-label="Toggle theme"
        @click="toggleTheme"
      >
        <ClientOnly>
          <Icon v-if="colorMode.value === 'dark'" name="heroicons:sun-solid" class="app-header__theme-icon" />
          <Icon v-else name="heroicons:moon-solid" class="app-header__theme-icon" />
          <template #fallback>
            <span class="app-header__theme-icon app-header__theme-icon_placeholder" aria-hidden="true" />
          </template>
        </ClientOnly>
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

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-h);
  padding: 0 var(--space-block);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  transition: background var(--duration-normal) var(--ease-out-snappy), border-color var(--duration-normal) var(--ease-out-snappy);
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.app-header__theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  background: none;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  color: var(--color-text-muted);
  transition: color var(--duration-fast) var(--ease-out-snappy), background var(--duration-fast) var(--ease-out-snappy), transform var(--duration-fast) var(--ease-out-snappy);
}

.app-header__theme-btn:hover {
  color: var(--color-accent);
  background: var(--color-tech-bg);
}

.app-header__theme-btn:active {
  transform: scale(0.92);
}

.app-header__theme-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.app-header__theme-icon_placeholder {
  display: inline-block;
  background: currentColor;
  opacity: 0.2;
  border-radius: 50%;
}

.app-header__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease-out-snappy);
}

.app-header__burger:active {
  transform: scale(0.92);
}

.app-header__burger-bar {
  width: 22px;
  height: 2px;
  background: var(--color-text);
}

.app-header__nav {
  display: flex;
  gap: 1.5rem;
}

.app-header__link {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  transition: color var(--duration-fast) var(--ease-out-snappy);
}

.app-header__link:hover {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .app-header__actions {
    margin-left: auto;
  }

  .app-header__burger {
    display: flex;
    min-width: 44px;
    min-height: 44px;
    align-items: center;
    justify-content: center;
  }

  .app-header__nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: var(--space-block);
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    gap: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.3s var(--ease-bounce), opacity 0.25s var(--ease-out-snappy);
  }

  .app-header__nav_open {
    max-height: 20rem;
    opacity: 1;
  }

  .app-header__link {
    display: block;
    padding: 0.75rem 0;
    min-height: 44px;
    line-height: 1.4;
    box-sizing: border-box;
  }
}
</style>
