"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { E } from "@/lib/motion"
import { MockAgente, MockEcommerce } from "./VitrineMocks"

type Peca = {
  /** Print real. Enquanto não existir, a capa entra no lugar. */
  src?: string
  /** Capa desenhada, usada quando não há print. */
  mock?: "agente" | "ecommerce"
  logo?: string
  logoInvert?: boolean
  client: string
  segment: string
  status: "producao" | "dev"
  title: string
  desc: string
  metric: { n: string; label: string }
  entregue: string[]
  stack: string[]
  gradient: string
}

const pecas: Peca[] = [
  {
    mock: "agente",
    logo: "/logo-bblaw.svg",
    logoInvert: true,
    client: "Bezerra Borges",
    status: "producao",
    segment: "Advocacia internacional",
    title: "ERP/CRM jurídico",
    desc: "Processos, clientes, prazos e documentos de 15+ jurisdições em um sistema só, com um agente de IA especializado para cada área do escritório.",
    metric: { n: "14", label: "agentes de IA em operação" },
    entregue: ["CRM de clientes e processos", "Controle de prazo por jurisdição", "Agentes de IA por área"],
    stack: ["Next.js", "PostgreSQL", "Claude API"],
    gradient: "linear-gradient(145deg, #0E1220 0%, #1238C4 60%, #2C55E8 100%)",
  },
  {
    src: "/midia/case-formularios.png",
    logo: "/logo-bblaw.svg",
    logoInvert: true,
    client: "Bezerra Borges",
    status: "producao",
    segment: "Onboarding de cliente",
    title: "Portal de formulários",
    desc: "Coleta de documento e dado do cliente com validação, status por etapa e trilha de auditoria. O onboarding parou de circular por e-mail e grupo de WhatsApp.",
    metric: { n: "100%", label: "do onboarding fora do e-mail" },
    entregue: ["Formulário por tipo de serviço", "Upload com validação", "Status e trilha de auditoria"],
    stack: ["Next.js", "Neon", "Resend"],
    gradient: "linear-gradient(145deg, #101426 0%, #24337A 55%, #4B74FF 100%)",
  },
  {
    src: "/midia/case-landings.png",
    logo: "/logo-bblaw.svg",
    logoInvert: true,
    client: "Bezerra Borges",
    status: "producao",
    segment: "Captação por vertical",
    title: "3 landing pages especializadas",
    desc: "Holding, offshore e Paraguai com domínio próprio, copy e funil separados. Cada vertical capta sozinha, com a mensagem certa para o público certo.",
    metric: { n: "03", label: "domínios com funil próprio" },
    entregue: ["Página por vertical", "Copy e oferta dedicadas", "Captura ligada ao CRM"],
    stack: ["Next.js", "SEO", "Vercel"],
    gradient: "linear-gradient(145deg, #0D1018 0%, #1B2A6B 55%, #3A62F0 100%)",
  },
  {
    src: "/midia/case-rbmotos.png",
    logo: "/logo-rbmotos.jpg",
    client: "RB Moto Parts",
    status: "producao",
    segment: "E-commerce · Motopeças",
    title: "Site com SEO local",
    desc: "Institucional rápido e indexável, desenhado para dominar a busca por motopeças em Osasco e na Zona Oeste de São Paulo — onde a disputa é por bairro.",
    metric: { n: "1º", label: "alvo na busca da região" },
    entregue: ["Site institucional", "SEO local por bairro", "Captação por WhatsApp"],
    stack: ["Next.js", "SEO local", "Vercel"],
    gradient: "linear-gradient(145deg, #12141C 0%, #1F3390 55%, #2C55E8 100%)",
  },
  {
    mock: "ecommerce",
    logo: "/logo-cicatribem.png",
    logoInvert: true,
    client: "Cicatribem",
    status: "producao",
    segment: "E-commerce · Cosmético dérmico",
    title: "Painel da operação",
    desc: "Faturamento, funil, estoque e rastreio de pedido na mesma tela, com agente de IA atendendo em WhatsApp, site e Instagram. A gestão parou de esperar o fechamento do mês para saber onde está a margem.",
    metric: { n: "R$ 1,84M", label: "faturamento no mês acompanhado ao vivo" },
    entregue: ["Funil de sessão a pedido pago", "Rastreio e prazo de entrega", "Atendimento por IA em 3 canais"],
    stack: ["Dashboard", "Integração de estoque", "Claude API"],
    gradient: "linear-gradient(145deg, #0F1119 0%, #2A3AA8 55%, #5C7FFF 100%)",
  },
  {
    src: "/midia/case-pointify.png",
    logo: "/logo-pointify.jpg",
    client: "Pointify",
    status: "dev",
    segment: "Fintech · Fidelidade",
    title: "Pontos que viram ativo",
    desc: "Produto próprio: programa de fidelidade em que ponto vira cripto, com carteira, KYC, marketplace de resgate e agente de IA no atendimento.",
    metric: { n: "KYC", label: "verificação nativa na conta" },
    entregue: ["Carteira e extrato", "KYC e antifraude", "Marketplace de resgate"],
    stack: ["Next.js", "PostgreSQL", "Cripto"],
    gradient: "linear-gradient(145deg, #0E1018 0%, #16277E 55%, #4169F5 100%)",
  },
  {
    src: "/midia/disparos-notificacoes.jpg",
    client: "Operação Tech Tsu",
    status: "producao",
    segment: "API Oficial do WhatsApp",
    title: "Campanhas multicanal",
    desc: "WhatsApp, SMS e e-mail disparados pela API Oficial, com entregues, lidas, respostas, opt-outs e conversão acompanhados em tempo real.",
    metric: { n: "82%", label: "taxa de leitura" },
    entregue: ["Segmentação da base", "Template aprovado na Meta", "Relatório de campanha"],
    stack: ["API Oficial", "Meta", "Relatórios"],
    gradient: "linear-gradient(145deg, #101321 0%, #1E3AAE 55%, #4B74FF 100%)",
  },
]

export function Vitrine() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [pinned, setPinned] = useState(false)
  const [distancia, setDistancia] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 981px)")
    const fn = () => setPinned(mq.matches)
    fn()
    mq.addEventListener("change", fn)
    return () => mq.removeEventListener("change", fn)
  }, [])

  // O trilho percorre exatamente o que sobra além da viewport.
  useEffect(() => {
    if (!pinned) return
    const calc = () => {
      const el = trackRef.current
      if (!el) return
      setDistancia(Math.max(0, el.scrollWidth - window.innerWidth))
    }
    calc()
    window.addEventListener("resize", calc)
    return () => window.removeEventListener("resize", calc)
  }, [pinned])

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] })
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distancia])
  const x = useSpring(rawX, { stiffness: 90, damping: 26, restDelta: 0.001 })
  const barScale = useTransform(scrollYProgress, [0, 1], [0.08, 1])

  return (
    <>
      <section id="vitrine" style={{ background: "var(--bg)", position: "relative" }}>
        {/* Header */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px 36px" }} className="vitrine-head">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: E }}
            style={{ maxWidth: 720 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid var(--border-m)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--sky)",
              fontFamily: "var(--font-mono)", background: "rgba(44,85,232,0.08)",
            }}>
              Vitrine
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700,
              lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16,
              color: "var(--text)",
            }}>
              Sistema em produção,<br />
              <span style={{ color: "rgba(245,242,235,0.42)", fontWeight: 300, fontStyle: "italic" }}>não protótipo de portfólio.</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.65 }}>
              Sete entregas — seis com cliente dentro todo dia, uma em desenvolvimento.
              {pinned && " Role para percorrer."}
            </p>
          </motion.div>
        </div>

        {/* O wrapper existe sempre para o useScroll ter alvo já na hidratação. */}
        <div ref={wrapRef} style={pinned ? { height: "340vh", position: "relative" } : undefined}>
          {pinned ? (
            <div style={{
              position: "sticky", top: 0, height: "100vh",
              display: "flex", alignItems: "center", overflow: "hidden",
            }}>
              <motion.div ref={trackRef} style={{ display: "flex", gap: 24, padding: "0 40px", x, willChange: "transform" }}>
                {pecas.map(p => <Card key={p.title} peca={p} />)}
              </motion.div>

              {/* Barra de progresso da vitrine */}
              <div style={{
                position: "absolute", bottom: 48, left: 40, right: 40,
                height: 2, background: "var(--border)", borderRadius: 999,
              }}>
                <motion.div style={{
                  height: "100%", borderRadius: 999, transformOrigin: "0% 50%",
                  background: "linear-gradient(90deg, #2C55E8, #8FA8FF)",
                  scaleX: barScale,
                }} />
              </div>
            </div>
          ) : (
            <div className="vitrine-scroll" style={{
              display: "flex", gap: 16, overflowX: "auto",
              padding: "0 20px 40px", scrollSnapType: "x mandatory",
            }}>
              {pecas.map(p => <Card key={p.title} peca={p} compact />)}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .vitrine-scroll { -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .vitrine-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 560px) {
          .vitrine-head { padding: 64px 20px 28px !important; }
        }
      `}</style>
    </>
  )
}

function Card({ peca, compact = false }: { peca: Peca; compact?: boolean }) {
  const [semPrint, setSemPrint] = useState(!peca.src)

  return (
    <article
      style={{
        flex: "0 0 auto",
        width: compact ? "min(86vw, 380px)" : 420,
        scrollSnapAlign: "center",
        display: "flex", flexDirection: "column",
        borderRadius: 14, overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "var(--bg-2)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.4)",
      }}
    >
      {/* Capa */}
      <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden", background: peca.gradient }}>
        {!semPrint && peca.src ? (
          <img
            src={peca.src}
            alt={`${peca.title} — ${peca.client}`}
            loading="lazy"
            onError={() => setSemPrint(true)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <>
            <div className="circuit-grid" style={{ position: "absolute", inset: 0, opacity: 0.28 }} />
            <div style={{
              position: "absolute", inset: 0,
              padding: "20px 22px",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                {peca.logo ? (
                  <img
                    src={peca.logo}
                    alt=""
                    style={{
                      height: 26, maxWidth: 116, objectFit: "contain",
                      filter: peca.logoInvert
                        ? "brightness(0) invert(1) opacity(0.9)"
                        : "grayscale(1) brightness(1.9) opacity(0.9)",
                    }}
                  />
                ) : (
                  <img src="/mark-white.svg" alt="" width={24} height={24} style={{ opacity: 0.9 }} />
                )}
                <span style={{
                  fontSize: 9, fontFamily: "var(--font-mono)",
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)", textAlign: "right",
                }}>
                  {peca.segment}
                </span>
              </div>

              <div>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 46, fontWeight: 500,
                  color: "#fff", lineHeight: 1, letterSpacing: "-0.04em",
                }}>
                  {peca.metric.n}
                </div>
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.7)", marginTop: 7 }}>
                  {peca.metric.label}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Conteúdo */}
      <div style={{ padding: "22px 22px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 7 }}>
            <span style={{
              fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--sky)",
              letterSpacing: "0.16em", textTransform: "uppercase",
            }}>
              {peca.client}
            </span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              padding: "2px 8px", borderRadius: 999, flexShrink: 0,
              background: peca.status === "producao" ? "rgba(44,85,232,0.14)" : "rgba(246,200,95,0.12)",
              border: peca.status === "producao" ? "1px solid rgba(143,168,255,0.28)" : "1px solid rgba(246,200,95,0.28)",
            }}>
              <span
                className={peca.status === "producao" ? "pulse-dot" : undefined}
                style={{
                  width: 4, height: 4, borderRadius: "50%", display: "inline-block",
                  background: peca.status === "producao" ? "var(--sky)" : "var(--amber)",
                }}
              />
              <span style={{
                fontSize: 8.5, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase",
                color: peca.status === "producao" ? "var(--sky)" : "var(--amber)",
              }}>
                {peca.status === "producao" ? "Em produção" : "Em desenvolvimento"}
              </span>
            </span>
          </div>
          <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)" }}>
            {peca.title}
          </h3>
        </div>

        <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.7 }}>
          {peca.desc}
        </p>

        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
          {peca.entregue.map(item => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ marginTop: 4, flexShrink: 0 }}>
                <path d="M5 13l4 4L19 7" stroke="var(--sky)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.5 }}>{item}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 4, borderTop: "1px solid var(--border)", marginTop: 2 }}>
          {peca.stack.map(t => (
            <span key={t} style={{
              marginTop: 10,
              padding: "3px 9px", fontSize: 10,
              fontFamily: "var(--font-mono)", color: "var(--muted-2)",
              border: "1px solid var(--border)", borderRadius: 4,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
