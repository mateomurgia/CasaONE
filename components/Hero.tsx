"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const heroVideos = [
  { src: "https://assets.mixkit.co/videos/26920/26920-720.mp4", label: "Buenos Aires" },
  { src: "https://assets.mixkit.co/videos/29340/29340-720.mp4", label: "Mendoza" },
  { src: "https://assets.mixkit.co/videos/5002/5002-720.mp4", label: "Bariloche" },
  { src: "https://assets.mixkit.co/videos/48403/48403-720.mp4", label: "El Calafate" },
  { src: "https://assets.mixkit.co/videos/9677/9677-720.mp4", label: "Ushuaia" },
];

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Territorios", href: "#territories" },
  { label: "Viaje", href: "#journey" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contact" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  const [showHeader, setShowHeader] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const shouldReduce = useReducedMotion();

  useMotionValueEvent(scrollYProgress, "change", (v) => setShowHeader(v > 0.15));

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "filosofia", "territories", "journey", "proceso", "equipo", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Cycle videos every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Audio setup — autoplay on first user interaction
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.15;
    audio.loop = true;
    // Browsers block autoplay without interaction — try, then fallback to first click
    const tryPlay = () => {
      audio.play().catch(() => {
        const unlock = () => {
          audio.play();
          document.removeEventListener("click", unlock);
          document.removeEventListener("touchstart", unlock);
        };
        document.addEventListener("click", unlock, { once: true });
        document.addEventListener("touchstart", unlock, { once: true });
      });
    };
    tryPlay();
  }, []);

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audioPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setAudioPlaying(!audioPlaying);
  }, [audioPlaying]);

  return (
    <>
      {/* Background audio */}
      <audio ref={audioRef} src="/ambient.mp3" preload="auto" />

      {/* Professional sticky navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24"
        style={{ height: "56px", pointerEvents: showHeader ? "auto" : "none" }}
        initial={false}
        animate={{
          opacity: showHeader ? 1 : 0,
          y: showHeader ? 0 : -10,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(12, 12, 10, 0.82)",
            backdropFilter: "blur(18px) saturate(1.08)",
            WebkitBackdropFilter: "blur(18px) saturate(1.08)",
            borderBottom: "1px solid rgba(139, 106, 46, 0.16)",
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.18)",
          }}
        />
        {/* Logo */}
        <a
          href="#hero"
          className="relative z-10"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.05rem",
            fontWeight: 400,
            color: "#D4C5A9",
            letterSpacing: "0.04em",
            textDecoration: "none",
          }}
        >
          Casa Uno
        </a>

        {/* Nav links */}
        <nav className="relative z-10 hidden sm:flex items-center gap-10">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-label relative"
                style={{
                  color: isActive ? "#D4C5A9" : "rgba(212, 197, 169, 0.5)",
                  fontSize: "0.52rem",
                  letterSpacing: "0.2em",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D4C5A9")}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "rgba(212, 197, 169, 0.5)";
                }}
              >
                {link.label}
                {/* Active underline indicator */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px"
                  style={{ background: "#8B6A2E" }}
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </a>
            );
          })}
        </nav>

        {/* Audio toggle */}
        <button
          onClick={toggleAudio}
          className="relative z-10 flex items-center gap-2 group"
          aria-label={audioPlaying ? "Pausar audio" : "Reproducir audio"}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
        >
          <div className="flex items-end gap-[2px]" style={{ height: "14px" }}>
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                animate={
                  audioPlaying
                    ? { height: ["3px", "12px", "5px", "10px", "3px"] }
                    : { height: "3px" }
                }
                transition={
                  audioPlaying
                    ? { repeat: Infinity, duration: 1.2, delay: i * 0.15, ease: "easeInOut" }
                    : { duration: 0.3 }
                }
                style={{
                  width: "2px",
                  background: "#8B6A2E",
                  borderRadius: "1px",
                  display: "block",
                }}
              />
            ))}
          </div>
        </button>
      </motion.header>

      {/* Hero section */}
      <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video background with crossfade */}
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <AnimatePresence mode="wait">
            <motion.video
              key={currentVideo}
              className="absolute inset-0 w-full h-full object-cover"
              src={heroVideos[currentVideo].src}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.42 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          {/* Dark overlay on video */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(12,12,10,0.34) 0%, rgba(12,12,10,0.86) 100%), linear-gradient(180deg, rgba(12,12,10,0.05) 0%, rgba(12,12,10,0.36) 100%)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-x-0 top-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(184,146,74,0.12), transparent)",
          }}
          animate={shouldReduce ? undefined : { opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Centered content */}
        <motion.div
          className="relative z-10 text-center px-6 md:px-16 lg:px-24"
          style={{ opacity: textOpacity, y: textY }}
        >
          {/* Logo — fades in and drifts up above the headline */}
          <motion.img
            src="/logo.svg"
            alt="Casa Uno"
            style={{
              width: "clamp(100px, 18vw, 180px)",
              height: "auto",
              margin: "0 auto 2.5rem",
              display: "block",
              filter: "drop-shadow(0 0 44px rgba(12,12,10,0.62))",
            }}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 1.4, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          <motion.h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(3.2rem, 9vw, 8rem)",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#D4C5A9",
              textShadow: "0 24px 70px rgba(0,0,0,0.38)",
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            No vendemos destinos.
          </motion.h1>

          <motion.h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(3.2rem, 9vw, 8rem)",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "rgba(212, 197, 169, 0.4)",
              fontStyle: "italic",
              marginTop: "0.1em",
              textShadow: "0 22px 64px rgba(0,0,0,0.32)",
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Diseñamos experiencias.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-label"
            style={{
              color: "rgba(212, 197, 169, 0.3)",
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              marginTop: "3rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Argentina &middot; Curated Journeys
          </motion.p>
        </motion.div>

        {/* Current video location indicator */}
        <motion.div
          className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          {heroVideos.map((v, i) => (
            <button
              key={v.label}
              onClick={() => setCurrentVideo(i)}
              className="flex items-center gap-2 group"
              aria-label={`Ver ${v.label}`}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
            >
              <span
                className="block transition-all duration-500"
                style={{
                  width: i === currentVideo ? "24px" : "8px",
                  height: "1px",
                  background: i === currentVideo ? "#8B6A2E" : "rgba(212, 197, 169, 0.2)",
                }}
              />
            </button>
          ))}
        </motion.div>

        {/* Scroll indicator — animated vertical line */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            style={{
              height: "48px",
              width: "1px",
              background: "rgba(139, 106, 46, 0.5)",
              transformOrigin: "top",
            }}
          />
        </motion.div>

        {/* Audio toggle — visible in hero before header shows */}
        <motion.button
          className="absolute top-6 right-6 md:right-16 lg:right-24 z-40 flex items-center gap-2"
          onClick={toggleAudio}
          aria-label={audioPlaying ? "Pausar audio" : "Reproducir audio"}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showHeader ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-end gap-[2px]" style={{ height: "14px" }}>
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                animate={
                  audioPlaying
                    ? { height: ["3px", "12px", "5px", "10px", "3px"] }
                    : { height: "3px" }
                }
                transition={
                  audioPlaying
                    ? { repeat: Infinity, duration: 1.2, delay: i * 0.15, ease: "easeInOut" }
                    : { duration: 0.3 }
                }
                style={{
                  width: "2px",
                  background: "#8B6A2E",
                  borderRadius: "1px",
                  display: "block",
                }}
              />
            ))}
          </div>
        </motion.button>
      </section>
    </>
  );
}
