<script setup lang="ts">
const appConfig = useAppConfig();
const tagline = appConfig.site?.tagline ?? "Go + Nuxt";
const { $gsap: gsap } = useNuxtApp();
const reducedMotion = useReducedMotion();

const heroTitle = ref<HTMLElement | null>(null);
const heroLead = ref<HTMLElement | null>(null);
const heroCta = ref<HTMLElement | null>(null);

onMounted(() => {
  if (reducedMotion.value) return;
  const els = [heroTitle.value, heroLead.value, heroCta.value].filter(
    Boolean,
  ) as HTMLElement[];
  if (els.length === 0) return;
  gsap.fromTo(
    els,
    { y: 24, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.2)" },
  );
});
</script>

<template>
  <section id="hero" class="section section-hero">
    <div class="section-hero__inner">
      <h1 ref="heroTitle" class="section-hero__title">
        Hi, I'm {{ appConfig.site?.name ?? "a developer" }}
      </h1>
      <p ref="heroLead" class="section-hero__lead">
        {{ tagline }}
      </p>
      <span ref="heroCta">
        <UiAppLink to="#contact" class="section-hero__cta">
          Contact me
        </UiAppLink>
      </span>
    </div>
  </section>
</template>

<style scoped>
.section-hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    rgba(0, 220, 130, 0.06) 50%,
    rgba(0, 193, 106, 0.1) 100%
  );
}

.dark .section-hero {
  background: linear-gradient(
    135deg,
    #09090b 0%,
    rgba(0, 220, 130, 0.05) 40%,
    #18181b 100%
  );
}

.section-hero__inner {
  position: relative;
  z-index: 1;
  max-width: 56rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 var(--space-block);
  box-sizing: border-box;
}

.section-hero__title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
}

.section-hero__lead {
  margin: 0 0 1.5rem;
  font-size: 1.125rem;
  color: var(--color-text-muted);
}

.section-hero__cta {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0.6rem 1.2rem;
  background: var(--color-accent);
  color: #18181b !important;
  border-radius: var(--radius);
  font-weight: 500;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: background var(--duration-fast) var(--ease-out-snappy), transform var(--duration-normal) var(--ease-bounce);
}

.section-hero__cta:hover {
  background: var(--color-accent-hover);
  color: #18181b !important;
  text-decoration: none;
}

.section-hero__cta:active {
  transform: scale(0.94);
}
</style>
