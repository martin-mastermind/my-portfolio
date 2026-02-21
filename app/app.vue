<script setup lang="ts">
const config = useAppConfig();
const baseURL = useRuntimeConfig().app.baseURL;
const requestURL = useRequestURL();
const ogImage = computed(() => `${requestURL.origin}${baseURL}og.png`);

useSeoMeta({
  ogTitle: `${config.site.name} — Senior Fullstack Engineer`,
  ogDescription: config.site.tagline,
  ogImage: ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image",
  twitterImage: ogImage,
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage />
  </div>
</template>
