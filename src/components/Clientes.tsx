"use client"
import { motion } from "framer-motion"
import { E } from "@/lib/motion"

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

export function Clientes() {
  return (
    <section style={{
      background: "var(--paper-2)",
      borderTop: "1px solid var(--border-light)",
      borderBottom: "1px solid var(--border-light)",
      padding: "64px 40px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{
          fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
          color: "var(--muted-ink)", textTransform: "uppercase",
          textAlign: "center", marginBottom: 40,
        }}>
          Empresas que confiam na Tech Tsu
        </p>

        <div style={{
          display: "flex", flexWrap: "wrap", gap: 16,
          justifyContent: "center", alignItems: "center",
        }}>
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: E }}
              className="client-card"
              style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 8, width: 160, height: 88,
                borderRadius: 10, padding: "16px 20px",
                background: "#fff",
                boxShadow: "var(--shadow-sm)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                cursor: "default",
              }}
              whileHover={{ y: -2, boxShadow: "var(--shadow-md)" } as never}
            >
              <img
                src={c.src}
                alt={c.name}
                style={{
                  maxWidth: 110, maxHeight: 40,
                  objectFit: "contain",
                  filter: c.filter,
                }}
              />
              <span style={{
                fontSize: 9, fontWeight: 600, letterSpacing: "0.08em",
                color: "var(--muted-ink-2)", textTransform: "uppercase",
              }}>
                {c.segment}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          section { padding: 48px 20px !important; }
        }
      `}</style>
    </section>
  )
}
