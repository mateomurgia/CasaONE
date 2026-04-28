"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduce = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduce) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60]"
      style={{
        height: "2px",
        background: "#8B6A2E",
        scaleX,
        transformOrigin: "left",
      }}
    />
  );
}
