"use client"
import { motion } from "framer-motion"

const items = [
  "CRM de clientes",
  "Pipeline de leads",
  "Gestão de tarefas",
  "Ordens de serviço",
  "Dashboard executivo",
  "Automação de WhatsApp",
  "Controle de documentos",
  "Propostas comerciais",
  "Permissões por perfil",
  "Integrações via API",
]

export function Marquee() {
  const all = [...items, ...items]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2 }}
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "16px 0",
        position: "relative",
      }}
    >
      {/* Left fade mask */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 120,
        background: "linear-gradient(90deg, var(--bg) 0%, transparent 100%)",
        zIndex: 1, pointerEvents: "none",
      }} />
      {/* Right fade mask */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 120,
        background: "linear-gradient(270deg, var(--bg) 0%, transparent 100%)",
        zIndex: 1, pointerEvents: "none",
      }} />

      <div className="marquee-track" style={{ display: "flex", gap: 48, width: "max-content" }}>
        {all.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 48, whiteSpace: "nowrap" }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 12,
              fontWeight: 400, color: "var(--muted)",
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              {item}
            </span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--teal)", display: "inline-block", flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
