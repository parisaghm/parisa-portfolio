export type SkillGroup = {
  id: string;
  title: string;
  skills: string[];
  variant?: "default" | "accent";
  note?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Accessibility",
      "Performance Optimization",
    ],
  },
  {
    id: "backend",
    title: "Backend and data",
    skills: [
      "Node.js",
      "REST APIs",
      "API Design",
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Authentication and Authorization",
    ],
  },
  {
    id: "testing",
    title: "Testing and delivery",
    skills: [
      "Jest",
      "Cypress",
      "Vitest",
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
      "GitHub Actions",
      "CI/CD",
      "Docker",
    ],
  },
  {
    id: "ai",
    title: "AI-assisted development",
    variant: "accent",
    skills: ["Claude Code", "Cursor AI", "GitHub Copilot", "ChatGPT"],
    note: "I use AI tools to accelerate planning, implementation, testing and debugging while reviewing and validating the final code.",
  },
];
