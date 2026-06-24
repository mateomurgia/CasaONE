import { ScrollReveal } from "./ui/ScrollReveal";

export function Manifesto() {
  return (
    <section id="philosophy" className="py-32 lg:py-48" style={{ background: "#0C0C0A" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-12 mb-16 items-start">
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1} direction="none">
              <div className="flex items-center gap-3">
                <span className="divider-earth" />
                <span className="text-label" style={{ color: "#8B6A2E", fontSize: "0.56rem", letterSpacing: "0.24em" }}>
                  Filosofía
                </span>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <ScrollReveal delay={0.2}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: "#D4C5A9",
                }}
              >
                Nuestra{" "}
                <em style={{ color: "#8B6A2E", fontStyle: "italic" }}>filosofía.</em>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 lg:col-start-4 flex flex-col gap-6">
            <ScrollReveal delay={0.15}>
              <p style={{ color: "rgba(212, 197, 169, 0.6)", lineHeight: 1.9, fontSize: "1.05rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
                Creemos que un viaje bien diseñado no empieza con un destino: empieza con una pregunta. ¿Quién sos como viajero? ¿Qué querés sentir? ¿Qué experiencias te faltan vivir?
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.22}>
              <p style={{ color: "rgba(212, 197, 169, 0.6)", lineHeight: 1.9, fontSize: "1.05rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
                En Casa Uno no vendemos paquetes. Diseñamos itinerarios únicos, con lógica narrativa, coherencia estética y atención al detalle. Cada propuesta es un traje a medida: pensado para vos, construido con criterio, ejecutado con precisión.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.29}>
              <p style={{ color: "rgba(212, 197, 169, 0.6)", lineHeight: 1.9, fontSize: "1.05rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
                Trabajamos con una red de proveedores cuidadosamente seleccionados: guías que conocen el territorio como pocos, hoteles con historia y carácter, experiencias gastronómicas que van mucho más allá del restaurante de moda. Nada improvisado. Todo con intención.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.36}>
              <p style={{ color: "rgba(212, 197, 169, 0.6)", lineHeight: 1.9, fontSize: "1.05rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
                Somos una agencia boutique porque elegimos serlo. Preferimos hacer pocas cosas muy bien, a muchas cosas a medias. Eso nos permite estar presentes de verdad: antes, durante y después de cada viaje.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.43}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#8B6A2E",
                  lineHeight: 1.6,
                  marginTop: "1rem",
                  paddingLeft: "1.5rem",
                  borderLeft: "1px solid rgba(184, 146, 74, 0.35)",
                }}
              >
                Casa Uno. Viajes diseñados para ser recordados.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
