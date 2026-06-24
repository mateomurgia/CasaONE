import { SectionHeader } from "./ui/SectionHeader";
import { ScrollReveal } from "./ui/ScrollReveal";

export function Manifesto() {
  return (
    <section id="philosophy" className="py-32 lg:py-48" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <SectionHeader
          label="Filosofía"
          title="Nuestra filosofía."
          layout="stacked"
        />

        <div className="grid lg:grid-cols-12 gap-8 mt-4">
          <div className="lg:col-span-7 lg:col-start-4 flex flex-col gap-6">
            <ScrollReveal delay={0.15}>
              <p className="text-body-refined" style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "1.05rem" }}>
                Creemos que un viaje bien diseñado no empieza con un destino: empieza con una pregunta. ¿Quién sos como viajero? ¿Qué querés sentir? ¿Qué experiencias te faltan vivir?
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.22}>
              <p className="text-body-refined" style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "1.05rem" }}>
                En Casa Uno no vendemos paquetes. Diseñamos itinerarios únicos, con lógica narrativa, coherencia estética y atención al detalle. Cada propuesta es un traje a medida: pensado para vos, construido con criterio, ejecutado con precisión.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.29}>
              <p className="text-body-refined" style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "1.05rem" }}>
                Trabajamos con una red de proveedores cuidadosamente seleccionados: guías que conocen el territorio como pocos, hoteles con historia y carácter, experiencias gastronómicas que van mucho más allá del restaurante de moda. Nada improvisado. Todo con intención.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.36}>
              <p className="text-body-refined" style={{ color: "var(--text-muted)", lineHeight: 1.9, fontSize: "1.05rem" }}>
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
                  color: "var(--accent)",
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
