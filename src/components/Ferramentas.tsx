"use client"
import { motion } from "framer-motion"
import { E, staggerContainer, childSlideUp } from "@/lib/motion"

const produtos = [
  {
    nome: "Social Seller",
    logo: "/logo-social-seller.png",
    status: "Em produção",
    ativo: true,
    desc: "Ferramenta de criação de conteúdo para social media. Gera modelos de posts, legendas e roteiros para Instagram, LinkedIn e TikTok — com contexto de marca, tom de voz e objetivo de cada peça. Usado por gestores de conteúdo e agências para acelerar produção sem perder identidade.",
    tags: ["Geração de copy", "Modelos de post", "Tom de voz por marca", "Instagram · LinkedIn · TikTok", "Agente IA"],
  },
  {
    nome: "Pointify",
    logo: "/logo-pointify.jpg",
    status: "Em desenvolvimento",
    ativo: false,
    desc: "Plataforma de fidelidade em que ponto vira ativo digital. Programa de pontos, carteira, KYC, marketplace de resgate e agente de IA no atendimento — a base técnica que usamos para projetos de fintech e recorrência.",
    tags: ["Fidelidade", "Carteira e KYC", "Marketplace", "Fintech"],
  },
  {
    nome: "Cria-Criativos",
    logo: "/mark-white.svg",
    status: "Operação interna",
    ativo: true,
    desc: "Studio de conteúdo multi-agente que roda a comunicação da própria Tech Tsu e de clientes: pauta, copy por nicho, roteiro de carrossel e stories. É de onde sai o material de prospecção que você vê nos nossos canais.",
    tags: ["Multi-agente", "Copy por nicho", "Carrossel e stories", "Prospecção"],
  },
]

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
          <motion.p variants={childSlideUp} style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 560, lineHeight: 1.65 }}>
            Software que nasceu da necessidade real dos clientes e hoje roda como produto independente.
            É também onde testamos primeiro o que depois entra nos projetos sob medida.
          </motion.p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {produtos.map((p, i) => (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: E }}
              whileHover={{ y: -3 }}
              style={{
                display: "grid", gridTemplateColumns: "auto 1fr",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14, overflow: "hidden", alignItems: "stretch",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
              className="ferramentas-card"
            >
              {/* Coluna do logo */}
              <div style={{
                width: 120,
                borderRight: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(0,0,0,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: 24,
              }}>
                <img
                  src={p.logo}
                  alt={p.nome}
                  style={{
                    width: 72, height: 72,
                    objectFit: "contain", borderRadius: 14,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  }}
                />
              </div>

              {/* Coluna de informação */}
              <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "#fff" }}>
                    {p.nome}
                  </h3>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    padding: "2px 9px", borderRadius: 999,
                    background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                  }}>
                    <span
                      className={p.ativo ? "pulse-dot" : undefined}
                      style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: p.ativo ? "var(--sky)" : "var(--amber)",
                        display: "inline-block",
                      }}
                    />
                    <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {p.status}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 680 }}>
                  {p.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map(t => (
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
          ))}
        </div>

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
