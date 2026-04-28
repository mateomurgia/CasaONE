"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

const destinationOptions = ["Buenos Aires", "Mendoza", "Patagonia", "Salta", "Bariloche", "Varios"];
const experienceOptions = ["Cultural", "Aventura", "Gastronomía", "Bienestar", "Todo"];
const travelWithOptions = ["Solo/a", "En pareja", "Familia", "Grupo"];
const howFoundOptions = ["Instagram", "Recomendación", "Google", "Otro"];

function SectionSeparator({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <span
        style={{
          width: "20px",
          height: "1px",
          background: "rgba(139, 106, 46, 0.3)",
          flexShrink: 0,
        }}
      />
      <span
        className="text-label whitespace-nowrap"
        style={{
          color: "rgba(139, 106, 46, 0.6)",
          fontSize: "0.5rem",
          letterSpacing: "0.22em",
        }}
      >
        {label}
      </span>
      <span
        style={{
          flex: 1,
          height: "1px",
          background: "rgba(139, 106, 46, 0.1)",
        }}
      />
    </div>
  );
}

function FloatingInput({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative pt-5">
      <label
        htmlFor={name}
        className="absolute left-0 transition-all duration-300 pointer-events-none"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: isActive ? "0.5rem" : "0.9rem",
          top: isActive ? "0" : "1.55rem",
          color: focused ? "#8B6A2E" : "rgba(212, 197, 169, 0.3)",
          letterSpacing: isActive ? "0.15em" : "0",
          textTransform: isActive ? "uppercase" : "none",
        }}
      >
        {label}
        {required && <span style={{ color: "#8B6A2E" }}> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent outline-none pb-3 transition-colors"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "0.9rem",
          color: "#D4C5A9",
          borderBottom: `1px solid ${focused ? "#8B6A2E" : "rgba(139, 106, 46, 0.15)"}`,
          minHeight: "16px",
        }}
      />
    </div>
  );
}

function ChipSelect({
  label,
  options,
  selected,
  onToggle,
  multi = false,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
  multi?: boolean;
}) {
  return (
    <div className="pt-2">
      <span
        className="text-label block mb-4"
        style={{
          color: "rgba(212, 197, 169, 0.3)",
          fontSize: "0.5rem",
          letterSpacing: "0.15em",
        }}
      >
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              className="transition-all duration-300"
              style={{
                padding: "0.4rem 0.9rem",
                fontSize: "0.75rem",
                fontFamily: "'Inter', system-ui, sans-serif",
                letterSpacing: "0.03em",
                border: `1px solid ${isSelected ? "#8B6A2E" : "rgba(139, 106, 46, 0.15)"}`,
                borderRadius: "2px",
                background: isSelected ? "rgba(139, 106, 46, 0.12)" : "transparent",
                color: isSelected ? "#D4C5A9" : "rgba(212, 197, 169, 0.4)",
                cursor: "pointer",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RadioGroup({
  label,
  name,
  options,
  selected,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  selected: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="pt-2">
      <span
        className="text-label block mb-4"
        style={{
          color: "rgba(212, 197, 169, 0.3)",
          fontSize: "0.5rem",
          letterSpacing: "0.15em",
        }}
      >
        {label}
      </span>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span
              className="transition-all duration-300"
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: `1px solid ${selected === opt ? "#8B6A2E" : "rgba(139, 106, 46, 0.2)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selected === opt && (
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#8B6A2E",
                  }}
                />
              )}
            </span>
            <input
              type="radio"
              name={name}
              value={opt}
              checked={selected === opt}
              onChange={() => onChange(opt)}
              className="sr-only"
            />
            <span
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.8rem",
                color: selected === opt ? "#D4C5A9" : "rgba(212, 197, 169, 0.4)",
                transition: "color 300ms",
              }}
            >
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative pt-5">
      <label
        htmlFor={name}
        className="absolute left-0 top-0 pointer-events-none"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "0.5rem",
          color: focused ? "#8B6A2E" : "rgba(212, 197, 169, 0.3)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          transition: "color 300ms",
        }}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent outline-none pb-3 appearance-none cursor-pointer"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "0.9rem",
          color: value ? "#D4C5A9" : "rgba(212, 197, 169, 0.3)",
          borderBottom: `1px solid ${focused ? "#8B6A2E" : "rgba(139, 106, 46, 0.15)"}`,
          transition: "border-color 300ms",
        }}
      >
        <option value="" style={{ background: "#141411", color: "#D4C5A9" }}>
          Seleccionar...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ background: "#141411", color: "#D4C5A9" }}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduce = useReducedMotion();

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    destination: [] as string[],
    experience: [] as string[],
    duration: "",
    date: "",
    travelWith: "",
    people: "",
    special: "",
    howFound: "",
  });

  const set = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleChip = (key: "destination" | "experience", value: string) => {
    setForm((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "#141411",
        paddingTop: "20vh",
        paddingBottom: "12vh",
      }}
      className="px-6 md:px-16 lg:px-24"
    >
      <motion.div
        ref={ref}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: shouldReduce ? 0 : 1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <span
          className="text-label block text-center mb-8"
          style={{ color: "#8B6A2E", fontSize: "0.55rem", letterSpacing: "0.24em" }}
        >
          Contacto
        </span>

        <h2
          className="text-center mb-16 md:mb-20"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#D4C5A9",
          }}
        >
          Diseñemos tu viaje.
        </h2>

        {status === "success" ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "2.2rem",
                fontWeight: 300,
                color: "#D4C5A9",
                lineHeight: 1.2,
              }}
            >
              Gracias.
            </h3>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.4rem",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(212, 197, 169, 0.4)",
                marginTop: "0.75rem",
              }}
            >
              Nos ponemos en contacto pronto.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
            {/* -- ¿Quién sos? -- */}
            <SectionSeparator label="¿Quién sos?" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FloatingInput label="Nombre completo" name="name" required value={form.name} onChange={(v) => set("name", v)} />
              <FloatingInput label="Email" name="email" type="email" required value={form.email} onChange={(v) => set("email", v)} />
            </div>
            <FloatingInput label="País de origen" name="country" value={form.country} onChange={(v) => set("country", v)} />

            {/* -- ¿Qué buscás? -- */}
            <SectionSeparator label="¿Qué buscás?" />
            <ChipSelect
              label="Destino de interés"
              options={destinationOptions}
              selected={form.destination}
              onToggle={(v) => toggleChip("destination", v)}
              multi
            />
            <ChipSelect
              label="Tipo de experiencia"
              options={experienceOptions}
              selected={form.experience}
              onToggle={(v) => toggleChip("experience", v)}
              multi
            />
            <FloatingInput label="Duración aproximada (ej: 10 días)" name="duration" value={form.duration} onChange={(v) => set("duration", v)} />

            {/* -- ¿Cuándo y con quién? -- */}
            <SectionSeparator label="¿Cuándo y con quién?" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FloatingInput label="Fecha estimada del viaje" name="date" value={form.date} onChange={(v) => set("date", v)} />
              <FloatingInput label="Número de personas" name="people" type="number" value={form.people} onChange={(v) => set("people", v)} />
            </div>
            <RadioGroup
              label="¿Con quién viajás?"
              name="travelWith"
              options={travelWithOptions}
              selected={form.travelWith}
              onChange={(v) => set("travelWith", v)}
            />

            {/* -- Contanos más -- */}
            <SectionSeparator label="Contanos más" />
            <div className="relative pt-5">
              <label
                htmlFor="special"
                className="absolute left-0 top-0 pointer-events-none"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.5rem",
                  color: "rgba(212, 197, 169, 0.3)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                ¿Hay algo especial que quieras vivir en Argentina?
              </label>
              <textarea
                id="special"
                name="special"
                rows={4}
                value={form.special}
                onChange={(e) => set("special", e.target.value)}
                className="w-full bg-transparent outline-none resize-none pb-3 transition-colors"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.9rem",
                  color: "#D4C5A9",
                  borderBottom: "1px solid rgba(139, 106, 46, 0.15)",
                  marginTop: "0.5rem",
                }}
              />
            </div>
            <SelectField
              label="¿Cómo nos conociste?"
              name="howFound"
              options={howFoundOptions}
              value={form.howFound}
              onChange={(v) => set("howFound", v)}
            />

            {/* Submit */}
            <div className="pt-8 flex justify-center">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="group flex items-center gap-3"
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <span
                  className="text-label transition-colors duration-300 group-hover:text-[#D4C5A9]"
                  style={{
                    color: status === "sending" ? "rgba(212, 197, 169, 0.3)" : "#D4C5A9",
                    fontSize: "0.55rem",
                    letterSpacing: "0.22em",
                  }}
                >
                  {status === "sending" ? "Enviando..." : "Enviar consulta →"}
                </span>
                <span
                  className="h-px transition-all duration-500 group-hover:w-16 flex-shrink-0"
                  style={{ width: "2rem", background: "#8B6A2E" }}
                />
              </motion.button>
            </div>

            {status === "error" && (
              <p className="text-center" style={{ color: "#B8924A", fontSize: "0.85rem" }}>
                Hubo un error. Intentá de nuevo o escribinos a hello@casauno.travel
              </p>
            )}
          </form>
        )}
      </motion.div>

      {/* Minimal footer */}
      <div
        className="max-w-4xl mx-auto mt-32 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(139, 106, 46, 0.08)" }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1rem",
            fontWeight: 400,
            color: "rgba(212, 197, 169, 0.3)",
          }}
        >
          Casa Uno
        </span>
        <a
          href="mailto:hello@casauno.travel"
          className="text-label link-underline"
          style={{
            color: "rgba(212, 197, 169, 0.3)",
            fontSize: "0.55rem",
            letterSpacing: "0.18em",
          }}
        >
          hello@casauno.travel
        </a>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.55rem",
            color: "rgba(212, 197, 169, 0.2)",
            letterSpacing: "0.05em",
          }}
        >
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}
