"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Perfil",
    body: "Escuchamos al viajero. Tiempo, ritmo, intereses, vínculos. Lo que busca, lo que evita.",
  },
  {
    num: "02",
    title: "Diseño",
    body: "Construimos un itinerario único: hoteles, experiencias, ritmo. Una narrativa, no un check-list.",
  },
  {
    num: "03",
    title: "Ajuste",
    body: "Refinamos hasta que el viaje se siente propio. Cambios, sugerencias, detalles a pedido.",
  },
  {
    num: "04",
    title: "Ejecución",
    body: "Coordinamos toda la operación local. Proveedores, traslados, reservas. El viajero solo viaja.",
  },
  {
    num: "05",
    title: "Acompañamiento",
    body: "Estamos disponibles durante todo el viaje. Si algo cambia, lo resolvemos en tiempo real.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      style={{
        background: "linear-gradient(180deg, #17160F 0%, #1A1913 100%)",
        padding: "18vh clamp(1.5rem, 6vw, 6rem)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "72rem" }}>
        {/* Heading */}
        <div className="text-center" style={{ marginBottom: "6rem" }}>
          <ScrollReveal direction="none" delay={0.05}>
            <span
              className="text-label"
              style={{
                display: "block",
                marginBottom: "1.5rem",
                color: "#B8924A",
                fontSize: "0.55rem",
                letterSpacing: "0.24em",
              }}
            >
              Modelo de trabajo
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#EAE3D5",
              }}
            >
              Cómo trabajamos
              <br />
              <em style={{ fontStyle: "italic", color: "rgba(234, 227, 213, 0.48)" }}>
                un viaje, paso a paso.
              </em>
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-5"
          staggerDelay={0.08}
        >
          {steps.map((s) => (
            <StaggerItem key={s.num} className="md:px-3">
              <div
                style={{
                  padding: "2rem 0",
                  position: "relative",
                  borderTop: "1px solid rgba(139, 106, 46, 0.2)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "2.6rem",
                    fontWeight: 300,
                    color: "rgba(212, 197, 169, 0.18)",
                    lineHeight: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {s.num}
                </span>
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#D4C5A9",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  {s.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(212, 197, 169, 0.54)",
                    lineHeight: 1.65,
                  }}
                >
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
