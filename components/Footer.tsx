export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-20 lg:py-28"
      style={{ background: "var(--bg-contrast)", borderTop: "1px solid rgba(226, 221, 213, 0.06)" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
        {/* MAIN FOOTER CONTENT */}
        <div className="grid lg:grid-cols-12 gap-16 mb-16 lg:mb-20">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-3">
            <div className="flex flex-col leading-tight">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--text-inverse)",
                  letterSpacing: "0.08em",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Casa Uno
              </span>
              <span className="text-label block mb-6" style={{ color: "var(--accent)", fontSize: "0.52rem", letterSpacing: "0.22em" }}>
                Travel Design
              </span>
            </div>
            <p className="text-body-refined text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.8, maxWidth: "22rem" }}>
              Viajes curados en Argentina para agencias boutique y operadores premium.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-2 lg:col-start-5">
            <span className="text-label block mb-6" style={{ color: "var(--text-muted)", fontSize: "0.52rem", letterSpacing: "0.2em" }}>
              Navegación
            </span>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Filosofía", href: "#philosophy" },
                { label: "Destinos", href: "#destinations" },
                { label: "Viaje insignia", href: "#journey" },
                { label: "Proceso", href: "#process" },
                { label: "Contacto", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="link-underline text-body-refined text-sm transition-colors hover:text-earth" style={{ color: "var(--text-subtle)" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* DESTINATIONS */}
          <div className="lg:col-span-2">
            <span className="text-label block mb-6" style={{ color: "var(--text-muted)", fontSize: "0.52rem", letterSpacing: "0.2em" }}>
              Territorios
            </span>
            <ul className="flex flex-col gap-4">
              {["Buenos Aires", "Mendoza", "Bariloche", "El Calafate", "Ushuaia"].map((place) => (
                <li key={place}>
                  <span className="text-body-refined text-sm" style={{ color: "rgba(107, 101, 96, 0.5)" }}>
                    {place}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-3 lg:col-start-11">
            <span className="text-label block mb-6" style={{ color: "rgba(107, 101, 96, 0.5)", fontSize: "0.52rem", letterSpacing: "0.2em" }}>
              Contacto
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:travelcasaone@gmail.com"
                className="link-underline text-body-refined text-sm transition-colors hover:text-earth"
                style={{ color: "var(--text-subtle)" }}
              >
                travelcasaone@gmail.com
              </a>
              <span className="text-body-refined text-sm" style={{ color: "var(--text-muted)" }}>
                Buenos Aires, Argentina
              </span>
              <a
                href="#contact"
                className="group flex items-center gap-2 mt-2 transition-colors hover:text-earth"
                style={{ color: "var(--accent)" }}
              >
                <span className="text-label text-xs" style={{ fontSize: "0.52rem", letterSpacing: "0.18em" }}>
                  Iniciar conversación
                </span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0">
                  <path d="M1.5 5h7M6 2.5l2.5 2.5L6 7.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(226, 221, 213, 0.2) 50%, transparent)", marginBottom: "1.5rem" }} />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-label text-xs" style={{ color: "var(--text-subtle)", fontSize: "0.5rem", letterSpacing: "0.16em" }}>
            © {currentYear} Casa Uno. Todos los derechos reservados.
          </span>
          <span className="text-label text-xs" style={{ color: "var(--text-subtle)", fontSize: "0.5rem", letterSpacing: "0.16em" }}>
            Travel Design · Buenos Aires · Argentina
          </span>
        </div>
      </div>
    </footer>
  );
}
 
