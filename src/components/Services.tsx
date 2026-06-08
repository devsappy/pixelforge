import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const services = [
  {
    cls: "service--b",
    tag: "Audit",
    title: "AI Citation Audit",
    desc: "Where do you stand in AI search? A full GEO + AEO audit with a scored report and a prioritized fix plan. 5 days.",
    bullets: [
      "Citability & schema analysis",
      "AI crawler & llms.txt access check",
      "Platform readiness: ChatGPT, Perplexity, Gemini",
      "Scored 0–100 report + roadmap",
    ],
    price: "$1.5k",
  },
  {
    cls: "service--a",
    tag: "Build",
    title: "GEO-Ready Websites",
    desc: "A fast, server-rendered site engineered to be found and cited by AI from day one. 4–8 weeks.",
    bullets: [
      "Strategy & entity / keyword mapping",
      "SSR build with full schema markup",
      "llms.txt, sitemap & crawler access",
      "Answer-first content tuned for citation",
    ],
    price: "$12k",
  },
  {
    cls: "service--c",
    tag: "Retainer",
    title: "Ongoing GEO Management",
    desc: "We grow and defend your AI visibility every month — for your business or your agency's clients. White-label available.",
    bullets: [
      "Monthly optimization & content",
      "Citation & share-of-voice tracking",
      "Schema & technical upkeep",
      "White-label client reporting",
    ],
    price: "$3k / mo",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <motion.header
        className="section__head"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section__eyebrow">03 · What we do</span>
        <h2 className="section__title">
          Three ways to work
          <br />
          <em>with GPTShopExpert.</em>
        </h2>
      </motion.header>

      <div className="services__grid">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.12,
            }}
          >
            <TiltCard className={`service ${s.cls}`} max={6}>
              <div className="service__tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="service__price">
                <span>from</span>
                <strong>{s.price}</strong>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
