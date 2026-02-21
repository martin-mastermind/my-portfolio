<script setup lang="ts">
import { projects } from '~/data/project'
const { $getGsap: getGsap } = useNuxtApp()
const reducedMotion = useReducedMotion()
const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (reducedMotion.value || !sectionRef.value || !titleRef.value || !cardsRef.value) return
  const { gsap } = await getGsap()
  const cards = cardsRef.value.querySelectorAll('.project-card')
  gsap.fromTo(titleRef.value, { y: 20, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.45,
    ease: 'back.out(1.2)',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 85%', toggleActions: 'play none none none' },
  })
  gsap.fromTo(cards, { y: 28, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 0.45,
    stagger: 0.07,
    ease: 'back.out(1.2)',
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
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card__link"
        >
          Open
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section-project__cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-block);
}

.project-card {
  padding: 1.25rem var(--space-block);
  background: var(--color-surface);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  transition: border-color var(--duration-fast) var(--ease-out-snappy), box-shadow var(--duration-normal) var(--ease-bounce), transform var(--duration-normal) var(--ease-bounce);
}

.project-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-3px);
}

.project-card__title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
}

.project-card__description,
.project-card__metric {
  margin: 0 0 1rem;
  color: var(--color-text-muted);
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
}

.tech-tag {
  padding: 0.25rem 0.6rem;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  background: var(--color-tech-bg);
  border-radius: 9999px;
  border: 1px solid var(--color-border);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.6rem 1.2rem;
  font: inherit;
  font-size: 16px;
  font-weight: 500;
  color: #18181b;
  background: var(--color-accent);
  border: none;
  border-radius: var(--radius);
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--duration-fast) var(--ease-out-snappy), transform var(--duration-normal) var(--ease-bounce);
}

.project-card__link:hover {
  background: var(--color-accent-hover);
  color: #18181b;
  text-decoration: none;
}

.project-card__link:active {
  transform: scale(0.94);
}
</style>
