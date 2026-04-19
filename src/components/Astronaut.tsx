import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

/**
 * Layered pseudo-3D astronaut built from stacked SVG planes.
 * Framer Motion supplies the rotateX/rotateY, translateZ depth, and the
 * idle float — the perspective on the parent + `transformStyle: preserve-3d`
 * turn the flat planes into a dimensional object.
 */

const floatY: Variants = {
  idle: {
    y: [0, -14, 0],
    transition: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const spin: Variants = {
  idle: {
    rotate: [0, 360],
    transition: { duration: 30, repeat: Infinity, ease: "linear" },
  },
};

const entrance = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
};

export default function Astronaut() {
  const stageRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-22, 22]), {
    stiffness: 120,
    damping: 18,
  });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [16, -16]), {
    stiffness: 120,
    damping: 18,
  });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      className="astro"
      ref={stageRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-hidden
    >
      {/* Orbit ring */}
      <motion.svg
        className="astro__orbit"
        viewBox="0 0 600 600"
        variants={spin}
        animate="idle"
      >
        <circle
          cx="300"
          cy="300"
          r="260"
          fill="none"
          stroke="#2a2a2a"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        <circle cx="300" cy="40" r="4" fill="#d4ff3a" />
        <circle cx="560" cy="300" r="2" fill="#a3a3a3" />
        <circle cx="300" cy="560" r="2" fill="#a3a3a3" />
        <circle cx="40" cy="300" r="2" fill="#a3a3a3" />
      </motion.svg>

      {/* Scanning crosshair corners */}
      <div className="astro__frame" aria-hidden>
        <span /> <span /> <span /> <span />
      </div>

      {/* Telemetry readouts */}
      <div className="astro__readout astro__readout--tl">
        <span>ALT</span> <strong>01.218 KM</strong>
      </div>
      <div className="astro__readout astro__readout--tr">
        <span>SIG</span> <strong>98%</strong>
      </div>
      <div className="astro__readout astro__readout--bl">
        <span>UTC</span> <strong>18:04:22</strong>
      </div>
      <div className="astro__readout astro__readout--br">
        <span>ID</span> <strong>PF-001</strong>
      </div>

      <motion.div
        className="astro__body"
        {...entrance}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="astro__float"
          variants={floatY}
          animate="idle"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* --- BACKPACK (deepest layer) --- */}
          <div className="astro__layer" style={{ transform: "translateZ(-60px)" }}>
            <svg width="360" height="480" viewBox="0 0 360 480" fill="none">
              <rect
                x="96"
                y="172"
                width="168"
                height="156"
                fill="#e8e8ea"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <rect x="110" y="186" width="40" height="6" fill="#0a0a0a" />
              <rect x="110" y="200" width="28" height="6" fill="#0a0a0a" />
              <rect x="210" y="186" width="40" height="6" fill="#0a0a0a" />
              <rect x="210" y="200" width="28" height="6" fill="#0a0a0a" />
              <rect
                x="140"
                y="228"
                width="80"
                height="6"
                fill="#d4ff3a"
              />
              <rect
                x="140"
                y="244"
                width="60"
                height="6"
                fill="#0a0a0a"
              />
              <rect
                x="140"
                y="260"
                width="80"
                height="6"
                fill="#0a0a0a"
              />
              <rect
                x="140"
                y="276"
                width="40"
                height="6"
                fill="#0a0a0a"
              />
              <rect
                x="114"
                y="302"
                width="132"
                height="12"
                fill="#0a0a0a"
              />
            </svg>
          </div>

          {/* --- ARMS (slight back) --- */}
          <div className="astro__layer" style={{ transform: "translateZ(-10px)" }}>
            <svg width="360" height="480" viewBox="0 0 360 480" fill="none">
              {/* Left arm */}
              <rect
                x="40"
                y="200"
                width="60"
                height="100"
                fill="#f4f4f4"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <rect x="46" y="226" width="48" height="4" fill="#0a0a0a" />
              <rect x="46" y="254" width="48" height="4" fill="#0a0a0a" />
              {/* Left glove */}
              <rect
                x="32"
                y="300"
                width="76"
                height="56"
                fill="#0a0a0a"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <rect x="40" y="320" width="60" height="3" fill="#d4ff3a" />
              {/* Right arm */}
              <rect
                x="260"
                y="200"
                width="60"
                height="100"
                fill="#f4f4f4"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <rect x="266" y="226" width="48" height="4" fill="#0a0a0a" />
              <rect x="266" y="254" width="48" height="4" fill="#0a0a0a" />
              {/* Right glove */}
              <rect
                x="252"
                y="300"
                width="76"
                height="56"
                fill="#0a0a0a"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <rect x="260" y="320" width="60" height="3" fill="#d4ff3a" />
            </svg>
          </div>

          {/* --- BODY / TORSO --- */}
          <div className="astro__layer" style={{ transform: "translateZ(0px)" }}>
            <svg width="360" height="480" viewBox="0 0 360 480" fill="none">
              {/* Chest / torso */}
              <rect
                x="110"
                y="188"
                width="140"
                height="170"
                fill="#fafafa"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              {/* Shoulder band */}
              <rect x="110" y="196" width="140" height="8" fill="#0a0a0a" />
              <rect x="110" y="208" width="140" height="4" fill="#d4ff3a" />
              {/* Chest control module */}
              <rect
                x="130"
                y="232"
                width="100"
                height="66"
                fill="#0a0a0a"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <rect x="140" y="242" width="14" height="14" fill="#d4ff3a" />
              <rect x="160" y="242" width="14" height="14" fill="#6b6b6b" />
              <rect x="180" y="242" width="14" height="14" fill="#6b6b6b" />
              <rect x="200" y="242" width="14" height="14" fill="#6b6b6b" />
              <rect x="140" y="262" width="74" height="4" fill="#f4f4f4" />
              <rect x="140" y="272" width="60" height="4" fill="#6b6b6b" />
              <rect x="140" y="282" width="40" height="4" fill="#6b6b6b" />
              {/* Belt */}
              <rect x="110" y="310" width="140" height="14" fill="#0a0a0a" />
              {/* Waist */}
              <rect
                x="120"
                y="324"
                width="120"
                height="34"
                fill="#e8e8ea"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              {/* Tether / hose curve */}
              <path
                d="M 110 270 Q 80 270 80 300"
                stroke="#0a0a0a"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          {/* --- HELMET (outer) --- */}
          <div className="astro__layer" style={{ transform: "translateZ(30px)" }}>
            <svg width="360" height="480" viewBox="0 0 360 480" fill="none">
              {/* Antenna */}
              <rect x="178" y="28" width="4" height="26" fill="#0a0a0a" />
              <circle cx="180" cy="24" r="6" fill="#d4ff3a" />

              {/* Helmet body */}
              <rect
                x="86"
                y="54"
                width="188"
                height="140"
                rx="0"
                fill="#ffffff"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              {/* Helmet top rim */}
              <rect x="86" y="54" width="188" height="10" fill="#0a0a0a" />
              {/* Helmet bottom rim */}
              <rect x="86" y="184" width="188" height="10" fill="#0a0a0a" />
              <rect x="86" y="184" width="188" height="4" fill="#d4ff3a" />

              {/* Side communication knobs */}
              <rect
                x="78"
                y="110"
                width="12"
                height="30"
                fill="#0a0a0a"
              />
              <rect
                x="270"
                y="110"
                width="12"
                height="30"
                fill="#0a0a0a"
              />
            </svg>
          </div>

          {/* --- VISOR --- */}
          <div className="astro__layer" style={{ transform: "translateZ(40px)" }}>
            <svg width="360" height="480" viewBox="0 0 360 480" fill="none">
              <rect
                x="106"
                y="80"
                width="148"
                height="90"
                fill="#0a0a0a"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              {/* Reflection streaks */}
              <rect
                x="116"
                y="92"
                width="40"
                height="8"
                fill="#2a2a2a"
              />
              <rect
                x="116"
                y="108"
                width="24"
                height="4"
                fill="#2a2a2a"
              />
              <rect
                x="204"
                y="140"
                width="40"
                height="6"
                fill="#2a2a2a"
              />
              {/* Crosshair HUD */}
              <line
                x1="180"
                y1="102"
                x2="180"
                y2="148"
                stroke="#d4ff3a"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              <line
                x1="130"
                y1="125"
                x2="230"
                y2="125"
                stroke="#d4ff3a"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              <circle
                cx="180"
                cy="125"
                r="10"
                fill="none"
                stroke="#d4ff3a"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* --- VISOR HIGHLIGHT (front-most) --- */}
          <div className="astro__layer" style={{ transform: "translateZ(48px)" }}>
            <svg width="360" height="480" viewBox="0 0 360 480" fill="none">
              <rect
                x="220"
                y="86"
                width="24"
                height="58"
                fill="#f4f4f4"
                opacity="0.18"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Floor shadow */}
      <div className="astro__shadow" aria-hidden />
    </div>
  );
}
