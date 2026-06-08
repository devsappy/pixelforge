import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const v = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(v, target, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = Math.round(latest) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix, v]);

  return <strong ref={ref}>{0 + suffix}</strong>;
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stat">
        <Counter target={94} />
        <span>Avg. GEO score we deliver</span>
      </div>
      <div className="stat">
        <Counter target={312} suffix="%" />
        <span>Lift in AI citations</span>
      </div>
      <div className="stat">
        <Counter target={5} />
        <span>AI engines optimized for</span>
      </div>
      <div className="stat">
        <Counter target={24} suffix="/7" />
        <span>Citation monitoring</span>
      </div>
    </section>
  );
}
