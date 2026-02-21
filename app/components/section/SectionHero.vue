<script setup lang="ts">
const appConfig = useAppConfig()
const tagline = appConfig.site?.tagline ?? 'Go + Nuxt'
const { $gsap: gsap } = useNuxtApp()
const reducedMotion = useReducedMotion()

const heroTitle = ref<HTMLElement | null>(null)
const heroLead = ref<HTMLElement | null>(null)
const heroCta = ref<HTMLElement | null>(null)

onMounted(() => {
  if (reducedMotion.value) return
  const els = [heroTitle.value, heroLead.value, heroCta.value].filter(Boolean) as HTMLElement[]
  if (els.length === 0) return
  gsap.fromTo(els, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out' })
})
</script>

<template>
  <section id="hero" class="section section-hero">
    <div class="section-hero__inner">
      <h1 ref="heroTitle" class="section-hero__title">
        Hi, I'm {{ appConfig.site?.name ?? 'a developer' }}
      </h1>
      <p ref="heroLead" class="section-hero__lead">
        {{ tagline }}
      </p>
      <span ref="heroCta">
        <AppLink to="#experience" class="section-hero__cta">
          View experience
        </AppLink>
      </span>
    </div>
  </section>
</template>
