export const categories = [
  {
    slug: "getting-started",
    name: "Getting Started",
    description: "Guides and resources to help you get started.",
  },
  {
    slug: "math",
    name: "Math",
    description: "Topics and tutorials related to mathematics.",
  },
  {
    slug: "reading-writing",
    name: "Reading & Writing",
    description:
      "Tips and techniques for improving reading and writing skills.",
  },
  {
    slug: "study-tips",
    name: "Study Tips",
    description: "Strategies and advice for effective studying.",
  },
  {
    slug: "random",
    name: "Random",
    description: "Miscellaneous topics and content.",
  },
  {
    slug: "faq",
    name: "FAQ",
    description: "Frequently asked questions and answers.",
  },
] as const;

export type Category = (typeof categories)[number];
