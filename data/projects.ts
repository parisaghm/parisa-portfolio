export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  contributions: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    id: "budget-tracker",
    category: "Full-Stack SaaS Application",
    title: "Budget Tracker",
    description:
      "An end-to-end personal finance application for managing budgets, expenses and financial activity through a clear and reusable interface.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
    ],
    contributions: [
      "Designed and implemented the application across the frontend and backend.",
      "Built secure authentication and database integration.",
      "Developed reusable UI components for budgeting and expense workflows.",
      "Created maintainable API and application architecture.",
    ],
    image: "/uploads/Budget.PNG",
    imageAlt: "Budget Tracker application dashboard screenshot",
    liveUrl: "https://budget-tracker-ivory-ten.vercel.app/dashboard",
  },
  {
    id: "nexpath",
    category: "AI-Assisted Testing Platform",
    title: "NexPath",
    description:
      "A testing workflow that simulates real user journeys, detects broken assessment flows and helps teams identify software-quality issues.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Playwright",
      "AI-assisted development",
    ],
    contributions: [
      "Built a React dashboard for starting and reviewing automated tests.",
      "Used Playwright to simulate user interactions across assessment workflows.",
      "Displayed detected issues with screenshots, reproduction steps and bug details.",
      "Used ChatGPT and Cursor AI for planning and implementation while reviewing final changes.",
    ],
    image: "/uploads/Next.PNG",
    imageAlt: "NexPath career guidance platform screenshot",
    liveUrl: "https://nexpath.app/en/",
  },
];
