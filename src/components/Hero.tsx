import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Satellite from "./Satellite";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const rise: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero__grid" style={{ y: yGrid }} aria-hidden />

      <motion.div
        className="hero__scene"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero__text">
          <motion.span className="hero__eyebrow" variants={rise}>
            <span className="dot" /> EST · 2021 / STUDIO
          </motion.span>

          <motion.h1 className="hero__title" style={{ y: yTitle }}>
            <motion.span className="hero__line" variants={rise}>
              We don't just
            </motion.span>
            <motion.span className="hero__line hero__line--serif" variants={rise}>
              build websites.
            </motion.span>
            <motion.span className="hero__line hero__line--outline" variants={rise}>
              We forge them.
            </motion.span>
          </motion.h1>

          <motion.p className="hero__sub" variants={rise}>
            GPTShopExpert is a design &amp; engineering studio. We turn brands into
            precise, high-performance websites — engineered end-to-end, shipped at
            60fps, measured on every metric.
          </motion.p>

          <motion.div className="hero__ctas" variants={rise}>
            <a href="#contact" className="btn btn--primary">
              <span>Book a call</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 13 L13 3 M13 3 H6 M13 3 V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
            <a href="#work" className="btn btn--ghost">
              <span>See the work</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__stage"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Satellite />
        </motion.div>
      </motion.div>

      <a href="#marquee" className="hero__scroll" aria-label="Scroll">
        <span>Scroll</span>
        <span className="hero__scroll-track">
          <span />
        </span>
      </a>
    </section>
  );
}
