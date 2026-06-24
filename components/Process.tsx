import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Te conocemos",
    description: "Completás nuestro formulario.",
  },
  {
    num: "02",
    title: "Diseñamos",
    description: "Creamos tu viaje a medida.",
  },
  {
    num: "03",
    title: "Reservamos",
    description: "Coordinamos cada detalle.",
  },
  {
    num: "04",
    title: "Acompañamos",
    description: "Estamos con vos antes y durante el viaje.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-32 lg:py-48"
      style={{ background: "var(--bg-base)" }}
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

        {/* 4 steps */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          staggerDelay={0.1}
        >
          {steps.map((s) => (
            <StaggerItem key={s.num}>
              <div className="flex flex-col h-full">
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
                    {s.num}
                  </span>
                  <span
                    className="w-6 h-px flex-shrink-0"
                    style={{ background: "#8B6A2E" }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "var(--text-base)",
                    lineHeight: 1.25,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-body-refined flex-1"
                  style={{ color: "var(--text-muted)", lineHeight: 1.8 }}
                >
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
