"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Bot, Users, Boxes, ShoppingCart, Globe, MessageSquareText,
  ChartColumn, FileText, Plug, Workflow, Smartphone, GraduationCap,
  Mic, Route, LayoutDashboard, ShieldCheck,
} from "lucide-react"
import { E, staggerContainer, childFadeUp } from "@/lib/motion"
import { WA } from "@/lib/site"
import { MediaFrame } from "./MediaFrame"

const solucoes = [
  {
    icon: Users,
    title: "CRM e pipeline comercial",
    desc: "Lead entra, é distribuído, tem dono, prazo e histórico. O gestor vê o funil inteiro sem pedir relatório para ninguém.",
    tags: ["Funil", "Follow-up", "Histórico"],
  },
  {
    icon: Boxes,
    title: "ERP e gestão operacional",
    desc: "Cadastro, estoque, compras, financeiro e faturamento no mesmo lugar — no fluxo da sua empresa, não no de um ERP de prateleira.",
    tags: ["Estoque", "Financeiro", "Compras"],
  },
  {
    icon: Route,
    title: "Ordens de serviço e campo",
    desc: "OS digital com checklist, foto, assinatura e roteiro do técnico. O cliente acompanha sem ligar para o escritório.",
    tags: ["Checklist", "Assinatura", "Roteiro"],
  },
  {
    icon: FileText,
    title: "Documentos e formulários",
    desc: "Portal de coleta, versionamento, prazo e aprovação. Documento para de circular por e-mail e grupo de WhatsApp.",
    tags: ["Portal", "Versão", "Aprovação"],
  },
  {
    icon: MessageSquareText,
    title: "Automação de WhatsApp",
    desc: "API Oficial ligada ao seu sistema: confirmação, cobrança, lembrete, pesquisa e campanha com template aprovado na Meta.",
    tags: ["API Oficial", "Templates", "Campanhas"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce e marketplaces",
    desc: "Loja própria integrada a estoque, pedido, logística e canais de venda — sem planilha de conferência no fim do dia.",
    tags: ["Checkout", "Integração", "Pedidos"],
  },
  {
    icon: Globe,
    title: "Sites e SEO local",
    desc: "Site institucional rápido, indexável e desenhado para captar. Com SEO local quando a disputa é por bairro e cidade.",
    tags: ["Next.js", "SEO local", "Performance"],
  },
  {
    icon: ChartColumn,
    title: "Dashboards e BI",
    desc: "Indicador em tempo real da operação: entrada, conversão, produtividade, receita e gargalo — na tela, não no fechamento do mês.",
    tags: ["Tempo real", "Metas", "Exportação"],
  },
  {
    icon: Plug,
    title: "Integrações e API",
    desc: "Conectamos o que você já usa: ERP, gateway, marketplace, contabilidade, planilha, e-mail e ferramentas de IA via MCP.",
    tags: ["REST", "Webhooks", "MCP"],
  },
  {
    icon: Workflow,
    title: "Automação de processos",
    desc: "Rotina repetitiva vira gatilho: gerar proposta, cobrar assinatura, atualizar status, notificar o time e registrar tudo.",
    tags: ["Gatilhos", "Regras", "Log"],
  },
  {
    icon: GraduationCap,
    title: "Plataforma de curso e EAD",
    desc: "Aluno, turma, conteúdo, progresso e pagamento no mesmo sistema. Sem amarrar três ferramentas com fita adesiva.",
    tags: ["Turmas", "Progresso", "Pagamento"],
  },
  {
    icon: Smartphone,
    title: "App e área do cliente",
    desc: "Portal ou app onde o seu cliente acompanha pedido, processo, agenda e documento sozinho — e para de ligar para saber.",
    tags: ["Portal", "Mobile", "Autoatendimento"],
  },
]

const agentePilares = [
  {
    icon: Bot,
    title: "Conectado ao seu sistema",
    desc: "Consulta estoque, pedido, processo, prontuário e OS de verdade. Não é chatbot de árvore de opções.",
  },
  {
    icon: MessageSquareText,
    title: "Multicanal",
    desc: "WhatsApp, site e Instagram no mesmo fluxo — o histórico é um só, independente de onde o cliente falou.",
  },
  {
    icon: ShieldCheck,
    title: "Triagem antes do humano",
    desc: "Qualifica, resolve o simples e entrega para o time só o que precisa de gente. O time atende mais, com menos ruído.",
  },
  {
    icon: Mic,
    title: "Voz quando faz sentido",
    desc: "Atendimento por voz para operações com volume de ligação — agendamento, confirmação e triagem.",
  },
]

export function Solucoes() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const glowY = useTransform(scrollYProgress, [0, 1], [70, -70])

  return (
    <>
      <section id="solucoes" style={{ padding: "96px 40px", background: "var(--paper-2)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.12)}
            style={{ marginBottom: 56, maxWidth: 720 }}
          >
            <motion.div variants={childFadeUp} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid rgba(44,85,232,0.25)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--teal)",
              fontFamily: "var(--font-mono)", background: "rgba(44,85,232,0.06)",
            }}>
              O que construímos
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
                Um catálogo de soluções —<br />
                <span style={{ color: "var(--muted-ink)", fontWeight: 300, fontStyle: "italic" }}>montado no formato da sua operação.</span>
              </motion.h2>
            </div>
            <motion.p variants={childFadeUp} style={{ fontSize: 17, color: "var(--muted-ink)", lineHeight: 1.65 }}>
              Você não precisa de tudo isso. Precisa dos módulos que destravam a sua rotina primeiro — e da
              possibilidade de ligar os outros depois, sem trocar de sistema.
            </motion.p>
          </motion.div>

          {/* Destaque — Agente de IA */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: E }}
            style={{
              position: "relative",
              borderRadius: 18, overflow: "hidden",
              background: "linear-gradient(145deg, #14161c 0%, #191B21 45%, #1e2a4d 100%)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 24px 70px rgba(25,27,33,0.22)",
              padding: "48px 44px",
              marginBottom: 24,
            }}
            className="solucoes-destaque-card"
          >
            <motion.div
              aria-hidden
              style={{
                position: "absolute", top: "-20%", right: "-10%",
                width: 520, height: 520, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(44,85,232,0.28) 0%, transparent 70%)",
                pointerEvents: "none", y: glowY,
              }}
            />
            <div className="circuit-grid" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />

            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} className="solucoes-destaque">
              <div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  marginBottom: 20, padding: "5px 12px",
                  border: "1px solid rgba(143,168,255,0.3)", borderRadius: 999,
                  fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "var(--sky)",
                  fontFamily: "var(--font-mono)", background: "rgba(44,85,232,0.14)",
                }}>
                  <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--sky)", display: "inline-block" }} />
                  Escopo padrão em todo contrato
                </div>

                <h3 style={{
                  fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700,
                  letterSpacing: "-0.03em", lineHeight: 1.1,
                  color: "var(--text)", marginBottom: 16,
                }}>
                  Agente de IA de atendimento<br />
                  <span style={{ color: "rgba(245,242,235,0.45)", fontWeight: 300, fontStyle: "italic" }}>
                    que conhece a sua operação.
                  </span>
                </h3>

                <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}>
                  Todo cliente Tech Tsu recebe um agente de atendimento por IA — não é módulo opcional.
                  Ele atende 24 horas, responde com o dado que está dentro do seu sistema e devolve
                  cada conversa como informação de operação.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 32 }} className="solucoes-pilares">
                  {agentePilares.map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: E }}
                    >
                      <p.icon size={17} strokeWidth={1.7} color="var(--sky)" style={{ marginBottom: 9 }} />
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: "var(--text)", marginBottom: 5, letterSpacing: "-0.01em" }}>
                        {p.title}
                      </div>
                      <p style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.6 }}>{p.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                  <a href={WA.agenteIA} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    height: 46, padding: "0 22px",
                    background: "var(--teal)", color: "#fff",
                    fontSize: 14, fontWeight: 700, borderRadius: 6,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                    Ver o agente funcionando
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--muted-2)" }}>
                    14+ agentes especializados já em produção
                  </span>
                </div>
              </div>

              <MediaFrame
                src="/midia/agente-ia.png"
                alt="Agente de IA de atendimento da Tech Tsu"
                label="Vídeo ou print do agente de IA em atendimento"
                dark
                chrome
                ratio={4 / 3}
                parallax={26}
              />
            </div>
          </motion.div>

          {/* Grid de soluções */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer(0.06)}
            style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16, marginTop: 40, marginBottom: 48,
            }}
            className="solucoes-grid"
          >
            {solucoes.map(s => (
              <motion.article
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 34, rotateX: 6 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: E } },
                }}
                whileHover={{ y: -4, boxShadow: "var(--shadow-md)" } as never}
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-light)",
                  borderRadius: 12,
                  boxShadow: "var(--shadow-sm)",
                  padding: "28px 26px",
                  transformPerspective: 900,
                  display: "flex", flexDirection: "column", gap: 12,
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 9,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(44,85,232,0.07)",
                  border: "1px solid rgba(44,85,232,0.16)",
                }}>
                  <s.icon size={18} strokeWidth={1.7} color="var(--teal)" />
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {s.title}
                </h3>

                <p style={{ fontSize: 13.5, color: "var(--muted-ink)", lineHeight: 1.7, flex: 1 }}>
                  {s.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      padding: "3px 9px", fontSize: 10,
                      fontFamily: "var(--font-mono)", color: "var(--muted-ink-2)",
                      border: "1px solid var(--border-light-m)", borderRadius: 4,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Rodapé da seção */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: E }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: 24, flexWrap: "wrap",
              borderTop: "1px solid var(--border-light)", paddingTop: 32,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <LayoutDashboard size={18} strokeWidth={1.7} color="var(--teal)" />
              <p style={{ fontSize: 14.5, color: "var(--muted-ink)", lineHeight: 1.6, maxWidth: 560 }}>
                Não achou o seu caso na lista? A maioria dos projetos começa exatamente assim — descrevendo
                a rotina no WhatsApp e recebendo um recorte do que dá para entregar primeiro.
              </p>
            </div>
            <a href={WA.orcamento} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              height: 44, padding: "0 22px",
              border: "1px solid var(--border-light-m)", color: "var(--ink)",
              fontSize: 14, fontWeight: 600, borderRadius: 6,
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(44,85,232,0.4)"; e.currentTarget.style.background = "rgba(44,85,232,0.05)" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light-m)"; e.currentTarget.style.background = "transparent" }}>
              Descrever minha operação no WhatsApp
            </a>
          </motion.div>

        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) { .solucoes-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 980px)  { .solucoes-destaque { grid-template-columns: 1fr !important; } }
        @media (max-width: 560px)  {
          #solucoes { padding: 64px 20px !important; }
          .solucoes-grid { grid-template-columns: 1fr !important; }
          .solucoes-pilares { grid-template-columns: 1fr !important; }
          .solucoes-destaque-card { padding: 32px 22px !important; }
        }
      `}</style>
    </>
  )
}
