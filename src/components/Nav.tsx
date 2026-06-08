import { motion, useScroll, useTransform } from "framer-motion";

export default function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 200],
    ["rgba(10,10,20,0.4)", "rgba(10,10,20,0.78)"]
  );

  return (
    <motion.header
      className="nav"
      initial={{ y: -40, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{ background: bg, left: "50%" }}
    >
      <a href="#top" className="nav__logo" aria-label="GPTShopExpert home">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 2 L30 10 L30 22 L16 30 L2 22 L2 10 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 2 L16 16 L30 10 M16 16 L2 10 M16 16 L16 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <span>
          GPTShop<em>Expert</em>
        </span>
      </a>
      <nav className="nav__links" aria-label="Primary">
        <a href="#work">Results</a>
        <a href="#skills">Capabilities</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
      </nav>
      <a href="#contact" className="nav__cta">
        Free audit
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 11 L11 3 M11 3 H5 M11 3 V9" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </a>
    </motion.header>
  );
}
