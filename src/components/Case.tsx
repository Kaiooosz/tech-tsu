"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useInView, animate } from "framer-motion"
import { E, staggerContainer, childSlideUp, slideLeft, slideRight, scaleIn, tagPop } from "@/lib/motion"

/* ── Counter ─────────────────────────────────────────────────── */
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: v => setN(Math.round(v)) })
    return ctrl.stop
  }, [inView, to])
  return <span ref={ref}>{prefix}{n}{suffix}</span>
}

/* ── Data ────────────────────────────────────────────────────── */
const chaosMessages = [
  { from: "Dr. Marcus",  text: "Oi, onde ficou o contrato do João?",        time: "09:12", alert: false },
  { from: "Ana (OS)",    text: "Enviou o boleto pro cliente de sexta?",     time: "09:18", alert: false },
  { from: "Dr. Marcus",  text: "ESSE PRAZO VENCEU ONTEM!!",                 time: "09:31", alert: true  },
  { from: "Carlos",      text: "Qual planilha é a certa? tem 3 versões",    time: "10:05", alert: false },
  { from: "Você",        text: "Não sei, perguntar pra Lúcia",              time: "10:07", alert: false },
  { from: "Dr. Marcus",  text: "Quantos clientes ativos temos esse mês?",   time: "11:40", alert: false },
  { from: "Lúcia",       text: "A planilha travou de novo",                  time: "12:03", alert: true  },
]

const chaosSheet = [
  { c1: "Cliente",     c2: "Status",     c3: "Prazo",  c4: "Resp.",   bad: false },
  { c1: "Adv. Marco",  c2: "???",        c3: "—",      c4: "Ana?",    bad: true  },
  { c1: "João Silva",  c2: "PENDENTE",   c3: "15/04",  c4: "",        bad: true  },
  { c1: "R. Fernanda", c2: "ok acho",    c3: "venceu", c4: "Carlos",  bad: true  },
  { c1: "Empresa X",   c2: "Em aberto",  c3: "???",    c4: "ninguém", bad: true  },
]

const kpis = [
  { n: "24", label: "Clientes",  delta: "+3 este mês" },
  { n: "7",  label: "OS abertas", delta: "2 vencem hoje" },
  { n: "R$41k", label: "MRR",   delta: "+12% vs mês ant." },
]

const recentTasks = [
  { label: "Contrato Empresa X — cláusula 4", done: true,  prio: false },
  { label: "Proposta Dr. Marcos — enviar v2", done: true,  prio: false },
  { label: "OS #312 — documentos fiscais",    done: false, prio: true  },
  { label: "Reunião João Silva — agendar",    done: false, prio: false },
]

const bbHighlights = [
  { to: 7,  suffix: "+", prefix: "", label: "Aplicações em produção" },
  { to: 14, suffix: "+", prefix: "", label: "Agentes IA especializados" },
  { to: 15, suffix: "+", prefix: "", label: "Jurisdições suportadas" },
]

const bbModules = [
  "CRM com pipeline", "Portal de formulários", "Site institucional",
  "3 landing pages especializadas", "Plataforma de curso", "API e backend",
  "Atendimento por IA", "Agentes IA por jurisdição", "Disparos automatizados",
]


/* ── Variants ────────────────────────────────────────────────── */
const beforePanel = {
  hidden: { opacity: 0, x: -52 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: E, staggerChildren: 0.07 } },
}
const afterPanel = {
  hidden: { opacity: 0, x: 52 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: E, staggerChildren: 0.08 } },
}
const msgVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: E } },
}
const rowVariant = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.32, ease: E } },
}

/* ── ResultTabs ──────────────────────────────────────────────── */
const resultTabs = [
  { id: "dashboard", label: "Dashboard", src: "/resultado-dashboard.svg", caption: "KPIs, OS abertas e receita em tempo real" },
  { id: "pipeline",  label: "Pipeline",  src: "/resultado-pipeline.svg",  caption: "Kanban de negociações — R$ 87k em vista" },
  { id: "agenda",    label: "Agenda",    src: "/resultado-agenda.svg",     caption: "8 eventos confirmados, zero conflitos" },
]

function ResultTabs() {
  const [active, setActive] = useState(0)
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      {/* Tab bar */}
      <div style={{
        display: "flex", borderBottom: "1px solid rgba(44,85,232,0.15)",
        background: "rgba(255,255,255,0.01)", flexShrink: 0,
      }}>
        {resultTabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            style={{
              flex: 1, padding: "9px 4px",
              background: "transparent",
              border: "none", borderBottom: active === i ? "2px solid var(--teal)" : "2px solid transparent",
              cursor: "pointer",
              fontSize: 10, fontWeight: active === i ? 700 : 500,
              fontFamily: "var(--font-mono)", letterSpacing: "0.08em",
              color: active === i ? "var(--sky)" : "rgba(255,255,255,0.28)",
              transition: "color 0.15s, border-color 0.15s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Image */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative", minHeight: 260 }}>
        <img
          key={resultTabs[active].src}
          src={resultTabs[active].src}
          alt={resultTabs[active].caption}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
        />
      </div>

      {/* Caption */}
      <div style={{
        padding: "10px 16px", flexShrink: 0,
        background: "rgba(44,85,232,0.04)",
        borderTop: "1px solid rgba(44,85,232,0.1)",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="var(--sky)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 4L12 14.01l-3-3" stroke="var(--sky)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontSize: 10, color: "var(--sky)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
          {resultTabs[active].caption}
        </span>
      </div>
    </div>
  )
}

/* ── DorTabs ─────────────────────────────────────────────────── */
const dorTabs = [
  { id: "whatsapp", label: "WhatsApp",  src: "/dor-whatsapp-caos.svg",  caption: "47 mensagens sem resposta — ninguém sabe o prazo" },
  { id: "arquivos", label: "Arquivos",  src: "/dor-arquivos-caos.svg",  caption: '3 arquivos "FINAL" — ninguém sabe qual é o certo' },
  { id: "agenda",   label: "Agenda",    src: "/dor-agenda-vazia.svg",   caption: "8 leads na semana — nenhum com próximo passo" },
]

function DorTabs() {
  const [active, setActive] = useState(0)
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      {/* Tab bar */}
      <div style={{
        display: "flex", borderBottom: "1px solid var(--border)",
        background: "rgba(255,255,255,0.01)", flexShrink: 0,
      }}>
        {dorTabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            style={{
              flex: 1, padding: "9px 4px",
              background: "transparent",
              border: "none", borderBottom: active === i ? "2px solid rgba(255,255,255,0.5)" : "2px solid transparent",
              cursor: "pointer",
              fontSize: 10, fontWeight: active === i ? 700 : 500,
              fontFamily: "var(--font-mono)", letterSpacing: "0.08em",
              color: active === i ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.28)",
              transition: "color 0.15s, border-color 0.15s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Image */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative", minHeight: 260 }}>
        <img
          key={dorTabs[active].src}
          src={dorTabs[active].src}
          alt={dorTabs[active].caption}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
        />
      </div>

      {/* Caption */}
      <div style={{
        padding: "10px 16px", flexShrink: 0,
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid var(--border)",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <path d="M12 8v4m0 4h.01" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize: 10, color: "var(--muted-2)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
          {dorTabs[active].caption}
        </span>
      </div>
    </div>
  )
}

/* ── Component ───────────────────────────────────────────────── */
export function Case() {
  return (
    <>
      {/* ══ BEFORE / AFTER ══════════════════════════════════════ */}
      <section id="problema" style={{ padding: "96px 40px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer(0.12)}
            style={{ marginBottom: 56 }}
          >
            <motion.div variants={childSlideUp} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid var(--border-m)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--muted)",
              fontFamily: "var(--font-mono)",
            }}>
              Antes vs. depois
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E } } }}
                style={{
                  fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 700,
                  lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16,
                }}
              >
                Sua operação vive no WhatsApp<br />
                <span style={{ color: "rgba(255,255,255,0.32)", fontWeight: 300, fontStyle: "italic" }}>
                  ou num sistema que funciona?
                </span>
              </motion.h2>
            </div>
            <motion.p variants={childSlideUp} style={{ fontSize: 16, color: "var(--muted)", maxWidth: 540, lineHeight: 1.65 }}>
              Quando o controle é manual, cada informação vira uma conversa, cada prazo vira um susto e cada relatório vira um bico.
            </motion.p>
          </motion.div>

          {/* Split comparison */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 2, background: "var(--border)",
            border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden",
          }} className="case-split">

            {/* ── ANTES ─────────────────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={beforePanel}
              style={{ background: "#0a0a0a", display: "flex", flexDirection: "column" }}
            >
              {/* Label bar */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 20px",
                background: "rgba(255,255,255,0.02)",
                borderBottom: "1px solid var(--border)",
                flexShrink: 0,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.15)", display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Sem sistema
                  </span>
                </div>
                <span style={{ fontSize: 10, color: "var(--muted-2)", fontFamily: "var(--font-mono)" }}>WhatsApp + planilha</span>
              </div>

              {/* Tabs de dor */}
              <DorTabs />
            </motion.div>

            {/* ── DEPOIS ────────────────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={afterPanel}
              style={{ background: "var(--bg-3)" }}
            >
              {/* Label bar */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 20px",
                background: "rgba(44,85,232,0.06)",
                borderBottom: "1px solid rgba(44,85,232,0.12)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--sky)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Com sistema
                  </span>
                </div>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-mono)" }}>Tech Tsu — Dashboard</span>
              </div>

              <ResultTabs />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ BBLAW CASE STUDY ════════════════════════════════════ */}
      <section id="case" style={{ padding: "96px 40px", background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1.1fr",
            gap: 64, alignItems: "center",
          }} className="case-bblaw">

            {/* Copy — slide from left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={slideLeft}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{
                  padding: "4px 10px", border: "1px solid var(--border-m)", borderRadius: 999,
                  fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--muted)",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                }}>
                  Case ativo
                </div>
                <div style={{ height: 1, flex: 1, background: "var(--border)" }} />
              </div>

              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: E, delay: 0.1 }}
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700,
                    lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16,
                  }}
                >
                  Bezerra Borges —<br />
                  <span style={{ color: "var(--sky)" }}>Ecossistema digital</span><br />
                  <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300, fontStyle: "italic" }}>para advocacia internacional.</span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: E }}
                style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}
              >
                Escritório de advocacia especializado em advocacia patrimonial e internacionalização (offshore, sucessório, residências em 15+ jurisdições). Construímos um ecossistema completo: 7 aplicações em produção, 14 agentes de IA por jurisdição e plataforma de curso integrada. Tudo conversando, tudo sob medida.
              </motion.p>

              {/* Highlights — count up */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={staggerContainer(0.15)}
                style={{ display: "flex", gap: 32, marginBottom: 36, paddingBottom: 36, borderBottom: "1px solid var(--border)" }}
              >
                {bbHighlights.map(h => (
                  <motion.div
                    key={h.label}
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: E } } }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 26, fontWeight: 500, color: "var(--text)", lineHeight: 1 }}>
                      <Counter to={h.to} suffix={h.suffix} prefix={h.prefix} />
                    </div>
                    <div style={{ fontSize: 11, color: "var(--muted-2)", marginTop: 5 }}>{h.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Module tags — staggered pop */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer(0.07)}
                style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
              >
                {bbModules.map(m => (
                  <motion.span
                    key={m}
                    variants={tagPop}
                    whileHover={{ scale: 1.06, borderColor: "rgba(44,85,232,0.4)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 18 }}
                    style={{
                      padding: "4px 10px",
                      background: "rgba(44,85,232,0.06)",
                      border: "1px solid rgba(44,85,232,0.15)",
                      borderRadius: 4,
                      fontSize: 11, fontFamily: "var(--font-mono)",
                      color: "var(--sky)",
                      display: "inline-block",
                    }}
                  >
                    {m}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Foto da operação — slide from right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={slideRight}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              style={{
                position: "relative",
                border: "1px solid var(--border)", borderRadius: 12,
                overflow: "hidden", background: "var(--bg-3)",
                minHeight: 420,
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              }}
            >
              <img
                src="/midia/equipe-escritorio.jpg"
                alt="Time da Tech Tsu operando o sistema no escritório"
                loading="lazy"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* Degradê leve para a legenda respirar */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(25,27,33,0.88) 0%, rgba(25,27,33,0.25) 42%, rgba(25,27,33,0) 72%)",
              }} />
              <div style={{
                position: "absolute", left: 0, right: 0, bottom: 0,
                padding: "22px 24px",
              }}>
                <div style={{
                  fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--sky)",
                  letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8,
                }}>
                  Depois
                </div>
                <p style={{ fontSize: 15.5, color: "var(--text)", lineHeight: 1.6, maxWidth: 420 }}>
                  Um sistema só, aberto todo dia pelo time — com cliente, processo, prazo e
                  documento no mesmo lugar.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <style>{`
        @media (max-width: 900px) {
          .case-split   { grid-template-columns: 1fr !important; }
          .case-bblaw   { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 560px) {
          #problema      { padding: 64px 20px !important; }
          #case          { padding: 64px 20px !important; }
        }
      `}</style>
    </>
  )
}
