import { motion } from "framer-motion";
import Engine from "./Engine";

const steps = [
  { n: "01", t: "Audit", d: "We score your GEO/AEO and pinpoint why AI isn't citing you yet." },
  { n: "02", t: "Optimize", d: "Schema, llms.txt, content structure, and crawler access — fixed." },
  { n: "03", t: "Build", d: "Where needed, a fast server-rendered site engineered to be cited." },
  { n: "04", t: "Monitor", d: "Track citations across ChatGPT, Perplexity & AI Overviews. Iterate." },
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
