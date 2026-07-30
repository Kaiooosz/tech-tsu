"use client"
import { motion } from "framer-motion"
import { Building2, MapPin, Users, ShieldCheck, Workflow, Sparkles } from "lucide-react"
import { E, staggerContainer, childFadeUp, tagPop } from "@/lib/motion"
import { EMPRESA, WA } from "@/lib/site"
import { MediaFrame } from "./MediaFrame"


const principios = [
  {
    icon: Workflow,
    title: "Processo antes de tela",
    desc: "Primeiro entendemos como o trabalho acontece hoje. Software que ignora o processo real vira mais uma aba aberta que ninguém usa.",
  },
  {
    icon: ShieldCheck,
    title: "Entrega antes de contrato longo",
    desc: "Você usa um MVP funcional antes de assinar evolução mensal. Nada de amarrar 12 meses pela fé em um slide.",
  },
  {
    icon: Users,
    title: "Um interlocutor, não um call center",
    desc: "Você fala com quem constrói. Sem camada de atendimento repassando ticket entre times que nunca viram a sua operação.",
  },
  {
    icon: Sparkles,
    title: "IA como camada, não como enfeite",
    desc: "Todo contrato inclui agente de atendimento conectado ao sistema. IA que consulta o seu dado — não IA que gera texto bonito.",
  },
]

const integracoes = [
  "API Oficial do WhatsApp (Meta)", "Instagram", "Google Workspace", "Google Sheets",
  "Gmail e SMTP", "PostgreSQL e Neon", "Supabase", "Stripe", "Asaas", "Mercado Pago",
  "Emissor de nota fiscal", "Melhor Envio e Correios", "Mercado Livre", "Shopee",
  "ClickUp e Trello", "ERPs via API", "Claude API", "Servidores MCP", "Webhooks REST",
]

const stack = [
  "Next.js", "TypeScript", "PostgreSQL", "Prisma",
  "Claude API", "API Oficial WhatsApp", "Vercel", "Integrações REST e MCP",
]

const dados = [
  { label: "Razão social", value: EMPRESA.razaoSocial },
  { label: "CNPJ",         value: EMPRESA.cnpj },
  { label: "Praça",        value: EMPRESA.praca },
  { label: "Atendimento",  value: EMPRESA.atendimento },
  { label: "E-mail",       value: EMPRESA.emailComercial, href: `mailto:${EMPRESA.emailComercial}` },
  { label: "WhatsApp",     value: EMPRESA.whatsappDisplay, href: WA.empresa },
  { label: "Instagram",    value: EMPRESA.instagram, href: EMPRESA.instagramUrl },
]

export function Empresa() {
  return (
    <>
      <section id="empresa" style={{ padding: "96px 40px", background: "var(--bg-2)", position: "relative", overflow: "hidden" }}>
        <div className="topology-bg" style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>

          {/* Header + retrato */}
          <div style={{
            display: "grid", gridTemplateColumns: "1.15fr 0.85fr",
            gap: 56, alignItems: "center", marginBottom: 72,
          }} className="empresa-topo">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer(0.1)}
            >
              <motion.div variants={childFadeUp} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginBottom: 20, padding: "4px 12px",
                border: "1px solid var(--border-m)", borderRadius: 999,
                fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--sky)",
                fontFamily: "var(--font-mono)", background: "rgba(44,85,232,0.08)",
              }}>
                <Building2 size={12} strokeWidth={2} />
                A empresa
              </motion.div>

              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E, delay: 0.1 } } }}
                  style={{
                    fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700,
                    lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20,
                    color: "var(--text)",
                  }}
                >
                  Software house enxuta,<br />
                  <span style={{ color: "rgba(245,242,235,0.42)", fontWeight: 300, fontStyle: "italic" }}>operação de verdade por trás.</span>
                </motion.h2>
              </div>

              <motion.p variants={childFadeUp} style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.8, marginBottom: 18 }}>
                A <strong style={{ color: "var(--text)", fontWeight: 600 }}>Tech Tsu</strong> é o nome comercial da {EMPRESA.razaoSocial},
                software house sediada em {EMPRESA.praca} e liderada por {EMPRESA.socio}. Atendemos empresas de serviços
                que cresceram além da planilha, do grupo de WhatsApp e das ferramentas genéricas.
              </motion.p>

              <motion.p variants={childFadeUp} style={{ fontSize: 16.5, color: "var(--muted)", lineHeight: 1.8, marginBottom: 32 }}>
                Não vendemos &ldquo;site&rdquo; nem &ldquo;app&rdquo;. Vendemos melhoria operacional: captar melhor, acompanhar cliente,
                reduzir retrabalho, automatizar rotina e dar visibilidade para quem decide. Cada projeto começa por um
                diagnóstico do processo real — e termina em sistema que o time abre todo dia.
              </motion.p>

              <motion.div variants={childFadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={WA.empresa} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  height: 46, padding: "0 22px",
                  background: "var(--teal)", color: "#fff",
                  fontSize: 14, fontWeight: 700, borderRadius: 6,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                  Conversar com quem constrói
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#vitrine" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  height: 46, padding: "0 22px",
                  border: "1px solid var(--border-m)", color: "var(--muted)",
                  fontSize: 14, fontWeight: 600, borderRadius: 6,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)" }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border-m)" }}>
                  Ver o que já entregamos
                </a>
              </motion.div>
            </motion.div>

            <MediaFrame
              src="/midia/equipe-escritorio.jpg"
              alt="Escritório da Tech Tsu em Alphaville"
              caption={`${EMPRESA.praca} — atendimento remoto para todo o Brasil.`}
              dark
              ratio={3 / 2}
              parallax={40}
            />
          </div>

          {/* Princípios */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
              letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24,
            }}
          >
            Princípios da casa
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            variants={staggerContainer(0.08)}
            style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16, marginBottom: 72,
            }}
            className="empresa-principios"
          >
            {principios.map(p => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
                }}
                whileHover={{ y: -3 }}
                style={{
                  display: "flex", gap: 18,
                  padding: "26px 26px",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 9, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(44,85,232,0.14)",
                  border: "1px solid rgba(143,168,255,0.22)",
                }}>
                  <p.icon size={18} strokeWidth={1.7} color="var(--sky)" />
                </div>
                <div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 8 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Integrações */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
              letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10,
            }}
          >
            O que conectamos
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.7, maxWidth: 620, marginBottom: 22 }}
          >
            O sistema novo não precisa substituir tudo de uma vez. Ele conversa com o que a sua
            empresa já usa — e com o que ela vai usar depois.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.03)}
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 72 }}
          >
            {integracoes.map(i => (
              <motion.span
                key={i}
                variants={tagPop}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                style={{
                  padding: "6px 13px", fontSize: 12,
                  fontFamily: "var(--font-mono)", color: "var(--muted)",
                  border: "1px solid var(--border)", borderRadius: 6,
                  display: "inline-block", cursor: "default",
                }}
              >
                {i}
              </motion.span>
            ))}
          </motion.div>

          {/* Dados institucionais + stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: E }}
            style={{
              display: "grid", gridTemplateColumns: "1.2fr 0.8fr",
              gap: 40, borderTop: "1px solid var(--border)", paddingTop: 40,
            }}
            className="empresa-dados"
          >
            <div>
              <p style={{
                fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
                letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20,
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <MapPin size={12} strokeWidth={2} />
                Dados da empresa
              </p>
              <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "18px 32px" }} className="empresa-dl">
                {dados.map(d => (
                  <div key={d.label}>
                    <dt style={{
                      fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
                      letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6,
                    }}>
                      {d.label}
                    </dt>
                    <dd style={{ margin: 0, fontSize: 14, color: "var(--text)", lineHeight: 1.5 }}>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          style={{ color: "var(--sky)", transition: "opacity 0.2s" }}
                          onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                        >
                          {d.value}
                        </a>
                      ) : d.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p style={{
                fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
                letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20,
              }}>
                Stack que operamos
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {stack.map(s => (
                  <span key={s} style={{
                    padding: "6px 12px", fontSize: 11.5,
                    fontFamily: "var(--font-mono)", color: "var(--muted)",
                    border: "1px solid var(--border)", borderRadius: 6,
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .empresa-topo { grid-template-columns: 1fr !important; }
          .empresa-dados { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          #empresa { padding: 64px 20px !important; }
          .empresa-principios { grid-template-columns: 1fr !important; }
          .empresa-dl { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
