const STORAGE_KEY = 'portfolio-theme'

function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  let theme: 'light' | 'dark'
  if (stored === 'dark' || stored === 'light') {
    theme = stored
  } else {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  document.documentElement.setAttribute('data-theme', theme)
}

export default defineNuxtPlugin(() => {
  initTheme()
})
