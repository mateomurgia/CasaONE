"use client";

import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "cream" | "dark" | "carbon" | "gradient";
  id?: string;
  spacing?: "compact" | "default" | "spacious";
}

const bgMap = {
  cream: "var(--color-cream)",
  dark: "var(--color-carbon)",
  carbon: "var(--color-carbon-soft, #0F0F0C)",
  gradient: "linear-gradient(160deg, var(--color-carbon-soft, #0f1a14) 0%, var(--color-carbon, #141e2a) 40%, var(--color-carbon, #0a0e12) 100%)",
};

const spacingMap = {
  compact: "py-16 lg:py-20",
  default: "py-24 lg:py-32",
  spacious: "py-32 lg:py-48",
};

export function Section({
  children,
  className = "",
  background = "cream",
  id,
  spacing = "default",
}: SectionProps) {
  const bgStyle = background === "gradient" ? { background: bgMap.gradient } : { background: bgMap[background] };

  return (
    <section id={id} className={`${spacingMap[spacing]} overflow-hidden transition-colors duration-500 ${className}`} style={bgStyle}>
      {children}
    </section>
  );
}
