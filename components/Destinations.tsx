"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const destinations = [
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    tagline: "Cultura · Arquitectura",
    description: "Recorridos privados y gastronomía de autor.",
    details: ["Arquitectura", "Gastronomía"],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b3d 40%, #16213e 100%)",
    accent: "rgba(139, 106, 46, 0.25)",
  },
  {
    id: "mendoza",
    name: "Mendoza",
    tagline: "Vino · Andes",
    description: "Catas privadas y paisajes de altura.",
    details: ["Catas", "Andes"],
    gradient: "linear-gradient(135deg, #2d1a0e 0%, #4a2c15 40%, #1a0e07 100%)",
    accent: "rgba(139, 106, 46, 0.3)",
  },
  {
    id: "bariloche",
    name: "Bariloche",
    tagline: "Lagos · Silencio",
    description: "Lagos privados y lodges con carácter.",
    details: ["Navegación", "Lodges"],
    gradient: "linear-gradient(135deg, #0d1f2d 0%, #1a3a4a 40%, #0a1520 100%)",
    accent: "rgba(26, 58, 74, 0.45)",
  },
  {
    id: "el-calafate",
    name: "El Calafate",
    tagline: "Glaciares · Escala",
    description: "Perito Moreno en condiciones exclusivas.",
    details: ["Glaciar", "Trekking"],
    gradient: "linear-gradient(135deg, #0a1e30 0%, #1a3d5c 40%, #0a1520 100%)",
    accent: "rgba(26, 61, 92, 0.45)",
  },
  {
    id: "ushuaia",
    name: "Ushuaia",
    tagline: "El fin del mundo",
    description: "Canal Beagle y paisajes australes.",
    details: ["Navegación", "Parque Nacional"],
    gradient: "linear-gradient(135deg, #0f1a20 0%, #1a2e38 40%, #0a1218 100%)",
    accent: "rgba(26, 46, 56, 0.45)",
  },
];

export function Destinations() {
  const [active, setActive] = useState(0);

  return (
    <section id="destinations" className="py-28 lg:py-40" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="mb-8 lg:mb-12">
          <div className="max-w-3xl">
            <h3 className="text-label" style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.24em" }}>Territorios</h3>
            <h2 className="text-display-xl" style={{ color: "var(--text-base)" }}>Cinco paisajes · Cada uno, irreducible.</h2>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-16 items-start">
          <nav className="lg:col-span-4">
            {destinations.map((dest, i) => (
                <button
                key={dest.id}
                className="w-full text-left py-6 flex items-center justify-between"
                style={{ borderBottom: `1px solid ${i === active ? "var(--accent)" : "var(--text-subtle)"}`, transition: "border-color 0.3s" }}
                onClick={() => setActive(i)}
              >
                <div className="flex items-center gap-5">
                  <span className="text-label" style={{ fontSize: "0.5rem", letterSpacing: "0.2em", color: i === active ? "var(--accent)" : "var(--text-subtle)", transition: "color 0.3s" }}>
                    0{i + 1}
                  </span>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: i === active ? 400 : 300, color: i === active ? "var(--text-base)" : "var(--text-muted)", transition: "all 0.3s" }}>
                    {dest.name}
                  </span>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "var(--accent)", opacity: i === active ? 1 : 0, transform: i === active ? "translateX(0)" : "translateX(-4px)", transition: "all 0.3s" }}>
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </nav>

          <div className="lg:col-span-8 relative">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={false}
                animate={i === active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-x-0 top-0"
                style={{ display: i === active ? "block" : "none" }}
              >
                <div className="w-full mb-8 rounded-sm overflow-hidden" style={{ height: "300px" }}>
                  <div className="w-full h-full" style={{ background: dest.gradient }}>
                      <div className="w-full h-full flex items-end p-6" style={{ background: `radial-gradient(ellipse 70% 60% at 30% 40%, ${dest.accent}, transparent)` }}>
                        <span className="text-label" style={{ color: "var(--text-subtle)", fontSize: "0.5rem", letterSpacing: "0.18em" }}>
                        {dest.tagline.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-body-refined mb-8" style={{ color: "var(--text-muted)", lineHeight: 1.85, maxWidth: "38rem" }}>
                  {dest.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {dest.details.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span className="w-3 h-px flex-shrink-0" style={{ background: "var(--accent)" }} />
                      <span className="text-body-refined" style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <div style={{ height: "620px" }} aria-hidden="true" />
          </div>
        </div>

        {/* Mobile */}
        <StaggerContainer className="lg:hidden flex flex-col gap-14" staggerDelay={0.08}>
          {destinations.map((dest) => (
            <StaggerItem key={dest.id}>
              <div className="w-full mb-5 rounded-sm overflow-hidden" style={{ height: "200px" }}>
                <div className="w-full h-full" style={{ background: dest.gradient }} />
              </div>
              <span className="text-label block mb-2" style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.22em" }}>
                {dest.tagline}
              </span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "var(--text-base)", marginBottom: "1rem" }}>
                {dest.name}
              </h3>
              <p className="text-body-refined" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                {dest.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
