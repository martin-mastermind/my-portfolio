<script setup lang="ts">
const appConfig = useAppConfig()
const site = appConfig.site ?? {}
const { $getGsap: getGsap } = useNuxtApp()
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

onMounted(async () => {
  if (reducedMotion.value || !sectionRef.value || !titleRef.value || !contentRef.value) return
  const { gsap } = await getGsap()
  gsap.fromTo(titleRef.value, { y: 20, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.45,
    ease: 'back.out(1.2)',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 85%', toggleActions: 'play none none none' },
  })
  gsap.fromTo(contentRef.value, { y: 24, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.45,
    ease: 'back.out(1.2)',
    scrollTrigger: { trigger: contentRef.value, start: 'top 90%', toggleActions: 'play none none none' },
  })
})
</script>

<template>
  <section ref="sectionRef" id="contact" class="section section-contact">
    <h2 ref="titleRef" class="section__title">Contacts</h2>
    <div ref="contentRef" class="section-contact__content">
      <div class="section-contact__left">
        <p class="section-contact__lead">
          Have an idea or question? Message me or email — I'll reply within a day.
        </p>
        <div class="section-contact__channels">
          <a
            v-for="ch in channels"
            :key="ch.label"
            :href="ch.href"
            :target="ch.href.startsWith('mailto:') ? undefined : '_blank'"
            :rel="ch.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'"
            class="section-contact__channel"
          >
            <Icon :name="ch.icon" class="section-contact__channel-icon" />
            <span>{{ ch.label }}</span>
          </a>
        </div>
      </div>
      <div class="section-contact__form-wrap">
        <h3 class="section-contact__form-title">Or send a message</h3>
        <UiContactForm />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-contact__content {
  display: grid;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

@media (min-width: 640px) {
  .section-contact__content {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.section-contact__lead {
  margin: 0 0 1rem;
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 36rem;
}

.section-contact__channels {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .section-contact__channels {
    grid-template-columns: 1fr;
  }
}

.section-contact__channel {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--color-surface);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  min-height: 56px;
  box-sizing: border-box;
  transition: border-color var(--duration-fast) var(--ease-out-snappy), box-shadow var(--duration-normal) var(--ease-bounce), color var(--duration-fast) var(--ease-out-snappy), transform var(--duration-fast) var(--ease-out-snappy);
}

.section-contact__channel:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-card-hover);
  color: var(--color-accent);
  text-decoration: none;
}

.section-contact__channel:active {
  transform: scale(0.98);
  box-shadow: var(--shadow-card);
}

.section-contact__channel-icon {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-text-muted);
  transition: color var(--duration-fast) var(--ease-out-snappy);
}

.section-contact__channel:hover .section-contact__channel-icon {
  color: var(--color-accent);
}

.section-contact__form-wrap {
  padding: 1.5rem;
  background: var(--color-surface);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
}

.section-contact__form-title {
  margin: 0 0 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}
</style>
