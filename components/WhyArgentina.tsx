import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

const facts = [
  "El paisaje más diverso del mundo, comprimido en un solo país",
  "Una cultura vitivinícola que vive su capítulo más apasionante",
  "Una gastronomía que compite con cualquier ciudad europea",
  "Fauna extraordinaria: cóndores, pingüinos, pumas, ballenas",
  "Un viajero europeo que llega curioso y se va transformado",
];

export function WhyArgentina() {
  return (
    <section className="py-32 lg:py-48 overflow-hidden" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-20 lg:gap-28 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1} direction="none">
              <div className="flex items-center gap-3 mb-12">
                <span className="divider-earth" />
                <span className="text-label" style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.24em" }}>
                  Por qué Argentina
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-display-xl mb-10" style={{ color: "var(--text-base)" }}>
                No es un destino.
                <br />
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Es una condición.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-body-refined mb-12" style={{ color: "var(--text-muted)", lineHeight: 1.85, maxWidth: "32rem" }}>
                Argentina no se presta al itinerario ordinario. Es demasiado compleja, demasiado variada, demasiado particular emocionalmente. Justamente por eso necesita un curador.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <blockquote style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 400, fontStyle: "italic", color: "var(--text-base)", lineHeight: 1.5, maxWidth: "30rem", borderLeft: "2px solid var(--accent)", paddingLeft: "1.5rem" }}>
                Sabemos lo que el viajero europeo ama. Y en Argentina, lo llevamos a donde no esperaba.
              </blockquote>
            </ScrollReveal>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7">
            {/* IMAGE PLACEHOLDER */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="w-full rounded-sm overflow-hidden mb-14" style={{ height: "320px", background: "linear-gradient(135deg, #1a2e1a 0%, #2d4a2a 30%, #3d5a30 60%, #1a2e1a 100%)" }}>
                <div className="w-full h-full flex items-end justify-start p-8" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(60, 90, 48, 0.4), transparent)" }}>
                  <span className="text-label" style={{ color: "rgba(212, 197, 169, 0.25)", fontSize: "0.52rem", letterSpacing: "0.2em" }}>
                    PATAGONIA—Estepa · Luz · Inmensidad
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* FACTS LIST */}
            <div>
              <StaggerContainer staggerDelay={0.08}>
                {facts.map((fact, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-6 py-6" style={{ borderBottom: "1px solid rgba(139, 106, 46, 0.12)" }}>
                      <span className="text-label flex-shrink-0 pt-1" style={{ color: "#8B6A2E", fontSize: "0.54rem", letterSpacing: "0.2em", minWidth: "2rem" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-body-refined" style={{ color: "#6B6560", lineHeight: 1.75 }}>
                        {fact}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
