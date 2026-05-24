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
  { to: 4,   suffix: "+", prefix: "",    label: "Módulos entregues" },
  { to: 1,   suffix: "",  prefix: "",    label: "Escritório ativo"  },
  { to: 100, suffix: "%", prefix: "",    label: "Processo digital"  },
]

const bbModules = [
  "CRM jurídico", "Pipeline de leads", "Ordens de serviço",
  "Controle de documentos", "Propostas comerciais", "Permissões por perfil",
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
              style={{ background: "#0a0a0a" }}
            >
              {/* Label bar */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 20px",
                background: "rgba(255,60,60,0.06)",
                borderBottom: "1px solid rgba(255,60,60,0.12)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff4444", display: "inline-block" }}
                  />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,100,100,0.8)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Sem sistema
                  </span>
                </div>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-mono)" }}>WhatsApp + planilha</span>
              </div>

              {/* Messages */}
              <div style={{ padding: "20px 20px 8px" }}>
                <p style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                  Grupo "Operação Geral" — hoje
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {chaosMessages.map((m, i) => (
                    <motion.div
                      key={i}
                      variants={msgVariant}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        display: "flex", gap: 8, alignItems: "flex-start",
                        padding: "8px 10px",
                        background: m.alert ? "rgba(255,60,60,0.07)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${m.alert ? "rgba(255,60,60,0.18)" : "rgba(255,255,255,0.06)"}`,
                        borderRadius: 6,
                      }}
                    >
                      <div style={{
                        width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                        background: m.alert ? "rgba(255,60,60,0.25)" : "rgba(255,255,255,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 9, fontWeight: 700,
                        color: m.alert ? "#ff8888" : "rgba(255,255,255,0.4)",
                      }}>
                        {m.from.charAt(0)}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                          <span style={{ fontSize: 10, fontWeight: 700, color: m.alert ? "#ff8888" : "rgba(255,255,255,0.5)" }}>{m.from}</span>
                          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-mono)" }}>{m.time}</span>
                        </div>
                        <p style={{ fontSize: 11, color: m.alert ? "rgba(255,140,140,0.9)" : "rgba(255,255,255,0.45)", lineHeight: 1.4, margin: 0 }}>
                          {m.text}
                        </p>
                      </div>
                      {m.alert && (
                        <motion.svg
                          width="12" height="12" fill="none" viewBox="0 0 24 24"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                          style={{ flexShrink: 0, marginTop: 2 }}
                        >
                          <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#ff6666" strokeWidth="2" strokeLinecap="round"/>
                        </motion.svg>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Broken spreadsheet */}
              <div style={{ padding: "8px 20px 20px" }}>
                <p style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "16px 0 10px" }}>
                  clientes_v3_FINAL_usaressa.xlsx
                </p>
                <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
                  {chaosSheet.map((row, i) => (
                    <motion.div key={i} variants={rowVariant} style={{
                      display: "grid", gridTemplateColumns: "1.4fr 1fr 0.8fr 0.8fr",
                      background: i === 0 ? "rgba(255,255,255,0.04)" : (row.bad ? "rgba(255,60,60,0.04)" : "transparent"),
                      borderBottom: i < chaosSheet.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    }}>
                      {[row.c1, row.c2, row.c3, row.c4].map((cell, ci) => {
                        const isBad = row.bad && (cell === "???" || cell === "—" || cell === "venceu" || cell === "ninguém" || cell === "")
                        return (
                          <div key={ci} style={{
                            padding: "5px 8px", fontSize: i === 0 ? 9 : 10,
                            fontFamily: "var(--font-mono)", fontWeight: i === 0 ? 600 : 400,
                            color: i === 0 ? "rgba(255,255,255,0.3)" : isBad ? "rgba(255,80,80,0.7)" : "rgba(255,255,255,0.4)",
                            whiteSpace: "nowrap", overflow: "hidden",
                          }}>
                            {cell || "—"}
                          </div>
                        )
                      })}
                    </motion.div>
                  ))}
                </div>
                <div style={{
                  marginTop: 12, padding: "12px 14px",
                  background: "rgba(255,60,60,0.04)",
                  border: "1px solid rgba(255,60,60,0.1)",
                  borderRadius: 4, display: "flex", alignItems: "center", gap: 8,
                }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,80,80,0.5)" strokeWidth="1.5"/>
                    <path d="M12 8v4m0 4h.01" stroke="rgba(255,80,80,0.5)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontSize: 11, color: "rgba(255,100,100,0.6)", fontFamily: "var(--font-mono)" }}>
                    Sem métricas · Sem visibilidade · Sem controle
                  </span>
                </div>
              </div>
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
                background: "rgba(46,196,182,0.06)",
                borderBottom: "1px solid rgba(46,196,182,0.12)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--teal)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Com sistema
                  </span>
                </div>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-mono)" }}>Tech Tsu — Dashboard</span>
              </div>

              <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                {/* KPIs */}
                <motion.div
                  variants={staggerContainer(0.1)}
                  style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}
                >
                  {kpis.map(k => (
                    <motion.div
                      key={k.n}
                      variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: E } } }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(46,196,182,0.3)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      style={{
                        padding: "12px 14px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 500, color: "var(--text)", lineHeight: 1 }}>{k.n}</div>
                      <div style={{ fontSize: 10, color: "var(--muted-2)", marginTop: 4, lineHeight: 1.3 }}>{k.label}</div>
                      <div style={{ fontSize: 9, color: "var(--teal)", marginTop: 4, fontFamily: "var(--font-mono)" }}>{k.delta}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Pipeline bar */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: E } } }}
                  style={{
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border)", borderRadius: 6,
                  }}
                >
                  <p style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "var(--muted-2)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                    Pipeline
                  </p>
                  <div style={{ display: "flex", gap: 4, height: 36, alignItems: "flex-end" }}>
                    {[{c:6},{c:4},{c:3},{c:11}].map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08, ease: E }}
                        style={{
                          flex: 1, height: `${18 + s.c * 3}px`, borderRadius: "2px 2px 0 0",
                          background: i === 2 ? "var(--teal)" : "rgba(255,255,255,0.1)",
                          transformOrigin: "bottom",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Tasks */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: E } } }}
                  style={{
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border)", borderRadius: 6,
                  }}
                >
                  <p style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "var(--muted-2)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                    Tarefas do dia
                  </p>
                  {recentTasks.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.08, ease: E }}
                      style={{
                        display: "flex", alignItems: "center", gap: 8,
                        marginTop: i > 0 ? 8 : 0,
                        padding: t.prio ? "5px 7px" : "0",
                        background: t.prio ? "rgba(246,200,95,0.04)" : "transparent",
                        border: t.prio ? "1px solid rgba(246,200,95,0.1)" : "none",
                        borderRadius: t.prio ? 4 : 0,
                      }}
                    >
                      <div style={{
                        width: 14, height: 14, borderRadius: 3, flexShrink: 0,
                        background: t.done ? "var(--teal)" : "transparent",
                        border: `1px solid ${t.done ? "var(--teal)" : t.prio ? "rgba(246,200,95,0.4)" : "var(--border-m)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {t.done && (
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4l2 2 3-3" stroke="#070809" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>
                      <span style={{
                        fontSize: 10, lineHeight: 1.4,
                        color: t.done ? "var(--muted-2)" : t.prio ? "var(--amber)" : "var(--text)",
                        textDecoration: t.done ? "line-through" : "none",
                      }}>{t.label}</span>
                      {t.prio && !t.done && (
                        <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "var(--amber)", marginLeft: "auto", flexShrink: 0 }}>urgente</span>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                {/* All clear */}
                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, ease: E } } }}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "10px 14px",
                    background: "rgba(46,196,182,0.04)",
                    border: "1px solid rgba(46,196,182,0.12)",
                    borderRadius: 4,
                  }}
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: 10, color: "var(--teal)", fontFamily: "var(--font-mono)" }}>
                    Visibilidade total · Equipe alinhada · Nada perdido
                  </span>
                </motion.div>
              </div>
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
                  BBLAW —<br />
                  <span style={{ color: "var(--teal)" }}>ERP/CRM jurídico</span><br />
                  <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300, fontStyle: "italic" }}>sob medida.</span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: E }}
                style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}
              >
                Escritório que operava em planilhas e grupos de WhatsApp. Construímos uma plataforma central com CRM, OS, documentos, agenda e automações — em 6 semanas.
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
                    whileHover={{ scale: 1.06, borderColor: "rgba(46,196,182,0.4)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 18 }}
                    style={{
                      padding: "4px 10px",
                      background: "rgba(46,196,182,0.06)",
                      border: "1px solid rgba(46,196,182,0.15)",
                      borderRadius: 4,
                      fontSize: 11, fontFamily: "var(--font-mono)",
                      color: "var(--teal)",
                      display: "inline-block",
                    }}
                  >
                    {m}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Dashboard mock — slide from right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={slideRight}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              style={{
                border: "1px solid var(--border)", borderRadius: 10,
                overflow: "hidden", background: "var(--bg-3)",
              }}
            >
              {/* Window chrome */}
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "12px 16px", borderBottom: "1px solid var(--border)",
                background: "rgba(255,255,255,0.02)",
              }}>
                {["#ff5f57","#ffbd2e","var(--teal)"].map((c, i) => (
                  <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "inline-block" }} />
                ))}
                <div style={{
                  flex: 1, marginLeft: 8, height: 20, borderRadius: 3,
                  background: "rgba(255,255,255,0.04)",
                  display: "flex", alignItems: "center", padding: "0 8px",
                }}>
                  <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.2)" }}>bblaw.techtsu.com.br/dashboard</span>
                </div>
              </div>

              {/* App layout */}
              <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", minHeight: 360 }}>
                {/* Sidebar */}
                <div style={{
                  padding: "20px 12px", borderRight: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.01)",
                  display: "flex", flexDirection: "column", gap: 4,
                }}>
                  {["Dashboard","Clientes","Pipeline","Tarefas","Documentos","Agenda","Propostas"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06, ease: E }}
                      whileHover={i !== 0 ? { x: 3, color: "rgba(255,255,255,0.6)" } : undefined}
                      style={{
                        padding: "6px 8px", borderRadius: 4,
                        background: i === 0 ? "rgba(46,196,182,0.12)" : "transparent",
                        fontSize: 9,
                        color: i === 0 ? "var(--teal)" : "rgba(255,255,255,0.3)",
                        fontWeight: i === 0 ? 600 : 400,
                      }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                {/* Main content */}
                <div style={{ padding: 16 }}>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>Bom dia, Dr. Marcos</div>
                    <div style={{ fontSize: 9, color: "var(--muted-2)", fontFamily: "var(--font-mono)" }}>Seg, 19 maio 2025 · 3 tarefas urgentes</div>
                  </div>

                  {/* KPI mini */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginBottom: 12 }}>
                    {[{n:"24",l:"Clientes"},{n:"7",l:"OS abertas"},{n:"R$41k",l:"MRR"}].map((k, i) => (
                      <motion.div
                        key={k.l}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.2 + i * 0.08, ease: E }}
                        style={{
                          padding: "10px", background: "rgba(255,255,255,0.03)",
                          border: "1px solid var(--border)", borderRadius: 5,
                        }}
                      >
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 500, color: "var(--text)", lineHeight: 1 }}>{k.n}</div>
                        <div style={{ fontSize: 9, color: "var(--muted-2)", marginTop: 3 }}>{k.l}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* OS list */}
                  <div style={{
                    padding: "10px 12px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border)", borderRadius: 5, marginBottom: 8,
                  }}>
                    <p style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: "var(--muted-2)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                      Ordens de serviço abertas
                    </p>
                    {[
                      { id: "#312", client: "Empresa Alfa", status: "Em análise",   color: "var(--amber)" },
                      { id: "#310", client: "João F. Silva", status: "Documentação", color: "var(--teal)"  },
                      { id: "#308", client: "R. Fernanda",   status: "Concluída",    color: "rgba(255,255,255,0.2)" },
                    ].map((os, i) => (
                      <motion.div
                        key={os.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                        style={{
                          display: "flex", alignItems: "center", gap: 6,
                          paddingTop: 5, marginTop: 5,
                          borderTop: "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.2)", width: 28, flexShrink: 0 }}>{os.id}</span>
                        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", flex: 1 }}>{os.client}</span>
                        <span style={{ fontSize: 8, fontFamily: "var(--font-mono)", color: os.color, flexShrink: 0 }}>{os.status}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: E }}
                    style={{
                      height: 3, borderRadius: 999, transformOrigin: "left",
                      background: "linear-gradient(90deg, var(--teal) 0%, rgba(46,196,182,0.15) 60%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .case-split  { grid-template-columns: 1fr !important; }
          .case-bblaw  { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 560px) {
          #problema { padding: 64px 20px !important; }
          #case      { padding: 64px 20px !important; }
        }
      `}</style>
    </>
  )
}
