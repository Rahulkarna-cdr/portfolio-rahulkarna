export const site = {
  name: "Rahul Karna",
  role: "Full-Stack Engineer",
  /** One-liner for meta + hero */
  tagline:
    "I build fullstack web apps, working across frontend, backend, databases, APIs, and deployment, with a focus on making things reliable and easy to maintain.",
  url: "https://example.com",
  location: "Bhaktapur, Nepal",
  openToWork: true,
  email: "rahulkarna89@gmail.com",
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
    title: "Junior Software Engineer",
    company: "T.E.J Center Private Limited",
    location: "Lalitpur, Nepal",
    start: "January 2026",
    end: "Present",
    bullets: [
      "Built a full-stack observability platform to collect, process, and visualize client metrics.",
      "Implemented a scalable data pipeline to ingest and store client metrics in a PostgreSQL database.",
      "Developed a user-friendly dashboard to visualize client metrics in real-time.",
      "Designed and implemented a scalable backend architecture (Node.js/Express) with modular structure and clean separation of concerns.",
      "Implemented Multitenant architecture to support multiple clients with different data and authentication requirements.",
    ],
  },
  {
    title: "Software Engineer Fellow",
    company: "T.E.J Center Private Limited",
    location: "Lalitpur, Nepal",
    start: "July 2025",
    end: "December 2025",
    bullets: [
      "Developed full-stack MERN applications featuring JWT-based authentication, CRUD functionality, dashboards, and real-time updates, following sound system design principles.",
      "Built RAG-based AI chatbot using OpenAI's API and Langchain libraries to provide contextual and accurate responses to user queries.",
      "Architected a scalable system using a microservices approach, improving maintainability and reducing system downtime.",      

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
