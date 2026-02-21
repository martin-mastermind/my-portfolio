<script setup lang="ts">
import { experience } from '~/data/experience'
</script>

<template>
  <section id="experience" class="section section-experience">
    <h2 class="section__title">Experience</h2>
    <div class="section-experience__grid">
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
