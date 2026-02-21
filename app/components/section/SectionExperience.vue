<script setup lang="ts">
import { experience } from '~/data/experience'
const { $gsap: gsap } = useNuxtApp()
const reducedMotion = useReducedMotion()
const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (reducedMotion.value || !sectionRef.value || !titleRef.value || !gridRef.value) return
  const cards = gridRef.value.querySelectorAll('.experience-card')
  gsap.fromTo(titleRef.value, { y: 20, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: { trigger: sectionRef.value, start: 'top 85%', toggleActions: 'play none none none' },
  })
  gsap.fromTo(cards, { y: 32, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: { trigger: gridRef.value, start: 'top 88%', toggleActions: 'play none none none' },
  })
})
</script>

<template>
  <section ref="sectionRef" id="experience" class="section section-experience">
    <h2 ref="titleRef" class="section__title">Experience</h2>
    <div ref="gridRef" class="section-experience__grid">
      <article
        v-for="(item, i) in experience"
        :key="i"
        class="experience-card"
      >
        <header class="experience-card__header">
          <h3 class="experience-card__company">{{ item.company }}</h3>
          <p class="experience-card__role">{{ item.role }}</p>
          <time class="experience-card__period">{{ item.period }}</time>
        </header>
        <ul class="experience-card__points">
          <li v-for="(point, j) in item.points" :key="j">
            {{ point }}
          </li>
        </ul>
        <ul class="experience-card__tech">
          <li v-for="(t, k) in item.tech" :key="k" class="tech-tag">
            {{ t }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
