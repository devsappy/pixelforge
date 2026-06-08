import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const services = [
  {
    cls: "service--a",
    tag: "Flagship",
    title: "Signature websites",
    desc: "Full strategy → design → build. 6–10 weeks. For brands that refuse to look like everyone else.",
    bullets: [
      "Discovery & strategy workshop",
      "Motion-first design in Figma & Framer",
      "Next.js build · Headless CMS",
      "Performance & a11y audit",
    ],
    price: "$18k",
  },
  {
    cls: "service--b",
    tag: "Sprint",
    title: "Landing pages that land",
    desc: "One page, relentlessly focused on conversion. 10 days. Perfect for launches, funding rounds, campaigns.",
    bullets: [
      "Copy & layout workshop",
      "Cinematic hero & scroll story",
      "A/B-ready component system",
      "Analytics & event wiring",
    ],
    price: "$6k",
  },
  {
    cls: "service--c",
    tag: "Retainer",
    title: "Growth & iteration",
    desc: "Ongoing design + engineering capacity. Weekly ships, monthly CRO tests, no meetings you don't want.",
    bullets: [
      "Dedicated designer & engineer",
      "Weekly async review",
      "Quarterly performance & SEO",
      "Direct Slack channel",
    ],
    price: "$9k / mo",
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
