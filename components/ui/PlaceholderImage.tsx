"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PlaceholderImageProps {
  gradient: string;
  label?: string;
  className?: string;
  parallax?: boolean;
  overlayOpacity?: number;
}

export function PlaceholderImage({
  gradient,
  label,
  className = "",
  parallax = false,
  overlayOpacity = 0,
}: PlaceholderImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={parallax ? { y } : {}}
        initial={parallax ? { scale: 1.08 } : {}}
      >
        <div
          className="w-full h-full"
          style={{ background: gradient }}
        />
      </motion.div>
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0"
          style={{ background: `rgba(12, 12, 10, ${overlayOpacity})` }}
        />
      )}
      {label && (
        <div className="absolute bottom-4 right-4 text-label text-white/40">
          {label}
        </div>
      )}
    </div>
  );
}

export function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <div
          className="w-full h-full"
          style={{
            background: `
              linear-gradient(
                160deg,
                #1a2535 0%,
                #2d3f2e 25%,
                #3d2a1a 55%,
                #1c2830 100%
              )
            `,
          }}
        />
        {/* Abstract landscape layers */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 70%, rgba(139, 106, 46, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 70% 30%, rgba(45, 63, 46, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 100% 50% at 50% 90%, rgba(12, 12, 10, 0.6) 0%, transparent 60%)
            `,
          }}
        />
        {/* Horizon line suggestion */}
        <div
          className="absolute w-full"
          style={{
            bottom: "35%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(212, 197, 169, 0.15), transparent)",
          }}
        />
      </motion.div>
      {/* Bottom gradient for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(12,12,10,0.75) 0%, rgba(12,12,10,0.2) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
