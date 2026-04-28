"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Filosofía", href: "#philosophy" },
  { label: "Destinos", href: "#destinations" },
  { label: "Viaje insignia", href: "#journey" },
  { label: "Proceso", href: "#process" },
];

const ctaLabel = "Hablemos";
const ctaHref = "#contact";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const logoColor = scrolled ? "var(--text-base)" : "var(--text-inverse)";
  const navColor = scrolled ? "var(--text-muted)" : "var(--text-subtle)";
  const ctaColor = "var(--accent)";

  return (
    <>
      {/* HEADER */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          style={{
            background: scrolled ? "var(--surface-elevated-color)" : "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            borderBottom: scrolled ? "1px solid rgba(226, 221, 213, 0.4)" : "none",
            transition: "all 0.5s ease",
          }}
        >
          <div className="max-w-screen-xl mx-auto px-8 lg:px-16">
            <div className="flex items-center justify-between h-20 lg:h-24">
              {/* LOGO */}
              <motion.a
                href="#"
                aria-label="Casa Uno Home"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col leading-none">
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.375rem",
                      fontWeight: 400,
                      letterSpacing: "0.08em",
                      color: logoColor,
                      transition: "color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      display: "block",
                    }}
                  >
                    Casa Uno
                  </span>
                  <span
                      className="text-label"
                      style={{
                        fontSize: "0.5rem",
                        letterSpacing: "0.22em",
                        color: "var(--accent)",
                        transition: "color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        display: "block",
                        marginTop: "3px",
                      }}
                    >
                    Travel Design
                  </span>
                </div>
              </motion.a>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-12 flex-1 justify-center">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="link-underline text-label group relative"
                    style={{
                      fontSize: "0.56rem",
                      letterSpacing: "0.2em",
                      color: navColor,
                      transition: "color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                    whileHover={{ color: scrolled ? "var(--text-base)" : "var(--text-inverse)" }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.08, duration: 0.7 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA BUTTON */}
              <motion.a
                href={ctaHref}
                className="hidden lg:flex items-center gap-2 group relative"
                style={{
                  color: ctaColor,
                  transition: "color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                whileHover={{ color: scrolled ? "#A68847" : "#D4C5A9" }}
              >
                <span className="text-label" style={{ fontSize: "0.56rem", letterSpacing: "0.2em" }}>
                  {ctaLabel}
                </span>
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-all duration-300"
                  whileHover={{ x: 2 }}
                >
                  <path
                    d="M1.5 6h9M8.5 3.5l2.5 2.5-2.5 2.5"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.a>

              {/* MOBILE MENU BUTTON */}
              <motion.button
                className="lg:hidden flex items-center justify-center w-10 h-10 p-0 no-underline"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menú"
                whileTap={{ scale: 0.95 }}
              >
                {menuOpen ? (
                  <X size={20} style={{ color: "var(--text-inverse)" }} />
                ) : (
                  <Menu size={20} style={{ color: scrolled ? "var(--text-base)" : "var(--text-inverse)" }} />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <motion.div
        className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center gap-8 px-8"
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.3 }}
        style={{ background: "rgba(12, 12, 10, 0.98)", backdropFilter: "blur(8px)" }}
      >
        {navItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            initial={{ y: 20, opacity: 0 }}
            animate={menuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.75rem",
              fontWeight: 300,
              color: "#EAE3D5",
              letterSpacing: "-0.01em",
            }}
          >
            {item.label}
          </motion.a>
        ))}

        <div className="h-px w-12 bg-earth my-4" />

        <motion.a
          href={ctaHref}
          onClick={() => setMenuOpen(false)}
          initial={{ y: 20, opacity: 0 }}
          animate={menuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: navItems.length * 0.06, duration: 0.4 }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 300,
            color: "#8B6A2E",
          }}
        >
          {ctaLabel}
        </motion.a>
      </motion.div>
    </>
  );
}
 
