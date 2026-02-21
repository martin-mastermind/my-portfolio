<script setup lang="ts">
const appConfig = useAppConfig()
const site = appConfig.site ?? {}
const { $gsap: gsap } = useNuxtApp()
const reducedMotion = useReducedMotion()
const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (reducedMotion.value || !sectionRef.value || !titleRef.value || !contentRef.value) return
  gsap.fromTo(titleRef.value, { y: 20, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: { trigger: sectionRef.value, start: 'top 85%', toggleActions: 'play none none none' },
  })
  gsap.fromTo(contentRef.value, { y: 24, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: { trigger: contentRef.value, start: 'top 90%', toggleActions: 'play none none none' },
  })
})
</script>

<template>
  <section ref="sectionRef" id="contact" class="section section-contact">
    <h2 ref="titleRef" class="section__title">Contact</h2>
    <div ref="contentRef" class="section-contact__content">
      <div class="section-contact__links">
        <AppLink v-if="site.email" :to="`mailto:${site.email}`" external>
          Email
        </AppLink>
        <AppLink v-if="site.telegram" :to="site.telegram" external>
          Telegram
        </AppLink>
        <AppLink v-if="site.linkedin" :to="site.linkedin" external>
          LinkedIn
        </AppLink>
        <AppLink v-if="site.github" :to="site.github" external>
          GitHub
        </AppLink>
      </div>
      <ContactForm />
    </div>
  </section>
</template>
