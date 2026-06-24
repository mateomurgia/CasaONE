import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const members = [
  {
    initial: "V",
    name: "Vanesa",
    role: "Estrategia & Relaciones",
    bio: "Licenciada en Dirección de Negocios, con trayectoria en compañías nacionales e internacionales. Construye vínculos con agencias, hoteles y proveedores, y traduce cada destino en una propuesta clara, cuidada y coherente. Su mirada combina planificación, negociación y sensibilidad por los detalles que convierten un viaje en una experiencia memorable.",
    quote:
      "Necesito que el viaje sea organizado y diseñado como si fuese una boda — que todo detalle esté cuidado.",
  },
  {
    initial: "J",
    name: "Jazmín",
    role: "Diseño & Operación de Viajes",
    bio: "Licenciada en Turismo y Hotelería. Su experiencia en hotelería internacional y turismo de lujo le permite diseñar itinerarios precisos, fluidos y profundamente personalizados. Selecciona cada hotel, experiencia y transición para que el viaje se viva con naturalidad, sin improvisaciones y con la tranquilidad de saber que todo está pensado.",
    quote:
      "Muchos de mis viajes me enseñaron que la diferencia entre una experiencia correcta y una inolvidable no está en el destino, sino en las decisiones que se toman antes de partir. Casa Uno nace de esas vivencias y del deseo de ayudar a otros viajeros a descubrir lo mejor de cada lugar, sin perder tiempo ni oportunidades en el camino.",
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="py-32 lg:py-48"
      style={{ background: "var(--bg-contrast)" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-12 mb-20 lg:mb-28 items-start">
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1} direction="none">
              <div className="flex items-center gap-3 pt-1">
                <span className="divider-earth" />
                <span
                  className="text-label"
                  style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.24em" }}
                >
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

        {/* Team members */}
        <StaggerContainer className="grid md:grid-cols-2 gap-px" staggerDelay={0.12}>
          {members.map((m) => (
            <StaggerItem key={m.name}>
              <div
                className="p-8 lg:p-12 flex flex-col gap-6 h-full"
                style={{ border: "1px solid rgba(226, 221, 213, 0.06)" }}
              >
                {/* Avatar initial */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    border: "1px solid rgba(184, 146, 74, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    color: "var(--accent)",
                  }}
                >
                  {m.initial}
                </div>

                {/* Name + role */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.75rem",
                      fontWeight: 400,
                      color: "var(--text-inverse)",
                      lineHeight: 1.1,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {m.name}
                  </h3>
                  <span
                    className="text-label"
                    style={{ color: "var(--accent)", fontSize: "0.52rem", letterSpacing: "0.2em" }}
                  >
                    {m.role}
                  </span>
                </div>

                {/* Bio */}
                <p
                  className="text-body-refined flex-1"
                  style={{ color: "var(--text-subtle)", lineHeight: 1.8 }}
                >
                  {m.bio}
                </p>

                {/* Quote */}
                <blockquote
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    borderLeft: "2px solid rgba(184, 146, 74, 0.35)",
                    paddingLeft: "1rem",
                    marginTop: "0.5rem",
                  }}
                >
                  &ldquo;{m.quote}&rdquo;
                </blockquote>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mother & daughter closing */}
        <ScrollReveal delay={0.3}>
          <div
            className="mt-16 lg:mt-20 text-center max-w-2xl mx-auto"
            style={{
              borderTop: "1px solid rgba(139, 106, 46, 0.12)",
              paddingTop: "2.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--text-muted)",
                lineHeight: 1.75,
              }}
            >
              Somos madre e hija, profesionales de negocios, hotelería y turismo.
              Creamos viajes a medida con el mismo nivel de detalle con el que se organiza
              una boda: cada experiencia es única. Ese es el espíritu de Casa Uno.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
