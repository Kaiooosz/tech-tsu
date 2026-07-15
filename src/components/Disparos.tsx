"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { E, staggerContainer, childFadeUp, tagPop } from "@/lib/motion"

const WA_LINK =
  "https://wa.me/5511952364424?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20para%20disparos%20via%20API%20Oficial"

const entregas = [
  "Disparos únicos",
  "Disparos com fluxo automatizado",
  "Campanhas para JB, OB e CORBAN",
  "Relatórios e acompanhamento em tempo real",
  "Operação com suporte especializado",
]

const fluxo = [
  {
    step: "01",
    title: "Segmentação de base",
    desc: "Higienização, tags e recorte por perfil antes de qualquer envio.",
  },
  {
    step: "02",
    title: "Mensagem personalizada",
    desc: "Copy, mídia e variáveis dinâmicas aprovadas como template na Meta.",
  },
  {
    step: "03",
    title: "Envio via API Oficial",
    desc: "Infraestrutura dedicada, aquecimento de conta e ritmo controlado.",
  },
  {
    step: "04",
    title: "Entrega e relatório",
    desc: "Entregues, lidas, respostas e opt-outs — métricas em tempo real e relatório final.",
  },
]

const segmentos = [
  "Financeiro · JB, OB e CORBAN",
  "Varejo",
  "E-commerce",
  "Educação",
  "Saúde",
  "Imobiliário",
  "Automotivo",
  "Serviços",
  "SaaS / B2B",
  "Infoprodutos",
  "Eventos",
]

const metricas = [
  { label: "Entregues", value: "12.426", delta: "98%" },
  { label: "Lidas", value: "10.213", delta: "82%" },
  { label: "Taxa de leitura", value: "82,1%", delta: "12%" },
  { label: "Disparos realizados", value: "24.350", delta: "110%" },
]

const faq = [
  {
    q: "Preciso ter uma conta oficial no WhatsApp Business?",
    a: "Não. Cuidamos de todo o processo de criação e homologação da conta com a Meta, incluindo verificação do negócio e aprovação dos templates.",
  },
  {
    q: "Qual o volume mínimo de disparos?",
    a: "Trabalhamos com operações de diferentes portes. O volume é definido no diagnóstico, com base no seu objetivo e na maturidade da base.",
  },
  {
    q: "Como funciona a cobrança?",
    a: "Setup + fee de operação + custo de conversa da Meta. Você recebe a projeção completa antes de qualquer disparo.",
  },
  {
    q: "Vocês entregam relatórios?",
    a: "Sim. Relatórios com entregues, lidas, respostas, opt-outs e conversões — no formato que faz sentido para o seu time.",
  },
]

export function Disparos() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <section id="disparos" style={{ padding: "96px 40px", background: "var(--paper)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.12)}
            style={{ marginBottom: 56 }}
          >
            <motion.div variants={childFadeUp} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid rgba(44,85,232,0.25)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--teal)",
              fontFamily: "var(--font-mono)",
              background: "rgba(44,85,232,0.06)",
            }}>
              Disparos via API Oficial
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
                Sua marca no canal<br />
                <span style={{ color: "var(--muted-ink)", fontWeight: 300, fontStyle: "italic" }}>mais usado do Brasil.</span>
              </motion.h2>
            </div>
            <motion.p variants={childFadeUp} style={{ fontSize: 17, color: "var(--muted-ink)", maxWidth: 560, lineHeight: 1.65 }}>
              Estruturamos toda a operação de campanhas via API Oficial do WhatsApp:
              organização da base, configuração, homologação, testes, execução e relatório completo.
              Mais controle, mais escala, mais performance.
            </motion.p>
          </motion.div>

          {/* Entregas + mock */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 48, alignItems: "center", marginBottom: 72,
          }} className="disparos-grid">

            {/* Left: o que entregamos + CTAs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer(0.08)}
            >
              <motion.p variants={childFadeUp} style={{
                fontSize: 11, fontFamily: "var(--font-mono)",
                color: "var(--muted-ink-2)", letterSpacing: "0.15em",
                textTransform: "uppercase", marginBottom: 20,
              }}>
                O que entregamos
              </motion.p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
                {entregas.map(item => (
                  <motion.div key={item} variants={childFadeUp} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(44,85,232,0.08)",
                      border: "1px solid rgba(44,85,232,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="9" height="9" fill="none" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" stroke="var(--teal)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.5 }}>{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={childFadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  height: 44, padding: "0 22px",
                  background: "var(--teal)", color: "#fff",
                  fontSize: 14, fontWeight: 700, borderRadius: 6,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                  Solicitar orçamento no WhatsApp
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#contato" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  height: 44, padding: "0 22px",
                  border: "1px solid var(--border-light-m)", color: "var(--ink)",
                  fontSize: 14, fontWeight: 600, borderRadius: 6,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(25,27,33,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border-light-m)")}>
                  Falar com um estrategista
                </a>
              </motion.div>
            </motion.div>

            {/* Right: mock chat + métricas */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: E }}
              style={{
                background: "#fff",
                border: "1px solid var(--border-light)",
                borderRadius: 14,
                boxShadow: "var(--shadow-md)",
                overflow: "hidden",
              }}
            >
              {/* Chat header */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "14px 18px", borderBottom: "1px solid var(--border-light)",
                background: "var(--paper)",
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%",
                  background: "var(--ink)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <img src="/mark-white.svg" alt="" width={18} height={18} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", lineHeight: 1.2 }}>Tech Tsu</span>
                  <span style={{ fontSize: 10, color: "var(--muted-ink)", fontFamily: "var(--font-mono)" }}>Conta comercial</span>
                </div>
              </div>

              {/* Chat body */}
              <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 8, background: "var(--paper-2)" }}>

                {/* Template de oferta com imagem + CTA */}
                <div style={{
                  maxWidth: "86%",
                  background: "#fff", border: "1px solid var(--border-light)",
                  borderRadius: "10px 10px 10px 2px",
                  overflow: "hidden",
                }}>
                  {/* Imagem da oferta */}
                  <div style={{
                    background: "linear-gradient(145deg, #1238C4 0%, #2C55E8 55%, #4B74FF 100%)",
                    padding: "18px 16px",
                    display: "flex", flexDirection: "column", gap: 4,
                    position: "relative",
                  }}>
                    <img src="/mark-white.svg" alt="" width={20} height={20} style={{ position: "absolute", top: 12, right: 12, opacity: 0.85 }} />
                    <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.75)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      Oferta relâmpago
                    </span>
                    <span style={{ fontSize: 30, fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
                      40% OFF
                    </span>
                    <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.75)" }}>
                      válida só até hoje, 23h59
                    </span>
                  </div>
                  {/* Texto do template */}
                  <div style={{ padding: "10px 12px", fontSize: 12.5, color: "var(--ink)", lineHeight: 1.55 }}>
                    Olá, Maria! Liberamos 40% OFF exclusivo para você.
                    Toque no botão abaixo e garanta antes que acabe.
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 3,
                      fontSize: 9, color: "var(--muted-ink-2)", marginTop: 4, fontFamily: "var(--font-mono)",
                    }}>
                      11:30
                      <svg width="12" height="8" viewBox="0 0 16 10" fill="none">
                        <path d="M1 5l3 3 6-7M6 8l1 1 6-7" stroke="var(--teal)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  {/* Botao CTA do template */}
                  <div style={{
                    borderTop: "1px solid var(--border-light)",
                    padding: "9px 12px", textAlign: "center",
                    fontSize: 12, fontWeight: 600, color: "var(--teal)",
                  }}>
                    Quero aproveitar a oferta
                  </div>
                </div>

                {/* Cliente clica no botao */}
                <div style={{
                  maxWidth: "60%", alignSelf: "flex-end", padding: "10px 12px",
                  background: "rgba(44,85,232,0.10)", border: "1px solid rgba(44,85,232,0.18)",
                  borderRadius: "10px 10px 2px 10px",
                  fontSize: 12.5, color: "var(--ink)", lineHeight: 1.55,
                }}>
                  Quero aproveitar a oferta
                  <div style={{ fontSize: 9, color: "var(--muted-ink-2)", marginTop: 4, textAlign: "right", fontFamily: "var(--font-mono)" }}>11:31</div>
                </div>

                {/* Link de pagamento */}
                <div style={{
                  maxWidth: "82%", padding: "10px 12px",
                  background: "#fff", border: "1px solid var(--border-light)",
                  borderRadius: "10px 10px 10px 2px",
                  fontSize: 12.5, color: "var(--ink)", lineHeight: 1.55,
                }}>
                  Pedido confirmado, Maria. Finalize com segurança no link:{" "}
                  <span style={{ color: "var(--teal)", fontFamily: "var(--font-mono)", fontSize: 11.5 }}>pay.suamarca.com.br/oferta40</span>
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 3,
                    fontSize: 9, color: "var(--muted-ink-2)", marginTop: 4, fontFamily: "var(--font-mono)",
                  }}>
                    11:31
                    <svg width="12" height="8" viewBox="0 0 16 10" fill="none">
                      <path d="M1 5l3 3 6-7M6 8l1 1 6-7" stroke="var(--teal)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Conversao registrada */}
                <div style={{
                  alignSelf: "center", marginTop: 6,
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "5px 12px", borderRadius: 999,
                  background: "rgba(44,85,232,0.08)", border: "1px solid rgba(44,85,232,0.2)",
                }}>
                  <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="var(--teal)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--teal)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Compra confirmada · R$ 297,00 · Conversão registrada
                  </span>
                </div>
              </div>

              {/* Métricas */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
                borderTop: "1px solid var(--border-light)",
              }}>
                {metricas.map((m, i) => (
                  <div key={m.label} style={{
                    padding: "16px 18px",
                    borderRight: i % 2 === 0 ? "1px solid var(--border-light)" : "none",
                    borderBottom: i < 2 ? "1px solid var(--border-light)" : "none",
                  }}>
                    <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--muted-ink)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                      {m.label}
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)" }}>{m.value}</span>
                      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--teal)", fontWeight: 600 }}>+{m.delta}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: "10px 18px", borderTop: "1px solid var(--border-light)",
                display: "flex", justifyContent: "space-between",
                fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--muted-ink-2)",
              }}>
                <span>Últimos 7 dias</span>
                <span>API Oficial · Meta</span>
              </div>
            </motion.div>
          </div>

          {/* Fluxo de disparo */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 11, fontFamily: "var(--font-mono)",
              color: "var(--muted-ink-2)", letterSpacing: "0.15em",
              textTransform: "uppercase", marginBottom: 20,
            }}
          >
            Fluxo de disparo — uma esteira desenhada para segurança e escala
          </motion.p>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16, marginBottom: 72,
          }} className="disparos-fluxo">
            {fluxo.map((f, idx) => (
              <motion.div
                key={f.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: E }}
                style={{
                  padding: "26px 24px",
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--teal)", fontWeight: 500,
                  letterSpacing: "0.2em", marginBottom: 16,
                }}>
                  {f.step}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10, color: "var(--ink)" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted-ink)", lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Para quem serve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: E }}
            style={{ borderTop: "1px solid var(--border-light)", paddingTop: 40, marginBottom: 72 }}
          >
            <p style={{
              fontSize: 11, fontFamily: "var(--font-mono)",
              color: "var(--muted-ink-2)", letterSpacing: "0.15em",
              textTransform: "uppercase", marginBottom: 20,
            }}>
              Para quem serve
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer(0.04)}
              style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
            >
              {segmentos.map(s => (
                <motion.span
                  key={s}
                  variants={tagPop}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  style={{
                    padding: "6px 14px",
                    border: "1px solid var(--border-light-m)",
                    borderRadius: 6,
                    fontSize: 12, fontFamily: "var(--font-mono)",
                    color: "var(--muted-ink)",
                    display: "inline-block",
                    cursor: "default",
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: E }}
            style={{ maxWidth: 720 }}
          >
            <p style={{
              fontSize: 11, fontFamily: "var(--font-mono)",
              color: "var(--muted-ink-2)", letterSpacing: "0.15em",
              textTransform: "uppercase", marginBottom: 20,
            }}>
              Perguntas frequentes
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faq.map((f, idx) => (
                <div key={f.q} style={{
                  background: "#fff",
                  border: "1px solid var(--border-light)",
                  borderRadius: 10,
                  overflow: "hidden",
                }}>
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      width: "100%", padding: "16px 20px",
                      background: "transparent", border: "none", cursor: "pointer",
                      fontSize: 14.5, fontWeight: 600, color: "var(--ink)",
                      textAlign: "left", fontFamily: "inherit", gap: 16,
                    }}
                  >
                    {f.q}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{
                      flexShrink: 0,
                      transform: open === idx ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}>
                      <path d="M12 5v14M5 12h14" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <div style={{
                    maxHeight: open === idx ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}>
                    <p style={{ padding: "0 20px 18px", fontSize: 14, color: "var(--muted-ink)", lineHeight: 1.7 }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .disparos-grid { grid-template-columns: 1fr !important; }
          .disparos-fluxo { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #disparos { padding: 64px 20px !important; }
          .disparos-fluxo { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
