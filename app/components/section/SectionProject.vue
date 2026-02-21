<script setup lang="ts">
import { projects } from '~/data/project'
const { $gsap: gsap } = useNuxtApp()
const reducedMotion = useReducedMotion()
const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (reducedMotion.value || !sectionRef.value || !titleRef.value || !cardsRef.value) return
  const cards = cardsRef.value.querySelectorAll('.project-card')
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
    scrollTrigger: { trigger: cardsRef.value, start: 'top 88%', toggleActions: 'play none none none' },
  })
})
</script>

<template>
  <section ref="sectionRef" id="project" class="section section-project">
    <h2 ref="titleRef" class="section__title">Projects</h2>
    <div ref="cardsRef" class="section-project__cards">
      <article
        v-for="(project, i) in projects"
        :key="i"
        class="project-card"
      >
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p class="project-card__description">{{ project.description }}</p>
        <p v-if="project.metric" class="project-card__metric">
          {{ project.metric }}
        </p>
        <ul class="project-card__stack">
          <li v-for="(s, j) in project.stack" :key="j" class="tech-tag">
            {{ s }}
          </li>
        </ul>
        <AppLink
          v-if="project.link"
          :to="project.link"
          external
          class="project-card__link"
        >
          Open
        </AppLink>
      </article>
    </div>
  </section>
</template>
