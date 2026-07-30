"use client"
import { useRef } from "react"
import {
  motion,
  useScroll, useTransform,
} from "framer-motion"
import { E, SPRING_SOFT } from "@/lib/motion"
import { WA } from "@/lib/site"

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
            background: "radial-gradient(circle, rgba(44,85,232,0.14) 0%, transparent 70%)",
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
            position: "absolute", top: 100, right: 60, zIndex: 3,
            display: "flex", alignItems: "center", gap: 8,
            padding: "6px 12px",
            background: "rgba(25,27,33,0.72)",
            border: "1px solid rgba(143,168,255,0.35)",
            backdropFilter: "blur(8px)",
            borderRadius: 999, fontSize: 12, fontWeight: 500,
            fontFamily: "var(--font-mono)",
            color: "var(--sky)",
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
                background: "var(--teal)", color: "#fff",
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
              href={WA.geral}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                height: 48, padding: "0 22px",
                border: "1px solid rgba(44,85,232,0.45)",
                background: "rgba(44,85,232,0.10)",
                color: "var(--text)",
                fontWeight: 600, fontSize: 14, borderRadius: 4,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--sky)">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.07-1.115l-.292-.174-3.027.869.852-3.11-.19-.312A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
              </svg>
              Chamar no WhatsApp
            </motion.a>

            <motion.a
              href="#vitrine"
              whileHover={{ scale: 1.04, color: "var(--text)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                height: 48, padding: "0 24px",
                border: "1px solid var(--border-m)", color: "var(--muted)",
                fontWeight: 500, fontSize: 14, borderRadius: 4,
              }}
            >
              Ver sistemas entregues
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
              { n: "7+",  label: "Aplicações em produção" },
              { n: "14+", label: "Agentes de IA em operação" },
              { n: "3–6", label: "Semanas para o MVP" },
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

        {/* ── Foto lateral com degradê ─── */}
        <motion.div
          className="hero-mock"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: E }}
          style={{
            position: "absolute", right: 0, top: 0, bottom: 0,
            width: "52%",
            overflow: "hidden",
            pointerEvents: "none",
            x: mockX,
            opacity: mockOpacity,
          }}
        >
          <motion.img
            src="/midia/equipe-vidro.jpg"
            alt=""
            style={{
              position: "absolute", top: -60, left: 0,
              width: "100%", height: "calc(100% + 120px)",
              objectFit: "cover", objectPosition: "60% 50%",
              opacity: 0.34,
              maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 66%, rgba(0,0,0,0) 96%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 66%, rgba(0,0,0,0) 96%)",
              y: mockImgY,
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, var(--bg) 0%, rgba(25,27,33,0.6) 14%, transparent 34%, transparent 72%, var(--bg) 100%)",
          }} />
        </motion.div>

      </section>

      <style>{`
        @media (max-width: 980px) { .hero-mock { display: none !important; } }
        @media (max-width: 768px)  { .badge-float { display: none !important; } }
      `}</style>
    </>
  )
}
