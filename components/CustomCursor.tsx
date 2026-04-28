"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const shouldReduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    setIsMobile(!mq.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(!e.matches);
    mq.addEventListener("change", handleChange);

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      mq.removeEventListener("change", handleChange);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY]);

  if (isMobile || shouldReduce) return null;

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          border: "1px solid rgba(212, 197, 169, 0.35)",
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#D4C5A9",
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}
