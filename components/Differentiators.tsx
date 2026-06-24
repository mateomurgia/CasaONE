"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const pillars = [
  {
    index: "i.",
    title: "Curaduría humana",
    body: "Cada itinerario se crea desde cero. Escuchamos lo que imaginás y lo transformamos en una experiencia única, pensada exclusivamente para vos.",
  },
  {
    index: "ii.",
    title: "Identidad local",
    body: "Elegimos cada hotel, experiencia y recomendación con criterio, sensibilidad y conocimiento. Menos cantidad, más calidad.",
  },
  {
    index: "iii.",
    title: "El wow silencioso",
    body: "Un traslado perfectamente coordinado. Una mesa reservada en el momento justo. Un hotel que supera tus expectativas. Son esos pequeños detalles los que transforman un viaje en una experiencia inolvidable.",
  },
];

export function Differentiators() {
  return (
    <section
      className="py-28 lg:py-40"
      style={{ background: "var(--bg-contrast)" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <ScrollReveal delay={0.1} direction="none">
          <div className="flex items-center gap-3 mb-16">
            <span className="divider-earth" />
            <span
              className="text-label"
              style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.24em" }}
            >
              Nuestra diferencia
            </span>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-px"
          staggerDelay={0.1}
        >
          {pillars.map((p) => (
            <StaggerItem key={p.index}>
              <motion.div
                className="p-8 lg:p-12 flex flex-col gap-5 h-full transition-all duration-500"
                style={{ border: "1px solid rgba(226, 221, 213, 0.06)" }}
                whileHover={{ background: "rgba(139, 106, 46, 0.06)" }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--accent)",
                  }}
                >
                  {p.index}
                </span>

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "var(--text-inverse)",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  className="text-body-refined"
                  style={{ color: "var(--text-subtle)", lineHeight: 1.75 }}
                >
                  {p.body}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
