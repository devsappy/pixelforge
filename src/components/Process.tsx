import { motion } from "framer-motion";
import Engine from "./Engine";

const steps = [
  { n: "01", t: "Discover", d: "We interview, audit, and define the one metric that matters." },
  { n: "02", t: "Design", d: "Motion-first mockups in Figma + Framer. Clickable within a week." },
  { n: "03", t: "Forge", d: "TypeScript, Next.js, Framer Motion. Previews on every commit." },
  { n: "04", t: "Launch", d: "QA, Lighthouse, WCAG, SEO, handoff. You ship with confidence." },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <motion.header
        className="section__head"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__eyebrow">04 · Process</span>
        <h2 className="section__title">
          Calm on the outside.
          <br />
          <em>Relentless on the inside.</em>
        </h2>
      </motion.header>

      <motion.div
        className="process__figure"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Engine />
      </motion.div>

      <ol className="process__steps">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="process__num">{s.n}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
