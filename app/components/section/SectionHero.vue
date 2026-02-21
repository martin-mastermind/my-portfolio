<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <section id="hero" class="section section-hero">
    <h1 class="section-hero__title">
      Hi, I'm {{ appConfig.site?.name ?? 'a developer' }}
    </h1>
    <p class="section-hero__lead">
      7 years in development, Go + Nuxt.
    </p>
    <AppLink to="#experience" class="section-hero__cta">
      View experience
    </AppLink>
  </section>
</template>
