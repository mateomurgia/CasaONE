"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export interface DestinationExperience {
  n: string;
  d: string;
}

export interface DestinationData {
  num: string;
  name: string;
  img: string;
  intro: string;
  note: string;
  exp: DestinationExperience[];
}

interface DestinationModalProps {
  open: boolean;
  territory: DestinationData | null;
  onClose: () => void;
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function DestinationModal({ open, territory, onClose }: DestinationModalProps) {
  const shouldReduce = useReducedMotion();

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && territory && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="destination-modal-title"
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          style={{
            background: "rgba(8, 8, 7, 0.78)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "4rem 1.5rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="relative w-full"
            style={{
              maxWidth: "48rem",
              background: "linear-gradient(180deg, #17160F 0%, #11110E 100%)",
              border: "1px solid rgba(184, 146, 74, 0.22)",
              boxShadow: "0 60px 140px rgba(0, 0, 0, 0.6)",
            }}
            initial={{ y: shouldReduce ? 0 : 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: shouldReduce ? 0 : 12, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Cerrar"
              onClick={onClose}
              className="absolute z-[2] flex items-center justify-center transition-all"
              style={{
                top: "1rem",
                right: "1rem",
                width: "2.5rem",
                height: "2.5rem",
                border: "1px solid rgba(184, 146, 74, 0.32)",
                background: "rgba(12, 12, 10, 0.6)",
                color: "#D4C5A9",
                transitionDuration: "0.3s",
                transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8B6A2E";
                e.currentTarget.style.color = "#FAFAF7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(12, 12, 10, 0.6)";
                e.currentTarget.style.color = "#D4C5A9";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M1 1 L13 13 M13 1 L1 13" />
              </svg>
            </button>

            {/* Hero image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={territory.img}
                alt={territory.name}
                fill
                sizes="(max-width: 768px) 100vw, 48rem"
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(12,12,10,0.1) 0%, rgba(12,12,10,0.7) 100%)",
                }}
              />
              <span
                className="absolute pointer-events-none"
                style={{
                  bottom: "1rem",
                  right: "1.5rem",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "5rem",
                  fontWeight: 300,
                  color: "rgba(212, 197, 169, 0.18)",
                  lineHeight: 1,
                }}
              >
                {territory.num}
              </span>
            </div>

            {/* Body */}
            <div style={{ padding: "clamp(2rem, 4vw, 3rem)" }}>
              <span
                className="text-label block"
                style={{
                  color: "#B8924A",
                  fontSize: "0.55rem",
                  letterSpacing: "0.24em",
                  marginBottom: "1rem",
                }}
              >
                Territorio {territory.num}
              </span>
              <h2
                id="destination-modal-title"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: "#D4C5A9",
                  marginBottom: "1.5rem",
                }}
              >
                {territory.name}
              </h2>

              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "rgba(234, 227, 213, 0.62)",
                  lineHeight: 1.5,
                  paddingBottom: "2.5rem",
                  marginBottom: "2.5rem",
                  borderBottom: "1px solid rgba(139, 106, 46, 0.16)",
                }}
              >
                {territory.intro}
              </p>

              <span
                className="text-label block"
                style={{
                  color: "#B8924A",
                  fontSize: "0.55rem",
                  letterSpacing: "0.24em",
                  marginBottom: "2rem",
                }}
              >
                Experiencias curadas
              </span>

              <ul className="flex flex-col" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {territory.exp.map((e, idx) => (
                  <li
                    key={e.n}
                    className="grid items-baseline"
                    style={{
                      gridTemplateColumns: "auto 1fr",
                      gap: "1.5rem",
                      padding: "1.25rem 0",
                      borderTop: idx === 0 ? "none" : "1px solid rgba(139, 106, 46, 0.1)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "0.95rem",
                        fontStyle: "italic",
                        color: "#B8924A",
                        width: "1.5rem",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <div>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "1.15rem",
                          fontWeight: 400,
                          color: "#D4C5A9",
                          lineHeight: 1.3,
                          display: "block",
                        }}
                      >
                        {e.n}
                      </span>
                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "rgba(212, 197, 169, 0.5)",
                          lineHeight: 1.65,
                          marginTop: "0.35rem",
                        }}
                      >
                        {e.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div
                className="flex flex-wrap items-center justify-between"
                style={{
                  marginTop: "3rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(139, 106, 46, 0.16)",
                  gap: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "rgba(234, 227, 213, 0.5)",
                    maxWidth: "22rem",
                    lineHeight: 1.4,
                  }}
                >
                  {territory.note}
                </p>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center transition-all"
                  style={{
                    gap: "0.75rem",
                    padding: "1rem 1.5rem",
                    background: "rgba(139, 106, 46, 0.16)",
                    border: "1px solid rgba(184, 146, 74, 0.45)",
                    color: "#EAE3D5",
                    fontSize: "0.55rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    textDecoration: "none",
                    transitionDuration: "0.3s",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#8B6A2E";
                    e.currentTarget.style.color = "#FAFAF7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(139, 106, 46, 0.16)";
                    e.currentTarget.style.color = "#EAE3D5";
                  }}
                >
                  Diseñemos este viaje
                  <span
                    aria-hidden="true"
                    style={{
                      display: "block",
                      height: "1px",
                      width: "2rem",
                      background: "currentColor",
                      opacity: 0.5,
                    }}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
