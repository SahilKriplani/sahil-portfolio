// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all portfolio content.
// Edit anything here; the UI reads from these exports. No JSX digging required.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Sahil Kriplani",
  tagline: "Software Engineer · Full Stack Developer",
  location: "Ahmedabad, India",
  // Discreet, recruiter-facing. Sells competence without broadcasting a job hunt.
  bio: "Full-stack engineer who ships production SaaS — React, Next.js and TypeScript on the front, Node and Python on the back. I turn ambiguous problems into shipped features: AI-powered OCR pipelines, real-time dashboards, and APIs built to scale. Currently building at TechRays Labs, and always architecting the next thing.",
  resumeUrl: "/resume.pdf", // drop your PDF in /public as resume.pdf
  image: "/profile.png", // photo in /public (falls back to initials if missing)
} as const;

export const social = {
  email: "s.s.ksahil543@gmail.com",
  phone: "+91 9909706362",
  linkedin: "https://www.linkedin.com/in/sahil-kriplani-96b555234/",
  github: "https://github.com/SahilKriplani",
  twitter: "", // add later — UI hides the icon while empty
} as const;

// ── SKILLS ───────────────────────────────────────────────────────────────────
export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Redux",
    "Context API",
    "Jest",
    "Vitest",
    "WebSockets",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "Laravel",
    "REST APIs",
    "Microservices",
    "JWT / OAuth2",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  "DevOps & Cloud": ["AWS (EC2, S3, RDS)", "Azure", "Docker", "GitHub Actions", "Nginx"],
  "Currently Learning": ["AI / ML", "LLMs", "DSA", "LLD", "HLD", "Go"],
} as const;

// ── CAPABILITIES (what I do) ─────────────────────────────────────────────────
export interface Capability {
  title: string;
  blurb: string;
  points: string[];
}

export const capabilities: Capability[] = [
  {
    title: "Full-Stack Product Engineering",
    blurb:
      "Designing and shipping production SaaS end-to-end — React/Next.js front ends wired to typed APIs, with the polish users feel and the architecture teams can maintain.",
    points: [
      "React, Next.js & TypeScript UIs with reusable design systems",
      "Server components, code-splitting & memoisation for speed",
      "Accessible, responsive interfaces that ship fast",
    ],
  },
  {
    title: "Backend & APIs",
    blurb:
      "RESTful microservices and data layers built to scale — auth, integrations, and the unglamorous reliability work that keeps products up.",
    points: [
      "Node.js / Express & Python / FastAPI services",
      "JWT / OAuth2 auth across 5+ third-party integrations",
      "PostgreSQL & MongoDB schema design and query optimisation",
    ],
  },
  {
    title: "AI-Powered Features",
    blurb:
      "Turning models into product — OCR pipelines, RAG assistants and AI workflows wired into real user flows, not demos.",
    points: [
      "OCR extraction pipelines (~92% field accuracy)",
      "RAG over vector DBs with grounded, cited answers",
      "LLM features wired into production UX",
    ],
  },
  {
    title: "DevOps & Deployment",
    blurb:
      "Ship continuously and sleep at night — Dockerised CI/CD, cloud infra and zero-downtime releases.",
    points: [
      "AWS (EC2, S3, RDS) & Azure deployments",
      "Dockerised GitHub Actions CI/CD pipelines",
      "Nginx, monitoring & zero-downtime releases",
    ],
  },
];

// ── STATS (proof strip — real numbers from shipped work) ─────────────────────
export const stats = [
  { value: "~92%", label: "OCR extraction accuracy" },
  { value: "~40%", label: "API latency reduced" },
  { value: "~30%", label: "Faster page loads" },
  { value: "5+", label: "Integrations shipped" },
] as const;

// ── TECH MARQUEE (logos/names that scroll) ───────────────────────────────────
export const marquee = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Tailwind",
  "Laravel", "GitHub Actions", "WebSockets",
] as const;

// ── PROJECT TYPES ────────────────────────────────────────────────────────────
export type ProjectStatus = "Live" | "In Progress" | "Coming Soon";

export interface Project {
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  previewUrl?: string; // live link — renders the "Preview" button. Add yours here.
  repoUrl?: string;
  image?: string; // optional screenshot, e.g. "/projects/lifeos.png" (falls back to themed art)
  nda?: boolean; // company work — no public links
  launchDate?: string; // ISO date — drives the "Coming Soon" countdown. Edit freely.
}

// Personal / flagship projects
export const projects: Project[] = [
  {
    name: "LifeOS — Operating System for Self",
    description:
      "A single command center for your life. It unifies habits, goals, health, finances and learning into one signal, then turns that signal into AI weekly reviews that surface what actually moved the needle — so you optimise yourself like you'd optimise a product.",
    stack: ["Next.js", "FastAPI", "MySQL", "Google SSO"],
    status: "In Progress",
    repoUrl: "https://github.com/SahilKriplani",
    previewUrl: "https://life-os-web-rosy.vercel.app/",
  },
  {
    name: "SyncRoom",
    description:
      "Real-time collaboration engine — Google Docs / Notion style. Live cursors, presence, commenting and conflict resolution over WebSockets.",
    stack: ["Next.js", "WebSockets", "Node.js", "Redis"],
    status: "Coming Soon",
    launchDate: "2026-07-21",
  },
  {
    name: "Quantum Queue",
    description:
      "Distributed job-processing engine for background workflows — email sending, image and video jobs — with retry logic and a monitoring dashboard.",
    stack: ["Node.js", "Redis", "BullMQ", "Docker"],
    status: "Coming Soon",
    launchDate: "2026-08-04",
  },
  {
    name: "Echo AI",
    description:
      "AI knowledge assistant for companies — upload docs, get grounded answers. RAG over a vector DB with a chat UI and admin dashboard.",
    stack: ["Next.js", "Python", "Vector DB", "LLMs"],
    status: "Coming Soon",
    launchDate: "2026-08-18",
  },
  {
    name: "Nexus Commerce Engine",
    description:
      "Event-driven mini-commerce backend — order pipeline, inventory updates and notifications via an internal event bus, microservices-style.",
    stack: ["Node.js", "Event Bus", "PostgreSQL", "Docker"],
    status: "Coming Soon",
    launchDate: "2026-09-01",
  },
];

// Company / professional work (under NDA — described, not linked)
export const companyProjects: Project[] = [
  {
    name: "AI-Based Invoicing & Billing Platform",
    description:
      "End-to-end multi-tenant SaaS invoicing platform. OCR-based AI extraction auto-populates invoice fields (~92% accuracy), cutting generation time from ~8 min to under 30s. Normalised PostgreSQL schema with RBAC and real-time financial dashboards.",
    stack: ["React", "Node.js", "PostgreSQL", "OCR", "AWS"],
    status: "Live",
    nda: true,
  },
  {
    name: "AI-Powered Social Media Automation Tool",
    description:
      "Content automation platform with AI post generation and cross-platform scheduling (~60% less manual effort). Real-time engagement tracking over WebSockets, Redis-cached data pipelines cutting dashboard load ~50%.",
    stack: ["React", "Node.js", "REST APIs", "Redis", "WebSockets"],
    status: "Live",
    nda: true,
  },
];

// ── EXPERIENCE ───────────────────────────────────────────────────────────────
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Programmer Analyst — Full Stack Engineer",
    company: "TechRays Labs Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Dec 2024 — Present",
    highlights: [
      "Shipped the invoicing module from zero to production within 3 months of joining — used daily by finance teams.",
      "Built full-stack SaaS features (React, Next.js, TypeScript), improving page-load performance ~30% via code-splitting and memoisation.",
      "Designed RESTful microservices (Node.js, Express) with JWT/OAuth2 auth across 5+ third-party integrations.",
      "Optimised PostgreSQL & MongoDB schemas and indexing — cut average API latency ~40% under peak load.",
      "Deployed on AWS (EC2, S3, RDS) and Azure with Dockerised CI/CD (GitHub Actions) for zero-downtime releases.",
    ],
  },
];

// ── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech in Computer Science Engineering (AI / ML)",
    school: "ITM (SLS) Baroda University",
    period: "2021 — 2025",
  },
] as const;

// ── NAV ──────────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
