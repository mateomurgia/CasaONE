"use client";

export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="w-full overflow-hidden pointer-events-none"
      style={{
        height: "clamp(40px, 6vw, 80px)",
        marginTop: "-1px",
        marginBottom: "-1px",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ fill: "#141411" }}
      >
        <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}

export function SectionDividerReverse() {
  return (
    <div
      className="w-full overflow-hidden pointer-events-none"
      style={{
        height: "clamp(40px, 6vw, 80px)",
        marginTop: "-1px",
        marginBottom: "-1px",
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ fill: "#0C0C0A" }}
      >
        <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}
