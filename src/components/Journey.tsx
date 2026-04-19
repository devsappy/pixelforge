import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type P = { name: string; tag: string; title: string; desc: string; accent: string; variant?: string };

const projects: P[] = [
  {
    name: "NOIR Fragrance",
    tag: "Luxury fragrance · +312% conversions",
    title: "NOIR Studio",
    desc: "Cinematic product story with scroll-driven color grading.",
    accent: "#8b5cf6",
  },
  {
    name: "Helios Analytics",
    tag: "SaaS analytics · 98 Lighthouse",
    title: "Helios",
    desc: "Realtime dashboards with 3D data storytelling.",
    accent: "#06b6d4",
    variant: "alt",
  },
  {
    name: "Atelier 9",
    tag: "Architecture · Awwwards SOTD",
    title: "Atelier 9",
    desc: "Scroll-driven 3D model reveal for a boutique practice.",
    accent: "#f472b6",
    variant: "b",
  },
  {
    name: "Kairo Banking",
    tag: "Fintech · 2.1s LCP on 3G",
    title: "Kairo",
    desc: "Trust-first fintech with motion that feels considered.",
    accent: "#34d399",
    variant: "c",
  },
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Translate horizontal track based on scroll progress.
  // Move left by (100% - viewport width) approximately. Using vw calc.
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-78%"]);

  return (
    <section id="work" className="journey">
      <motion.header
        className="section__head"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__eyebrow">02 · Selected work</span>
        <h2 className="section__title">
          Scroll <em>sideways.</em>
          <br />
          Discover what we ship.
        </h2>
      </motion.header>

      <div className="journey__sticky" ref={ref}>
        <div className="journey__viewport">
          <motion.div className="journey__track" style={{ x }}>
            {projects.map((p) => (
              <article
                key={p.name}
                className="project"
                style={{ ["--accent" as string]: p.accent }}
              >
                <div
                  className={`project__mock${p.variant ? " project__mock--" + p.variant : ""}`}
                >
                  <div className="project__mock-nav">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="project__mock-hero">
                    <h4>{p.title}</h4>
                    <p>{p.tag}</p>
                  </div>
                </div>
                <div className="project__meta">
                  <span>
                    {String(projects.indexOf(p) + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
