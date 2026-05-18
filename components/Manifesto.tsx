"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const pillars = [
  {
    num: "i.",
    title: "Curaduría humana",
    body: "Cada itinerario se construye a medida. No vendemos catálogo: diseñamos un viaje pensado para una persona específica, con su tiempo y su sensibilidad.",
  },
  {
    num: "ii.",
    title: "Identidad local real",
    body: "Hoteles boutique, productores, enólogos, guías privados. Una red propia construida con años de vínculo. Argentina contada por quienes la habitan.",
  },
  {
    num: "iii.",
    title: "El wow silencioso",
    body: "Detalles que no se piden y se recuerdan. Un Malbec esperando en la habitación, un atardecer reservado. Diseño emocional, no espectáculo.",
  },
];

export function Manifesto() {
  return (
    <section
      id="filosofia"
      className="relative"
      style={{
        background: "linear-gradient(180deg, #0C0C0A 0%, #141411 100%)",
        padding: "18vh clamp(1.5rem, 6vw, 6rem)",
      }}
    >
      <div className="grid mx-auto" style={{ maxWidth: "64rem", gap: "5rem" }}>
        {/* Claim */}
        <ScrollReveal>
          <div>
            <span
              className="text-label"
              style={{
                color: "#B8924A",
                fontSize: "0.55rem",
                letterSpacing: "0.24em",
                display: "inline-block",
              }}
            >
              Filosofía
            </span>
            <h3
              style={{
                marginTop: "2rem",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
                lineHeight: 1.25,
                letterSpacing: "-0.005em",
                color: "#EAE3D5",
                maxWidth: "48rem",
                position: "relative",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "2rem",
                  height: "1px",
                  background: "#8B6A2E",
                  marginBottom: "2rem",
                }}
              />
              Sabemos lo que el viajero europeo ama,{" "}
              <em style={{ fontStyle: "italic", color: "rgba(234, 227, 213, 0.45)" }}>
                y en Argentina lo llevamos a un lugar que no esperaba.
              </em>
            </h3>
          </div>
        </ScrollReveal>

        {/* Three pillars */}
        <StaggerContainer
          className="grid"
          staggerDelay={0.12}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: "1fr",
              gap: "3rem",
              paddingTop: "4rem",
              borderTop: "1px solid rgba(139, 106, 46, 0.12)",
            }}
          >
            <PillarsGrid />
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

function PillarsGrid() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3"
      style={{ gap: "3rem" }}
    >
      {pillars.map((p) => (
        <StaggerItem key={p.num}>
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "#B8924A",
                fontStyle: "italic",
                marginBottom: "1rem",
              }}
            >
              {p.num}
            </span>
            <h4
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "#D4C5A9",
                lineHeight: 1.2,
                marginBottom: "1rem",
                letterSpacing: "-0.005em",
              }}
            >
              {p.title}
            </h4>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(212, 197, 169, 0.54)",
                lineHeight: 1.7,
              }}
            >
              {p.body}
            </p>
          </div>
        </StaggerItem>
      ))}
    </div>
  );
}
