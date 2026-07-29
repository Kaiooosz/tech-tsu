"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { E } from "@/lib/motion"
import { MediaFrame } from "./MediaFrame"

const pecas = [
  {
    src: "/midia/case-bblaw.png",
    title: "ERP/CRM jurídico",
    client: "Bezerra Borges",
    desc: "Processos, clientes, prazos e jurisdições em um sistema só, com 14 agentes de IA especializados por área.",
    tags: ["CRM", "Agentes IA", "15+ jurisdições"],
  },
  {
    src: "/midia/case-formularios.png",
    title: "Portal de formulários",
    client: "Bezerra Borges",
    desc: "Coleta de documento e dado do cliente com validação, status e trilha de auditoria — sem ida e volta por e-mail.",
    tags: ["Onboarding", "Documentos", "Auditoria"],
  },
  {
    src: "/midia/case-rbmotos.png",
    title: "Site com SEO local",
    client: "RB Moto Parts",
    desc: "Institucional rápido e indexável, desenhado para dominar a busca por motopeças na Zona Oeste de São Paulo.",
    tags: ["Next.js", "SEO local", "Captação"],
  },
  {
    src: "/midia/case-cicatribem.png",
    title: "Agente de IA multicanal",
    client: "Cicatribem",
    desc: "WhatsApp, site e Instagram no mesmo fluxo: tira dúvida de produto, faz triagem e direciona o pedido.",
    tags: ["WhatsApp", "Instagram", "Triagem"],
  },
  {
    src: "/midia/case-pointify.png",
    title: "Plataforma de fidelidade",
    client: "Pointify",
    desc: "Produto próprio: pontos que viram cripto, com KYC, marketplace e agente de IA no atendimento.",
    tags: ["Fintech", "KYC", "Marketplace"],
  },
  {
    src: "/midia/case-disparos.png",
    title: "Painel de disparos",
    client: "Operação Tech Tsu",
    desc: "Campanhas pela API Oficial do WhatsApp com entregues, lidas, respostas, opt-outs e conversão em tempo real.",
    tags: ["API Oficial", "Relatórios", "Escala"],
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
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 40px 40px" }} className="vitrine-head">
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
              Telas reais de projetos que já rodam com cliente dentro, todo dia.
              {pinned && " Role para percorrer."}
            </p>
          </motion.div>
        </div>

        {/* O wrapper existe sempre para o useScroll ter alvo já na hidratação. */}
        <div ref={wrapRef} style={pinned ? { height: "300vh", position: "relative" } : undefined}>
          {pinned ? (
            <div style={{
              position: "sticky", top: 0, height: "100vh",
              display: "flex", alignItems: "center", overflow: "hidden",
            }}>
              <motion.div ref={trackRef} style={{ display: "flex", gap: 28, padding: "0 40px", x, willChange: "transform" }}>
                {pecas.map(p => (
                  <Card key={p.title} {...p} />
                ))}
              </motion.div>

              {/* Barra de progresso da vitrine */}
              <div style={{
                position: "absolute", bottom: 56, left: 40, right: 40,
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
              display: "flex", gap: 20, overflowX: "auto",
              padding: "0 20px 40px", scrollSnapType: "x mandatory",
            }}>
              {pecas.map(p => (
                <Card key={p.title} {...p} compact />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .vitrine-scroll { -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .vitrine-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 560px) {
          .vitrine-head { padding: 64px 20px 32px !important; }
        }
      `}</style>
    </>
  )
}

function Card({
  src, title, client, desc, tags, compact = false,
}: (typeof pecas)[number] & { compact?: boolean }) {
  return (
    <article
      style={{
        flex: "0 0 auto",
        width: compact ? "min(84vw, 380px)" : 480,
        scrollSnapAlign: "center",
        display: "flex", flexDirection: "column", gap: 18,
      }}
    >
      <MediaFrame
        src={src}
        alt={`${title} — ${client}`}
        label={`Print de ${title} · ${client}`}
        dark
        chrome
        ratio={16 / 10}
        parallax={0}
      />
      <div>
        <div style={{
          fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--sky)",
          letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8,
        }}>
          {client}
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 8 }}>
          {title}
        </h3>
        <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.7, marginBottom: 12 }}>
          {desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tags.map(t => (
            <span key={t} style={{
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
