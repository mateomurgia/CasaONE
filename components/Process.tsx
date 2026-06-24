import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const steps = [
  {
    step: "01",
    title: "Te conocemos",
    description: "Cada viaje empieza con una conversación. Queremos saber quién sos, qué buscás y qué tipo de experiencias te movilizan. No hay formularios: hay diálogo.",
  },
  {
    step: "02",
    title: "Diseñamos",
    description: "Con esa información, creamos una propuesta a medida. Rutas, ritmos, alojamientos, experiencias. Todo pensado con criterio y coherencia narrativa.",
  },
  {
    step: "03",
    title: "Reservamos",
    description: "Nos encargamos de cada detalle operativo: reservas, traslados, confirmaciones. La logística es nuestra — vos solo tenés que preparar la valija.",
  },
  {
    step: "04",
    title: "Acompañamos",
    description: "Durante el viaje, estamos presentes. No como call center — como alguien que conoce tu itinerario de memoria y está ahí si algo cambia.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 lg:py-48" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        {/* HEADER */}
        <div className="grid lg:grid-cols-12 mb-24 lg:mb-32 items-start">
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1} direction="none">
              <div className="flex items-center gap-3 pt-1">
                <span className="divider-earth" />
                <span className="text-label" style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.24em" }}>
                  Cómo trabajamos
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <ScrollReveal delay={0.2}>
              <h2 className="text-display-xl" style={{ color: "var(--text-base)" }}>
                Un viaje,
                <br />
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>paso a paso.</em>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* GRID OF 4 STEPS */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20" staggerDelay={0.08}>
          {steps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="flex flex-col h-full">
                {/* STEP NUMBER & DIVIDER */}
                <div className="flex items-baseline gap-4 mb-6">
                  <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "3.5rem",
                        fontWeight: 300,
                        color: "var(--text-subtle)",
                        lineHeight: 1,
                      }}
                    >
                    {s.step}
                  </span>
                  <span className="w-6 h-px flex-shrink-0" style={{ background: "#8B6A2E" }} />
                </div>

                {/* TITLE */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.375rem",
                    fontWeight: 400,
                    color: "var(--text-base)",
                    lineHeight: 1.25,
                    marginBottom: "1rem",
                  }}
                >
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-body-refined flex-1" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                  {s.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
