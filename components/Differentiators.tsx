"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { SectionHeader } from "./ui/SectionHeader";

const points = [
  { index: "01", title: "Curaduría, no catálogo", body: "Selección con criterio." },
  { index: "02", title: "Primero escuchamos", body: "Entendemos al viajero." },
  { index: "03", title: "Sorpresas sutiles", body: "Detalles que emocionan." },
  { index: "04", title: "Identidad local", body: "Autenticidad cultural." },
  { index: "05", title: "Partner, no proveedor", body: "Relación de confianza." },
  { index: "06", title: "Acompañamiento", body: "Presencia completa." },
];

export function Differentiators() {
  return (
    <section className="py-28 lg:py-40" style={{ background: "var(--bg-contrast)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <SectionHeader label="La diferencia" title="Seis principios" subtitle="Curaduría, no catálogo" layout="stacked" />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mt-8" staggerDelay={0.08}>
          {points.map((point) => (
            <StaggerItem key={point.index}>
              <motion.div
                className="p-8 lg:p-10 transition-all duration-500 cursor-default relative group"
                style={{ border: "1px solid rgba(226, 221, 213, 0.06)" }}
                whileHover={{ background: "rgba(139, 106, 46, 0.06)" }}
              >
                <motion.span className="text-label block mb-6" style={{ color: "var(--accent)", fontSize: "0.52rem", letterSpacing: "0.2em" }} whileHover={{ scale: 1.05 }}>
                  {point.index}
                </motion.span>

                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "var(--text-inverse)", lineHeight: 1.25, marginBottom: "0.5rem" }}>
                  {point.title}
                </h3>

                <p className="text-body-refined" style={{ color: "var(--text-subtle)", lineHeight: 1.6 }}>
                  {point.body}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
