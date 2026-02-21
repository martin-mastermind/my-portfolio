<script setup lang="ts">
const appConfig = useAppConfig()
const site = appConfig.site ?? {}
</script>

<template>
  <section id="contact" class="section section-contact">
    <h2 class="section__title">Contact</h2>
    <div class="section-contact__content">
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
