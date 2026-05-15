"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef, useState } from "react";

const destinationOptions = ["Buenos Aires", "Mendoza", "Patagonia", "Salta", "Bariloche", "Varios"];
const experienceOptions = ["Cultural", "Aventura", "Gastronomía", "Bienestar", "Todo"];
const travelWithOptions = ["Solo/a", "En pareja", "Familia", "Grupo"];
const howFoundOptions = ["Instagram", "Recomendación", "Google", "Otro"];

function SectionSeparator({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 pb-5">
      <span
        style={{
          width: "26px",
          height: "1px",
          background: "rgba(184, 146, 74, 0.44)",
          flexShrink: 0,
        }}
      />
      <span
        className="text-label whitespace-nowrap"
        style={{
          color: "#B8924A",
          fontSize: "0.54rem",
          letterSpacing: "0.24em",
        }}
      >
        {label}
      </span>
      <span
        style={{
          flex: 1,
          height: "1px",
          background: "rgba(184, 146, 74, 0.12)",
        }}
      />
    </div>
  );
}

function FormBlock({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-[3px] border p-5 sm:p-6"
      style={{
        borderColor: "rgba(184, 146, 74, 0.18)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.01))",
      }}
    >
      {children}
    </div>
  );
}

type InputMode =
  | "none"
  | "text"
  | "tel"
  | "url"
  | "email"
  | "numeric"
  | "decimal"
  | "search";

function FloatingInput({
  label,
  name,
  type = "text",
  inputMode,
  pattern,
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  inputMode?: InputMode;
  pattern?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="group relative rounded-[3px] border px-4 pb-3 pt-7 transition-all duration-300"
      style={{
        borderColor: focused ? "rgba(196, 154, 77, 0.68)" : "rgba(184, 146, 74, 0.22)",
        background: focused ? "rgba(255, 255, 255, 0.035)" : "rgba(10, 10, 8, 0.2)",
        boxShadow: focused ? "0 16px 34px rgba(0, 0, 0, 0.18)" : "none",
      }}
    >
      <label
        htmlFor={name}
        className="text-label absolute left-4 top-3 transition-colors duration-300 pointer-events-none"
        style={{
          fontSize: "0.5rem",
          color: focused ? "#C49A4D" : "rgba(234, 227, 213, 0.52)",
          letterSpacing: "0.16em",
        }}
      >
        {label}
        {required && <span style={{ color: "#8B6A2E" }}> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        pattern={pattern}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent outline-none transition-colors"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "0.95rem",
          color: "#F0EAE0",
          minHeight: "30px",
          caretColor: "#C49A4D",
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
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div>
      <span
        className="text-label block mb-4"
        style={{
          color: "rgba(234, 227, 213, 0.58)",
          fontSize: "0.5rem",
          letterSpacing: "0.16em",
        }}
      >
        {label}
      </span>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
          const isSelected = selected.includes(opt);
          return (
            <motion.button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              className="transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "0.6rem 1rem",
                fontSize: "0.75rem",
                fontFamily: "'Inter', system-ui, sans-serif",
                letterSpacing: "0.03em",
                border: `1px solid ${isSelected ? "#C49A4D" : "rgba(184, 146, 74, 0.24)"}`,
                borderRadius: "3px",
                background: isSelected ? "rgba(184, 146, 74, 0.18)" : "rgba(10, 10, 8, 0.22)",
                color: isSelected ? "#F0EAE0" : "rgba(234, 227, 213, 0.62)",
                cursor: "pointer",
                boxShadow: isSelected ? "0 12px 26px rgba(139, 106, 46, 0.14)" : "none",
              }}
            >
              {opt}
            </motion.button>
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
    <div>
      <span
        className="text-label block mb-4"
        style={{
          color: "rgba(234, 227, 213, 0.58)",
          fontSize: "0.5rem",
          letterSpacing: "0.16em",
        }}
      >
        {label}
      </span>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {options.map((opt) => {
          const isSelected = selected === opt;
          return (
          <label
            key={opt}
            className="group flex cursor-pointer items-center gap-2 rounded-[3px] border px-3 py-3 transition-all duration-300"
            style={{
              borderColor: isSelected ? "#C49A4D" : "rgba(184, 146, 74, 0.22)",
              background: isSelected ? "rgba(184, 146, 74, 0.16)" : "rgba(10, 10, 8, 0.2)",
            }}
          >
            <span
              className="transition-all duration-300 group-hover:border-[#8B6A2E]"
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                border: `1px solid ${isSelected ? "#C49A4D" : "rgba(184, 146, 74, 0.34)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {isSelected && (
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#C49A4D",
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
                color: isSelected ? "#F0EAE0" : "rgba(234, 227, 213, 0.62)",
                transition: "color 300ms",
              }}
            >
              {opt}
            </span>
          </label>
          );
        })}
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
    <div
      className="relative rounded-[3px] border px-4 pb-3 pt-7 transition-all duration-300"
      style={{
        borderColor: focused ? "rgba(196, 154, 77, 0.68)" : "rgba(184, 146, 74, 0.22)",
        background: focused ? "rgba(255, 255, 255, 0.035)" : "rgba(10, 10, 8, 0.2)",
      }}
    >
      <label
        htmlFor={name}
        className="text-label absolute left-4 top-3 pointer-events-none"
        style={{
          fontSize: "0.5rem",
          color: focused ? "#C49A4D" : "rgba(234, 227, 213, 0.52)",
          letterSpacing: "0.16em",
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
        className="w-full cursor-pointer appearance-none bg-transparent pr-8 outline-none"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "0.95rem",
          color: value ? "#F0EAE0" : "rgba(234, 227, 213, 0.52)",
          minHeight: "30px",
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
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
        style={{ color: "rgba(212, 197, 169, 0.52)", fontSize: "0.9rem" }}
      >
        ▾
      </span>
    </div>
  );
}

function TextareaField({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="relative rounded-[3px] border px-4 pb-3 pt-7 transition-all duration-300"
      style={{
        borderColor: focused ? "rgba(196, 154, 77, 0.68)" : "rgba(184, 146, 74, 0.22)",
        background: focused ? "rgba(255, 255, 255, 0.035)" : "rgba(10, 10, 8, 0.2)",
      }}
    >
      <label
        htmlFor={name}
        className="text-label absolute left-4 top-3 pointer-events-none"
        style={{
          fontSize: "0.5rem",
          color: focused ? "#C49A4D" : "rgba(234, 227, 213, 0.52)",
          letterSpacing: "0.16em",
          transition: "color 300ms",
        }}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full resize-none bg-transparent outline-none"
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "0.95rem",
          color: "#F0EAE0",
          minHeight: "8rem",
          caretColor: "#C49A4D",
        }}
      />
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
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184,146,74,0.14), transparent 62%), linear-gradient(180deg, #191812 0%, #11110E 100%)",
        paddingTop: "20vh",
        paddingBottom: "12vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="w-full px-6 md:px-16 lg:px-24"
    >
      <motion.div
        ref={ref}
        className="w-full"
        style={{
          maxWidth: "56rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: shouldReduce ? 0 : 1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <span
          className="text-label block text-center mb-8"
          style={{ color: "#B8924A", fontSize: "0.55rem", letterSpacing: "0.24em" }}
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
            color: "#EAE3D5",
          }}
        >
          Diseñemos tu viaje.
        </h2>

        {status === "success" ? (
          <motion.div
            className="text-center py-16 px-8"
            style={{
              border: "1px solid rgba(139, 106, 46, 0.18)",
              background: "rgba(12, 12, 10, 0.28)",
              boxShadow: "0 28px 80px rgba(0, 0, 0, 0.2)",
            }}
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
                color: "rgba(234, 227, 213, 0.62)",
                marginTop: "0.75rem",
              }}
            >
              Nos ponemos en contacto pronto.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="relative mx-auto flex w-full flex-col gap-5 overflow-hidden rounded-[4px] p-4 sm:p-6 md:p-7"
            style={{
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              border: "1px solid rgba(184, 146, 74, 0.26)",
              background: "linear-gradient(180deg, rgba(28,27,22,0.96), rgba(18,18,15,0.78))",
              boxShadow: "0 32px 90px rgba(0, 0, 0, 0.24)",
              backdropFilter: "blur(10px)",
            }}
            noValidate
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(184, 146, 74, 0.9), transparent)" }}
              aria-hidden="true"
            />

            <FormBlock>
              <SectionSeparator label="¿Quién sos?" />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FloatingInput label="Nombre completo" name="name" required value={form.name} onChange={(v) => set("name", v)} />
                <FloatingInput label="Email" name="email" type="email" required value={form.email} onChange={(v) => set("email", v)} />
                <div className="md:col-span-2">
                  <FloatingInput label="País de origen" name="country" value={form.country} onChange={(v) => set("country", v)} />
                </div>
              </div>
            </FormBlock>

            <FormBlock>
              <SectionSeparator label="¿Qué buscás?" />
              <div className="grid grid-cols-1 gap-7">
                <ChipSelect
                  label="Destino de interés"
                  options={destinationOptions}
                  selected={form.destination}
                  onToggle={(v) => toggleChip("destination", v)}
                />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_0.75fr]">
                  <ChipSelect
                    label="Tipo de experiencia"
                    options={experienceOptions}
                    selected={form.experience}
                    onToggle={(v) => toggleChip("experience", v)}
                  />
                  <FloatingInput label="Duración aproximada" name="duration" value={form.duration} onChange={(v) => set("duration", v)} />
                </div>
              </div>
            </FormBlock>

            <FormBlock>
              <SectionSeparator label="¿Cuándo y con quién?" />
              <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FloatingInput label="Fecha estimada del viaje" name="date" value={form.date} onChange={(v) => set("date", v)} />
                  <FloatingInput
                    label="Número de personas"
                    name="people"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={form.people}
                    onChange={(v) => set("people", v)}
                  />
                </div>
                <RadioGroup
                  label="¿Con quién viajás?"
                  name="travelWith"
                  options={travelWithOptions}
                  selected={form.travelWith}
                  onChange={(v) => set("travelWith", v)}
                />
              </div>
            </FormBlock>

            <FormBlock>
              <SectionSeparator label="Contanos más" />
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_0.65fr]">
                <TextareaField
                  label="¿Hay algo especial que quieras vivir en Argentina?"
                  name="special"
                  value={form.special}
                  onChange={(v) => set("special", v)}
                />
                <SelectField
                  label="¿Cómo nos conociste?"
                  name="howFound"
                  options={howFoundOptions}
                  value={form.howFound}
                  onChange={(v) => set("howFound", v)}
                />
              </div>
            </FormBlock>

            {/* Submit */}
            <div className="pt-8 flex justify-center">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="group flex items-center gap-3 px-7 py-4"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "rgba(139, 106, 46, 0.16)",
                  border: "1px solid rgba(184, 146, 74, 0.45)",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  boxShadow: "0 18px 40px rgba(0, 0, 0, 0.18)",
                }}
              >
                <span
                  className="text-label transition-colors duration-300 group-hover:text-[#D4C5A9]"
                  style={{
                    color: status === "sending" ? "rgba(212, 197, 169, 0.3)" : "#EAE3D5",
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
              <p className="text-center" style={{ color: "#D4B26A", fontSize: "0.85rem" }}>
                Hubo un error. Intentá de nuevo o escribinos a travelcasaone@gmail.com
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
          href="mailto:travelcasaone@gmail.com"
          className="text-label link-underline"
          style={{
            color: "rgba(212, 197, 169, 0.3)",
            fontSize: "0.55rem",
            letterSpacing: "0.18em",
          }}
        >
          travelcasaone@gmail.com
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
