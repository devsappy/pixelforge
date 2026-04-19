import { type ReactNode } from "react";
import { motion } from "framer-motion";

// Boxy, no-tilt card. Keeps whileHover for subtle lift only.
export default function TiltCard({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
