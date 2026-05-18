"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const founders = [
  {
    initial: "V",
    placeholder: "Retrato · Vanesa",
    role: "Estrategia & Relaciones",
    name: "Vanesa",
    bio: "Construye el vínculo con agencias internacionales y la red de proveedores en Argentina. Define la posición de Casa Uno y traduce lo que buscan los viajeros europeos en un lenguaje que el país sabe ofrecer.",
    quote: "Un viaje que se recuerda empieza mucho antes del avión.",
  },
  {
    initial: "J",
    placeholder: "Retrato · Jazmín",
    role: "Diseño & Operación",
    name: "Jazmín",
    bio: "Diseña los itinerarios y opera cada viaje en el territorio. Cada hotel, cada cena, cada transición está pensada por ella. Argentina como un guion donde nada queda librado al azar.",
    quote: "El detalle correcto en el momento correcto cambia todo el viaje.",
  },
];

export function Founders() {
  return (
    <section
      id="equipo"
      style={{
        background: "linear-gradient(180deg, #1A1913 0%, #11110E 100%)",
        padding: "18vh clamp(1.5rem, 6vw, 6rem)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "64rem" }}>
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
              Quiénes diseñan
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
              Dos miradas
              <br />
              <em style={{ fontStyle: "italic", color: "rgba(234, 227, 213, 0.48)" }}>
                sobre el mismo viaje.
              </em>
            </h2>
          </ScrollReveal>
        </div>

        {/* Founders grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20"
          staggerDelay={0.15}
        >
            {founders.map((f) => (
              <StaggerItem key={f.name}>
                {/* Portrait */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    aspectRatio: "4 / 5",
                    width: "100%",
                    background: "linear-gradient(135deg, #1a1813 0%, #0e0d0a 100%)",
                    border: "1px solid rgba(184, 146, 74, 0.18)",
                    marginBottom: "2rem",
                  }}
                >
                  {/* Diagonal hatch */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, transparent 0 18px, rgba(184,146,74,0.04) 18px 19px)",
                    }}
                  />
                  <span
                    className="relative"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(6rem, 12vw, 10rem)",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "rgba(212, 197, 169, 0.22)",
                      lineHeight: 1,
                    }}
                  >
                    {f.initial}
                  </span>
                  <span
                    className="absolute"
                    style={{
                      bottom: "1.25rem",
                      left: "1.25rem",
                      fontSize: "0.5rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(212, 197, 169, 0.32)",
                      fontFamily: "'Inter', monospace",
                    }}
                  >
                    {f.placeholder}
                  </span>
                </div>

                {/* Role */}
                <span
                  className="text-label"
                  style={{
                    display: "block",
                    color: "#B8924A",
                    fontSize: "0.55rem",
                    letterSpacing: "0.24em",
                    marginBottom: "1rem",
                  }}
                >
                  {f.role}
                </span>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                    fontWeight: 300,
                    color: "#D4C5A9",
                    lineHeight: 1.1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {f.name}
                </h3>

                {/* Bio */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(212, 197, 169, 0.6)",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                  }}
                >
                  {f.bio}
                </p>

                {/* Quote */}
                <blockquote
                  style={{
                    borderLeft: "1px solid #8B6A2E",
                    paddingLeft: "1.25rem",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    color: "rgba(234, 227, 213, 0.6)",
                    lineHeight: 1.5,
                  }}
                >
                  {f.quote}
                </blockquote>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
