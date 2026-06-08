import { motion } from "framer-motion";

/**
 * Architectural pencil sketch. Clean graphite strokes on cream paper,
 * real cross-hatching lines for tonal shading. No displacement filter —
 * the imperfection comes from stroke weight variation and restraint.
 */
export default function PencilSketch() {
  // Build cross-hatch line arrays programmatically so they read as
  // genuine graphite shading rather than a repeating pattern fill.
  const hatch = (x: number, y: number, w: number, h: number, step = 5) => {
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let d = -h; d < w + h; d += step) {
      const x1 = Math.max(x + d, x);
      const y1 = Math.max(y + d - w + h, y);
      const x2 = Math.min(x + d + h, x + w);
      const y2 = Math.min(y + d, y + h);
      if (x2 > x1 && y2 > y1 && !(x1 === x2 || y1 === y2))
        lines.push({ x1: x + d, y1: y, x2: x + d - h, y2: y + h });
    }
    return lines.filter(
      (l) =>
        (l.x1 >= x || l.x2 >= x) &&
        (l.x1 <= x + w || l.x2 <= x + w) &&
        (l.y1 >= y || l.y2 >= y) &&
        (l.y1 <= y + h || l.y2 <= y + h)
    );
  };

  const shade1 = hatch(86, 214, 348, 12, 4);
  const shade2 = hatch(320, 76, 120, 16, 4);

  return (
    <div className="sketch">
      <svg
        className="sketch__svg"
        viewBox="0 0 640 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Paper background */}
        <rect x="0" y="0" width="640" height="400" fill="#ece3cf" />

        {/* Paper grain — very faint noise */}
        <defs>
          <filter id="paper-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" />
            <feColorMatrix values="0 0 0 0 0.4  0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 0.08 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <rect
          x="0"
          y="0"
          width="640"
          height="400"
          fill="#000"
          filter="url(#paper-grain)"
        />

        {/* Faint margin lines — drafting grid */}
        <g stroke="#b8a580" strokeWidth="0.4" opacity="0.55">
          <line x1="64" y1="24" x2="64" y2="376" />
          <line x1="24" y1="64" x2="616" y2="64" />
          <line x1="576" y1="24" x2="576" y2="376" />
          <line x1="24" y1="336" x2="616" y2="336" />
        </g>

        {/* Register marks in corners */}
        <g stroke="#1a1a1a" strokeWidth="0.6" fill="none">
          <path d="M 20 20 L 28 20 L 28 28" />
          <path d="M 620 20 L 612 20 L 612 28" />
          <path d="M 20 380 L 28 380 L 28 372" />
          <path d="M 620 380 L 612 380 L 612 372" />
        </g>

        {/* Title block */}
        <g
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fontSize="8"
          fill="#1a1a1a"
          letterSpacing="0.08em"
        >
          <text x="72" y="42">GPTSHOPEXPERT / FIG.01</text>
          <text x="72" y="54" opacity="0.55">WIREFRAME STUDY · 2H GRAPHITE</text>
          <text x="508" y="42" textAnchor="start">SCALE 1:1</text>
          <text x="508" y="54" opacity="0.55" textAnchor="start">SHEET A / PROJECT WEB</text>
        </g>

        {/* Cross-hatch shading under hero + below buttons */}
        <g stroke="#3a3326" strokeWidth="0.5" opacity="0.55">
          {shade1.map((l, i) => (
            <line key={`s1-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
          ))}
          {shade2.map((l, i) => (
            <line key={`s2-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
          ))}
        </g>

        {/* --- Main drafting strokes — confident, single-weight --- */}
        <g
          stroke="#1a1a1a"
          strokeWidth="1.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        >
          {/* Page outline */}
          <rect x="86" y="76" width="468" height="258" />

          {/* Nav bar */}
          <line x1="86" y1="100" x2="554" y2="100" />
          <circle cx="100" cy="88" r="2" fill="#1a1a1a" />
          <line x1="110" y1="88" x2="134" y2="88" strokeWidth="0.8" />
          <line x1="148" y1="88" x2="170" y2="88" strokeWidth="0.8" />
          <line x1="184" y1="88" x2="206" y2="88" strokeWidth="0.8" />
          <rect x="504" y="82" width="44" height="12" fill="#d4ff3a" />

          {/* Hero block with diagonal image cross */}
          <rect x="102" y="118" width="436" height="96" />
          <line x1="102" y1="118" x2="538" y2="214" strokeWidth="0.6" />
          <line x1="538" y1="118" x2="102" y2="214" strokeWidth="0.6" />

          {/* Small fig label inside hero */}
          <circle cx="320" cy="166" r="14" />
          <text
            x="320"
            y="170"
            textAnchor="middle"
            fontSize="10"
            fontFamily="ui-monospace, monospace"
            fill="#1a1a1a"
            stroke="none"
          >
            A
          </text>

          {/* Title placeholder — solid bar */}
          <rect x="102" y="234" width="260" height="10" fill="#1a1a1a" />
          <rect x="102" y="250" width="190" height="10" fill="#1a1a1a" />

          {/* Body lines */}
          <line x1="102" y1="272" x2="360" y2="272" strokeWidth="0.7" />
          <line x1="102" y1="282" x2="340" y2="282" strokeWidth="0.7" />
          <line x1="102" y1="292" x2="260" y2="292" strokeWidth="0.7" />

          {/* CTA buttons */}
          <rect x="102" y="306" width="86" height="20" fill="#1a1a1a" />
          <rect x="196" y="306" width="74" height="20" />
        </g>

        {/* Annotation layer */}
        <g stroke="#1a1a1a" strokeWidth="0.7" fill="none" strokeLinecap="round">
          {/* Top dimension bracket */}
          <line x1="86" y1="66" x2="554" y2="66" />
          <line x1="86" y1="62" x2="86" y2="70" />
          <line x1="554" y1="62" x2="554" y2="70" />
          <line x1="320" y1="62" x2="320" y2="70" />

          {/* Side dimension bracket */}
          <line x1="568" y1="118" x2="568" y2="214" />
          <line x1="564" y1="118" x2="572" y2="118" />
          <line x1="564" y1="214" x2="572" y2="214" />

          {/* Leader line to hero */}
          <line x1="460" y1="166" x2="600" y2="120" />
          <circle cx="460" cy="166" r="1.5" fill="#1a1a1a" />

          {/* Leader line to nav */}
          <line x1="260" y1="88" x2="260" y2="50" />

          {/* Leader line to primary CTA */}
          <line x1="145" y1="326" x2="145" y2="358" />
        </g>

        {/* Annotation text */}
        <g
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fontSize="8"
          fill="#1a1a1a"
          letterSpacing="0.08em"
        >
          <text x="320" y="58" textAnchor="middle">468 UNITS</text>
          <text x="580" y="168" writingMode="vertical-rl">96 U</text>
          <text x="602" y="115">HERO · A</text>
          <text x="602" y="126" opacity="0.55">16:9 MEDIA</text>
          <text x="264" y="46">TOP NAV</text>
          <text x="150" y="372" textAnchor="middle">PRIMARY</text>
        </g>

        {/* --- The pencil, resting on the drawing --- */}
        <g transform="translate(380 340) rotate(-14)">
          {/* shaft */}
          <rect x="0" y="0" width="170" height="12" fill="#ece3cf" stroke="#1a1a1a" strokeWidth="1.1" />
          <line x1="20" y1="0" x2="20" y2="12" stroke="#1a1a1a" strokeWidth="0.8" />
          <line x1="38" y1="0" x2="38" y2="12" stroke="#1a1a1a" strokeWidth="0.8" />
          {/* hex wood pattern, thin lines */}
          <line x1="20" y1="4" x2="160" y2="4" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.5" />
          <line x1="20" y1="8" x2="160" y2="8" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.5" />
          {/* ferrule */}
          <rect x="152" y="0" width="6" height="12" fill="#1a1a1a" />
          {/* eraser */}
          <rect x="158" y="0" width="12" height="12" fill="#d4ff3a" stroke="#1a1a1a" strokeWidth="1" />
          {/* wood tip */}
          <path d="M 0 0 L -14 6 L 0 12 Z" fill="#ece3cf" stroke="#1a1a1a" strokeWidth="1.1" />
          {/* graphite core */}
          <path d="M -6 3 L -14 6 L -6 9 Z" fill="#1a1a1a" />
        </g>

        {/* Soft graphite trail from pencil tip upward */}
        <g stroke="#1a1a1a" strokeWidth="0.5" opacity="0.28" fill="none">
          <path d="M 366 341 q 20 -12 40 -10 q 22 4 40 -6" />
        </g>
      </svg>

      <motion.div
        className="sketch__meta"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="sketch__fig">FIG. 01 — WIREFRAME STUDY</span>
        <h4>
          Graphite <em>before</em> pixels.
        </h4>
        <p>
          Every project begins on paper. We draft the layout, argue with a pencil,
          then commit to code once the structure earns its ink.
        </p>
        <div className="sketch__coords">
          <span>A4 · 240gsm</span>
          <span>2H · HB</span>
          <span>PF-2026</span>
        </div>
      </motion.div>
    </div>
  );
}
