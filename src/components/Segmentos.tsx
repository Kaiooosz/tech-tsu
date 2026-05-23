"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { E, staggerContainer, childFadeUp } from "@/lib/motion"

/* ── Types ───────────────────────────────────────────────────── */
type Pain = {
  icon: React.ReactNode
  category: string
  quote: string
  solution: string
}

type Segment = {
  id: string
  label: string
  sub: string
  headline: string
  desc: string
  stats: { value: string; label: string }[]
  pains: Pain[]
  entrega: string
}

/* ── Icons ───────────────────────────────────────────────────── */
const IconClock = (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="var(--teal)" strokeWidth="1.5"/>
    <path d="M12 7v5l3 3" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const IconDoc = (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="var(--teal)" strokeWidth="1.5"/>
    <path d="M14 2v6h6M9 13h6M9 17h4" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const IconPeople = (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const IconBarChart = (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path d="M18 20V10M12 20V4M6 20v-6" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const IconCalendar = (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="var(--teal)" strokeWidth="1.5"/>
    <path d="M16 2v4M8 2v4M3 10h18" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const IconZap = (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IconTrend = (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const IconMail = (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="var(--teal)" strokeWidth="1.5"/>
    <path d="M22 6l-10 7L2 6" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

/* ── Data ────────────────────────────────────────────────────── */
const segments: Segment[] = [
  {
    id: "juridico",
    label: "Jurídico",
    sub: "ESCRITÓRIOS DE ADVOCACIA · CONTABILIDADE · CONSULTORIA",
    headline: "Prazo vencido. Processo sumiu. Cliente ligando.",
    desc: "O escritório que opera no improviso perde cliente, perde processo e perde reputação. Controle real não é luxo — é sobrevivência.",
    stats: [
      { value: "1 em 3", label: "escritórios perde prazo por controle manual" },
      { value: "60%", label: "do tempo do sócio vai para gestão, não para advocacia" },
      { value: "2x", label: "mais processos atendidos com OS e agenda integrados" },
    ],
    pains: [
      { icon: IconClock, category: "PRAZO CRÍTICO", quote: "Soube do prazo pelo cliente, não pelo sistema", solution: "Alerta automático de prazos com notificação no WhatsApp e e-mail 72h, 24h e no dia." },
      { icon: IconDoc, category: "DOCUMENTOS", quote: "O cliente pediu o contrato e a gente ficou 40 minutos procurando", solution: "Repositório com busca, tags e versão — qualquer documento em 10 segundos." },
      { icon: IconPeople, category: "EQUIPE", quote: "Cada advogado tem sua planilha. Ninguém sabe o que o outro está fazendo", solution: "Dashboard de OS por responsável com status, prazo e prioridade visível para todos." },
      { icon: IconBarChart, category: "FINANCEIRO", quote: "Não sei se o escritório cresceu ou diminuiu esse trimestre", solution: "Relatório de receita, inadimplência e margem em tempo real, sem Excel." },
    ],
    entrega: "ERP jurídico com OS, documentos, agenda, CRM e alertas automáticos. Case real: BBLAW em 6 semanas.",
  },
  {
    id: "clinicas",
    label: "Clínicas",
    sub: "CLÍNICAS MÉDICAS · CONSULTÓRIOS · SAÚDE",
    headline: "Paciente agendado. Prontuário perdido. Retorno esquecido.",
    desc: "A clínica que não controla o ciclo do paciente perde receita recorrente e qualidade de atendimento. Gestão eficiente é diferencial competitivo.",
    stats: [
      { value: "40%", label: "dos pacientes não retornam por falta de acompanhamento" },
      { value: "3x", label: "mais agendamentos com confirmação automática" },
      { value: "20min", label: "economizados por consulta com prontuário digital" },
    ],
    pains: [
      { icon: IconCalendar, category: "AGENDA", quote: "Ligaram pra confirmar e o paciente já estava na clínica esperando", solution: "Confirmação automática via WhatsApp com reagendamento em 1 clique." },
      { icon: IconDoc, category: "PRONTUÁRIO", quote: "O médico pediu o histórico e levou 20 min pra achar no papel", solution: "Prontuário digital com busca instantânea e histórico completo do paciente." },
      { icon: IconMail, category: "RETORNO", quote: "Paciente sumiu depois do tratamento, não voltou mais", solution: "Régua de follow-up automático por tipo de tratamento e especialidade." },
      { icon: IconBarChart, category: "FINANCEIRO", quote: "Não sei qual procedimento dá mais margem real", solution: "Dashboard de faturamento por procedimento e convênio em tempo real." },
    ],
    entrega: "Sistema de agendamento, prontuário digital, CRM de pacientes e automações de WhatsApp.",
  },
  {
    id: "b2b",
    label: "Serviços B2B",
    sub: "PRESTADORES DE SERVIÇO · CONSULTORIAS · EMPRESAS B2B",
    headline: "Proposta aprovada. OS sem dono. Cliente reclamando no final.",
    desc: "Serviço sem rastreamento vira retrabalho, atraso e chargeback. Cada OS precisa de um responsável, um prazo e um status claro.",
    stats: [
      { value: "62%", label: "das reclamações vêm de comunicação, não de qualidade" },
      { value: "15h", label: "por semana perdidas em alinhamento interno" },
      { value: "4x", label: "mais rápido no fechamento com proposta automatizada" },
    ],
    pains: [
      { icon: IconZap, category: "OS", quote: "Ninguém sabe em que fase está o serviço do cliente", solution: "Pipeline de OS com status em tempo real e histórico de todas as ações." },
      { icon: IconDoc, category: "PROPOSTA", quote: "Monto proposta do zero toda vez, copia e cola de outro arquivo", solution: "Templates com variáveis que geram proposta profissional em 5 minutos." },
      { icon: IconPeople, category: "CLIENTE", quote: "O cliente liga perguntando o que foi feito, não tenho como responder rápido", solution: "Portal do cliente com histórico de atendimentos e documentos compartilhados." },
      { icon: IconCalendar, category: "EQUIPE", quote: "Dois colaboradores fizeram a mesma tarefa sem saber", solution: "Atribuição clara de tarefas com prazo, prioridade e notificação automática." },
    ],
    entrega: "CRM B2B com pipeline, OS, propostas automáticas e portal do cliente integrado.",
  },
  {
    id: "agencias",
    label: "Agências",
    sub: "MARKETING · CRIAÇÃO · PERFORMANCE · MÍDIA",
    headline: "Briefing aprovado. Versão 7. Entrega atrasada.",
    desc: "Agência que trabalha no improviso perde prazo, perde cliente e perde margem. Processo claro transforma caos criativo em resultado previsível.",
    stats: [
      { value: "70%", label: "das agências perdem cliente por problemas de comunicação interna" },
      { value: "2x", label: "mais projetos entregues com workflow estruturado" },
      { value: "35%", label: "da receita vai pra retrabalho por briefing mal documentado" },
    ],
    pains: [
      { icon: IconDoc, category: "BRIEFING", quote: "O cliente pediu uma coisa, o time entendeu outra, refizemos tudo", solution: "Formulário de briefing estruturado que vira OS com responsável e prazo automático." },
      { icon: IconClock, category: "PRAZO", quote: "Só descubro que vai atrasar quando o cliente cobra", solution: "Kanban de entregas com alerta automático 48h antes do prazo vencer." },
      { icon: IconMail, category: "APROVAÇÃO", quote: "Mando por e-mail, versão 7 final revisado_final2", solution: "Fluxo de aprovação com versionamento e histórico de comentários centralizado." },
      { icon: IconBarChart, category: "FINANCEIRO", quote: "Não sei se o cliente está dando lucro ou prejuízo", solution: "Custo por projeto vs. faturamento em tempo real por cliente." },
    ],
    entrega: "Gestão de projetos, workflow de aprovação, briefing digital e dashboard financeiro por cliente.",
  },
  {
    id: "varejo",
    label: "Varejo / E-com",
    sub: "LOJA FÍSICA · E-COMMERCE · DISTRIBUIÇÃO",
    headline: "Estoque inconsistente. Pedido atrasado. Cliente sumido.",
    desc: "Varejo sem dados é aposta. Cada ruptura de estoque, cada pedido perdido é receita que não volta. Visibilidade em tempo real não é opcional.",
    stats: [
      { value: "R$8k", label: "perdidos por mês em ruptura de estoque não prevista" },
      { value: "1 em 5", label: "pedidos tem problema por processo manual" },
      { value: "3x", label: "mais recompra com follow-up automatizado" },
    ],
    pains: [
      { icon: IconZap, category: "ESTOQUE", quote: "Vendemos o produto, foi pra separar e não tinha", solution: "Controle de estoque em tempo real com alerta de reposição automático." },
      { icon: IconCalendar, category: "PEDIDOS", quote: "Cliente comprou, pagou e sumiu no ar — ninguém sabe onde está", solution: "Pipeline de pedidos com status e notificação automática para o cliente." },
      { icon: IconMail, category: "PÓS-VENDA", quote: "Vendemos e nunca mais falamos com o cliente", solution: "Sequência automática de pós-venda e recompra via WhatsApp." },
      { icon: IconTrend, category: "DADOS", quote: "Não sei qual produto tem mais margem real", solution: "Dashboard de vendas, ticket médio e margem por SKU sem planilha." },
    ],
    entrega: "Gestão de pedidos, controle de estoque, CRM de clientes e automações de recompra.",
  },
  {
    id: "ceo",
    label: "CEO / Gestor",
    sub: "SÓCIOS · DIRETORES · GESTORES DE OPERAÇÃO",
    headline: "Empresa crescendo. Visibilidade zero. Decisão no feeling.",
    desc: "Quanto maior a operação sem sistema, maior o risco de perder controle. CEO que decide pelo feeling perde para quem decide por dados.",
    stats: [
      { value: "73%", label: "dos gestores não têm dashboard atualizado em tempo real" },
      { value: "4h", label: "por dia em reuniões de alinhamento por falta de dados" },
      { value: "0%", label: "de custo de BI enterprise com sistema sob medida" },
    ],
    pains: [
      { icon: IconBarChart, category: "DASHBOARD", quote: "Preciso de dados e minha equipe passa 2 dias montando planilha", solution: "Dashboard executivo atualizado em tempo real com os KPIs que realmente importam." },
      { icon: IconZap, category: "PROCESSO", quote: "Cada pessoa faz do jeito que acha melhor, não tem padrão", solution: "Fluxos documentados e automatizados que garantem consistência em toda a equipe." },
      { icon: IconPeople, category: "EQUIPE", quote: "Só sei o que a equipe está fazendo quando peço relatório", solution: "Visibilidade de tarefas, prazos e performance sem precisar microgerenciar." },
      { icon: IconTrend, category: "ESCALA", quote: "Quero crescer mas não consigo escalar sem contratar mais", solution: "Automações que multiplicam capacidade operacional sem aumentar headcount." },
    ],
    entrega: "Dashboard executivo, automações de processo, gestão de equipe e relatórios em tempo real.",
  },
]

/* ── Component ───────────────────────────────────────────────── */
export function Segmentos() {
  const [active, setActive] = useState(segments[0].id)
  const seg = segments.find(s => s.id === active)!

  return (
    <>
      <section id="segmentos" style={{ padding: "96px 40px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.1)}
            style={{ marginBottom: 48 }}
          >
            <motion.div variants={childFadeUp} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid var(--border-m)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--teal)",
              fontFamily: "var(--font-mono)",
            }}>
              <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
              Inteligência comercial
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E, delay: 0.08 } } }}
                style={{
                  fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 700,
                  lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 14,
                }}
              >
                Cada segmento tem sua dor.<br />
                <span style={{ color: "rgba(255,255,255,0.32)", fontWeight: 300, fontStyle: "italic" }}>Nós temos a solução.</span>
              </motion.h2>
            </div>
            <motion.p variants={childFadeUp} style={{ fontSize: 16, color: "var(--muted)", maxWidth: 520, lineHeight: 1.65 }}>
              Selecione o perfil do seu negócio e veja as dores que a Tech TSU resolve com sistema sob medida.
            </motion.p>
          </motion.div>

          {/* Segment filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }} className="seg-filter">
            {segments.map(s => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                style={{
                  padding: "9px 16px", borderRadius: 6,
                  border: active === s.id ? "1px solid var(--teal)" : "1px solid var(--border-m)",
                  background: active === s.id ? "rgba(46,196,182,0.08)" : "transparent",
                  color: active === s.id ? "var(--teal)" : "var(--muted)",
                  fontSize: 13, fontWeight: active === s.id ? 600 : 400,
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "all 0.18s",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Content — animated on switch */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: E }}
            >
              {/* Subcategory + Headline */}
              <div style={{ marginBottom: 36 }}>
                <p style={{
                  fontSize: 11, fontFamily: "var(--font-mono)",
                  color: "var(--teal)", letterSpacing: "0.18em",
                  textTransform: "uppercase", marginBottom: 14, fontWeight: 500,
                }}>
                  {seg.sub}
                </p>
                <h3 style={{
                  fontSize: "clamp(22px, 3.5vw, 38px)", fontWeight: 700,
                  letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 12,
                }}>
                  {seg.headline}
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 600, lineHeight: 1.65 }}>
                  {seg.desc}
                </p>
              </div>

              {/* Stats */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1, background: "var(--border)",
                border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden",
                marginBottom: 24,
              }} className="seg-stats">
                {seg.stats.map((st, i) => (
                  <div key={i} style={{
                    padding: "28px 24px",
                    background: "var(--bg-3)",
                    textAlign: "center",
                  }}>
                    <p style={{
                      fontFamily: "var(--font-mono)", fontSize: "clamp(26px, 4vw, 38px)",
                      fontWeight: 700, color: "var(--teal)", lineHeight: 1, marginBottom: 10,
                    }}>
                      {st.value}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5, maxWidth: 160, margin: "0 auto" }}>
                      {st.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pain cards — 2x2 */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 1, background: "var(--border)",
                border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden",
                marginBottom: 16,
              }} className="seg-pains">
                {seg.pains.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ background: "rgba(46,196,182,0.03)", transition: { duration: 0.2 } }}
                    style={{
                      padding: "24px 24px",
                      background: "var(--bg-2)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                      {p.icon}
                      <span style={{
                        fontSize: 10, fontFamily: "var(--font-mono)",
                        color: "var(--teal)", fontWeight: 600,
                        letterSpacing: "0.15em", textTransform: "uppercase",
                      }}>
                        {p.category}
                      </span>
                    </div>
                    <p style={{
                      fontSize: 15, fontWeight: 500, fontStyle: "italic",
                      color: "rgba(255,255,255,0.75)", lineHeight: 1.5, marginBottom: 14,
                    }}>
                      "{p.quote}"
                    </p>
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                      <span dangerouslySetInnerHTML={{ __html: p.solution.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text);font-weight:600">$1</strong>') }} />
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Entrega card */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "18px 20px",
                background: "rgba(46,196,182,0.04)",
                border: "1px solid rgba(46,196,182,0.15)",
                borderRadius: 8, marginBottom: 20,
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 6, flexShrink: 0,
                  background: "rgba(46,196,182,0.1)",
                  border: "1px solid rgba(46,196,182,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "var(--muted-2)", marginBottom: 4, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    O que a Tech TSU entrega
                  </p>
                  <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6 }}>{seg.entrega}</p>
                </div>
              </div>

              {/* CTA */}
              <div style={{
                padding: "20px 24px",
                background: "var(--bg-3)",
                border: "1px solid var(--border-m)",
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: 16,
              }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 500, color: "var(--text)", marginBottom: 4 }}>
                    Reconheceu alguma dessas dores?
                  </p>
                  <p style={{ fontSize: 13, color: "var(--teal)" }}>
                    A Tech TSU transforma isso em sistema em 3 a 6 semanas.
                  </p>
                </div>
                <a
                  href="#contato"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "11px 22px", borderRadius: 6,
                    border: "1px solid var(--border-m)",
                    background: "transparent", color: "var(--text)",
                    fontSize: 14, fontWeight: 600,
                    transition: "border 0.18s, color 0.18s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--teal)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--teal)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.14)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)" }}
                >
                  Solicitar diagnóstico gratuito
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .seg-stats  { grid-template-columns: 1fr !important; }
          .seg-pains  { grid-template-columns: 1fr !important; }
          #segmentos  { padding: 64px 20px !important; }
        }
        @media (max-width: 480px) {
          .seg-filter button { font-size: 12px !important; padding: 7px 12px !important; }
        }
      `}</style>
    </>
  )
}
