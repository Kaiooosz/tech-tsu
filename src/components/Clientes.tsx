"use client"
import { motion } from "framer-motion"

const clients = [
  {
    name: "Bezerra Borges",
    segment: "Escritório Jurídico",
    src: "/logo-bblaw.svg",
    filter: "brightness(0) opacity(0.65)",
  },
  {
    name: "RB Motos",
    segment: "Concessionária",
    src: "/logo-rbmotos.jpg",
    filter: "grayscale(1) opacity(0.5)",
  },
  {
    name: "Zap Empréstimos",
    segment: "Fintech",
    src: "/logo-zap.png",
    filter: "brightness(0) opacity(0.55)",
  },
  {
    name: "Cicatribem",
    segment: "Saúde & Estética",
    src: "/logo-cicatribem.png",
    filter: "brightness(0) opacity(0.55)",
  },
  {
    name: "Pointify",
    segment: "SaaS / Fidelidade",
    src: "/logo-pointify.jpg",
    filter: "grayscale(1) opacity(0.5)",
  },
]

// 4 cópias: a faixa anda 25% e reinicia sem emenda visível.
const COPIAS = 4

export function Clientes() {
  return (
    <section className="clientes" style={{
      background: "var(--paper-2)",
      borderTop: "1px solid var(--border-light)",
      borderBottom: "1px solid var(--border-light)",
      padding: "64px 0",
      overflow: "hidden",
    }}>
      <p style={{
        fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
        color: "var(--muted-ink)", textTransform: "uppercase",
        textAlign: "center", marginBottom: 40, padding: "0 20px",
      }}>
        Empresas que confiam na Tech Tsu
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="logos-viewport"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Máscaras laterais */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 140,
          background: "linear-gradient(90deg, var(--paper-2) 0%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 140,
          background: "linear-gradient(270deg, var(--paper-2) 0%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />

        <div className="logos-track" style={{ display: "flex", gap: 16, width: "max-content", padding: "6px 8px" }}>
          {Array.from({ length: COPIAS }).flatMap((_, copia) =>
            clients.map(c => (
              <div
                key={`${copia}-${c.name}`}
                className="logo-card"
                aria-hidden={copia > 0}
                style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  gap: 8, width: 160, height: 88, flexShrink: 0,
                  borderRadius: 10, padding: "16px 20px",
                  background: "#fff",
                  boxShadow: "var(--shadow-sm)",
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                }}
              >
                <img
                  src={c.src}
                  alt={copia === 0 ? c.name : ""}
                  style={{
                    maxWidth: 110, maxHeight: 40,
                    objectFit: "contain",
                    filter: c.filter,
                  }}
                />
                <span style={{
                  fontSize: 9, fontWeight: 600, letterSpacing: "0.08em",
                  color: "var(--muted-ink-2)", textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>
                  {c.segment}
                </span>
              </div>
            ))
          )}
        </div>
      </motion.div>

      <style>{`
        .logos-track {
          animation: logos-marquee 38s linear infinite;
        }
        .logos-viewport:hover .logos-track { animation-play-state: paused; }
        .logo-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
        @keyframes logos-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        @media (max-width: 560px) {
          .clientes { padding: 48px 0 !important; }
          .logos-track { animation-duration: 26s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .logos-track { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
