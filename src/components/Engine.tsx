import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * An isometric 3D gear engine. Four horizontal gears stacked vertically, each
 * spinning at a different rate / direction — visualizing the 4-step process
 * beneath as mechanical layers. The outer cage and grid floor are motionless
 * (the calm exterior); everything inside is in constant motion (relentless).
 */

type GearProps = {
  size: number;
  teeth: number;
  accent?: boolean;
};
function Gear({ size, teeth, accent }: GearProps) {
  const r = size / 2;
  const color = accent ? "#d4ff3a" : "#f4f4f4";
  const dim = "rgba(255,255,255,0.4)";
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "block", overflow: "visible" }}
    >
      {/* Teeth — radial ticks */}
      {Array.from({ length: teeth }).map((_, i) => {
        const a = (i / teeth) * 360;
        return (
          <rect
            key={i}
            x={r - 3}
            y={2}
            width={6}
            height={10}
            fill={color}
            transform={`rotate(${a} ${r} ${r})`}
          />
        );
      })}
      {/* Outer rim */}
      <circle cx={r} cy={r} r={r - 12} fill="none" stroke={color} strokeWidth={1.5} />
      <circle cx={r} cy={r} r={r - 16} fill="#0a0a0a" stroke={dim} strokeWidth={0.8} />
      {/* Spokes */}
      {[0, 60, 120].map((a) => (
        <rect
          key={a}
          x={r - 2}
          y={12}
          width={4}
          height={size - 24}
          fill={color}
          opacity={0.9}
          transform={`rotate(${a} ${r} ${r})`}
        />
      ))}
      {/* Inner hub */}
      <circle cx={r} cy={r} r={r * 0.18} fill={accent ? color : "#0a0a0a"} stroke={color} strokeWidth={1.2} />
      <circle cx={r} cy={r} r={3} fill={accent ? "#0a0a0a" : color} />
    </svg>
  );
}

export default function Engine() {
  const stageRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [30, 18]), {
    stiffness: 90,
    damping: 18,
  });
  const tiltZ = useSpring(useTransform(mx, [-0.5, 0.5], [-20, 20]), {
    stiffness: 90,
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

  // 4 gear layers — one per process step
  const gears = [
    { label: "01", title: "DISCOVER", y: -130, size: 110, teeth: 14, speed: 18, dir: 1, accent: false },
    { label: "02", title: "DESIGN", y: -44, size: 140, teeth: 16, speed: 14, dir: -1, accent: false },
    { label: "03", title: "FORGE", y: 44, size: 160, teeth: 18, speed: 6, dir: 1, accent: true },
    { label: "04", title: "LAUNCH", y: 130, size: 110, teeth: 14, speed: 10, dir: -1, accent: false },
  ];

  return (
    <div className="engine" ref={stageRef} onPointerMove={onMove} onPointerLeave={onLeave}>
      {/* Corner frame */}
      <div className="engine__frame">
        <span /> <span /> <span /> <span />
      </div>

      {/* Readouts */}
      <div className="engine__readout engine__readout--tl">
        <span>UNIT</span>
        <strong>PF-ENGINE-04</strong>
      </div>
      <div className="engine__readout engine__readout--tr">
        <span>MODE</span>
        <strong>RELENTLESS</strong>
      </div>
      <div className="engine__readout engine__readout--bl">
        <span>RPM</span>
        <strong>4 / 6 / 10 / 4</strong>
      </div>
      <div className="engine__readout engine__readout--br">
        <span>TEMP</span>
        <strong>NOMINAL</strong>
      </div>

      {/* Pulse beacon */}
      <motion.div
        className="engine__beacon"
        animate={{ opacity: [1, 0.25, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="engine__world"
        style={{ rotateX: tiltX, rotateZ: tiltZ, transformStyle: "preserve-3d" }}
      >
        {/* Slow overall yaw — adds life without distracting */}
        <motion.div
          className="engine__yaw"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Grid floor (calm) */}
          <div className="engine__floor" />
          <div className="engine__floor engine__floor--ceil" />

          {/* Central axis rod */}
          <div className="engine__axis" />
          <div className="engine__axis engine__axis--glow" />

          {/* Cage posts — 4 corners */}
          <div className="engine__post engine__post--a" />
          <div className="engine__post engine__post--b" />
          <div className="engine__post engine__post--c" />
          <div className="engine__post engine__post--d" />

          {/* Gears (relentless) */}
          {gears.map((g) => (
            <motion.div
              key={g.label}
              className="engine__gear"
              style={{
                y: g.y,
                rotateX: 76,
                transformStyle: "preserve-3d",
                width: g.size,
                height: g.size,
                marginLeft: -g.size / 2,
                marginTop: -g.size / 2,
              }}
            >
              <motion.div
                className="engine__gear-spin"
                animate={{ rotateZ: 360 * g.dir }}
                transition={{
                  duration: g.speed,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ width: g.size, height: g.size }}
              >
                <Gear size={g.size} teeth={g.teeth} accent={g.accent} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Labels (screen-space, stay upright) — editorial annotations */}
      <div className="engine__labels" aria-hidden>
        {gears.map((g, i) => (
          <div
            key={g.label}
            className={`engine__tag engine__tag--${i + 1}${g.accent ? " engine__tag--on" : ""}`}
          >
            <span className="engine__tag-num">{g.label}</span>
            <span className="engine__tag-title">{g.title}</span>
            <span className="engine__tag-line" />
          </div>
        ))}
      </div>

      {/* Floor shadow */}
      <div className="engine__shadow" />
    </div>
  );
}
