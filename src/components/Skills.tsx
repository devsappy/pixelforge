import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import PencilSketch from "./PencilSketch";

type Skill = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  accent: string;
  icon: JSX.Element;
};

const skills: Skill[] = [
  {
    num: "01",
    title: "AI Citability",
    desc: "Restructure pages so ChatGPT, Claude, and Perplexity quote you directly.",
    tags: ["Answer Blocks", "Quotability", "Extraction"],
    accent: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 5h18v14H3z" />
        <path d="M3 9h18" />
        <path d="M7 13h4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Technical SEO",
    desc: "Crawlability, indexing, and Core Web Vitals — the base AI still relies on.",
    tags: ["Crawl", "Index", "CWV"],
    accent: "#06b6d4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 3 L3 12 L8 21" />
        <path d="M16 3 L21 12 L16 21" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Schema & Structured Data",
    desc: "JSON-LD that tells engines exactly who and what your business is.",
    tags: ["JSON-LD", "Schema.org", "Rich Results"],
    accent: "#f472b6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18 M12 3a15 15 0 0 1 0 18 M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "llms.txt & AI Crawlers",
    desc: "Open the door to GPTBot, ClaudeBot, and PerplexityBot — on purpose.",
    tags: ["llms.txt", "robots.txt", "AI Bots"],
    accent: "#22d3ee",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7l8-4 8 4v10l-8 4-8-4z" />
        <path d="M4 7l8 4 8-4 M12 11v10" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Content & E-E-A-T",
    desc: "Experience, expertise, authority, trust — the signals AI weighs most.",
    tags: ["E-E-A-T", "Depth", "Authorship"],
    accent: "#a78bfa",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18 M3 12h18" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Brand Authority",
    desc: "Mentions across the web that make AI recognize and trust your entity.",
    tags: ["Mentions", "Entity", "sameAs"],
    accent: "#34d399",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18 M9 21V9" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Platform Optimization",
    desc: "Tuned for AI Overviews, ChatGPT, Perplexity, Gemini, and Copilot.",
    tags: ["AI Overviews", "ChatGPT", "Gemini"],
    accent: "#fb923c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4l8 4v12l-8-4z" />
        <path d="M20 4l-8 4v12l8-4z" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "GEO Audits",
    desc: "A scored 0–100 report with a prioritized, no-nonsense fix plan.",
    tags: ["Audit", "Score", "Roadmap"],
    accent: "#facc15",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    num: "09",
    title: "Citation Monitoring",
    desc: "Track where, when, and how often AI engines cite your business.",
    tags: ["Tracking", "Share of Voice", "Alerts"],
    accent: "#f87171",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "10",
    title: "GEO-Ready Websites",
    desc: "Fast, server-rendered sites engineered to be cited from day one.",
    tags: ["Next.js", "SSR", "Schema"],
    accent: "#60a5fa",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    num: "11",
    title: "Answer-First Content",
    desc: "Copy written the way humans ask and AI answers — clear, sourced, quotable.",
    tags: ["Q&A", "FAQ", "Microcopy"],
    accent: "#c084fc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7h16 M4 12h16 M4 17h10" />
      </svg>
    ),
  },
  {
    num: "12",
    title: "Agency White-Label",
    desc: "We run GEO behind the scenes for your clients, under your brand.",
    tags: ["White-Label", "Reseller", "Reporting"],
    accent: "#4ade80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.header
        className="section__head"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__eyebrow">01 · Capabilities</span>
        <h2 className="section__title">
          A full GEO stack. <br />
          <em>From audit to AI citation.</em>
        </h2>
        <p className="section__sub">
          Twelve disciplines under one roof — every lever that decides whether AI
          engines find, trust, and cite your business.
        </p>
      </motion.header>

      <motion.div
        className="skills__figure"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <PencilSketch />
      </motion.div>

      <div className="skills__grid">
        {skills.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: (i % 4) * 0.08,
            }}
          >
            <TiltCard
              className="skill"
              max={8}
              style={{ ["--accent" as string]: s.accent }}
            >
              <div className="skill__glow" />
              <div className="skill__num">{s.num}</div>
              <div className="skill__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="skill__tags">
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
