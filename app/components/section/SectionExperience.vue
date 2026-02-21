<script setup lang="ts">
import { experience } from '~/data/experience'
const { $getGsap: getGsap } = useNuxtApp()
const reducedMotion = useReducedMotion()
const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (reducedMotion.value || !sectionRef.value || !titleRef.value || !gridRef.value) return
  const { gsap } = await getGsap()
  const cards = gridRef.value.querySelectorAll('.experience-card')
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

<style scoped>
.section-experience__grid {
  display: grid;
  gap: var(--space-block);
}

.experience-card {
  padding: 1.25rem var(--space-block);
  background: var(--color-surface);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  transition: border-color var(--duration-fast) var(--ease-out-snappy), box-shadow var(--duration-normal) var(--ease-bounce), transform var(--duration-normal) var(--ease-bounce);
}

.experience-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-3px);
}

.experience-card__header {
  margin-bottom: 1rem;
}

.experience-card__company {
  margin: 0 0 0.25rem;
  font-size: 1.125rem;
}

.experience-card__role,
.experience-card__period {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.experience-card__points {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
}

.experience-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
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
</style>
