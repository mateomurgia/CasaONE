import { ScrollReveal } from "./ui/ScrollReveal";

export function Manifesto() {
  return (
    <section
      id="philosophy"
      className="py-32 lg:py-48"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Label + title */}
          <div className="lg:col-span-4">
            <ScrollReveal delay={0.1} direction="none">
              <div className="flex items-center gap-3 mb-8">
                <span className="divider-earth" />
                <span
                  className="text-label"
                  style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.24em" }}
                >
                  Filosofía
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2
                className="text-display-xl"
                style={{ color: "var(--text-base)", lineHeight: 1.1 }}
              >
                Nuestra
                <br />
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>filosofía.</em>
              </h2>
            </ScrollReveal>
          </div>

          {/* Body text */}
          <div className="lg:col-span-7 lg:col-start-6">
            <ScrollReveal delay={0.3}>
              <div
                className="flex flex-col gap-7"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                }}
              >
                <p>
                  En Casa Uno creemos que viajar es mucho más que trasladarse de un lugar a otro.
                  Es descubrir, conectar, celebrar y crear recuerdos que permanecen para siempre.
                </p>
                <p>
                  Por eso no trabajamos con propuestas estandarizadas. Cada viaje nace de una historia,
                  de un sueño, de una forma única de vivir el mundo. Escuchamos, interpretamos y diseñamos
                  experiencias a medida, cuidando cada detalle para que nuestros viajeros solo se ocupen de disfrutar.
                </p>
                <p>
                  Valoramos el tiempo, la autenticidad y las experiencias que dejan huella. Elegimos cada destino,
                  hotel, actividad y recomendación con la misma dedicación con la que se planifican los momentos
                  más importantes de la vida.
                </p>
                <p>
                  Porque para nosotros, el verdadero lujo no está en lo extraordinario, sino en sentirse
                  acompañado, comprendido y sorprendido en cada etapa del viaje.
                </p>

                {/* Closing tagline */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--text-base)",
                    borderLeft: "2px solid var(--accent)",
                    paddingLeft: "1.5rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Casa Uno. Viajes diseñados para ser recordados.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
