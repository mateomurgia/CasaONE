"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stops = [
  { day: "Días 1–3", city: "Buenos Aires", phrase: "La ciudad antes del viaje. Recorridos privados y gastronomía de autor." },
  { day: "Días 4–6", city: "Mendoza", phrase: "Catas con productores que redefinen el vino argentino. Los Andes al atardecer." },
  { day: "Días 7–9", city: "Bariloche", phrase: "El Nahuel Huapi en barco privado. Silencio arquitectónico a orillas del lago." },
  { day: "Días 10–12", city: "El Calafate", phrase: "El Perito Moreno al amanecer. El sonido que cambia algo en uno." },
  { day: "Días 13–14", city: "Ushuaia", phrase: "El Canal Beagle. La luz de verano a las diez de la noche." },
];

function StopRow({ stop, index }: { stop: (typeof stops)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileHover={{ x: 6 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Hairline divider */}
      {index > 0 && (
        <div
          className="transition-colors duration-500 group-hover:bg-[#8B6A2E]"
          style={{
            height: "1px",
            background: "rgba(139, 106, 46, 0.12)",
          }}
        />
      )}

      <div
        className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-3 md:gap-10 items-baseline py-8 md:py-10 transition-colors duration-500"
      >
        {/* Day */}
        <span
          className="text-label"
          style={{
            color: "#8B6A2E",
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
          }}
        >
          {stop.day}
        </span>

        {/* City */}
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
            fontWeight: 300,
            color: "#D4C5A9",
            lineHeight: 1.2,
          }}
        >
          {stop.city}
        </span>

        {/* Phrase */}
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.9rem",
            color: "rgba(212, 197, 169, 0.5)",
            lineHeight: 1.7,
          }}
        >
          {stop.phrase}
        </p>
      </div>
    </motion.div>
  );
}

export function Journey() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="journey"
      style={{
        background: "linear-gradient(180deg, #1A1913 0%, #201E16 55%, #17160F 100%)",
        paddingTop: "20vh",
        paddingBottom: "20vh",
      }}
      className="px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section headline */}
        <motion.div
          ref={titleRef}
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span
            className="text-label block mb-8"
            style={{ color: "#B8924A", fontSize: "0.55rem", letterSpacing: "0.24em" }}
          >
            Viaje insignia &middot; 14 días
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#EAE3D5",
            }}
          >
            De Buenos Aires
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(234, 227, 213, 0.48)" }}>
              al fin del mundo.
            </em>
          </h2>
        </motion.div>

        {/* Stops list */}
        <div>
          {stops.map((stop, i) => (
            <StopRow key={stop.city} stop={stop} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
