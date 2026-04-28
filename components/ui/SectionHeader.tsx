"use client";

import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  description?: string;
  layout?: "stacked" | "side-by-side";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  description,
  layout = "side-by-side",
  className = "",
}: SectionHeaderProps) {
  if (layout === "stacked") {
    return (
      <div className={`mb-12 lg:mb-16 ${className}`}>
        <ScrollReveal delay={0.1} direction="none">
          <div className="flex items-center gap-3 mb-8">
            <span className="divider-earth" />
            <span className="text-label" style={{ color: "var(--accent)", fontSize: "0.56rem", letterSpacing: "0.24em" }}>
              {label}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="text-display-xl mb-6" style={{ color: "var(--text-base)" }}>
            {title}
            {subtitle && (
              <em style={{ color: "var(--accent)", fontStyle: "italic", display: "block" }}>
                {subtitle}
              </em>
            )}
          </h2>
        </ScrollReveal>

        {description && (
          <ScrollReveal delay={0.3}>
            <p className="text-body-refined max-w-2xl" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
              {description}
            </p>
          </ScrollReveal>
        )}
      </div>
    );
  }

  return (
    <div className={`grid lg:grid-cols-12 gap-16 mb-12 lg:mb-16 items-start ${className}`}>
      <div className="lg:col-span-3">
        <ScrollReveal delay={0.1} direction="none">
          <div className="flex items-center gap-3">
            <span className="divider-earth" />
            <span className="text-label" style={{ color: "#8B6A2E", fontSize: "0.56rem", letterSpacing: "0.24em" }}>
              {label}
            </span>
          </div>
        </ScrollReveal>
      </div>

      <div className="lg:col-span-9">
        <ScrollReveal delay={0.2}>
          <h2 className="text-display-xl" style={{ color: "#0C0C0A" }}>
            {title}
            {subtitle && (
              <em style={{ color: "#8B6A2E", fontStyle: "italic", display: "block" }}>
                {subtitle}
              </em>
            )}
          </h2>
        </ScrollReveal>

        {description && (
          <ScrollReveal delay={0.3}>
            <p className="text-body-refined max-w-xl mt-6" style={{ color: "#6B6560", lineHeight: 1.8 }}>
              {description}
            </p>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
