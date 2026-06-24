"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";
import { SectionHeader } from "./ui/SectionHeader";

const points = [
  {
    index: "i",
    title: "Curaduría humana",
    body: "Cada viaje es diseñado por personas, no por algoritmos. Escuchamos, interpretamos y componemos una propuesta que refleja quién sos como viajero.",
  },
  {
    index: "ii",
    title: "Identidad local",
    body: "Trabajamos con una red de guías, productores y anfitriones que conocen Argentina desde adentro. No mostramos el país — lo abrimos.",
  },
  {
    index: "iii",
    title: "El wow silencioso",
    body: "Los mejores momentos de un viaje no se anuncian. Se diseñan con detalle, se ejecutan con precisión y se sienten como algo que simplemente... pasa.",
  },
];

export function Differentiators() {
  return (
    <section className="py-28 lg:py-40" style={{ background: "#141411" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <SectionHeader label="La diferencia" title="Lo que nos hace distintos." layout="stacked" />

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

                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "#D4C5A9", lineHeight: 1.25, marginBottom: "0.5rem" }}>
                  {point.title}
                </h3>

                <p className="text-body-refined" style={{ color: "rgba(212, 197, 169, 0.5)", lineHeight: 1.6 }}>
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
