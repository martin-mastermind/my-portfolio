<script setup lang="ts">
import { projects } from '~/data/project'
</script>

<template>
  <section id="project" class="section section-project">
    <h2 class="section__title">Projects</h2>
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
  </section>
</template>
