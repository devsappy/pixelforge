import { motion } from "framer-motion";
import Astronaut from "./Astronaut";

export default function Signal() {
  return (
    <section id="signal" className="signal">
      <header className="section__head">
        <span className="section__eyebrow">// MISSION</span>
        <h2 className="section__title">
          Built at the <em>frontier.</em>
        </h2>
        <p className="section__sub">
          A small, technical studio operating where design, engineering, and
          motion meet. No juniors, no account managers, no drag.
        </p>
      </header>

      <div className="signal__grid">
        <aside className="signal__side signal__side--l">
          <div className="signal__line">
            <span>TRANSMISSION</span>
            <strong>LIVE</strong>
          </div>
          <div className="signal__line">
            <span>OBJECT</span>
            <strong>PF-001</strong>
          </div>
          <div className="signal__line">
            <span>STACK</span>
            <strong>REACT · NEXT · MOTION</strong>
          </div>
          <div className="signal__line">
            <span>FPS</span>
            <strong>60.00</strong>
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
            <span>TRANSCRIPT · 18:04 UTC</span>
            <p>
              "Design is the interface between intent and reality. A great
              website is the only salesperson that never sleeps, never asks for
              a raise, and is on every timezone at once."
            </p>
            <strong>— Pixel Forge Studio Brief</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
