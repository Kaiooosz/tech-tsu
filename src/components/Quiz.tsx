"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileText, CalendarDays, Eye, Handshake,
  Stethoscope, Scale, Wrench, ShoppingCart, Megaphone, Factory, Rocket, GraduationCap,
  Home, Truck, ChefHat, Sparkles, HardHat, MoreHorizontal,
  Users, LayoutGrid, ShoppingBag, Package, KeyRound, Workflow,
  MessageCircle, Bot, BrainCircuit, BarChart3, Cable, ClipboardList,
  FolderOpen, Globe, Smartphone, CalendarClock, ArrowRight, ArrowLeft,
  Send, Loader2, Check, Laptop, AlertCircle, Clock, Flame, Search,
  TrendingUp, Info,
} from "lucide-react"

/* ════════════════════════════════════════════════════════════════
   Data
   ════════════════════════════════════════════════════════════════ */

const OBJETIVOS = [
  { id: "orcamento", Icon: FileText, label: "Solicitar Orçamento", desc: "Quero valores e escopo do projeto" },
  { id: "reuniao", Icon: CalendarDays, label: "Agendar Reunião", desc: "Falar com um especialista Tech TSU" },
  { id: "conhecer", Icon: Eye, label: "Conhecer os Serviços", desc: "Entender o que vocês oferecem" },
  { id: "parceria", Icon: Handshake, label: "Parceria / Indicação", desc: "Indicar clientes ou ser parceiro" },
] as const

const SEGMENTOS = [
  { id: "clinica", Icon: Stethoscope, label: "Clínica / Saúde" },
  { id: "juridico", Icon: Scale, label: "Jurídico / Contábil" },
  { id: "b2b", Icon: Wrench, label: "Serviços B2B / Campo" },
  { id: "varejo", Icon: ShoppingCart, label: "E-commerce / Varejo" },
  { id: "agencia", Icon: Megaphone, label: "Agência / Marketing" },
  { id: "industria", Icon: Factory, label: "Indústria / Distribuição" },
  { id: "startup", Icon: Rocket, label: "Startup / Tech / SaaS" },
  { id: "educacao", Icon: GraduationCap, label: "Educação / Cursos" },
  { id: "imobiliaria", Icon: Home, label: "Imobiliária" },
  { id: "logistica", Icon: Truck, label: "Logística / Transporte" },
  { id: "food", Icon: ChefHat, label: "Restaurante / Food" },
  { id: "beleza", Icon: Sparkles, label: "Beleza / Estética / Fitness" },
  { id: "construcao", Icon: HardHat, label: "Construção / Engenharia" },
  { id: "outro_seg", Icon: MoreHorizontal, label: "Outro", outro: true },
] as const

const SERVICOS = [
  { id: "crm", Icon: Users, label: "CRM / Pipeline de Vendas", desc: "Gestão de clientes e funil" },
  { id: "erp", Icon: LayoutGrid, label: "ERP / Sistema Operacional", desc: "Plataforma central da operação" },
  { id: "ecom", Icon: ShoppingBag, label: "E-commerce / Loja Virtual", desc: "Venda online com gestão integrada" },
  { id: "estoque", Icon: Package, label: "Controle de Estoque", desc: "Entrada, saída e inventário" },
  { id: "licencas", Icon: KeyRound, label: "Gestão de Licenças/Contratos", desc: "Acessos, renovações e prazos" },
  { id: "automacao", Icon: Workflow, label: "Automação de Processos", desc: "Fluxos, aprovações e tarefas" },
  { id: "whatsapp", Icon: MessageCircle, label: "Automação WhatsApp", desc: "Mensagens e follow-up automático" },
  { id: "ia_externo", Icon: Bot, label: "Agente de IA Externo", desc: "Atendimento e triagem 24/7" },
  { id: "ia_interno", Icon: BrainCircuit, label: "Agente de IA Interno", desc: "Consultas internas com dados reais" },
  { id: "dashboard", Icon: BarChart3, label: "Dashboard Executivo", desc: "KPIs e métricas em tempo real" },
  { id: "integracao", Icon: Cable, label: "Integrações API / MCP", desc: "Conectar suas ferramentas" },
  { id: "os", Icon: ClipboardList, label: "Ordens de Serviço", desc: "OS, campo e manutenção" },
  { id: "documentos", Icon: FolderOpen, label: "Gestão Documental", desc: "Documentos, versões e busca" },
  { id: "site", Icon: Globe, label: "Site / App Web", desc: "Presença digital e aplicações" },
  { id: "mobile", Icon: Smartphone, label: "Aplicativo Mobile", desc: "iOS e Android nativo ou híbrido" },
  { id: "agendamento", Icon: CalendarClock, label: "Sistema de Agendamento", desc: "Horários, salas e profissionais" },
  { id: "outro_svc", Icon: MoreHorizontal, label: "Outro", desc: "Descreva abaixo", outro: true },
] as const

const FERRAMENTAS = [
  { id: "planilha", label: "Planilha Excel / Google Sheets" },
  { id: "legado", label: "Sistema legado / ERP antigo" },
  { id: "whatsapp", label: "WhatsApp + anotações" },
  { id: "mix", label: "Mistura de várias ferramentas" },
  { id: "nada", label: "Nada ainda — operação manual" },
  { id: "outro_ferr", label: "Outro", outro: true },
] as const

const GARGALOS = [
  { id: "dados", label: "Dados espalhados / desorganizados" },
  { id: "manual", label: "Processos 100% manuais" },
  { id: "visibilidade", label: "Sem visibilidade de métricas" },
  { id: "atendimento", label: "Atendimento lento ao cliente" },
  { id: "retrabalho", label: "Retrabalho constante" },
  { id: "integracao", label: "Ferramentas que não integram" },
  { id: "equipe", label: "Equipe desalinhada" },
  { id: "relatorios", label: "Relatórios demoram dias" },
  { id: "leads", label: "Leads perdidos sem follow-up" },
  { id: "escala", label: "Escalabilidade travada" },
  { id: "custo", label: "Custo operacional alto" },
  { id: "dependencia", label: "Dependência de pessoas-chave" },
] as const

const URGENCIAS = [
  { id: "urgente", Icon: Flame, label: "Urgente", desc: "Preciso agora" },
  { id: "1-3m", Icon: Clock, label: "1–3 meses", desc: "Curto prazo" },
  { id: "3-6m", Icon: CalendarDays, label: "3–6 meses", desc: "Planejando" },
  { id: "explorando", Icon: Search, label: "Explorando", desc: "Pesquisando" },
] as const

const TAMANHOS = [
  { id: "1-5", label: "1–5 pessoas" },
  { id: "6-20", label: "6–20 pessoas" },
  { id: "21-50", label: "21–50 pessoas" },
  { id: "51-200", label: "51–200 pessoas" },
  { id: "200+", label: "200+ pessoas" },
] as const

const FATURAMENTOS = [
  { id: "ate-30k", label: "Até R$ 30k/mês" },
  { id: "30-100k", label: "R$ 30k–100k/mês" },
  { id: "100-300k", label: "R$ 100k–300k/mês" },
  { id: "300k-1M", label: "R$ 300k–1M/mês" },
  { id: "1M+", label: "Acima de R$ 1M/mês" },
  { id: "nd", label: "Prefiro não informar" },
] as const

const CARGOS = ["CEO / Sócio / Fundador", "Diretor", "Gerente", "Coordenador / Analista", "TI / Desenvolvedor", "Outro"]
const SETORES = ["Saúde", "Jurídico", "Contabilidade", "Educação", "Varejo / E-commerce", "Serviços B2B", "Indústria", "Tecnologia / SaaS", "Imobiliário", "Logística", "Alimentação / Food", "Beleza / Fitness", "Construção", "Outro"]
const FONTES = ["Google / Pesquisa", "Instagram", "LinkedIn", "Indicação de amigo", "WhatsApp", "YouTube", "Evento / Feira", "Outro"]

const STEPS = [
  { id: "obj", n: "1", lbl: "O que você está buscando?", sub: "Isso nos ajuda a direcionar o especialista certo para o seu caso." },
  { id: "seg", n: "2", lbl: "Qual é o seu segmento de atuação?", sub: "Cada setor tem suas particularidades — queremos entender a sua realidade." },
  { id: "svc", n: "3", lbl: "Que soluções você precisa?", sub: "Selecione tudo que faz sentido para o seu momento atual." },
  { id: "op",  n: "4", lbl: "Como é sua operação hoje?", sub: "Entender o cenário atual nos ajuda a montar a solução ideal." },
  { id: "emp", n: "5", lbl: "Sobre sua empresa", sub: "Para montar uma proposta adequada ao seu porte e momento." },
  { id: "cnt", n: "6", lbl: "Seus dados de contato", sub: "Nossa equipe analisa seu perfil e entra em contato em até 24 horas úteis." },
] as const

/* ════════════════════════════════════════════════════════════════
   Types
   ════════════════════════════════════════════════════════════════ */

type FormData = {
  objetivo: string
  segmento: string
  segmentoOutro: string
  servicos: string[]
  servicosOutro: string
  ferramentaAtual: string
  ferramentaOutro: string
  gargalos: string[]
  urgencia: string
  tamanho: string
  faturamento: string
  cargo: string
  setor: string
  nome: string
  email: string
  whatsapp: string
  empresa: string
  site: string
  fonte: string
  mensagem: string
}

const INITIAL: FormData = {
  objetivo: "", segmento: "", segmentoOutro: "",
  servicos: [], servicosOutro: "",
  ferramentaAtual: "", ferramentaOutro: "",
  gargalos: [], urgencia: "",
  tamanho: "", faturamento: "", cargo: "", setor: "",
  nome: "", email: "", whatsapp: "",
  empresa: "", site: "", fonte: "", mensagem: "",
}

/* ════════════════════════════════════════════════════════════════
   Styles (inline objects - reusables)
   ════════════════════════════════════════════════════════════════ */

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 13px",
  background: "var(--bg-3)", border: "1px solid var(--border-m)",
  borderRadius: 6, color: "var(--text)",
  fontSize: 13, outline: "none", fontFamily: "inherit",
  transition: "border 0.18s, box-shadow 0.18s",
}

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 10, color: "var(--muted-2)",
  fontFamily: "var(--font-mono)", marginBottom: 5,
  letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
}

const sectionLabelStyle: React.CSSProperties = {
  fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.07em",
  color: "var(--muted)", fontWeight: 600, marginBottom: 10,
  display: "flex", alignItems: "center", gap: 6,
}

/* ════════════════════════════════════════════════════════════════
   Subcomponents
   ════════════════════════════════════════════════════════════════ */

function ProgressBar({ step }: { step: number }) {
  return (
    <div style={{ display: "flex", gap: 5, marginBottom: 26 }}>
      {STEPS.map((_, i) => (
        <div key={i} style={{
          flex: 1, height: 3, borderRadius: 3,
          background: i < step ? "var(--teal)" : i === step ? "rgba(46,196,182,0.5)" : "rgba(255,255,255,0.08)",
          transition: "background 0.35s",
        }} />
      ))}
    </div>
  )
}

function OptionCard({
  selected, onClick, Icon, label, desc, dashed = false,
}: {
  selected: boolean; onClick: () => void
  Icon?: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>
  label: string; desc?: string; dashed?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex", alignItems: "flex-start", gap: 10,
        padding: "13px 12px", borderRadius: 10,
        border: dashed
          ? `1.5px dashed ${selected ? "var(--teal)" : "var(--border-m)"}`
          : `1px solid ${selected ? "var(--teal)" : "var(--border-m)"}`,
        background: selected ? "rgba(46,196,182,0.06)" : "var(--bg-3)",
        cursor: "pointer", fontFamily: "inherit", textAlign: "left",
        transition: "border 0.15s, background 0.15s, transform 0.1s",
        width: "100%", minHeight: 0,
      }}
      onMouseEnter={e => {
        if (!selected) (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.22)"
      }}
      onMouseLeave={e => {
        if (!selected) (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-m)"
      }}
    >
      {Icon && (
        <Icon size={18} strokeWidth={1.6}
          color={selected ? "var(--teal)" : "var(--muted)"}
        />
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: selected ? "var(--teal)" : "var(--text)", lineHeight: 1.3 }}>
          {label}
        </div>
        {desc && (
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3, lineHeight: 1.4 }}>{desc}</div>
        )}
      </div>
    </button>
  )
}

function Chip({ selected, onClick, label }: { selected: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "7px 13px", borderRadius: 20,
        border: `1px solid ${selected ? "var(--teal)" : "var(--border-m)"}`,
        background: selected ? "rgba(46,196,182,0.07)" : "var(--bg-3)",
        color: selected ? "var(--teal)" : "var(--muted)",
        fontSize: 12, fontWeight: selected ? 500 : 400,
        cursor: "pointer", fontFamily: "inherit",
        transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  )
}

function UrgencyCard({
  selected, onClick, Icon, label, desc,
}: {
  selected: boolean; onClick: () => void
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>
  label: string; desc: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: selected ? "rgba(46,196,182,0.07)" : "var(--bg-3)",
        border: `1px solid ${selected ? "var(--teal)" : "var(--border-m)"}`,
        borderRadius: 10, padding: "12px 8px",
        cursor: "pointer", textAlign: "center",
        fontFamily: "inherit", transition: "all 0.15s",
      }}
    >
      <Icon size={22} strokeWidth={1.6} color={selected ? "var(--teal)" : "var(--muted)"} />
      <div style={{ fontSize: 12, fontWeight: 600, color: selected ? "var(--teal)" : "var(--text)", marginTop: 5, marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: 10, color: "var(--muted)", lineHeight: 1.4 }}>{desc}</div>
    </button>
  )
}

/* ════════════════════════════════════════════════════════════════
   Main Quiz Component
   ════════════════════════════════════════════════════════════════ */

export function Quiz() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(INITIAL)
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [score, setScore] = useState<{ score: string; pts: number } | null>(null)
  const [error, setError] = useState("")

  const set = <K extends keyof FormData>(key: K, val: FormData[K]) =>
    setData(d => ({ ...d, [key]: val }))

  const toggleArr = (key: "servicos" | "gargalos", id: string) => {
    setData(d => {
      const arr = d[key]
      return { ...d, [key]: arr.includes(id) ? arr.filter(x => x !== id) : [...arr, id] }
    })
  }

  const canContinue = (): boolean => {
    const s = STEPS[step]?.id
    if (s === "obj") return !!data.objetivo
    if (s === "seg") return !!data.segmento && (data.segmento !== "outro_seg" || data.segmentoOutro.trim().length > 0)
    if (s === "svc") return data.servicos.length > 0 && (!data.servicos.includes("outro_svc") || data.servicosOutro.trim().length > 0)
    if (s === "op")  return !!data.ferramentaAtual && !!data.urgencia && (data.ferramentaAtual !== "outro_ferr" || data.ferramentaOutro.trim().length > 0)
    if (s === "emp") return !!data.tamanho && !!data.cargo
    if (s === "cnt") return data.nome.trim().length > 0 && data.email.trim().length > 0 && data.whatsapp.trim().length > 0
    return false
  }

  const next = () => { if (canContinue()) setStep(s => s + 1) }
  const back = () => { if (step > 0) setStep(s => s - 1) }

  async function submit() {
    setSending(true)
    setError("")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Erro")
      const json = await res.json()
      setScore({ score: json.score, pts: json.pts })
      setDone(true)
    } catch {
      setError("Algo deu errado. Tente novamente em alguns segundos.")
    } finally {
      setSending(false)
    }
  }

  if (done) return <SuccessScreen data={data} score={score} onReset={() => { setData(INITIAL); setStep(0); setDone(false); setScore(null) }} />

  const current = STEPS[step]

  return (
    <div>
      <ProgressBar step={step} />

      <p style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", color: "var(--muted-2)", letterSpacing: "0.09em", textTransform: "uppercase", fontWeight: 500, marginBottom: 5 }}>
        Etapa {current.n} de {STEPS.length}
      </p>
      <h3 style={{ fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700, lineHeight: 1.3, color: "var(--text)", marginBottom: 6 }}>
        {current.lbl}
      </h3>
      <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 22 }}>
        {current.sub}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -14 }}
          transition={{ duration: 0.2 }}
        >
          {/* ── Step 1: Objetivo ───────────────────────────── */}
          {current.id === "obj" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="quiz-grid-2">
              {OBJETIVOS.map(o => (
                <OptionCard key={o.id} selected={data.objetivo === o.id} onClick={() => set("objetivo", o.id)} Icon={o.Icon} label={o.label} desc={o.desc} />
              ))}
            </div>
          )}

          {/* ── Step 2: Segmento ───────────────────────────── */}
          {current.id === "seg" && (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }} className="quiz-grid-3">
                {SEGMENTOS.map(o => (
                  <OptionCard key={o.id} selected={data.segmento === o.id} onClick={() => set("segmento", o.id)} Icon={o.Icon} label={o.label} dashed={o.id === "outro_seg"} />
                ))}
              </div>
              {data.segmento === "outro_seg" && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 10 }}>
                  <input type="text" placeholder="Descreva seu segmento..." maxLength={80}
                    value={data.segmentoOutro} onChange={e => set("segmentoOutro", e.target.value)}
                    style={{ ...inputStyle, borderColor: "var(--teal)" }} />
                </motion.div>
              )}
            </>
          )}

          {/* ── Step 3: Serviços ───────────────────────────── */}
          {current.id === "svc" && (
            <>
              <div style={{ fontSize: 11, color: "var(--muted)", display: "flex", alignItems: "center", gap: 5, marginBottom: 12 }}>
                <Info size={13} color="var(--teal)" />
                Pode selecionar mais de um
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }} className="quiz-grid-3">
                {SERVICOS.map(o => (
                  <OptionCard key={o.id} selected={data.servicos.includes(o.id)} onClick={() => toggleArr("servicos", o.id)} Icon={o.Icon} label={o.label} desc={o.desc} dashed={o.id === "outro_svc"} />
                ))}
              </div>
              {data.servicos.includes("outro_svc") && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 10 }}>
                  <input type="text" placeholder="Descreva o serviço que precisa..." maxLength={120}
                    value={data.servicosOutro} onChange={e => set("servicosOutro", e.target.value)}
                    style={{ ...inputStyle, borderColor: "var(--teal)" }} />
                </motion.div>
              )}
            </>
          )}

          {/* ── Step 4: Operação ───────────────────────────── */}
          {current.id === "op" && (
            <>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}>
                  <Laptop size={13} color="var(--teal)" />
                  Qual ferramenta sua equipe usa hoje?
                  <span style={{ color: "var(--teal)" }}>*</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {FERRAMENTAS.map(f => (
                    <Chip key={f.id} selected={data.ferramentaAtual === f.id} onClick={() => set("ferramentaAtual", f.id)} label={f.label} />
                  ))}
                </div>
                {data.ferramentaAtual === "outro_ferr" && (
                  <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 10 }}>
                    <input type="text" placeholder="Qual ferramenta?" maxLength={80}
                      value={data.ferramentaOutro} onChange={e => set("ferramentaOutro", e.target.value)}
                      style={{ ...inputStyle, borderColor: "var(--teal)" }} />
                  </motion.div>
                )}
              </div>

              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}>
                  <AlertCircle size={13} color="var(--teal)" />
                  Maiores gargalos atuais
                  <span style={{ color: "var(--muted)", fontWeight: 400, fontSize: 10, textTransform: "none", letterSpacing: 0 }}>— marque todos que se aplicam</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {GARGALOS.map(g => (
                    <Chip key={g.id} selected={data.gargalos.includes(g.id)} onClick={() => toggleArr("gargalos", g.id)} label={g.label} />
                  ))}
                </div>
              </div>

              <div>
                <div style={sectionLabelStyle}>
                  <Clock size={13} color="var(--teal)" />
                  Urgência do projeto
                  <span style={{ color: "var(--teal)" }}>*</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }} className="quiz-grid-4">
                  {URGENCIAS.map(u => (
                    <UrgencyCard key={u.id} selected={data.urgencia === u.id} onClick={() => set("urgencia", u.id)} Icon={u.Icon} label={u.label} desc={u.desc} />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ── Step 5: Empresa ────────────────────────────── */}
          {current.id === "emp" && (
            <>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}>
                  <Users size={13} color="var(--teal)" />
                  Tamanho da equipe <span style={{ color: "var(--teal)" }}>*</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {TAMANHOS.map(t => (
                    <Chip key={t.id} selected={data.tamanho === t.id} onClick={() => set("tamanho", t.id)} label={t.label} />
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}>
                  <TrendingUp size={13} color="var(--teal)" />
                  Faturamento mensal aproximado
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {FATURAMENTOS.map(f => (
                    <Chip key={f.id} selected={data.faturamento === f.id} onClick={() => set("faturamento", f.id)} label={f.label} />
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }} className="quiz-grid-2">
                <div>
                  <label style={labelStyle}>Seu cargo / função <span style={{ color: "var(--teal)" }}>*</span></label>
                  <select value={data.cargo} onChange={e => set("cargo", e.target.value)}
                    style={inputStyle}>
                    <option value="">Selecione...</option>
                    {CARGOS.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Setor principal</label>
                  <select value={data.setor} onChange={e => set("setor", e.target.value)}
                    style={inputStyle}>
                    <option value="">Selecione...</option>
                    {SETORES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </>
          )}

          {/* ── Step 6: Contato ────────────────────────────── */}
          {current.id === "cnt" && (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, marginBottom: 11 }} className="quiz-grid-2">
                <div>
                  <label style={labelStyle}>Nome completo <span style={{ color: "var(--teal)" }}>*</span></label>
                  <input type="text" placeholder="João Silva" value={data.nome} onChange={e => set("nome", e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Empresa</label>
                  <input type="text" placeholder="Nome da empresa" value={data.empresa} onChange={e => set("empresa", e.target.value)} style={inputStyle} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, marginBottom: 11 }} className="quiz-grid-2">
                <div>
                  <label style={labelStyle}>E-mail <span style={{ color: "var(--teal)" }}>*</span></label>
                  <input type="email" placeholder="joao@empresa.com" value={data.email} onChange={e => set("email", e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>WhatsApp <span style={{ color: "var(--teal)" }}>*</span></label>
                  <input type="tel" placeholder="(11) 99999-9999" value={data.whatsapp} onChange={e => set("whatsapp", e.target.value)} style={inputStyle} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, marginBottom: 11 }} className="quiz-grid-2">
                <div>
                  <label style={labelStyle}>Site da empresa</label>
                  <input type="url" placeholder="https://suaempresa.com.br" value={data.site} onChange={e => set("site", e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Como nos encontrou?</label>
                  <select value={data.fonte} onChange={e => set("fonte", e.target.value)} style={inputStyle}>
                    <option value="">Selecione...</option>
                    {FONTES.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label style={labelStyle}>Mensagem / Contexto adicional</label>
                <textarea placeholder="Descreva brevemente o que precisa, qual problema quer resolver ou qualquer dúvida..."
                  value={data.mensagem} onChange={e => set("mensagem", e.target.value)}
                  style={{ ...inputStyle, minHeight: 80, resize: "vertical" }} />
              </div>
              {error && <p style={{ fontSize: 12, color: "#ff7070", marginTop: 12 }}>{error}</p>}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Nav buttons ───────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
        {step > 0 ? (
          <button type="button" onClick={back}
            style={{
              padding: "11px 15px", background: "transparent",
              border: "1px solid var(--border-m)", color: "var(--muted)",
              fontSize: 13, borderRadius: 9, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 6,
              fontFamily: "inherit", transition: "all 0.16s",
            }}
          >
            <ArrowLeft size={14} /> Voltar
          </button>
        ) : <span />}

        <button
          type="button"
          disabled={!canContinue() || sending}
          onClick={step < STEPS.length - 1 ? next : submit}
          style={{
            flex: 1, padding: "12px", borderRadius: 9, border: "none",
            background: canContinue() && !sending ? "var(--teal)" : "rgba(255,255,255,0.08)",
            color: canContinue() && !sending ? "#070809" : "var(--muted-2)",
            fontSize: 13.5, fontWeight: 700,
            cursor: canContinue() && !sending ? "pointer" : "not-allowed",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
            fontFamily: "inherit", transition: "opacity 0.18s, transform 0.1s",
          }}
        >
          {sending ? (
            <>Enviando... <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /></>
          ) : step < STEPS.length - 1 ? (
            <>Continuar <ArrowRight size={14} /></>
          ) : (
            <>Enviar solicitação <Send size={14} /></>
          )}
        </button>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 540px) {
          .quiz-grid-2 { grid-template-columns: 1fr !important; }
          .quiz-grid-3 { grid-template-columns: 1fr 1fr !important; }
          .quiz-grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════
   Success Screen
   ════════════════════════════════════════════════════════════════ */

function SuccessScreen({
  data, score, onReset,
}: {
  data: FormData; score: { score: string; pts: number } | null; onReset: () => void
}) {
  const scoreLabel = score?.score === "hot" ? "Lead Quente" : score?.score === "warm" ? "Lead Promissor" : "Lead em Nutrição"
  const scoreOpacity = score?.score === "hot" ? 1 : score?.score === "warm" ? 0.7 : 0.4

  const labels: Record<string, string> = {
    orcamento: "Solicitar Orçamento", reuniao: "Agendar Reunião", conhecer: "Conhecer Serviços", parceria: "Parceria",
    urgente: "Urgente", "1-3m": "1–3 meses", "3-6m": "3–6 meses", explorando: "Explorando",
  }
  const segMap = Object.fromEntries(SEGMENTOS.map(s => [s.id, s.label]))
  const svcMap = Object.fromEntries(SERVICOS.map(s => [s.id, s.label]))
  const ferrMap = Object.fromEntries(FERRAMENTAS.map(f => [f.id, f.label]))
  const tamMap = Object.fromEntries(TAMANHOS.map(t => [t.id, t.label]))
  const fatMap = Object.fromEntries(FATURAMENTOS.map(f => [f.id, f.label]))

  const segDisplay = data.segmento === "outro_seg" ? data.segmentoOutro : segMap[data.segmento]
  const svcDisplay = data.servicos.map(id => id === "outro_svc" ? data.servicosOutro : svcMap[id]).filter(Boolean).join(", ")
  const ferrDisplay = data.ferramentaAtual === "outro_ferr" ? data.ferramentaOutro : ferrMap[data.ferramentaAtual]

  const rows: [string, string | undefined][] = [
    ["Objetivo", labels[data.objetivo]],
    ["Segmento", segDisplay],
    ["Serviços de interesse", svcDisplay],
    ["Ferramenta atual", ferrDisplay],
    ["Urgência", labels[data.urgencia]],
    ["Tamanho da equipe", tamMap[data.tamanho]],
    ["Faturamento mensal", fatMap[data.faturamento]],
    ["Cargo", data.cargo],
    ["Empresa", data.empresa],
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", padding: "8px 0" }}>
      <div style={{
        width: 64, height: 64, borderRadius: "50%",
        background: "rgba(46,196,182,0.1)", border: "2px solid var(--teal)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 16px", boxShadow: "0 0 32px rgba(46,196,182,0.15)",
      }}>
        <Check size={28} strokeWidth={2.5} color="var(--teal)" />
      </div>

      {score && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          padding: "6px 14px", borderRadius: 20, marginBottom: 18,
          fontSize: 12, fontWeight: 600,
          background: `rgba(46,196,182,${0.08 * scoreOpacity + 0.04})`,
          border: `1px solid rgba(46,196,182,${0.25 * scoreOpacity + 0.1})`,
          color: scoreOpacity > 0.5 ? "var(--teal)" : "var(--muted)",
          fontFamily: "var(--font-mono)", letterSpacing: "0.05em",
        }}>
          {scoreLabel} · {score.pts}pts
        </div>
      )}

      <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
        Solicitação enviada!
      </h3>
      <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 22px" }}>
        Nossa equipe vai analisar seu perfil e entrar em contato em até <strong style={{ color: "var(--text)" }}>24 horas úteis</strong> pelo WhatsApp ou e-mail informado.
      </p>

      <div style={{ background: "var(--bg-3)", border: "1px solid var(--border-m)", borderRadius: 12, padding: "16px 18px", textAlign: "left" }}>
        <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--muted-2)", fontWeight: 600, marginBottom: 10 }}>
          Resumo do seu perfil
        </p>
        {rows.filter(([, v]) => v && v.trim().length > 0).map(([label, value]) => (
          <div key={label} style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
            padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 12.5,
          }}>
            <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 100 }}>{label}</span>
            <span style={{ color: "var(--text)", fontWeight: 500, textAlign: "right" }}>{value}</span>
          </div>
        ))}
      </div>

      <button type="button" onClick={onReset}
        style={{
          marginTop: 18, padding: "11px 22px",
          background: "transparent", border: "1px solid var(--border-m)",
          color: "var(--muted)", fontSize: 13, borderRadius: 9,
          cursor: "pointer", fontFamily: "inherit",
        }}
      >
        Fazer nova solicitação
      </button>
    </motion.div>
  )
}
