import { useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function CTA() {
  const [label, setLabel] = useState("Send it →");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLabel("Sent ✓");
    setTimeout(() => {
      setLabel("Send it →");
      (e.target as HTMLFormElement).reset();
    }, 1800);
  };

  return (
    <section id="contact" className="cta">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <TiltCard className="cta__inner" max={4}>
          <h2>
            Got a brand that
            <br />
            deserves <em>more?</em>
          </h2>
          <p>Tell us about it. We reply within a day. No pitch decks, no sales calls.</p>
          <form className="cta__form" onSubmit={onSubmit}>
            <label>
              <span>Your email</span>
              <input
                type="email"
                required
                placeholder="you@brand.com"
                autoComplete="email"
              />
            </label>
            <label>
              <span>What are you building?</span>
              <input type="text" required placeholder="A cinematic site for…" />
            </label>
            <button type="submit">{label}</button>
          </form>
        </TiltCard>
      </motion.div>
    </section>
  );
}
