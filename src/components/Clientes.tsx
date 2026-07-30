"use client"
import { motion } from "framer-motion"

const clients = [
  { name: "Bezerra Borges", src: "/logo-bblaw.svg",      h: 40 },
  { name: "RB Motos",       src: "/logo-rbmotos.jpg",    h: 46 },
  { name: "Zap Empréstimos",src: "/logo-zap.png",        h: 38 },
  { name: "Cicatribem",     src: "/logo-cicatribem.png", h: 40 },
  { name: "Pointify",       src: "/logo-pointify.jpg",   h: 44 },
]

// 4 cópias idênticas: a faixa anda 25% e reinicia sem emenda visível.
const COPIAS = 4

export function Clientes() {
  return (
    <section className="clientes" style={{
      background: "var(--paper-2)",
      borderTop: "1px solid var(--border-light)",
      borderBottom: "1px solid var(--border-light)",
      padding: "56px 0",
      overflow: "hidden",
    }}>
      <p style={{
        fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
        color: "var(--muted-ink)", textTransform: "uppercase",
        textAlign: "center", marginBottom: 36, padding: "0 20px",
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
          position: "absolute", left: 0, top: 0, bottom: 0, width: 160,
          background: "linear-gradient(90deg, var(--paper-2) 15%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 160,
          background: "linear-gradient(270deg, var(--paper-2) 15%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />

        <div className="logos-track" style={{ display: "flex", alignItems: "center", gap: 76, width: "max-content" }}>
          {Array.from({ length: COPIAS }).flatMap((_, copia) =>
            clients.map(c => (
              <img
                key={`${copia}-${c.name}`}
                className="logo-item"
                src={c.src}
                alt={copia === 0 ? c.name : ""}
                aria-hidden={copia > 0}
                style={{
                  height: c.h, width: "auto", maxWidth: 150,
                  objectFit: "contain", flexShrink: 0,
                }}
              />
            ))
          )}
        </div>
      </motion.div>

      <style>{`
        .logos-track { animation: logos-marquee 18s linear infinite; }

        .logo-item {
          filter: grayscale(1) brightness(0.35) opacity(0.55);
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        .logo-item:hover {
          filter: grayscale(0) brightness(1) opacity(1);
          transform: scale(1.06);
        }

        @keyframes logos-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }

        @media (max-width: 560px) {
          .clientes { padding: 44px 0 !important; }
          .logos-track { animation-duration: 13s; gap: 48px !important; }
          .logo-item { height: 32px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .logos-track { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
