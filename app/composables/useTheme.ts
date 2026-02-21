export type ThemeMode = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'portfolio-theme'

function getSystemTheme(): 'light' | 'dark' {
  if (import.meta.client && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function applyTheme(value: 'light' | 'dark') {
  if (import.meta.client) {
    document.documentElement.setAttribute('data-theme', value)
  }
}

export function useTheme() {
  const mode = ref<ThemeMode>('system')
  const effective = computed<'light' | 'dark'>(() => {
    if (mode.value === 'system') return getSystemTheme()
    return mode.value
  })

  function init() {
    if (import.meta.server) return
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      mode.value = stored
    } else {
      mode.value = 'system'
    }
  }

  function setTheme(value: ThemeMode) {
    mode.value = value
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, value)
      applyTheme(effective.value)
    }
  }

  function toggle() {
    const next: ThemeMode = effective.value === 'dark' ? 'light' : 'dark'
    setTheme(next)
  }

  if (import.meta.client) {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', () => {
      if (mode.value === 'system') applyTheme(getSystemTheme())
    })
  }

  return { mode, effective, setTheme, toggle, init }
}
