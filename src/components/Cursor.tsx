import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 45, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 45, mass: 0.4 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div className="cursor" style={{ x: sx, y: sy }} aria-hidden="true">
      <div className="cursor__ring" />
      <div className="cursor__dot" />
    </motion.div>
  );
}
