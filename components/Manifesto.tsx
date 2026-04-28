import { SectionHeader } from "./ui/SectionHeader";

export function Manifesto() {
  return (
    <section id="philosophy" className="py-32 lg:py-48" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        <SectionHeader
          label="Filosofía"
          title="No vendemos destinos."
          subtitle="Diseñamos experiencias."
          description="Casa Uno cura viajes extraordinarios con foco en diseño y coherencia emocional."
          layout="stacked"
        />
      </div>
    </section>
  );
}
