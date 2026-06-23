import { createFileRoute } from "@tanstack/react-router";
import {
  Brain, Code2, Database, Github, Linkedin, Mail, MapPin,
  Sparkles, Cpu, GitBranch, Terminal, Layers, BarChart3,
  ArrowUpRight, Send, GraduationCap, FlaskConical, Calendar,
} from "lucide-react";
import profileAsset from "@/assets/profile.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — MCA Student · AI / ML" },
      { name: "description", content: "Portfolio of an MCA student passionate about Artificial Intelligence and Machine Learning. Projects, tools, and contact." },
      { property: "og:title", content: "Portfolio — MCA Student · AI / ML" },
      { property: "og:description", content: "Projects, frameworks, and tools — an AI/ML focused MCA student portfolio." },
    ],
  }),
  component: Portfolio,
});

const NAME = "Shreerag Namboothiri K H";
const ROLE = "MCA Student · AI / ML Enthusiast";
const LOCATION = "India";
const EMAIL = "shreeragkh@gmail.com";
const GITHUB = "https://github.com/shreeragkh";
const LINKEDIN = "https://www.linkedin.com/in/shreeragkh/";

const projects = [
  {
    title: "Sentiment Analysis on Movie Reviews",
    blurb: "Fine-tuned a BERT model to classify IMDB reviews with 92% accuracy. Built an interactive demo using Streamlit.",
    tags: ["PyTorch", "HuggingFace", "Streamlit"],
    icon: Brain,
  },
  {
    title: "Image Classifier — CIFAR-10",
    blurb: "Custom CNN architecture in TensorFlow trained on CIFAR-10. Explored augmentation, dropout, and learning-rate schedules.",
    tags: ["TensorFlow", "Keras", "CNN"],
    icon: Layers,
  },
  {
    title: "Sales Forecasting Dashboard",
    blurb: "Time-series forecasting using Prophet and XGBoost. Visualized predictions with an interactive Plotly dashboard.",
    tags: ["Python", "Prophet", "Plotly"],
    icon: BarChart3,
  },
  {
    title: "Chatbot with RAG",
    blurb: "Retrieval-augmented chatbot over custom PDFs using LangChain, FAISS vector store, and an OpenAI LLM backend.",
    tags: ["LangChain", "FAISS", "OpenAI"],
    icon: Sparkles,
  },
];

const toolGroups = [
  {
    label: "Languages",
    icon: Code2,
    items: ["Python", "Java", "C++", "SQL", "JavaScript"],
  },
  {
    label: "ML / DL Frameworks",
    icon: Brain,
    items: ["Keras", "scikit-learn", "HuggingFace"],
  },
  {
    label: "Data & Viz",
    icon: Database,
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    label: "Tools & Platforms",
    icon: Cpu,
    items: ["Jupyter", "Google Colab", "VS Code", "Streamlit"],
  },
  {
    label: "Dev & Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub", "Linux"],
  },
  {
    label: "Databases",
    icon: Terminal,
    items: ["MySQL", "PostgreSQL", "MongoDB", "FAISS"],
  },
];

const timeline = [
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    org: "Vellore Institute of Technology, Vellore",
    date: "2025 – 2027",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    org: "University of Calicut",
    date: "2022 – 2025",
    icon: GraduationCap,
  },
];

const research = {
  title: "Detecting Fake Open Source Projects",
  blurb: "Developed a machine learning model to detect inactive or fake open-source repositories using multi-dimensional GitHub data.",
  points: [
    "Engineered features from repository metadata, contributor activity, bot contributions, code similarity, and contribution graphs.",
    "Analyzed contributor behavior patterns to identify anomalies such as automated or low-quality contributions.",
    "Incorporated code similarity analysis to detect duplicate or low-effort repositories.",
    "Utilized contribution graph analysis to evaluate project activity consistency and engagement trends.",
    "Built a complete ML pipeline including preprocessing, feature engineering, model training, and evaluation.",
    "Applied SHAP explainability to interpret model predictions and identify key influencing features.",
    "Conducted experiments on real-world and synthetic datasets.",
  ],
  status: "Currently preparing research work for publication.",
  icon: FlaskConical,
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-hero grid-bg">
      {/* Nav */}
      <header className="sticky top-0 z-40 glass">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            <span className="text-gradient">{"<"}{NAME.split(" ")[0]}/{">"}</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#timeline" className="hover:text-foreground transition-smooth">Journey</a>
            <a href="#projects" className="hover:text-foreground transition-smooth">Projects</a>
            <a href="#research" className="hover:text-foreground transition-smooth">Research</a>
            <a href="#skills" className="hover:text-foreground transition-smooth">Skills</a>
            <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:scale-105"
          >
            <Mail className="h-4 w-4" /> Hire me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-mono text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Available for internships & collaborations
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Hi, I'm <span className="text-gradient">{NAME}</span>.
              <br />
              I build with <span className="text-gradient">AI &amp; ML</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {ROLE}. I love turning data into intelligent products — from
              deep learning models to deployable ML applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105"
              >
                View projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-smooth hover:bg-secondary"
              >
                Get in touch
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-muted-foreground">
              <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-foreground transition-smooth"><Github className="h-5 w-5" /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-foreground transition-smooth"><Linkedin className="h-5 w-5" /></a>
              <a href={`mailto:${EMAIL}`} className="hover:text-foreground transition-smooth"><Mail className="h-5 w-5" /></a>
              <span className="flex items-center gap-1.5 text-sm"><MapPin className="h-4 w-4" />{LOCATION}</span>
            </div>
          </div>

          {/* Profile picture */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border glass shadow-card">
              <img
                src={profileAsset.url}
                alt={`${NAME} — profile picture`}
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl glass px-4 py-2 text-xs font-mono">
                <span className="text-primary">● online</span>
                <span className="text-muted-foreground">MCA · Year 2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader eyebrow="Journey" title="Education & Experience" />
        <div className="mt-10 relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-12 md:pl-20 pb-10 last:pb-0">
              <div className="absolute left-4 md:left-8 top-0 h-8 w-8 -translate-x-1/2 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <item.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/40">
                <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
                  <Calendar className="h-3 w-3" /> {item.date}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 font-medium">{item.org}</p>
                <p className="text-sm text-muted-foreground mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader eyebrow="Projects" title="Things I've built" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <p.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Research */}
      <section id="research" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader eyebrow="Research" title="Research Work" />
        <div className="mt-10">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-primary opacity-15 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{research.title}</h3>
                  <p className="text-sm text-muted-foreground">{research.blurb}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {research.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-mono text-primary">
                <Sparkles className="h-3 w-3" /> {research.status}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader eyebrow="Toolbelt" title="Frameworks & tools I work with" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {toolGroups.map((g) => (
            <div key={g.label} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/40">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{g.label}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-mono text-foreground/80">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <SectionHeader eyebrow="Contact" title="Let's build something intelligent." />
              <p className="mt-4 max-w-md text-muted-foreground">
                Open to internships, ML research collaborations, and freelance projects.
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
                <Send className="h-4 w-4" /> Send a message
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {NAME}. Crafted with curiosity & caffeine.
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
    <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3 transition-smooth hover:border-primary/40 hover:bg-secondary">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-primary" />
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      </div>
      <span className="font-mono text-sm">{value}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}
