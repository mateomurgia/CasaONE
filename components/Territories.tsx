"use client";

import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const territories = [
  {
    num: "01",
    name: "Buenos Aires",
    line: "Cultura, arquitectura y gastronomía de autor. Recorridos privados por una ciudad que no duerme.",
    img: "/buenos-aires.jpg",
  },
  {
    num: "02",
    name: "Mendoza",
    line: "Catas privadas con productores que redefinen el vino argentino. Los Andes al atardecer.",
    img: "/mendoza.jpg",
  },
  {
    num: "03",
    name: "Bariloche",
    line: "Lagos en silencio, bosques sin multitudes. El Nahuel Huapi en barco privado.",
    img: "/bariloche.jpg",
  },
  {
    num: "04",
    name: "El Calafate",
    line: "El Perito Moreno en condiciones exclusivas. El sonido que cambia algo en uno.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=90",
  },
  {
    num: "05",
    name: "Ushuaia",
    line: "Canal Beagle y la luz del fin del mundo. La sensación de estar en el borde de algo.",
    img: "/ushuaia.jpg",
  },
];

function TerritoryRow({ t, index }: { t: (typeof territories)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, -30]);

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ${
        isReversed ? "md:[direction:rtl]" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Image */}
      <motion.div
        ref={imgRef}
        className="relative overflow-hidden group"
        style={{
          aspectRatio: "16/9",
          direction: "ltr",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <Image
            src={t.img}
            alt={t.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,12,10,0.1) 0%, rgba(12,12,10,0.4) 100%)",
          }}
        />
        {/* Number overlay */}
        <span
          className="absolute bottom-4 right-5 pointer-events-none"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "4rem",
            fontWeight: 300,
            color: "rgba(212, 197, 169, 0.12)",
            lineHeight: 1,
          }}
        >
          {t.num}
        </span>
      </motion.div>

      {/* Text */}
      <div style={{ direction: "ltr" }} className="flex flex-col justify-center">
        <span
          className="text-label mb-4"
          style={{ color: "#8B6A2E", fontSize: "0.55rem", letterSpacing: "0.24em" }}
        >
          Territorio {t.num}
        </span>
        <h3
          className="group"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 300,
            color: "#D4C5A9",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            letterSpacing: "0em",
            transition: "letter-spacing 300ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = "0.08em")}
          onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = "0em")}
        >
          {t.name}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.9rem",
            color: "rgba(212, 197, 169, 0.45)",
            lineHeight: 1.7,
            maxWidth: "28rem",
          }}
        >
          {t.line}
        </p>
      </div>
    </motion.div>
  );
}

export function Territories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section
      id="territories"
      ref={sectionRef}
      style={{
        background: "#0C0C0A",
        paddingTop: "20vh",
        paddingBottom: "20vh",
      }}
      className="px-6 md:px-16 lg:px-24"
    >
      {/* Section label */}
      <motion.div
        className="mb-16 md:mb-24 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="text-label"
          style={{ color: "#8B6A2E", fontSize: "0.55rem", letterSpacing: "0.24em" }}
        >
          Territorios
        </span>
        <h2
          className="mt-4"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 300,
            color: "#D4C5A9",
            lineHeight: 1.1,
          }}
        >
          Cinco paisajes.
          <br />
          <em style={{ fontStyle: "italic", color: "rgba(212, 197, 169, 0.35)" }}>
            Cada uno, irreducible.
          </em>
        </h2>
      </motion.div>

      {/* Territory rows */}
      <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-32">
        {territories.map((t, i) => (
          <TerritoryRow key={t.num} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}
