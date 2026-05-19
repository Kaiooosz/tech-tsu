"use client"
import { motion } from "framer-motion"
import { E, staggerContainer, childFadeUp, lineGrow } from "@/lib/motion"

const steps = [
  {
    n: "01",
    label: "Mapear",
    desc: "Entendemos como a operação realmente funciona: entradas, saídas, gargalos, ferramentas e onde as informações somem.",
    duration: "1–2 encontros",
  },
  {
    n: "02",
    label: "Priorizar",
    desc: "Escolhemos o menor escopo que gera visibilidade e retorno real — sem construir funcionalidade desnecessária.",
    duration: "Entrega em 1 semana",
  },
  {
    n: "03",
    label: "Construir",
    desc: "Código real. Sistema com dados, permissões, telas de uso diário e integração com o que já existe.",
    duration: "3–6 semanas",
  },
  {
    n: "04",
    label: "Evoluir",
    desc: "Automações, relatórios, integrações, novos módulos. Cada entrega baseada em como a equipe usa o sistema.",
    duration: "Contínuo",
  },
]

const stepVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: E },
  }),
}

export function Processo() {
  return (
    <>
      <section id="processo" style={{ padding: "96px 40px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.12)}
            style={{ marginBottom: 60 }}
          >
            <motion.div variants={childFadeUp} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid var(--border-m)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--muted)",
              fontFamily: "var(--font-mono)",
            }}>
              Como trabalhamos
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E, delay: 0.1 } } }}
                style={{
                  fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700,
                  lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16,
                }}
              >
                Menos reunião vazia.
                <br />
                <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300, fontStyle: "italic" }}>Mais processo virando produto.</span>
              </motion.h2>
            </div>
            <motion.p variants={childFadeUp} style={{ fontSize: 16, color: "var(--muted)", maxWidth: 500, lineHeight: 1.65 }}>
              Cada etapa tem objetivo claro e entrega tangível. Você sabe exatamente onde estamos e o que vem a seguir.
            </motion.p>
          </motion.div>

          {/* Steps */}
          <div style={{ position: "relative" }}>
            {/* Animated connector line */}
            <motion.div
              className="processo-line"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={lineGrow}
              style={{
                position: "absolute", top: 20, left: 20, right: 20, height: 1,
                background: "linear-gradient(90deg, var(--teal) 0%, rgba(46,196,182,0.12) 100%)",
                transformOrigin: "left",
                zIndex: 0,
              }}
            />

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1, background: "var(--border)",
              border: "1px solid var(--border)", borderRadius: 8,
              overflow: "hidden", position: "relative", zIndex: 1,
            }} className="processo-grid">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={stepVariant}
                  whileHover={{ background: "rgba(46,196,182,0.02)", transition: { duration: 0.2 } }}
                  style={{
                    padding: "32px 28px", background: "var(--bg)",
                    position: "relative",
                    borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                  }}
                >
                  {/* Step circle */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.12 + 0.1 }}
                    style={{
                      width: 40, height: 40, borderRadius: "50%",
                      border: i === 0 ? "1px solid var(--teal)" : "1px solid var(--border-m)",
                      background: i === 0 ? "rgba(46,196,182,0.08)" : "var(--bg-3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 24, position: "relative", zIndex: 1,
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
                      color: i === 0 ? "var(--teal)" : "var(--muted-2)",
                    }}>
                      {s.n}
                    </span>
                  </motion.div>

                  <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 12 }}>
                    {s.label}
                  </h3>

                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, marginBottom: 24 }}>
                    {s.desc}
                  </p>

                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    fontSize: 10, fontFamily: "var(--font-mono)",
                    color: i === 0 ? "var(--teal)" : "var(--muted-2)",
                  }}>
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {s.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: E }}
            style={{
              marginTop: 40, padding: "20px 28px",
              border: "1px solid var(--border)", borderRadius: 8,
              display: "flex", alignItems: "center", gap: 16,
              background: "rgba(255,255,255,0.01)",
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
              <path d="M9 12l2 2 4-4" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="var(--border-m)" strokeWidth="1.5"/>
            </svg>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>Sem promessa de escopo infinito.</strong>
              {" "}Você aprova cada etapa antes de seguir. MVP em mãos antes de assinar contrato de longa duração.
            </p>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .processo-grid { grid-template-columns: 1fr 1fr !important; }
          .processo-line { display: none !important; }
        }
        @media (max-width: 600px) {
          .processo-grid { grid-template-columns: 1fr !important; }
          #processo { padding: 64px 20px !important; }
        }
      `}</style>
    </>
  )
}
