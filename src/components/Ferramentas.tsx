"use client"
import { motion } from "framer-motion"
import { E, staggerContainer, childSlideUp } from "@/lib/motion"

export function Ferramentas() {
  return (
    <section
      id="ferramentas"
      className="bg-blue-grad"
      style={{ padding: "96px 40px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer(0.1)}
          style={{ marginBottom: 56 }}
        >
          <motion.div variants={childSlideUp} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: 20, padding: "4px 12px",
            border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999,
            fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
            fontFamily: "var(--font-mono)",
            background: "rgba(255,255,255,0.08)",
          }}>
            Ferramentas próprias
          </motion.div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E } } }}
              style={{
                fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700,
                lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 14,
                color: "#fff",
              }}
            >
              Além dos projetos sob medida —<br />
              <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300, fontStyle: "italic" }}>
                produtos que a Tech Tsu opera.
              </span>
            </motion.h2>
          </div>
          <motion.p variants={childSlideUp} style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 520, lineHeight: 1.65 }}>
            Software que nasceu da necessidade real dos clientes e hoje roda como produto independente.
          </motion.p>
        </motion.div>

        {/* Social Seller card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: E }}
          style={{
            display: "grid", gridTemplateColumns: "auto 1fr",
            gap: 0,
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 14, overflow: "hidden", alignItems: "stretch",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
          }}
          className="ferramentas-card"
        >
          {/* Logo column */}
          <div style={{
            width: 120,
            borderRight: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(0,0,0,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24,
          }}>
            <img
              src="/logo-social-seller.png"
              alt="Social Seller"
              style={{
                width: 72, height: 72,
                objectFit: "contain", borderRadius: 14,
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              }}
            />
          </div>

          {/* Info column */}
          <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "#fff" }}>
                Social Seller
              </h3>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "2px 9px", borderRadius: 999,
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7FE8A2", display: "inline-block" }} />
                <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Em produção
                </span>
              </div>
            </div>

            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 640 }}>
              Ferramenta de criação de conteúdo para social media. Gera modelos de posts, legendas e roteiros para Instagram, LinkedIn e TikTok — com contexto de marca, tom de voz e objetivo de cada peça. Usado por gestores de conteúdo e agências para acelerar produção sem perder identidade.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Geração de copy", "Modelos de post", "Tom de voz por marca", "Instagram · LinkedIn · TikTok", "Agente IA"].map(t => (
                <span key={t} style={{
                  padding: "3px 9px", fontSize: 10,
                  fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4,
                  background: "rgba(255,255,255,0.05)",
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .ferramentas-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          #ferramentas { padding: 64px 20px !important; }
        }
      `}</style>
    </section>
  )
}
