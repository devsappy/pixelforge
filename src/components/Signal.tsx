import { motion } from "framer-motion";
import Astronaut from "./Astronaut";

export default function Signal() {
  return (
    <section id="signal" className="signal">
      <header className="section__head">
        <span className="section__eyebrow">// MISSION</span>
        <h2 className="section__title">
          Built for the <em>AI frontier.</em>
        </h2>
        <p className="section__sub">
          A specialist GEO agency operating where search, AI, and content meet.
          We turn your expertise into the answers AI engines quote — no fluff, no
          guesswork, no vanity metrics.
        </p>
      </header>

      <div className="signal__grid">
        <aside className="signal__side signal__side--l">
          <div className="signal__line">
            <span>CITATIONS</span>
            <strong>RISING</strong>
          </div>
          <div className="signal__line">
            <span>AUDIT</span>
            <strong>GEO-001</strong>
          </div>
          <div className="signal__line">
            <span>ENGINES</span>
            <strong>GPT · PERPLEXITY · GEMINI</strong>
          </div>
          <div className="signal__line">
            <span>SCORE</span>
            <strong>94 / 100</strong>
          </div>
        </aside>

        <motion.div
          className="signal__stage"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <Astronaut />
        </motion.div>

        <aside className="signal__side signal__side--r">
          <div className="signal__quote">
            <span>FIELD NOTE · 18:04 UTC</span>
            <p>
              "The new homepage is an AI answer. If the model can't read, quote,
              and trust your site, you don't exist to the customer — no matter
              how well you rank on Google."
            </p>
            <strong>— GPTShopExpert Field Notes</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
