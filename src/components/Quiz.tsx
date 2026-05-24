"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileText, CalendarDays, Eye, Handshake,
  Stethoscope, Scale, Wrench, ShoppingCart, Megaphone, Factory, Rocket, GraduationCap,
  Home, Truck, ChefHat, Sparkles, HardHat, MoreHorizontal,
  Brain, Dumbbell, PawPrint, PartyPopper, HeartHandshake, Building2,
  Users, LayoutGrid, ShoppingBag, Package, KeyRound, Workflow,
  MessageCircle, Bot, BrainCircuit, BarChart3, Cable, ClipboardList,
  FolderOpen, Globe, Smartphone, CalendarClock, Mic, Receipt, PieChart, Store,
  ArrowRight, ArrowLeft, Send, Loader2, Check, Laptop, AlertCircle, Clock,
  Flame, Search, TrendingUp, Info, Filter, PenLine, TrendingDown, ThumbsUp,
  FileSearch, Target, Wallet, Gauge, Cpu,
} from "lucide-react"

/* ════════════════════════════════════════════════════════════════
   Step 1 — Objetivo
   ════════════════════════════════════════════════════════════════ */
const OBJETIVOS = [
  { id: "orcamento", Icon: FileText, label: "Solicitar Orçamento", desc: "Quero valores e escopo do projeto" },
  { id: "reuniao", Icon: CalendarDays, label: "Agendar Reunião", desc: "Falar com um especialista Tech TSU" },
  { id: "conhecer", Icon: Eye, label: "Conhecer os Serviços", desc: "Entender o que vocês oferecem" },
  { id: "parceria", Icon: Handshake, label: "Parceria / Indicação", desc: "Indicar clientes ou ser parceiro" },
] as const

/* ════════════════════════════════════════════════════════════════
   Step 2 — Segmento (20 opções)
   ════════════════════════════════════════════════════════════════ */
const SEGMENTOS = [
  { id: "clinica", Icon: Stethoscope, label: "Clínica / Saúde" },
  { id: "saude_mental", Icon: Brain, label: "Saúde Mental / Psicologia" },
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
  { id: "beleza", Icon: Sparkles, label: "Beleza / Estética" },
  { id: "fitness", Icon: Dumbbell, label: "Academia / Fitness" },
  { id: "construcao", Icon: HardHat, label: "Construção / Engenharia" },
  { id: "pet", Icon: PawPrint, label: "Pet / Veterinária" },
  { id: "eventos", Icon: PartyPopper, label: "Eventos / Turismo" },
  { id: "ong", Icon: HeartHandshake, label: "ONG / Religioso" },
  { id: "cooperativa", Icon: Building2, label: "Cooperativa / Sindicato" },
  { id: "outro_seg", Icon: MoreHorizontal, label: "Outro" },
] as const

/* ════════════════════════════════════════════════════════════════
   Step 3 — Serviços (21 opções, multi)
   ════════════════════════════════════════════════════════════════ */
const SERVICOS = [
  { id: "crm", Icon: Users, label: "CRM / Pipeline de Vendas", desc: "Gestão de clientes e funil" },
  { id: "erp", Icon: LayoutGrid, label: "ERP / Sistema Operacional", desc: "Plataforma central da operação" },
  { id: "ecom", Icon: ShoppingBag, label: "E-commerce / Loja Virtual", desc: "Venda online integrada" },
  { id: "estoque", Icon: Package, label: "Controle de Estoque", desc: "Entrada, saída e inventário" },
  { id: "licencas", Icon: KeyRound, label: "Gestão de Licenças/Contratos", desc: "Acessos, renovações e prazos" },
  { id: "automacao", Icon: Workflow, label: "Automação de Processos", desc: "Fluxos, aprovações e tarefas" },
  { id: "whatsapp", Icon: MessageCircle, label: "Automação WhatsApp", desc: "Mensagens e follow-up automático" },
  { id: "ia_externo", Icon: Bot, label: "Agente de IA Externo", desc: "Atendimento e triagem 24/7" },
  { id: "ia_interno", Icon: BrainCircuit, label: "Agente de IA Interno", desc: "Consultas internas com dados" },
  { id: "voicebot", Icon: Mic, label: "Voicebot / Voz por IA", desc: "Atendimento e ligações automáticas" },
  { id: "dashboard", Icon: BarChart3, label: "Dashboard Executivo", desc: "KPIs em tempo real" },
  { id: "bi", Icon: PieChart, label: "BI Customizado / Análise", desc: "Relatórios e exploração de dados" },
  { id: "integracao", Icon: Cable, label: "Integrações API / MCP", desc: "Conectar suas ferramentas" },
  { id: "os", Icon: ClipboardList, label: "Ordens de Serviço", desc: "OS, campo e manutenção" },
  { id: "documentos", Icon: FolderOpen, label: "Gestão Documental", desc: "Documentos, versões e busca" },
  { id: "site", Icon: Globe, label: "Site / App Web", desc: "Presença digital" },
  { id: "mobile", Icon: Smartphone, label: "Aplicativo Mobile", desc: "iOS e Android" },
  { id: "agendamento", Icon: CalendarClock, label: "Sistema de Agendamento", desc: "Horários e profissionais" },
  { id: "cobranca", Icon: Receipt, label: "Cobrança / Recorrência", desc: "Boletos, Pix e assinatura" },
  { id: "marketplace", Icon: Store, label: "Marketplace Multi-vendor", desc: "Vários vendedores em uma plataforma" },
  { id: "outro_svc", Icon: MoreHorizontal, label: "Outro", desc: "Descreva abaixo" },
] as const

/* ════════════════════════════════════════════════════════════════
   Step 4 — Operação Atual
   ════════════════════════════════════════════════════════════════ */
const FERRAMENTAS = [
  { id: "planilha", label: "Planilha Excel / Google Sheets" },
  { id: "legado", label: "Sistema legado / ERP antigo" },
  { id: "whatsapp", label: "WhatsApp + anotações" },
  { id: "mix", label: "Mistura de várias ferramentas" },
  { id: "nada", label: "Nada ainda — operação manual" },
  { id: "outro_ferr", label: "Outro" },
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
  { id: "saas_alto", label: "Custos altos com SaaS genéricos" },
  { id: "sobrecarga", label: "Equipe sobrecarregada" },
  { id: "decisao", label: "Decisões no feeling, sem dado" },
] as const

const URGENCIAS = [
  { id: "urgente", Icon: Flame, label: "Urgente", desc: "Preciso agora" },
  { id: "1-3m", Icon: Clock, label: "1–3 meses", desc: "Curto prazo" },
  { id: "3-6m", Icon: CalendarDays, label: "3–6 meses", desc: "Planejando" },
  { id: "explorando", Icon: Search, label: "Explorando", desc: "Pesquisando" },
] as const

/* ════════════════════════════════════════════════════════════════
   Step 5 — Stack Tecnológico Atual (multi)
   ════════════════════════════════════════════════════════════════ */
const STACK = [
  { id: "crm_externo", label: "CRM (HubSpot, RD, Pipedrive, Salesforce)" },
  { id: "erp_externo", label: "ERP (Bling, Tiny, Conta Azul, Omie)" },
  { id: "ecom_plat", label: "E-commerce (Shopify, VTEX, Loja Integrada)" },
  { id: "email_mkt", label: "E-mail marketing (RD, Mailchimp, AC)" },
  { id: "comm_int", label: "Comunicação interna (Slack, Teams, Discord)" },
  { id: "gp", label: "Gestão de projetos (Notion, Trello, ClickUp)" },
  { id: "office", label: "Google Workspace / Microsoft 365" },
  { id: "ia_tools", label: "Ferramentas de IA (ChatGPT, Claude, Gemini)" },
  { id: "automacao_externa", label: "Automação (Zapier, Make, n8n)" },
  { id: "whatsapp_api", label: "WhatsApp Business API" },
  { id: "bi_externo", label: "BI (Looker, Power BI, Metabase)" },
  { id: "nada_stack", label: "Nada disso — operação 100% manual" },
  { id: "outro_stack", label: "Outro" },
] as const

/* ════════════════════════════════════════════════════════════════
   Step 6 — Volume e Maturidade
   ════════════════════════════════════════════════════════════════ */
const CLIENTES_ATIVOS = [
  { id: "0-50", label: "Até 50" },
  { id: "51-200", label: "51–200" },
  { id: "201-1000", label: "201–1.000" },
  { id: "1001-5000", label: "1.001–5.000" },
  { id: "5000+", label: "5.000+" },
] as const

const LEADS_MES = [
  { id: "0-50", label: "Até 50/mês" },
  { id: "51-200", label: "51–200/mês" },
  { id: "201-500", label: "201–500/mês" },
  { id: "501-2000", label: "501–2.000/mês" },
  { id: "2000+", label: "2.000+/mês" },
] as const

const MATURIDADE = [
  { id: "manual", Icon: AlertCircle, label: "Tudo manual / WhatsApp / planilha", desc: "Operação 100% no improviso" },
  { id: "isolado", Icon: LayoutGrid, label: "Algumas ferramentas isoladas", desc: "Cada um usa o seu, sem integração" },
  { id: "integrado", Icon: Cable, label: "Stack médio com integrações pontuais", desc: "Algumas coisas conversam" },
  { id: "robusto", Icon: Gauge, label: "Stack robusto, falta ERP central", desc: "Quase lá, mas falta coração" },
  { id: "avancado", Icon: Cpu, label: "Avançado — queremos IA e automação", desc: "Próximo nível: automação real" },
] as const

const AUTOMACOES = [
  { id: "nada", label: "Nada ainda" },
  { id: "simples", label: "Algumas simples (e-mail, Zapier)" },
  { id: "varias", label: "Várias funcionando bem" },
  { id: "alto", label: "Operação altamente automatizada" },
] as const

/* ════════════════════════════════════════════════════════════════
   Step 7 — IA + Resultados Esperados
   ════════════════════════════════════════════════════════════════ */
const CASOS_IA = [
  { id: "chatbot", Icon: MessageCircle, label: "Chatbot / Atendimento" },
  { id: "triagem", Icon: Filter, label: "Triagem e qualificação de leads" },
  { id: "analise", Icon: BarChart3, label: "Análise de dados e relatórios" },
  { id: "conteudo", Icon: PenLine, label: "Geração de conteúdo (textos, posts)" },
  { id: "resumo", Icon: FileText, label: "Resumo de reuniões e ligações" },
  { id: "churn", Icon: TrendingDown, label: "Predição de churn" },
  { id: "sentimento", Icon: ThumbsUp, label: "Análise de sentimento" },
  { id: "voicebot_ia", Icon: Mic, label: "Voicebot / Atendimento por voz" },
  { id: "recom", Icon: Sparkles, label: "Recomendação de produtos" },
  { id: "ia_interno_uso", Icon: BrainCircuit, label: "Agente IA interno (consultas)" },
  { id: "contratos", Icon: FileSearch, label: "Análise de contratos/docs" },
  { id: "followup_ia", Icon: Send, label: "Automação de follow-up" },
  { id: "previsao", Icon: TrendingUp, label: "Previsão de vendas/demanda" },
  { id: "outro_ia", Icon: MoreHorizontal, label: "Outro" },
] as const

const RESULTADOS = [
  { id: "receita", label: "Aumentar receita" },
  { id: "custos", label: "Reduzir custos operacionais" },
  { id: "atendimento_res", label: "Acelerar atendimento ao cliente" },
  { id: "dados_res", label: "Mais visibilidade dos dados" },
  { id: "tempo", label: "Diminuir tempo em tarefas manuais" },
  { id: "escalar", label: "Escalar sem aumentar headcount" },
  { id: "profissionalizar", label: "Profissionalizar a operação" },
  { id: "experiencia", label: "Melhorar experiência do cliente" },
  { id: "conversao", label: "Aumentar conversão de leads" },
  { id: "churn_red", label: "Diminuir churn / aumentar LTV" },
  { id: "automatizar_res", label: "Automatizar processos repetitivos" },
  { id: "decisao_res", label: "Decidir com dados em tempo real" },
] as const

/* ════════════════════════════════════════════════════════════════
   Step 8 — Investimento e Contratação
   ════════════════════════════════════════════════════════════════ */
const INVESTIMENTOS = [
  { id: "ate-5k", Icon: Wallet, label: "Até R$ 5k", desc: "Projeto pontual" },
  { id: "5-15k", Icon: Wallet, label: "R$ 5k–15k", desc: "MVP enxuto" },
  { id: "15-40k", Icon: Wallet, label: "R$ 15k–40k", desc: "Sistema completo" },
  { id: "40-100k", Icon: Wallet, label: "R$ 40k–100k", desc: "Multi-módulos" },
  { id: "100k+", Icon: Wallet, label: "R$ 100k+", desc: "Transformação completa" },
  { id: "discutir", Icon: MessageCircle, label: "Prefiro discutir com o time", desc: "Conversa antes de fechar" },
] as const

const PRAZOS = [
  { id: "1m", Icon: Flame, label: "< 1 mês", desc: "Já era pra ontem" },
  { id: "1-3m", Icon: Clock, label: "1–3 meses", desc: "Curto prazo" },
  { id: "3-6m", Icon: CalendarDays, label: "3–6 meses", desc: "Planejado" },
  { id: "6m+", Icon: Search, label: "6+ meses", desc: "Sem pressa" },
] as const

const MODELOS = [
  { id: "projeto", label: "Projeto fechado" },
  { id: "mensal", label: "Mensalidade contínua" },
  { id: "hibrido", label: "Híbrido (projeto + manutenção)" },
  { id: "indef", label: "Não sei ainda" },
] as const

const TIMES_TI = [
  { id: "0", label: "Não temos TI" },
  { id: "1", label: "1 pessoa de TI" },
  { id: "2-5", label: "Time pequeno (2–5)" },
  { id: "5+", label: "Time robusto (5+)" },
  { id: "terc", label: "Terceirizado" },
] as const

/* ════════════════════════════════════════════════════════════════
   Step 9 — Empresa
   ════════════════════════════════════════════════════════════════ */
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
const SETORES = ["Saúde", "Saúde Mental", "Jurídico", "Contabilidade", "Educação", "Varejo / E-commerce", "Serviços B2B", "Indústria", "Tecnologia / SaaS", "Imobiliário", "Logística", "Alimentação / Food", "Beleza / Estética", "Fitness", "Construção", "Pet / Veterinária", "Eventos / Turismo", "ONG / Religioso", "Outro"]
const FONTES = ["Google / Pesquisa", "Instagram", "LinkedIn", "Indicação de amigo", "WhatsApp", "YouTube", "Evento / Feira", "Outro"]

/* ════════════════════════════════════════════════════════════════
   Steps definition
   ════════════════════════════════════════════════════════════════ */
const STEPS = [
  { id: "obj",  n: "1",  lbl: "O que você está buscando?", sub: "Vamos direcionar o especialista certo para o seu caso." },
  { id: "seg",  n: "2",  lbl: "Qual é o seu segmento?", sub: "Cada setor tem suas particularidades — queremos entender a sua." },
  { id: "svc",  n: "3",  lbl: "Que soluções você precisa?", sub: "Selecione tudo que faz sentido para o seu momento." },
  { id: "op",   n: "4",  lbl: "Como é sua operação hoje?", sub: "O cenário atual nos ajuda a montar a solução ideal." },
  { id: "stk",  n: "5",  lbl: "Que ferramentas você já usa?", sub: "Vamos entender o que já está rodando antes de integrar." },
  { id: "vol",  n: "6",  lbl: "Volume e maturidade da operação", sub: "Quanto maior a operação, mais valor uma solução custom gera." },
  { id: "ia",   n: "7",  lbl: "IA e resultados esperados", sub: "Onde a Tech TSU pode aplicar IA e o que vai mudar." },
  { id: "inv",  n: "8",  lbl: "Investimento e prazo", sub: "Para te apresentar uma proposta realista e direta ao ponto." },
  { id: "emp",  n: "9",  lbl: "Sobre sua empresa", sub: "Para adequar a proposta ao seu porte e momento." },
  { id: "cnt",  n: "10", lbl: "Seus dados de contato", sub: "Nossa equipe analisa seu perfil e responde em 24h úteis." },
] as const

/* ════════════════════════════════════════════════════════════════
   Types
   ════════════════════════════════════════════════════════════════ */
type FormData = {
  objetivo: string
  segmento: string; segmentoOutro: string
  servicos: string[]; servicosOutro: string
  ferramentaAtual: string; ferramentaOutro: string
  gargalos: string[]
  urgencia: string
  stack: string[]; stackOutro: string
  clientesAtivos: string; leadsMes: string
  maturidade: string; automacoesAtuais: string
  casosIa: string[]; casosIaOutro: string
  resultados: string[]
  investimento: string; prazoDesejado: string; modeloContratacao: string; timeTi: string
  tamanho: string; faturamento: string; cargo: string; setor: string
  nome: string; email: string; whatsapp: string
  empresa: string; site: string; fonte: string; mensagem: string
}

const INITIAL: FormData = {
  objetivo: "", segmento: "", segmentoOutro: "",
  servicos: [], servicosOutro: "",
  ferramentaAtual: "", ferramentaOutro: "",
  gargalos: [], urgencia: "",
  stack: [], stackOutro: "",
  clientesAtivos: "", leadsMes: "",
  maturidade: "", automacoesAtuais: "",
  casosIa: [], casosIaOutro: "",
  resultados: [],
  investimento: "", prazoDesejado: "", modeloContratacao: "", timeTi: "",
  tamanho: "", faturamento: "", cargo: "", setor: "",
  nome: "", email: "", whatsapp: "",
  empresa: "", site: "", fonte: "", mensagem: "",
}

/* ════════════════════════════════════════════════════════════════
   Reusable styles
   ════════════════════════════════════════════════════════════════ */
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 13px",
  background: "var(--bg-3)", border: "1px solid var(--border-m)",
  borderRadius: 6, color: "var(--text)",
  fontSize: 13, outline: "none", fontFamily: "inherit",
  transition: "border 0.18s",
}
const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 10, color: "var(--muted-2)",
  fontFamily: "var(--font-mono)", marginBottom: 5,
  letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
}
const sectionLabelStyle: React.CSSProperties = {
  fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.07em",
  color: "var(--muted)", fontWeight: 600, marginBottom: 10,
  display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap",
}

/* ════════════════════════════════════════════════════════════════
   Subcomponents
   ════════════════════════════════════════════════════════════════ */
function ProgressBar({ step }: { step: number }) {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
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

type IconType = React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>

function OptionCard({
  selected, onClick, Icon, label, desc, dashed = false, compact = false,
}: {
  selected: boolean; onClick: () => void
  Icon?: IconType; label: string; desc?: string; dashed?: boolean; compact?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex", alignItems: "flex-start", gap: 10,
        padding: compact ? "10px 11px" : "13px 12px", borderRadius: 10,
        border: dashed
          ? `1.5px dashed ${selected ? "var(--teal)" : "var(--border-m)"}`
          : `1px solid ${selected ? "var(--teal)" : "var(--border-m)"}`,
        background: selected ? "rgba(46,196,182,0.06)" : "var(--bg-3)",
        cursor: "pointer", fontFamily: "inherit", textAlign: "left",
        transition: "border 0.15s, background 0.15s",
        width: "100%",
      }}
      onMouseEnter={e => {
        if (!selected) (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.22)"
      }}
      onMouseLeave={e => {
        if (!selected) (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-m)"
      }}
    >
      {Icon && <Icon size={compact ? 16 : 18} strokeWidth={1.6} color={selected ? "var(--teal)" : "var(--muted)"} />}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: compact ? 12 : 12.5, fontWeight: 600, color: selected ? "var(--teal)" : "var(--text)", lineHeight: 1.3 }}>
          {label}
        </div>
        {desc && <div style={{ fontSize: 10.5, color: "var(--muted)", marginTop: 3, lineHeight: 1.4 }}>{desc}</div>}
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
        cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s",
      }}
    >
      {label}
    </button>
  )
}

function UrgencyCard({
  selected, onClick, Icon, label, desc,
}: {
  selected: boolean; onClick: () => void; Icon: IconType; label: string; desc: string
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
      <Icon size={20} strokeWidth={1.6} color={selected ? "var(--teal)" : "var(--muted)"} />
      <div style={{ fontSize: 11.5, fontWeight: 600, color: selected ? "var(--teal)" : "var(--text)", marginTop: 5, marginBottom: 2 }}>
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
  const [error, setError] = useState("")

  const set = <K extends keyof FormData>(key: K, val: FormData[K]) => setData(d => ({ ...d, [key]: val }))
  const toggleArr = (key: "servicos" | "gargalos" | "stack" | "casosIa" | "resultados", id: string) => {
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
    if (s === "stk") return true // step opcional, mas avança
    if (s === "vol") return !!data.maturidade
    if (s === "ia")  return data.resultados.length > 0
    if (s === "inv") return !!data.investimento && !!data.prazoDesejado
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
      await res.json()
      setDone(true)
    } catch {
      setError("Algo deu errado. Tente novamente em alguns segundos.")
    } finally {
      setSending(false)
    }
  }

  if (done) return <SuccessScreen data={data} onReset={() => { setData(INITIAL); setStep(0); setDone(false) }} />

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
          {/* Step 1: Objetivo */}
          {current.id === "obj" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="quiz-grid-2">
              {OBJETIVOS.map(o => (
                <OptionCard key={o.id} selected={data.objetivo === o.id} onClick={() => set("objetivo", o.id)} Icon={o.Icon} label={o.label} desc={o.desc} />
              ))}
            </div>
          )}

          {/* Step 2: Segmento */}
          {current.id === "seg" && (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }} className="quiz-grid-3">
                {SEGMENTOS.map(o => (
                  <OptionCard key={o.id} selected={data.segmento === o.id} onClick={() => set("segmento", o.id)} Icon={o.Icon} label={o.label} dashed={o.id === "outro_seg"} compact />
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

          {/* Step 3: Serviços */}
          {current.id === "svc" && (
            <>
              <div style={{ fontSize: 11, color: "var(--muted)", display: "flex", alignItems: "center", gap: 5, marginBottom: 12 }}>
                <Info size={13} color="var(--teal)" /> Selecione todos os que se aplicam
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }} className="quiz-grid-3">
                {SERVICOS.map(o => (
                  <OptionCard key={o.id} selected={data.servicos.includes(o.id)} onClick={() => toggleArr("servicos", o.id)} Icon={o.Icon} label={o.label} desc={o.desc} dashed={o.id === "outro_svc"} compact />
                ))}
              </div>
              {data.servicos.includes("outro_svc") && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 10 }}>
                  <input type="text" placeholder="Descreva o serviço..." maxLength={120}
                    value={data.servicosOutro} onChange={e => set("servicosOutro", e.target.value)}
                    style={{ ...inputStyle, borderColor: "var(--teal)" }} />
                </motion.div>
              )}
            </>
          )}

          {/* Step 4: Operação */}
          {current.id === "op" && (
            <>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}>
                  <Laptop size={13} color="var(--teal)" /> Ferramenta principal hoje <span style={{ color: "var(--teal)" }}>*</span>
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
                  <AlertCircle size={13} color="var(--teal)" /> Maiores gargalos atuais
                  <span style={{ color: "var(--muted)", fontWeight: 400, fontSize: 10, textTransform: "none", letterSpacing: 0 }}>— marque todos</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {GARGALOS.map(g => (
                    <Chip key={g.id} selected={data.gargalos.includes(g.id)} onClick={() => toggleArr("gargalos", g.id)} label={g.label} />
                  ))}
                </div>
              </div>

              <div>
                <div style={sectionLabelStyle}>
                  <Clock size={13} color="var(--teal)" /> Urgência do projeto <span style={{ color: "var(--teal)" }}>*</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }} className="quiz-grid-4">
                  {URGENCIAS.map(u => (
                    <UrgencyCard key={u.id} selected={data.urgencia === u.id} onClick={() => set("urgencia", u.id)} Icon={u.Icon} label={u.label} desc={u.desc} />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Step 5: Stack */}
          {current.id === "stk" && (
            <>
              <div style={{ fontSize: 11, color: "var(--muted)", display: "flex", alignItems: "center", gap: 5, marginBottom: 12 }}>
                <Info size={13} color="var(--teal)" /> Marque todas as ferramentas que você usa hoje
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {STACK.map(s => (
                  <Chip key={s.id} selected={data.stack.includes(s.id)} onClick={() => toggleArr("stack", s.id)} label={s.label} />
                ))}
              </div>
              {data.stack.includes("outro_stack") && (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 12 }}>
                  <input type="text" placeholder="Qual outra ferramenta?" maxLength={120}
                    value={data.stackOutro} onChange={e => set("stackOutro", e.target.value)}
                    style={{ ...inputStyle, borderColor: "var(--teal)" }} />
                </motion.div>
              )}
            </>
          )}

          {/* Step 6: Volume e Maturidade */}
          {current.id === "vol" && (
            <>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}><Users size={13} color="var(--teal)" /> Clientes ativos</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {CLIENTES_ATIVOS.map(c => (
                    <Chip key={c.id} selected={data.clientesAtivos === c.id} onClick={() => set("clientesAtivos", c.id)} label={c.label} />
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}><Target size={13} color="var(--teal)" /> Leads gerados por mês</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {LEADS_MES.map(c => (
                    <Chip key={c.id} selected={data.leadsMes === c.id} onClick={() => set("leadsMes", c.id)} label={c.label} />
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}>
                  <Gauge size={13} color="var(--teal)" /> Maturidade tecnológica <span style={{ color: "var(--teal)" }}>*</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="quiz-grid-2">
                  {MATURIDADE.map(m => (
                    <OptionCard key={m.id} selected={data.maturidade === m.id} onClick={() => set("maturidade", m.id)} Icon={m.Icon} label={m.label} desc={m.desc} compact />
                  ))}
                </div>
              </div>
              <div>
                <div style={sectionLabelStyle}><Workflow size={13} color="var(--teal)" /> Automações já implementadas</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {AUTOMACOES.map(a => (
                    <Chip key={a.id} selected={data.automacoesAtuais === a.id} onClick={() => set("automacoesAtuais", a.id)} label={a.label} />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Step 7: IA + Resultados */}
          {current.id === "ia" && (
            <>
              <div style={{ marginBottom: 24 }}>
                <div style={sectionLabelStyle}>
                  <BrainCircuit size={13} color="var(--teal)" /> Onde você quer aplicar IA
                  <span style={{ color: "var(--muted)", fontWeight: 400, fontSize: 10, textTransform: "none", letterSpacing: 0 }}>— marque todos</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 7 }} className="quiz-grid-2">
                  {CASOS_IA.map(c => (
                    <OptionCard key={c.id} selected={data.casosIa.includes(c.id)} onClick={() => toggleArr("casosIa", c.id)} Icon={c.Icon} label={c.label} dashed={c.id === "outro_ia"} compact />
                  ))}
                </div>
                {data.casosIa.includes("outro_ia") && (
                  <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 10 }}>
                    <input type="text" placeholder="Que outro caso de uso de IA?" maxLength={120}
                      value={data.casosIaOutro} onChange={e => set("casosIaOutro", e.target.value)}
                      style={{ ...inputStyle, borderColor: "var(--teal)" }} />
                  </motion.div>
                )}
              </div>
              <div>
                <div style={sectionLabelStyle}>
                  <Target size={13} color="var(--teal)" /> Resultados que você espera <span style={{ color: "var(--teal)" }}>*</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {RESULTADOS.map(r => (
                    <Chip key={r.id} selected={data.resultados.includes(r.id)} onClick={() => toggleArr("resultados", r.id)} label={r.label} />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Step 8: Investimento */}
          {current.id === "inv" && (
            <>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}>
                  <Wallet size={13} color="var(--teal)" /> Investimento estimado <span style={{ color: "var(--teal)" }}>*</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7 }} className="quiz-grid-3">
                  {INVESTIMENTOS.map(i => (
                    <OptionCard key={i.id} selected={data.investimento === i.id} onClick={() => set("investimento", i.id)} Icon={i.Icon} label={i.label} desc={i.desc} compact />
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}>
                  <Clock size={13} color="var(--teal)" /> Prazo desejado <span style={{ color: "var(--teal)" }}>*</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }} className="quiz-grid-4">
                  {PRAZOS.map(p => (
                    <UrgencyCard key={p.id} selected={data.prazoDesejado === p.id} onClick={() => set("prazoDesejado", p.id)} Icon={p.Icon} label={p.label} desc={p.desc} />
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}><Handshake size={13} color="var(--teal)" /> Modelo de contratação</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {MODELOS.map(m => (
                    <Chip key={m.id} selected={data.modeloContratacao === m.id} onClick={() => set("modeloContratacao", m.id)} label={m.label} />
                  ))}
                </div>
              </div>
              <div>
                <div style={sectionLabelStyle}><Cpu size={13} color="var(--teal)" /> Time de TI/Dev interno</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {TIMES_TI.map(t => (
                    <Chip key={t.id} selected={data.timeTi === t.id} onClick={() => set("timeTi", t.id)} label={t.label} />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Step 9: Empresa */}
          {current.id === "emp" && (
            <>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}>
                  <Users size={13} color="var(--teal)" /> Tamanho da equipe <span style={{ color: "var(--teal)" }}>*</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {TAMANHOS.map(t => <Chip key={t.id} selected={data.tamanho === t.id} onClick={() => set("tamanho", t.id)} label={t.label} />)}
                </div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <div style={sectionLabelStyle}><TrendingUp size={13} color="var(--teal)" /> Faturamento mensal aproximado</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {FATURAMENTOS.map(f => <Chip key={f.id} selected={data.faturamento === f.id} onClick={() => set("faturamento", f.id)} label={f.label} />)}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }} className="quiz-grid-2">
                <div>
                  <label style={labelStyle}>Seu cargo <span style={{ color: "var(--teal)" }}>*</span></label>
                  <select value={data.cargo} onChange={e => set("cargo", e.target.value)} style={inputStyle}>
                    <option value="">Selecione...</option>
                    {CARGOS.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Setor principal</label>
                  <select value={data.setor} onChange={e => set("setor", e.target.value)} style={inputStyle}>
                    <option value="">Selecione...</option>
                    {SETORES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Step 10: Contato */}
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
                <textarea placeholder="Descreva brevemente o que precisa ou qualquer dúvida..."
                  value={data.mensagem} onChange={e => set("mensagem", e.target.value)}
                  style={{ ...inputStyle, minHeight: 80, resize: "vertical" }} />
              </div>
              {error && <p style={{ fontSize: 12, color: "#ff7070", marginTop: 12 }}>{error}</p>}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
        {step > 0 ? (
          <button type="button" onClick={back}
            style={{
              padding: "11px 15px", background: "transparent",
              border: "1px solid var(--border-m)", color: "var(--muted)",
              fontSize: 13, borderRadius: 9, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 6,
              fontFamily: "inherit", transition: "all 0.16s",
            }}>
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
            fontFamily: "inherit",
          }}>
          {sending ? <>Enviando... <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /></>
            : step < STEPS.length - 1 ? <>Continuar <ArrowRight size={14} /></>
            : <>Enviar solicitação <Send size={14} /></>}
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
  data, onReset,
}: {
  data: FormData; onReset: () => void
}) {
  const allMaps: Record<string, string> = {
    orcamento: "Solicitar Orçamento", reuniao: "Agendar Reunião", conhecer: "Conhecer Serviços", parceria: "Parceria",
    urgente: "Urgente", "1-3m": "1–3 meses", "3-6m": "3–6 meses", explorando: "Explorando", "1m": "< 1 mês", "6m+": "6+ meses",
    manual: "Tudo manual", isolado: "Ferramentas isoladas", integrado: "Stack médio", robusto: "Stack robusto", avancado: "Avançado",
    "ate-5k": "Até R$ 5k", "5-15k": "R$ 5k–15k", "15-40k": "R$ 15k–40k", "40-100k": "R$ 40k–100k", "100k+": "R$ 100k+", discutir: "Discutir antes",
    projeto: "Projeto fechado", mensal: "Mensalidade", hibrido: "Híbrido", indef: "Indefinido",
  }
  const segMap = Object.fromEntries(SEGMENTOS.map(s => [s.id, s.label]))
  const svcMap = Object.fromEntries(SERVICOS.map(s => [s.id, s.label]))
  const stackMap = Object.fromEntries(STACK.map(s => [s.id, s.label]))
  const iaMap = Object.fromEntries(CASOS_IA.map(s => [s.id, s.label]))
  const resMap = Object.fromEntries(RESULTADOS.map(s => [s.id, s.label]))
  const tamMap = Object.fromEntries(TAMANHOS.map(t => [t.id, t.label]))
  const fatMap = Object.fromEntries(FATURAMENTOS.map(f => [f.id, f.label]))

  const segDisplay = data.segmento === "outro_seg" ? data.segmentoOutro : segMap[data.segmento]
  const svcDisplay = data.servicos.map(id => id === "outro_svc" ? data.servicosOutro : svcMap[id]).filter(Boolean).join(", ")
  const stackDisplay = data.stack.map(id => id === "outro_stack" ? data.stackOutro : stackMap[id]).filter(Boolean).join(", ")
  const iaDisplay = data.casosIa.map(id => id === "outro_ia" ? data.casosIaOutro : iaMap[id]).filter(Boolean).join(", ")
  const resDisplay = data.resultados.map(id => resMap[id]).join(", ")

  const rows: [string, string | undefined][] = [
    ["Objetivo", allMaps[data.objetivo]],
    ["Segmento", segDisplay],
    ["Serviços", svcDisplay],
    ["Stack atual", stackDisplay],
    ["Casos de IA", iaDisplay],
    ["Resultados esperados", resDisplay],
    ["Urgência", allMaps[data.urgencia]],
    ["Investimento", allMaps[data.investimento]],
    ["Prazo", allMaps[data.prazoDesejado]],
    ["Maturidade", allMaps[data.maturidade]],
    ["Tamanho", tamMap[data.tamanho]],
    ["Faturamento", fatMap[data.faturamento]],
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

      <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Solicitação recebida.</h3>
      <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.7, maxWidth: 460, margin: "0 auto 22px" }}>
        Nosso time vai analisar seu perfil, montar uma proposta personalizada e te enviar os <strong style={{ color: "var(--text)" }}>horários disponíveis na agenda</strong> para uma reunião. Resposta em até <strong style={{ color: "var(--text)" }}>24 horas úteis</strong> pelo WhatsApp ou e-mail informado.
      </p>

      <div style={{ background: "var(--bg-3)", border: "1px solid var(--border-m)", borderRadius: 12, padding: "16px 18px", textAlign: "left" }}>
        <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--muted-2)", fontWeight: 600, marginBottom: 10 }}>
          Resumo do seu perfil
        </p>
        {rows.filter(([, v]) => v && v.trim().length > 0).map(([label, value]) => (
          <div key={label} style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
            padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 12,
          }}>
            <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 110 }}>{label}</span>
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
        }}>
        Fazer nova solicitação
      </button>
    </motion.div>
  )
}
