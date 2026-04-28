import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const stops = [
  {
    day: "Días 1–3",
    place: "Buenos Aires",
    tag: "Llegada",
    description:
      "La ciudad antes del viaje. Recorridos privados, una mesa en un restaurante que no tiene cartel, una tarde en los talleres de Palermo. Llegamos despacio.",
    mood: "Cultura · Llegada · Anticipación",
  },
  {
    day: "Días 4–6",
    place: "Mendoza",
    tag: "La vid",
    description:
      "Catas privadas con productores que están redefiniendo el vino argentino. Los Andes al atardecer desde una terraza en altura. Un almuerzo largo que se vuelve cena.",
    mood: "Vino · Paisaje · Altura",
  },
  {
    day: "Días 7–9",
    place: "Bariloche",
    tag: "Los lagos",
    description:
      "El Nahuel Huapi en barco privado. Trekking sin multitudes. Una tarde en un refugio a la orilla del lago donde el silencio es arquitectónico.",
    mood: "Agua · Bosque · Contemplación",
  },
  {
    day: "Días 10–12",
    place: "El Calafate",
    tag: "El hielo",
    description:
      "El Perito Moreno al amanecer. El trekking sobre el glaciar. El sonido que cambia algo en uno. Una noche en estancia con el cielo como techo.",
    mood: "Glaciar · Desierto · Escala",
  },
  {
    day: "Días 13–14",
    place: "Ushuaia",
    tag: "El fin",
    description:
      "El Canal Beagle. La luz de verano a las diez de la noche. La sensación de estar en el borde de algo. El viaje encuentra su sentido acá.",
    mood: "Finitud · Belleza · Memoria",
  },
];

export function SignatureJourney() {
  return (
    <section id="journey" style={{ background: "var(--bg-contrast)" }}>
      {/* Hero del viaje */}
      {/* HERO SECTION */}
      <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: "72vh" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, var(--color-carbon-soft) 0%, var(--color-carbon) 40%, rgba(10,10,10,1) 100%)" }} />
        <div className="absolute w-full h-px" style={{ top: "50%", background: "linear-gradient(90deg, transparent, rgba(139, 106, 46, 0.25) 50%, transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "45%", background: "linear-gradient(to top, rgba(12,12,10,0.9) 0%, transparent 100%)" }} />

        <div className="relative z-10 max-w-screen-xl mx-auto px-8 lg:px-16 py-32 lg:py-48 w-full">
          <ScrollReveal delay={0.1} direction="none">
            <div className="flex items-center gap-3 mb-14">
              <span className="divider-earth" />
              <span className="text-label" style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.24em" }}>
                Viaje insignia · 14 días
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h2 className="text-display-hero max-w-4xl mb-10 lg:mb-12" style={{ color: "var(--text-inverse)" }}>
              De Buenos Aires
              <br />
              <em style={{ fontStyle: "italic", color: "var(--text-subtle)" }}>
                al fin del mundo.
              </em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-body-refined max-w-lg" style={{ color: "var(--text-subtle)", lineHeight: 1.85 }}>
              Catorce días. Cinco paisajes. Un arco continuo de asombro. Argentina en su esencia.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* JOURNEY STOPS */}
      <div className="py-28 lg:py-40" style={{ background: "var(--color-carbon-soft)" }}>
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
          <StaggerContainer staggerDelay={0.08}>
            {stops.map((stop, i) => (
              <StaggerItem key={stop.place}>
                <div
                  className="grid lg:grid-cols-12 gap-12 items-start py-12 lg:py-16"
                  style={{ borderTop: i === 0 ? "none" : "1px solid rgba(226, 221, 213, 0.08)" }}
                >
                  {/* META INFO */}
                  <div className="lg:col-span-2 flex lg:flex-col gap-6 lg:gap-2">
                    <span className="text-label" style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.2em" }}>
                      {stop.day}
                    </span>
                    <span className="text-label" style={{ color: "var(--text-subtle)", fontSize: "0.54rem", letterSpacing: "0.18em" }}>
                      {stop.tag}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="lg:col-span-7 lg:px-10">
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(1.875rem, 4vw, 3rem)",
                        fontWeight: 300,
                        color: "var(--text-inverse)",
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {stop.place}
                    </h3>
                    <p className="text-body-refined" style={{ color: "var(--text-subtle)", lineHeight: 1.9 }}>
                      {stop.description}
                    </p>
                  </div>

                  {/* MOOD */}
                  <div className="lg:col-span-3 lg:flex lg:justify-end lg:text-right">
                    <span className="text-label" style={{ color: "var(--text-subtle)", fontSize: "0.54rem", letterSpacing: "0.16em", fontStyle: "italic" }}>
                      {stop.mood}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* FOOTER CTA */}
          <ScrollReveal delay={0.1} direction="none">
            <div className="mt-20 pt-20 flex flex-col sm:flex-row items-start sm:items-center gap-10 lg:gap-16" style={{ borderTop: "1px solid rgba(226, 221, 213, 0.08)" }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                  fontWeight: 300,
                  color: "#EAE3D5",
                  lineHeight: 1.35,
                  maxWidth: "32rem",
                }}
              >
                Este viaje es un punto de partida.{" "}
                <em style={{ color: "rgba(212, 197, 169, 0.5)", fontStyle: "italic" }}>Cada versión es única.</em>
              </p>
              <a
                href="#contact"
                className="group flex items-center gap-3 flex-shrink-0 text-label"
                style={{ color: "#EAE3D5", fontSize: "0.56rem", letterSpacing: "0.22em" }}
              >
                Pedí una propuesta
                <span className="w-8 h-px transition-all duration-500 group-hover:w-14 flex-shrink-0" style={{ background: "#8B6A2E" }} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
