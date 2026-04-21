export const site = {
  name: "Rahul Karna",
  role: "Full-Stack Engineer",
  /** One-liner for meta + hero */
  tagline:
    "I build fullstack web apps, working across frontend, backend, databases, APIs, and deployment, with a focus on making things reliable and easy to maintain.",
  url: "https://example.com",
  location: "Bhaktapur, Nepal",
  openToWork: true,
  email: "rahulkarna889@gmail.com",
  social: {
    github: "https://github.com/rahulkarna-cdr",
    linkedin: "https://www.linkedin.com/in/rahul-karna",
  },
  /** Shown in About */
  avatarSrc: "/aboutMeEmoji.png",
};

/** Hero terminal animation (bash-style) */
export const heroCode = `$ whoami
Rahul Karna

$ role
Fullstack Developer

$ focus
APIs, real-time systems, web apps

$ status
Open to opportunities
`;

export const stats = [
  { label: "Projects shipped", value: "12+" },
  { label: "Years building", value: "4+" },
  { label: "Stack depth", value: "Full-stack" },
];

export const about = {
  lead:
    "I am a Junior Full-Stack Developer passionate about building functional, clean web applications. Having spent the last year diving deep into the modern web ecosystem, I have developed a strong foundation in frontend Polish and backend logic",
  body:
    "I focus on writing clean, maintainable code and building web apps that are easy to use and reliable. I try to keep things simple and practical, and I enjoy working through problems to find solid solutions.",
  learning: "Exploring System Design concepts and improving how I build web apps, especially around APIs, real-time features, and performance.",
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
    title: "Facebook Style NewsFeed with Pull Model ",
    impact: "Reduced database load using pull-based feed design",
    description:
      "A pull-based newsfeed system that dynamically builds user timelines from followed users’ posts at request time.",
    stack: ["Javascript", "Node.js", "PostgreSQL", "Redis", "Kafka", "docker", "microservices"],
    links: { repo: "https://github.com/TEJ-Fellowship/pbl/tree/newFacebookMain/PBL5/4_Facebook_Newsfeed" },
  },
  {
    title: "Vizme - Unified Observability Platform",
    impact: "Enabled centralized monitoring and faster detection of system issues through real-time metrics aggregation",
    description: "A unified observability platform that collects and visualizes system and application metrics to provide real-time insights into performance and health.",
    stack: ["JavaScript", "Node.js", "PostgreSQL", "Docker", "Prometheus", "Grafana", "Mimir"],
    links: { repo: "https://github.com/ganesh-786/Vizme/" },
  },
  {
    title: "Ripple - One Tap Social Chain",
    impact: "Built a viral interaction model enabling synchronous user engagement through minimal input actions",
    description: "A social networking platform where users trigger and propagate engagement waves with a single action, creating chain-based real-time interaction across connected users.",
    stack: ["JavaScript", "Node.js", "React", "MongoDB", "JWT", "Redux"],
    links: { repo: "https://github.com/TEJ-Fellowship/pbl/tree/main/PBL3/ripple" },
  },
];

export const education = [
  {
    degree: "Bachelor of Electronics, Communication and Information Engineering",
    school: "Tribhuvan University",
    period: "2020-2025",
    detail: "Focus: distributed systems & software engineering",
  },
];

export const certifications = [
  {
    name: "Full Stack Open",
    issuer: "University of Helsinki",
    year: "2025",
    imageSrc: "/certificates/FullstackOpen.png",
    href: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/2f19d77625c8dcab62bf5a17df5dc525",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco · Credly",
    year: "2023",
    imageSrc: "/certificates/Cisco_Cybersecurity.png",
    href: "https://www.credly.com/badges/120b4482-77a2-44f5-8f2b-98af27a7b04d/linked_in_profile",
  },
];
