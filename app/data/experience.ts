export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "TastyDrop",
    role: "Frontend Tech Lead & Senior Go Engineer",
    period: "September 2023 — present",
    points: [
      "Led frontend for a high-traffic web platform with real-time features",
      "Image processing microservice (Go + Kubernetes): 1000 RPS, 150–200 ms latency",
      "Reduced image file sizes by 70% (libvips, WebP/AVIF), eliminated CDN dependency",
      "S3-based caching layer, Kubernetes deployment with horizontal auto-scaling (10x traffic spikes)",
      "Scaled to 700+ concurrent users per pod without performance degradation",
      "API optimization: 25 → 150 RPS (6x), potential for 500+ RPS",
      "Page load time: 12s → 2s via code-splitting, lazy loading, and refactoring",
      "Pinia for complex user flows, 10+ simultaneous animations without frame drops",
    ],
    tech: [
      "Go",
      "libvips",
      "Kubernetes",
      "AWS S3",
      "Nuxt 3",
      "Vue 3",
      "Pinia",
      "TypeScript",
      "Centrifuge",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    company: "Vtargete",
    role: "Middle Frontend Engineer",
    period: "November 2022 — March 2024",
    points: [
      "High-load analytics platform: 50M+ events per day",
      "Real-time dashboard with sub-200 ms data refresh (Server-Sent Events)",
      "SSR with Nuxt.js: 60% improvement in time-to-interactive",
      "Design system: 50+ reusable components (Storybook)",
      "50% reduction in production bugs through code review process",
    ],
    tech: ["Nuxt 3", "Vue 3", "Node.js", "Redis", "PostgreSQL", "Docker"],
  },
  {
    company: "Alef Development",
    role: "Junior+ Fullstack Engineer",
    period: "August 2019 — June 2022",
    points: [
      "10+ web applications for e-commerce, fintech, and SaaS clients",
      "E-commerce platform handling 10K+ daily transactions",
      "Desktop CRM (Electron.js) deployed to 500+ users",
      "Automated client onboarding: setup time from 2 weeks to 3 days",
      "Migrated legacy jQuery codebase to Vue.js: 60% performance improvement",
    ],
    tech: ["Vue 3", "Node.js", "Electron.js", "MySQL", "Docker"],
  },
  {
    company: "ActiveWizards",
    role: "Junior Fullstack Developer",
    period: "October 2018 — March 2019",
    points: [
      "Reactive web applications and admin panels with Vue.js",
      "Cryptocurrency trading platform features with real-time data integration",
      "Administrative panels for data management",
      "Backend development with Node.js",
    ],
    tech: ["Vue 3", "Node.js", "JavaScript"],
  },
  {
    company: "First commercial role",
    role: "Frontend Developer",
    period: "September 2018 — October 2018",
    points: [
      "First commercial experience building web application UIs",
      "Vue.js in production, deep dive into JavaScript fundamentals",
      "UI/UX development for web applications",
    ],
    tech: ["Vue 3", "JavaScript", "HTML/CSS"],
  },
];
