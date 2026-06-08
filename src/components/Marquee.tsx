import { motion } from "framer-motion";

const items = [
  "AI Citations",
  "ChatGPT & Perplexity",
  "Google AI Overviews",
  "GEO + AEO Audits",
  "llms.txt & Schema",
  "GPTShopExpert",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section id="marquee" className="marquee" aria-hidden>
      <motion.div
        className="marquee__track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loop.map((word, i) => (
          <span key={i} style={{ display: "inline-flex", gap: "48px", alignItems: "center" }}>
            <span>{word}</span>
            <span className="marquee__star">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
