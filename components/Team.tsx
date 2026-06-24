import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const members = [
  {
    initial: "V",
    name: "Vanesa",
    role: "Estrategia & Relaciones",
    bio: "Con más de 20 años en el mundo de los negocios y la hotelería de lujo, Vanesa entiende lo que los viajeros más exigentes necesitan antes de que ellos mismos lo sepan. Su red de contactos en Argentina es única: productores, chefs, hoteleros, guías. Gente que abre puertas que no figuran en ningún mapa.",
    quote: "Un viaje memorable no es el que más lugares recorre, sino el que más cosas hace sentir.",
  },
  {
    initial: "J",
    name: "Jazmín",
    role: "Diseño & Operación de Viajes",
    bio: "Jazmín combina formación en turismo con una sensibilidad estética que se nota en cada itinerario. Es la arquitecta de los viajes de Casa Uno: piensa en ritmos, en transiciones, en la coherencia entre un alojamiento y una experiencia. Y cuando algo cambia sobre la marcha, ella ya tiene el plan B listo.",
    quote: "Me gusta que cuando el viajero llega a destino, todo fluya tan bien que parezca fácil. Eso es lo más difícil de lograr.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-32 lg:py-48" style={{ background: "var(--bg-contrast)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        {/* HEADER */}
        <div className="grid lg:grid-cols-12 mb-24 lg:mb-32 items-start">
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1} direction="none">
              <div className="flex items-center gap-3 pt-1">
                <span className="divider-earth" />
                <span className="text-label" style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.24em" }}>
                  Quiénes somos
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <ScrollReveal delay={0.2}>
              <h2 className="text-display-xl" style={{ color: "var(--text-base)" }}>
                Dos miradas.
                <br />
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Un mismo viaje.</em>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* TEAM GRID */}
        <StaggerContainer className="grid md:grid-cols-2 gap-16 lg:gap-24" staggerDelay={0.1}>
          {members.map((m) => (
            <StaggerItem key={m.name}>
              <div className="flex flex-col h-full">
                {/* Initial */}
                <div className="flex items-baseline gap-4 mb-8">
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "4rem",
                      fontWeight: 300,
                      color: "var(--accent)",
                      lineHeight: 1,
                      opacity: 0.6,
                    }}
                  >
                    {m.initial}
                  </span>
                  <span className="w-6 h-px flex-shrink-0" style={{ background: "#8B6A2E" }} />
                </div>

                {/* Name & Role */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    color: "var(--text-base)",
                    lineHeight: 1.2,
                    marginBottom: "0.25rem",
                  }}
                >
                  {m.name}
                </h3>
                <span
                  className="text-label"
                  style={{ color: "var(--accent)", fontSize: "0.52rem", letterSpacing: "0.2em", marginBottom: "1.5rem", display: "block" }}
                >
                  {m.role}
                </span>

                {/* Bio */}
                <p className="text-body-refined flex-1" style={{ color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                  {m.bio}
                </p>

                {/* Quote */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--text-subtle)",
                    lineHeight: 1.65,
                    paddingLeft: "1rem",
                    borderLeft: "1px solid rgba(184, 146, 74, 0.3)",
                  }}
                >
                  "{m.quote}"
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Closing — madre e hija */}
        <ScrollReveal delay={0.2}>
          <div
            className="mt-24 lg:mt-32 max-w-2xl mx-auto text-center"
            style={{ paddingTop: "3rem", borderTop: "1px solid rgba(184, 146, 74, 0.12)" }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.9,
              }}
            >
              Somos madre e hija, profesionales de negocios, hotelería y turismo que decidimos juntar nuestras miradas para crear algo diferente. Casa Uno es el resultado de esa conversación: un espacio donde la experiencia se encuentra con el diseño, y el rigor con el cariño.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
