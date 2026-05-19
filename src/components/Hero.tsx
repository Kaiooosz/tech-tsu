"use client"
import { useRef } from "react"
import {
  motion,
  useScroll, useTransform,
} from "framer-motion"
import { E, SPRING_SOFT } from "@/lib/motion"

const bars = [30, 50, 42, 70, 58, 85, 90]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Parallax layers
  const gridY    = useTransform(scrollYProgress, [0, 1], [0, -90])
  const glowY    = useTransform(scrollYProgress, [0, 1], [0,  70])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const mockX    = useTransform(scrollYProgress, [0, 1], [0,  30])

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
              Ver case BBLAW
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

        {/* ── Right floating mock panels ─── */}
        <motion.div
          className="hero-mock"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: E }}
          style={{
            position: "absolute", right: 40, top: "50%",
            y: "-50%",
            width: 340,
            x: mockX,
          }}
        >
          {/* Continuous float wrapper */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {/* KPI card */}
            <motion.div
              whileHover={{ scale: 1.03, borderColor: "rgba(46,196,182,0.25)" }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              style={{
                padding: "20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                borderRadius: 8, backdropFilter: "blur(16px)",
              }}
            >
              <div style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", marginBottom: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Pipeline ativo
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                {[{n:"18",l:"Leads"},{n:"7",l:"Proposta"},{n:"3",l:"Fechado"}].map((k, i) => (
                  <motion.div
                    key={k.l}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.1, ease: E }}
                    style={{ textAlign: "center" }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 500, color: "var(--text)" }}>{k.n}</div>
                    <div style={{ fontSize: 11, color: "var(--muted-2)", marginTop: 2 }}>{k.l}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Task card */}
            <motion.div
              whileHover={{ scale: 1.03, borderColor: "rgba(46,196,182,0.25)" }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              style={{
                padding: "20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                borderRadius: 8, backdropFilter: "blur(16px)",
              }}
            >
              <div style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", marginBottom: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Tarefas hoje
              </div>
              {[
                { label: "Contrato — Dr. Marcos", done: true  },
                { label: "Reunião — Proposta OS", done: true  },
                { label: "Enviar docs fiscais",   done: false },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + i * 0.1, ease: E }}
                  style={{ display: "flex", alignItems: "center", gap: 10, marginTop: i === 0 ? 0 : 10 }}
                >
                  <div style={{
                    width: 16, height: 16, borderRadius: 3,
                    background: t.done ? "var(--teal)" : "transparent",
                    border: `1px solid ${t.done ? "var(--teal)" : "var(--border-m)"}`,
                    flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {t.done && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#070809" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  <span style={{ fontSize: 12, color: t.done ? "var(--muted-2)" : "var(--text)", textDecoration: t.done ? "line-through" : "none" }}>
                    {t.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Bar chart card */}
            <motion.div
              whileHover={{ scale: 1.03, borderColor: "rgba(46,196,182,0.25)" }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              style={{
                padding: "20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                borderRadius: 8, backdropFilter: "blur(16px)",
              }}
            >
              <div style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", marginBottom: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Receita / mês
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 48 }}>
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 + i * 0.07, ease: E }}
                    style={{
                      flex: 1, height: `${h}%`,
                      borderRadius: "2px 2px 0 0",
                      background: i === 6 ? "var(--teal)" : "rgba(255,255,255,0.1)",
                      transformOrigin: "bottom",
                    }}
                  />
                ))}
              </div>
            </motion.div>
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
