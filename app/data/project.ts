export interface ProjectCase {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  metric?: string;
}

export const projects: ProjectCase[] = [
  {
    title: "Image Processing Microservice (TastyDrop)",
    description:
      "Go microservice on Kubernetes: 1000 RPS at 150–200 ms latency. WebP/AVIF conversion via libvips — 70% image size reduction, CDN eliminated. S3 caching, auto-scaling for 10x traffic spikes.",
    stack: [
      "Go",
      "libvips",
      "Kubernetes",
      "AWS S3",
      "Nuxt 3",
      "Vue 3",
      "Pinia",
      "TypeScript",
    ],
    metric: "1000 RPS, −70% image size",
  },
  {
    title: "Telegram Mini App — Social Rewards Platform on TON",
    description:
      "Social mini-app in Telegram: users earn points via social interactions, open cases, compete on leaderboards, and redeem rewards for TON cryptocurrency. Full TON integration: wallet deposits/withdrawals, on-chain transaction verification, balance management.",
    stack: ["Vue 3", "Nuxt 3", "Go", "TON", "Telegram Mini Apps", "Docker"],
    link: "https://t.me/ifnode",
    metric: "700–900 DAU",
  },
];
