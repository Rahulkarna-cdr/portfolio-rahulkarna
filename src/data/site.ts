export const site = {
  name: "Rahul Karna",
  role: "Full-Stack Engineer",
  /** One-liner for meta + hero */
  tagline:
    "I help teams ship reliable web products with clear UX, solid architecture, and measurable performance.",
  url: "https://example.com",
  location: "Remote",
  openToWork: true,
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  resumeUpdated: "April 2026",
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  /** Shown in About; replace with /your-photo.jpg in public/ when ready */
  avatarSrc: "/avatar-placeholder.svg",
};

export const heroCode = `const builder = {
  name: "${site.name}",
  focus: "Next.js · Systems · UX",
  shipping: true,
};`;

export const stats = [
  { label: "Projects shipped", value: "12+" },
  { label: "Years building", value: "4+" },
  { label: "Stack depth", value: "Full-stack" },
];

export const about = {
  lead:
    "I build production web apps end to end—frontend polish, API design, data modeling, and deployment—with an eye for maintainability.",
  body:
    "I care about fast feedback loops, accessible interfaces, and observability so teams can iterate safely. Currently deepening skills in edge performance and design systems.",
  learning: "Exploring distributed tracing and advanced Next.js patterns.",
};

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "lang", label: "Languages" },
  { id: "web", label: "Web" },
  { id: "data", label: "Data & ML" },
  { id: "tool", label: "Tools" },
] as const;

export type SkillCategoryId = (typeof skillCategories)[number]["id"];

export const skills: {
  name: string;
  category: Exclude<SkillCategoryId, "all">;
}[] = [
  { name: "TypeScript", category: "lang" },
  { name: "JavaScript", category: "lang" },
  { name: "Python", category: "lang" },
  { name: "SQL", category: "lang" },
  { name: "Next.js", category: "web" },
  { name: "React", category: "web" },
  { name: "Node.js", category: "web" },
  { name: "Tailwind CSS", category: "web" },
  { name: "PostgreSQL", category: "data" },
  { name: "Redis", category: "data" },
  { name: "Pandas", category: "data" },
  { name: "Git", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "AWS", category: "tool" },
];

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Acme Labs",
    location: "Remote",
    start: "2023",
    end: "Present",
    bullets: [
      "Led migration to Next.js App Router; improved LCP by 38% on key flows.",
      "Owned billing microservice design; cut incident rate 25% via SLOs and alerts.",
      "Mentored 3 engineers on TypeScript patterns and code review standards.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Northwind Digital",
    location: "Hybrid",
    start: "2020",
    end: "2023",
    bullets: [
      "Built customer dashboards in React with real-time updates over WebSockets.",
      "Introduced integration test suite; reduced regressions in release train.",
    ],
  },
];

export const projects = [
  {
    title: "Commerce Control Tower",
    impact: "Sub-200ms P95 for catalog reads at peak",
    description:
      "Event-driven inventory and order orchestration with read replicas, cache layers, and idempotent workers.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka"],
    imageSrc: "/projects/commerce.svg",
    links: { live: "#", repo: "#" },
  },
  {
    title: "Insight Atlas",
    impact: "40% faster analyst workflows",
    description:
      "Analytics workspace with saved views, role-based sharing, and export pipelines.",
    stack: ["React", "TypeScript", "Python", "BigQuery"],
    imageSrc: "/projects/insight.svg",
    links: { live: "#", repo: "#" },
  },
  {
    title: "Assist Desk",
    impact: "Answer suggestion latency under 2s",
    description:
      "Support console with retrieval-augmented answers, audit trails, and human handoff.",
    stack: ["Next.js", "OpenAI", "pgvector", "Tailwind"],
    imageSrc: "/projects/assist.svg",
    links: { live: "#", repo: "#" },
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "Your University",
    period: "2016 — 2020",
    detail: "Focus: distributed systems & software engineering",
  },
];

export const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    href: "#",
  },
  {
    name: "Meta Front-End Developer",
    issuer: "Coursera",
    year: "2024",
    href: "#",
  },
];
