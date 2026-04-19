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
    title: "UI / UX Design",
    desc: "Wireframes, prototypes, design systems. Figma first, Framer fast.",
    tags: ["Figma", "Framer", "Design Systems"],
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
    title: "Frontend Engineering",
    desc: "TypeScript, React, Next.js. Accessible, semantic, lightning fast.",
    tags: ["React", "Next.js", "TypeScript"],
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
    title: "Motion & 3D",
    desc: "Framer Motion, GSAP, Three.js, Spline. Movement with meaning.",
    tags: ["Framer Motion", "GSAP", "Three.js"],
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
    title: "Backend & APIs",
    desc: "Node, Edge functions, tRPC, REST, GraphQL. Data that doesn't drag.",
    tags: ["Node.js", "tRPC", "PostgreSQL"],
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
    title: "Brand & Identity",
    desc: "Logos, voice, visual systems. A brand you'd want to wear.",
    tags: ["Strategy", "Logo", "Guidelines"],
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
    title: "CMS & Headless",
    desc: "Sanity, Contentful, Payload. Your team edits without fear.",
    tags: ["Sanity", "Payload", "Contentful"],
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
    title: "E-Commerce",
    desc: "Shopify Hydrogen, Stripe, custom checkouts. Sell beautifully.",
    tags: ["Shopify", "Stripe", "Hydrogen"],
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
    title: "Performance",
    desc: "Core Web Vitals, CLS < 0.05, INP under 200ms. We obsess so you don't.",
    tags: ["Lighthouse", "CWV", "Edge"],
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
    title: "Accessibility",
    desc: "WCAG 2.2 AA. Keyboard, screen reader, reduced motion — all day.",
    tags: ["WCAG", "ARIA", "Audit"],
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
    title: "SEO & GEO",
    desc: "Technical SEO, schema, llms.txt. Rank on Google and on ChatGPT.",
    tags: ["Schema", "GEO", "Core Vitals"],
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
    title: "Copy & Content",
    desc: "Headlines that hit. Microcopy that converts. Voice you can hear.",
    tags: ["Strategy", "Voice", "Microcopy"],
    accent: "#c084fc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7h16 M4 12h16 M4 17h10" />
      </svg>
    ),
  },
  {
    num: "12",
    title: "Analytics & CRO",
    desc: "Plausible, PostHog, experiments. Evidence-led design that earns.",
    tags: ["PostHog", "A/B", "Funnels"],
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
          A full stack of craft. <br />
          <em>From first pixel to production.</em>
        </h2>
        <p className="section__sub">
          Twelve disciplines under one roof. No handoffs, no excuses — every part of your
          website is shaped by people who care.
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
