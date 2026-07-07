"use client"
import { useRef } from "react"
import {
  motion,
  useScroll, useTransform,
} from "framer-motion"
import { E, SPRING_SOFT } from "@/lib/motion"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Parallax layers
  const gridY      = useTransform(scrollYProgress, [0, 1], [0, -90])
  const glowY      = useTransform(scrollYProgress, [0, 1], [0,  70])
  const contentY   = useTransform(scrollYProgress, [0, 1], [0, -50])
  const mockX      = useTransform(scrollYProgress, [0, 1], [0,  30])
  const mockImgY   = useTransform(scrollYProgress, [0, 0.6, 1], [0, -40, -120])
  const mockOpacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [1, 0.6, 0])

  return (
    <>
      <section
        ref={sectionRef}
        id="inicio"
        style={{
          position: "relative", minHeight: "100vh",
          display: "flex", alignItems: "center",
          padding: "120px 40px 80px",
          overflow: "hidden",
        }}
      >
        {/* Circuit grid — parallax */}
        <motion.div
          className="circuit-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.6, y: gridY }}
        />

        {/* Radial glow — parallax + breathe */}
        <motion.div
          style={{
            position: "absolute", top: "20%", left: "50%",
            translateX: "-50%", translateY: "-50%",
            width: 640, height: 640, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(46,196,182,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
            y: glowY,
          }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating status badge */}
        <motion.div
          className="badge-float"
          initial={{ opacity: 0, y: -18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ...SPRING_SOFT }}
          style={{
            position: "absolute", top: 100, right: 60,
            display: "flex", alignItems: "center", gap: 8,
            padding: "6px 12px",
            background: "rgba(46,196,182,0.08)",
            border: "1px solid rgba(46,196,182,0.2)",
            borderRadius: 999, fontSize: 12, fontWeight: 500,
            fontFamily: "var(--font-mono)",
            color: "var(--teal)",
          }}
        >
          <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
          Disponível para novos projetos
        </motion.div>

        {/* Main content — parallax scroll */}
        <motion.div style={{ position: "relative", zIndex: 2, maxWidth: 900, y: contentY }}>

          {/* Company pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: E }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 32, padding: "5px 12px",
              border: "1px solid var(--border-m)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
            TSUNOKAWA TECH LTDA — Software House
          </motion.div>

          {/* H1 — mask reveal per line */}
          <h1 style={{
            fontSize: "clamp(48px, 7.5vw, 96px)",
            fontWeight: 700, lineHeight: 0.95,
            letterSpacing: "-0.04em", marginBottom: 28,
          }}>
            <div style={{ overflow: "hidden" }}>
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, delay: 0.44, ease: E }}
                style={{ display: "block", color: "var(--text)" }}
              >
                Processo real.
              </motion.span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, delay: 0.58, ease: E }}
                style={{ display: "block", color: "var(--text)" }}
              >
                Sistema{" "}
                <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.42)" }}>
                  sob medida.
                </em>
              </motion.span>
            </div>
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72, ease: E }}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "var(--muted)", maxWidth: 580,
              lineHeight: 1.65, marginBottom: 44,
            }}
          >
            Transformamos operações que vivem em planilha e WhatsApp em sistemas organizados — com CRM, tarefas, documentos, dashboards e automações.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.86, ease: E }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                height: 48, padding: "0 24px",
                background: "var(--teal)", color: "var(--bg)",
                fontWeight: 700, fontSize: 14, borderRadius: 4,
              }}
            >
              Marcar diagnóstico gratuito
              <motion.svg
                width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </motion.svg>
            </motion.a>

            <motion.a
              href="#case"
              whileHover={{ scale: 1.04, borderColor: "var(--border-m)", color: "var(--text)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                height: 48, padding: "0 24px",
                border: "1px solid var(--border-m)", color: "var(--muted)",
                fontWeight: 500, fontSize: 14, borderRadius: 4,
              }}
            >
              Ver case Bezerra Borges
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: E }}
            style={{
              display: "flex", gap: 40, marginTop: 64,
              paddingTop: 40, borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            {[
              { n: "01",  label: "Cliente ativo" },
              { n: "4+",  label: "Módulos entregues" },
              { n: "3–6", label: "Semanas para MVP" },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.05 + i * 0.1, ease: E }}
              >
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 28,
                  fontWeight: 500, color: "var(--text)", lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}>
                  {s.n}
                </div>
                <div style={{ fontSize: 12, color: "var(--muted-2)", marginTop: 4, fontWeight: 500 }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right floating mock images ─── */}
        <motion.div
          className="hero-mock"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: E }}
          style={{
            position: "absolute", right: 40, top: "50%",
            translateY: "-50%",
            width: 360,
            x: mockX,
            y: mockImgY,
            opacity: mockOpacity,
          }}
        >
          {/* Float animation wrapper */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "relative" }}
          >
            {/* Back image — pipeline, offset behind */}
            <motion.img
              src="/resultado-pipeline.svg"
              alt="Pipeline CRM"
              initial={{ opacity: 0, y: 20, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.9, ease: E }}
              style={{
                position: "absolute",
                top: 24, left: -20,
                width: "90%",
                borderRadius: 10,
                boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
                border: "1px solid rgba(255,255,255,0.06)",
                opacity: 0.55,
                pointerEvents: "none",
              }}
            />

            {/* Front image — dashboard */}
            <motion.img
              src="/resultado-dashboard.svg"
              alt="Dashboard CRM"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.75, ease: E }}
              style={{
                position: "relative", zIndex: 1,
                width: "100%",
                borderRadius: 12,
                boxShadow: "0 16px 60px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 1100px) { .hero-mock { display: none !important; } }
        @media (max-width: 768px)  { .badge-float { display: none !important; } }
      `}</style>
    </>
  )
}
