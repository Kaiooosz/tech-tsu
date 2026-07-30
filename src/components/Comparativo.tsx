"use client"
import { motion } from "framer-motion"
import { E, staggerContainer, childFadeUp } from "@/lib/motion"
import { WA } from "@/lib/site"
import { BgImage } from "./BgImage"

const colunas = [
  {
    title: "Planilha + WhatsApp",
    desc: "Resolve até a operação crescer. Depois vira versão errada, dado duplicado e informação que só uma pessoa tem — e essa pessoa entra de férias.",
    marks: ["Sem histórico confiável", "Sem dono nem prazo", "Sem visão do funil"],
    destaque: false,
  },
  {
    title: "ERP ou CRM de prateleira",
    desc: "Cobra por usuário para você adaptar a sua empresa ao fluxo dele. O que não encaixa vira planilha paralela — exatamente o problema que você foi resolver.",
    marks: ["Você se molda à ferramenta", "Módulo que não usa, mas paga", "Integração limitada ao que o fornecedor libera"],
    destaque: false,
  },
  {
    title: "Tech Tsu",
    desc: "O sistema nasce do seu processo, não do contrário. MVP funcionando em semanas, evolução mensal e agente de IA de atendimento no escopo padrão.",
    marks: ["Modelado no seu fluxo real", "Você continua dono do dado e do código", "Integra com o que já existe na casa"],
    destaque: true,
  },
]

const mudancas = [
  {
    n: "01",
    title: "O dono deixa de ser o sistema",
    desc: "A informação sai da cabeça de duas pessoas e passa a viver em um lugar consultável, com histórico, responsável e prazo.",
  },
  {
    n: "02",
    title: "Lead para de esfriar no WhatsApp",
    desc: "Entrada, dono e follow-up dentro do fluxo. Quem responde primeiro fecha — e agora dá para saber quem respondeu e quando.",
  },
  {
    n: "03",
    title: "Fechamento sem arqueologia",
    desc: "Número em tempo real na tela, em vez de três dias juntando planilha e print no fim do mês para descobrir onde ficou a margem.",
  },
  {
    n: "04",
    title: "Gente nova produz na primeira semana",
    desc: "O processo está no sistema, não no treinamento verbal de quem já está sobrecarregado. Onboarding para de recomeçar do zero.",
  },
]

export function Comparativo() {
  return (
    <>
      <section id="comparativo" style={{ padding: "96px 40px", background: "var(--paper)", position: "relative", overflow: "hidden" }}>
        <BgImage src="/midia/equipe-reuniao.jpg" lado="right" width="52%" opacity={0.26} blend="var(--paper)" parallax={70} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.12)}
            style={{ marginBottom: 48, maxWidth: 720 }}
          >
            <motion.div variants={childFadeUp} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid rgba(44,85,232,0.25)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--teal)",
              fontFamily: "var(--font-mono)", background: "rgba(44,85,232,0.06)",
            }}>
              Por que sob medida
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E, delay: 0.1 } } }}
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700,
                  lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16,
                  color: "var(--ink)",
                }}
              >
                Você já tentou resolver<br />
                <span style={{ color: "var(--muted-ink)", fontWeight: 300, fontStyle: "italic" }}>de outro jeito.</span>
              </motion.h2>
            </div>
            <motion.p variants={childFadeUp} style={{ fontSize: 17, color: "var(--muted-ink)", lineHeight: 1.65 }}>
              Vale entender por que as duas saídas mais comuns não param de pé quando a operação cresce.
            </motion.p>
          </motion.div>

          {/* Três caminhos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            variants={staggerContainer(0.1)}
            style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16, marginBottom: 32,
            }}
            className="comparativo-grid"
          >
            {colunas.map(c => (
              <motion.div
                key={c.title}
                variants={{
                  hidden: { opacity: 0, y: 34 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: E } },
                }}
                whileHover={{ y: -4 }}
                style={{
                  padding: c.destaque ? "34px 30px" : "30px 26px",
                  borderRadius: 12,
                  background: c.destaque ? "var(--ink)" : "#fff",
                  border: c.destaque ? "1px solid var(--ink)" : "1px solid var(--border-light)",
                  boxShadow: c.destaque ? "0 18px 50px rgba(25,27,33,0.25)" : "var(--shadow-sm)",
                  display: "flex", flexDirection: "column", gap: 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <h3 style={{
                    fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em",
                    color: c.destaque ? "var(--text)" : "var(--ink)",
                  }}>
                    {c.title}
                  </h3>
                  {c.destaque && (
                    <span style={{
                      padding: "2px 8px", borderRadius: 999,
                      fontSize: 9, fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "var(--sky)", background: "rgba(44,85,232,0.18)",
                      border: "1px solid rgba(143,168,255,0.28)",
                    }}>
                      Nosso jeito
                    </span>
                  )}
                </div>

                <p style={{
                  fontSize: 13.5, lineHeight: 1.7, flex: 1,
                  color: c.destaque ? "var(--muted)" : "var(--muted-ink)",
                }}>
                  {c.desc}
                </p>

                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                  {c.marks.map(m => (
                    <li key={m} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ marginTop: 3, flexShrink: 0 }}>
                        {c.destaque ? (
                          <path d="M5 13l4 4L19 7" stroke="var(--sky)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                        ) : (
                          <path d="M6 6l12 12M18 6L6 18" stroke="rgba(25,27,33,0.28)" strokeWidth="2.2" strokeLinecap="round"/>
                        )}
                      </svg>
                      <span style={{
                        fontSize: 12.5, lineHeight: 1.55,
                        color: c.destaque ? "var(--text)" : "var(--muted-ink)",
                      }}>
                        {m}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Frase de corte */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: E }}
            style={{
              fontSize: "clamp(20px, 2.4vw, 28px)", fontWeight: 300, fontStyle: "italic",
              color: "var(--muted-ink)", lineHeight: 1.4, letterSpacing: "-0.02em",
              maxWidth: 760, marginBottom: 72,
            }}
          >
            Se a operação só funciona quando você está olhando, o gargalo não é a equipe.
          </motion.p>

          {/* O que muda na prática */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--muted-ink-2)",
              letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24,
            }}
          >
            O que muda na prática
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            variants={staggerContainer(0.09)}
            style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16, marginBottom: 40,
            }}
            className="comparativo-mudancas"
          >
            {mudancas.map(m => (
              <motion.div
                key={m.n}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
                }}
                whileHover={{ y: -3, boxShadow: "var(--shadow-md)" } as never}
                style={{
                  padding: "28px 28px",
                  background: "#fff",
                  border: "1px solid var(--border-light)",
                  borderRadius: 12,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--teal)",
                  fontWeight: 500, letterSpacing: "0.2em", marginBottom: 14,
                }}>
                  {m.n}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 10 }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--muted-ink)", lineHeight: 1.7 }}>
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: E }}
          >
            <a href={WA.diagnostico} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              height: 46, padding: "0 22px",
              background: "var(--teal)", color: "#fff",
              fontSize: 14, fontWeight: 700, borderRadius: 6,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              Quero o diagnóstico da minha operação
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .comparativo-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          #comparativo { padding: 64px 20px !important; }
          .comparativo-mudancas { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
