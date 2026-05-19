"use client"
import { motion } from "framer-motion"
import { E, staggerContainer, childFadeUp, tagPop } from "@/lib/motion"

const cards = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Mapeamos como a operação realmente funciona: entrada de leads, clientes, tarefas, documentos, prazos e onde estão os gargalos.",
    detail: "30–60 min, sem custo",
  },
  {
    step: "02",
    title: "MVP operacional",
    desc: "Entregamos uma versão enxuta com os módulos que mais destravam a rotina. Você usa antes de pagar pela expansão.",
    detail: "3–6 semanas de entrega",
  },
  {
    step: "03",
    title: "Evolução mensal",
    desc: "Suporte contínuo, melhorias, automações, integrações e novas camadas de dados conforme o negócio cresce.",
    detail: "Contrato mensal ou avulso",
  },
]

const modules = [
  "CRM de clientes", "Pipeline de leads", "Gestão de tarefas",
  "Ordens de serviço", "Controle de documentos", "Propostas comerciais",
  "Dashboard executivo", "Automação de WhatsApp",
  "Permissões por perfil", "Integrações via API",
]

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: E },
  }),
}

export function Oferta() {
  return (
    <>
      <section id="solucao" style={{ padding: "96px 40px", background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.12)}
            style={{ marginBottom: 64 }}
          >
            <motion.div variants={childFadeUp} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid var(--border-m)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--teal)",
              fontFamily: "var(--font-mono)",
            }}>
              Como entregamos
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E, delay: 0.1 } } }}
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700,
                  lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16,
                }}
              >
                Um sistema funcional antes<br />
                <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300, fontStyle: "italic" }}>de prometer o mundo.</span>
              </motion.h2>
            </div>
            <motion.p variants={childFadeUp} style={{ fontSize: 17, color: "var(--muted)", maxWidth: 520, lineHeight: 1.65 }}>
              Começamos pelo diagnóstico, entregamos um MVP real, depois evoluímos. Sem contrato de 12 meses pela fé.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1, background: "var(--border)",
            border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden",
            marginBottom: 64,
          }} className="oferta-grid">
            {cards.map((c, idx) => (
              <motion.div
                key={c.step}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariant}
                whileHover={{ background: "rgba(46,196,182,0.03)", transition: { duration: 0.2 } }}
                style={{
                  padding: "36px 32px",
                  background: "var(--bg-2)",
                  position: "relative",
                }}
              >
                {/* Step number */}
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--teal)", fontWeight: 500,
                  letterSpacing: "0.2em", marginBottom: 20,
                  textTransform: "uppercase",
                }}>
                  {c.step}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: 22, fontWeight: 700,
                  letterSpacing: "-0.02em", marginBottom: 14,
                  color: "var(--text)",
                }}>
                  {c.title}
                </h3>

                {/* Desc */}
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 28 }}>
                  {c.desc}
                </p>

                {/* Detail */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "4px 10px",
                  background: "rgba(46,196,182,0.06)",
                  border: "1px solid rgba(46,196,182,0.15)",
                  borderRadius: 4,
                  fontSize: 11, fontFamily: "var(--font-mono)",
                  color: "var(--teal)", fontWeight: 500,
                }}>
                  {c.detail}
                </div>

                {/* Connector */}
                {idx < cards.length - 1 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: idx * 0.15 + 0.3 }}
                    style={{
                      position: "absolute", right: -13, top: "50%",
                      translateY: "-50%", zIndex: 2,
                      width: 26, height: 26, borderRadius: "50%",
                      background: "var(--bg-3)",
                      border: "1px solid var(--border-m)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                    className="oferta-arrow"
                  >
                    <svg width="10" height="10" fill="none" stroke="var(--teal)" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Module tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: E }}
            style={{ borderTop: "1px solid var(--border)", paddingTop: 40 }}
          >
            <p style={{
              fontSize: 11, fontFamily: "var(--font-mono)",
              color: "var(--muted-2)", letterSpacing: "0.15em",
              textTransform: "uppercase", marginBottom: 20,
            }}>
              Módulos disponíveis
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer(0.05)}
              style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
            >
              {modules.map(m => (
                <motion.span
                  key={m}
                  variants={tagPop}
                  whileHover={{ scale: 1.07, borderColor: "rgba(255,255,255,0.25)", color: "var(--text)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  style={{
                    padding: "6px 14px",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    fontSize: 12, fontFamily: "var(--font-mono)",
                    color: "var(--muted)",
                    background: "rgba(255,255,255,0.02)",
                    display: "inline-block",
                  }}
                >
                  {m}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .oferta-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px) { .oferta-arrow { display: none !important; } }
        @media (max-width: 560px) { #solucao { padding: 64px 20px !important; } }
      `}</style>
    </>
  )
}
