let gsapPromise: Promise<{
  gsap: (typeof import("gsap"))["default"];
  ScrollTrigger: (typeof import("gsap/ScrollTrigger"))["default"];
}> | null = null;

function getGsap() {
  if (!gsapPromise) {
    gsapPromise = Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([g, st]) => {
      g.default.registerPlugin(st.default);
      return { gsap: g.default, ScrollTrigger: st.default };
    });
  }
  return gsapPromise;
}

export default defineNuxtPlugin(() => ({
  provide: {
    getGsap,
  },
}));
