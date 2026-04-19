import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * A true 6-face 3D cube satellite. Each face is a real plane in CSS 3D space
 * (translateZ'd out from cube center). The parent motion.div spins continuously
 * on Y; an outer motion.div adds mouse-driven tilt on X/Z.
 */
export default function Satellite() {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [18, -18]), {
    stiffness: 100,
    damping: 18,
  });
  const tiltZ = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 100,
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
      className="sat"
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-hidden
    >
      {/* Corner brackets frame */}
      <div className="sat__frame">
        <span /> <span /> <span /> <span />
      </div>

      {/* Telemetry readouts */}
      <div className="sat__readout sat__readout--tl">
        <span>OBJ</span> <strong>PF-SAT-01</strong>
      </div>
      <div className="sat__readout sat__readout--tr">
        <span>STATUS</span> <strong>NOMINAL</strong>
      </div>
      <div className="sat__readout sat__readout--bl">
        <span>ORBIT</span> <strong>LEO</strong>
      </div>
      <div className="sat__readout sat__readout--br">
        <span>V</span> <strong>7.68 KM/S</strong>
      </div>

      {/* Pulse beacon dot */}
      <motion.div
        className="sat__beacon"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Stage: mouse tilt + continuous float */}
      <motion.div
        className="sat__stage"
        style={{ rotateX: tiltX, rotateZ: tiltZ }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Continuous Y-spin */}
        <motion.div
          className="sat__spin"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {/* Antennas */}
          <div className="sat__antenna sat__antenna--l" />
          <div className="sat__antenna sat__antenna--r" />
          <div className="sat__antenna-dish" />

          {/* Cube (6 faces) */}
          <div className="sat__cube">
            {/* FRONT — camera / lens */}
            <div className="sat__face sat__face--front">
              <div className="sat__tag">
                <span>PIXEL</span>
                <strong>FORGE</strong>
              </div>
              <div className="sat__lens">
                <div className="sat__lens-ring" />
                <div className="sat__lens-ring sat__lens-ring--2" />
                <div className="sat__lens-core" />
              </div>
              <div className="sat__ticks">
                <i /> <i /> <i /> <i /> <i />
              </div>
            </div>

            {/* BACK — vent grid */}
            <div className="sat__face sat__face--back">
              <div className="sat__grid-vent">
                {Array.from({ length: 36 }).map((_, i) => (
                  <i key={i} />
                ))}
              </div>
              <div className="sat__badge">01</div>
            </div>

            {/* RIGHT — control panel */}
            <div className="sat__face sat__face--right">
              <div className="sat__label">CTRL // PANEL</div>
              <div className="sat__buttons">
                <i className="sat__btn sat__btn--on" />
                <i className="sat__btn" />
                <i className="sat__btn" />
                <i className="sat__btn" />
              </div>
              <div className="sat__bars">
                <i style={{ width: "82%" }} />
                <i style={{ width: "64%" }} />
                <i style={{ width: "38%" }} />
              </div>
            </div>

            {/* LEFT — ID plate */}
            <div className="sat__face sat__face--left">
              <div className="sat__label">SERIAL</div>
              <div className="sat__serial">2026-PF-01</div>
              <div className="sat__stripes">
                <i /> <i /> <i /> <i /> <i />
              </div>
            </div>

            {/* TOP — sensor array */}
            <div className="sat__face sat__face--top">
              <div className="sat__top-grid">
                <i /> <i /> <i />
                <i /> <i /> <i />
                <i /> <i /> <i />
              </div>
            </div>

            {/* BOTTOM — thruster */}
            <div className="sat__face sat__face--bottom">
              <div className="sat__thruster" />
              <div className="sat__thruster sat__thruster--sm" />
            </div>
          </div>

          {/* Solar panel wings — attached to cube, rotate with it */}
          <div className="sat__panel sat__panel--left">
            <div className="sat__panel-grid">
              {Array.from({ length: 18 }).map((_, i) => (
                <i key={i} />
              ))}
            </div>
          </div>
          <div className="sat__panel sat__panel--right">
            <div className="sat__panel-grid">
              {Array.from({ length: 18 }).map((_, i) => (
                <i key={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floor shadow */}
      <div className="sat__shadow" />
    </div>
  );
}
