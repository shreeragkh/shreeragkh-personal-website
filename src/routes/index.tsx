import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Brain, Code2, Database, Github, Linkedin, Mail, MapPin, Cloud,
  Sparkles, Cpu, Server, ArrowUpRight, Send, GraduationCap,
  Calendar, FileText, Menu, X, ExternalLink,
} from "lucide-react";
import profileAsset from "@/assets/profile.jpg.asset.json";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreerag Namboothiri K H — AI & GenAI Engineer" },
      { name: "description", content: "AI / GenAI Engineer building RAG systems, LLM applications and multi-agent AI. Projects, skills, and contact." },
      { property: "og:title", content: "Shreerag Namboothiri K H — AI & GenAI Engineer" },
      { property: "og:description", content: "RAG pipelines, LLM apps and multi-agent systems — production-grade AI projects by Shreerag Namboothiri K H." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/* ---- Easily editable constants ---- */
const NAME = "Shreerag Namboothiri K H";
const TITLE = "AI Engineer | GenAI Engineer";
const LOCATION = "India";
const EMAIL = "shreeragkh@gmail.com";
const GITHUB = "https://github.com/shreeragkh";
const LINKEDIN = "https://www.linkedin.com/in/shreeragkh/";
const RESUME_URL = "/resume.pdf"; // replace with your real resume file

const projects = [
  {
    title: "Hybrid Search RAG System",
    blurb:
      "A production-grade retrieval-augmented generation system combining BM25 sparse search and vector-based dense search (ChromaDB / AstraDB), merged with Reciprocal Rank Fusion and cross-encoder reranking (ms-marco-MiniLM-L-6-v2) for improved relevance. FastAPI backend, Redis caching with SHA-256 query hashing, Streamlit frontend with separate admin and public views, Firebase Google Auth, deployed via Docker on AWS EC2.",
    tags: ["FastAPI", "ChromaDB", "AstraDB", "Redis", "Docker", "AWS EC2", "Streamlit"],
    github: "https://github.com/shreeragkh/Hybrid-Search-RAG",
    demo: "https://hybrid-search-rag.duckdns.org/",
    icon: Brain,
  },
  {
    title: "Meeting Summarizer",
    blurb:
      "An AI-powered tool that processes meeting transcripts and recordings to generate concise summaries, key discussion points, and action items using an LLM pipeline — reducing manual note-taking and making meeting outcomes easy to review and share.",
    tags: ["Python", "LLM API", "FastAPI", "Supabase"],
    github: "https://github.com/shreeragkh/Meeting-Summarizer",
    demo: "https://meeting-summarizer-v1tu.onrender.com/",
    icon: Sparkles,
  },
];

const toolGroups = [
  { label: "Languages", icon: Code2, items: ["Python", "C++", "JavaScript"] },
  {
    label: "AI / ML",
    icon: Brain,
    items: [
      "RAG pipelines", "LangGraph", "Hybrid Search (BM25 + Vector)",
      "Cross-encoder Reranking", "Prompt Engineering", "LLM-as-judge evaluation",
    ],
  },
  { label: "Backend", icon: Server, items: ["FastAPI", "Node.js", "Express"] },
  { label: "Databases", icon: Database, items: ["PostgreSQL", "ChromaDB", "AstraDB", "Redis"] },
  { label: "DevOps / Cloud", icon: Cloud, items: ["Docker", "AWS EC2", "Vercel", "CI/CD basics"] },
  { label: "Tools", icon: Cpu, items: ["Git", "Firebase Auth", "Streamlit"] },
];

const timeline = [
  {
    title: "Master of Computer Applications (MCA)",
    org: "Vellore Institute of Technology, Vellore",
    date: "2025 – 2027",
    icon: GraduationCap,
  },
  {
    title: "Bachelor of Science in Computer Science",
    org: "University of Calicut",
    date: "2022 – 2025",
    icon: GraduationCap,
  },
];


const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-hero grid-bg">
      {/* Navbar */}
      <header className="sticky top-0 z-50 glass">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-6">
          <a href="#top" className="font-semibold tracking-tight">
            <span className="text-gradient font-mono">{"<"}shreerag/{">"}</span>
          </a>

          <div className="hidden gap-8 text-sm text-muted-foreground lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-smooth hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-smooth hover:bg-primary/10"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105"
            >
              <Mail className="h-4 w-4" /> Hire me
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border px-5 pb-5 md:hidden">
            <div className="flex flex-col gap-1 pt-3 text-sm">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-2.5 text-sm font-medium text-primary"
                >
                  <FileText className="h-4 w-4" /> Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
                >
                  <Mail className="h-4 w-4" /> Hire me
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-6 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Available for internships &amp; collaborations
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              {NAME}
              <br />
              <span className="text-gradient">{TITLE}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              I build RAG systems, LLM applications, and multi-agent AI systems — from
              retrieval pipelines to production deployments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-smooth hover:bg-secondary"
              >
                View projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105"
              >
                Hire me
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-muted-foreground">
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-smooth hover:text-foreground"><Github className="h-5 w-5" /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-smooth hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="transition-smooth hover:text-foreground"><Mail className="h-5 w-5" /></a>
              <span className="flex items-center gap-1.5 text-sm"><MapPin className="h-4 w-4" />{LOCATION}</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border glass shadow-card">
              <img
                src={profileAsset.url}
                alt={`${NAME} — profile picture`}
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl glass px-4 py-2 font-mono text-xs">
                <span className="text-primary">● open to work</span>
                <span className="text-muted-foreground">MCA · VIT</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About / Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
        <Reveal>
          <SectionHeader eyebrow="About" title="Building GenAI systems from scratch" />
          <p className="mt-5 max-w-3xl text-muted-foreground">
            I'm an MCA student at VIT Vellore focused on practical, production-grade AI.
            I design and ship GenAI systems end to end — hybrid retrieval, reranking,
            evaluation loops, APIs, caching, auth and deployment — rather than notebook demos.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {toolGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{g.label}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span key={item} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-foreground/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
        <Reveal><SectionHeader eyebrow="Projects" title="Things I've shipped" /></Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 pt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-smooth hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="journey" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
        <Reveal><SectionHeader eyebrow="Journey" title="Education" /></Reveal>
        <div className="relative mx-auto mt-10 max-w-3xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-8" />
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="relative pb-10 pl-12 last:pb-0 md:pl-20">
                <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-primary shadow-glow md:left-8">
                  <item.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/40">
                  <div className="mb-2 flex items-center gap-2 font-mono text-xs text-primary">
                    <Calendar className="h-3 w-3" /> {item.date}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Research */}
      <section id="research" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
        <Reveal><SectionHeader eyebrow="Research" title="Research Work" /></Reveal>
        <Reveal delay={80}>
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card md:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-primary opacity-15 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{research.title}</h3>
                  <p className="text-sm text-muted-foreground">{research.blurb}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {research.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs text-primary">
                <Sparkles className="h-3 w-3" /> {research.status}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <SectionHeader eyebrow="Contact" title="Let's build something together." />
                <p className="mt-4 max-w-md text-muted-foreground">
                  Open to AI/GenAI internships, research collaborations, and freelance builds.
                  Drop a line — I usually reply within a day.
                </p>
              </div>
              <div className="space-y-3">
                <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
                <ContactRow icon={Github} label="GitHub" value={GITHUB.replace("https://", "")} href={GITHUB} />
                <ContactRow icon={Linkedin} label="LinkedIn" value={LINKEDIN.replace("https://", "")} href={LINKEDIN} />
                <ContactRow icon={MapPin} label="Location" value={LOCATION} />
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" /> Hire me
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {NAME}
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// {eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3 transition-smooth hover:border-primary/40 hover:bg-secondary">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 shrink-0 text-primary" />
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      </div>
      <span className="truncate font-mono text-sm">{value}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}
