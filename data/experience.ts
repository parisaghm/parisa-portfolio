export type ExperienceRole = {
  id: string;
  title: string;
  company: string;
  date: string;
  description?: string;
  bullets: string[];
  badge?: string;
  current?: boolean;
};

export const experience: ExperienceRole[] = [
  {
    id: "freelance",
    title: "Full-Stack Developer",
    company: "Freelance",
    date: "Sep 2024 – Present · Remote",
    current: true,
    bullets: [
      "Own full-stack SaaS features from technical planning through testing and production delivery.",
      "Design REST APIs, authentication flows, database integrations and backend architecture.",
      "Build maintainable React interfaces and reusable components.",
      "Use Claude Code, Cursor AI, GitHub Copilot and ChatGPT for planning, development, testing, debugging and refactoring while reviewing all final code.",
    ],
  },
  {
    id: "sabaldea",
    title: "Front-End Engineer",
    company: "Sabaldea",
    date: "Feb 2020 – Sep 2024 · Remote",
    description:
      "Sabaldea operates major streaming and video platforms, including Aparat and Filimo.",
    bullets: [
      "Developed and maintained large-scale React and TypeScript interfaces used by millions of people.",
      "Built reusable component systems and modular frontend architecture.",
      "Collaborated with product managers, designers and backend engineers.",
      "Improved application performance through rendering optimization, lazy loading and code splitting.",
      "Participated in code reviews, automated testing, debugging and production releases.",
      "Translated complex requirements into responsive and accessible user experiences.",
    ],
    badge: "Contributed to products serving millions of users.",
  },
  {
    id: "arosis",
    title: "UI Designer",
    company: "Arosis",
    date: "Feb 2018 – Mar 2019",
    bullets: [
      "Translated product designs into responsive customer-facing interfaces.",
      "Improved typography, spacing, layout consistency, usability and visual quality.",
      "Worked with a fintech development team on web and customer-facing applications.",
    ],
  },
];
