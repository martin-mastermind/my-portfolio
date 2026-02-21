<script setup lang="ts">
const appConfig = useAppConfig()
const site = appConfig.site ?? {}
const { $gsap: gsap } = useNuxtApp()
const reducedMotion = useReducedMotion()
const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

const channels = computed(() => [
  site.email && { label: 'Email', href: `mailto:${site.email}`, icon: 'heroicons:envelope-solid' },
  site.telegram && { label: 'Telegram', href: site.telegram, icon: 'simple-icons:telegram' },
  site.linkedin && { label: 'LinkedIn', href: site.linkedin, icon: 'simple-icons:linkedin' },
  site.github && { label: 'GitHub', href: site.github, icon: 'simple-icons:github' },
].filter(Boolean) as { label: string; href: string; icon: string }[])

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
      <div class="section-contact__left">
        <p class="section-contact__lead">
          Have an idea or question? Message me or email — I'll reply within a day.
        </p>
        <div class="section-contact__channels">
          <AppLink
            v-for="ch in channels"
            :key="ch.label"
            :to="ch.href"
            external
            class="section-contact__channel"
          >
            <Icon :name="ch.icon" class="section-contact__channel-icon" />
            <span>{{ ch.label }}</span>
          </AppLink>
        </div>
      </div>
      <div class="section-contact__form-wrap">
        <h3 class="section-contact__form-title">Or send a message</h3>
        <ContactForm />
      </div>
    </div>
  </section>
</template>
