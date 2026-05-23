import { sql, initDb } from "@/lib/db"
import { notFound } from "next/navigation"
import Link from "next/link"

type Lead = {
  id: number
  objetivo: string
  segmento: string | null
  segmento_outro: string | null
  servicos: string[] | null
  servicos_outro: string | null
  ferramenta_atual: string | null
  ferramenta_outro: string | null
  gargalos: string[] | null
  urgencia: string | null
  tamanho: string | null
  faturamento: string | null
  cargo: string | null
  setor: string | null
  nome: string
  email: string | null
  whatsapp: string
  empresa: string | null
  site: string | null
  fonte: string | null
  mensagem: string | null
  score: string | null
  score_pts: number | null
  status: string | null
  created_at: string
}

const L: Record<string, string> = {
  // objetivos
  orcamento: "Orçamento", reuniao: "Reunião", conhecer: "Conhecer", parceria: "Parceria",
  // segmentos
  clinica: "Clínica/Saúde", juridico: "Jurídico/Contábil", b2b: "Serviços B2B", varejo: "E-com/Varejo",
  agencia: "Agência", industria: "Indústria", startup: "Startup/Tech", educacao: "Educação",
  imobiliaria: "Imobiliária", logistica: "Logística", food: "Restaurante/Food", beleza: "Beleza/Fitness",
  construcao: "Construção", outro_seg: "Outro",
  // urgencia
  urgente: "Urgente", "1-3m": "1–3m", "3-6m": "3–6m", explorando: "Explorando",
  // tamanho
  "1-5": "1–5", "6-20": "6–20", "21-50": "21–50", "51-200": "51–200", "200+": "200+",
  // faturamento
  "ate-30k": "Até 30k", "30-100k": "30–100k", "100-300k": "100–300k", "300k-1M": "300k–1M", "1M+": "1M+", nd: "N/D",
  // ferramentas
  planilha: "Planilha", legado: "Legado", whatsapp: "WhatsApp", mix: "Mix", nada: "Manual", outro_ferr: "Outro",
}

const lbl = (key: string | null | undefined) => key ? (L[key] ?? key) : "—"

const SCORE_LABEL: Record<string, string> = {
  hot: "🔥 Quente", warm: "✨ Promissor", cold: "🌱 Nutrição",
}

const SCORE_COLOR: Record<string, string> = {
  hot: "var(--teal)",
  warm: "rgba(46,196,182,0.7)",
  cold: "rgba(255,255,255,0.35)",
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ secret?: string; score?: string }>
}) {
  const { secret, score } = await searchParams

  if (secret !== process.env.ADMIN_SECRET) notFound()

  await initDb()
  const all = (await sql`SELECT * FROM leads ORDER BY created_at DESC`) as Lead[]
  const leads = score ? all.filter(l => l.score === score) : all
  const counts = {
    total: all.length,
    hot: all.filter(l => l.score === "hot").length,
    warm: all.filter(l => l.score === "warm").length,
    cold: all.filter(l => l.score === "cold").length,
  }

  return (
    <div style={{
      minHeight: "100vh", background: "#070809", color: "#e7eaee",
      fontFamily: "ui-sans-serif, system-ui, sans-serif", padding: "32px 20px",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* Header + KPIs */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Central de Leads</h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            {leads.length} de {all.length} lead{all.length !== 1 ? "s" : ""}
            {score && ` · filtro: ${SCORE_LABEL[score] ?? score}`}
          </p>
        </div>

        {/* Score filter */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {[
            { id: "", label: "Todos", count: counts.total },
            { id: "hot", label: "🔥 Quentes", count: counts.hot },
            { id: "warm", label: "✨ Promissores", count: counts.warm },
            { id: "cold", label: "🌱 Nutrição", count: counts.cold },
          ].map(f => {
            const active = (score ?? "") === f.id
            const href = f.id
              ? `/admin/leads?secret=${secret}&score=${f.id}`
              : `/admin/leads?secret=${secret}`
            return (
              <Link key={f.id} href={href} style={{
                padding: "7px 13px", borderRadius: 6, fontSize: 12, fontWeight: 500,
                border: active ? "1px solid #2ec4b6" : "1px solid rgba(255,255,255,0.12)",
                background: active ? "rgba(46,196,182,0.08)" : "rgba(255,255,255,0.02)",
                color: active ? "#2ec4b6" : "rgba(255,255,255,0.6)",
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
              }}>
                {f.label} <span style={{ opacity: 0.6 }}>({f.count})</span>
              </Link>
            )
          })}
        </div>

        {/* Table */}
        {leads.length === 0 ? (
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, padding: 40, textAlign: "center" }}>
            Nenhum lead nesse filtro.
          </p>
        ) : (
          <div style={{ overflowX: "auto", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                  {["Score", "Data", "Nome", "Empresa", "Objetivo", "Segmento", "Urgência", "Tamanho", "Faturamento", "Cargo", "WhatsApp", "E-mail"].map(h => (
                    <th key={h} style={{
                      textAlign: "left", padding: "10px 12px", whiteSpace: "nowrap",
                      color: "rgba(255,255,255,0.35)", fontSize: 10,
                      textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((l, i) => (
                  <tr key={l.id} style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  }}>
                    <td style={{ padding: "10px 12px", whiteSpace: "nowrap" }}>
                      <span style={{
                        padding: "2px 9px", borderRadius: 999, fontSize: 11, fontWeight: 600,
                        background: l.score ? `rgba(46,196,182,${l.score === "hot" ? 0.14 : l.score === "warm" ? 0.08 : 0.04})` : "rgba(255,255,255,0.05)",
                        color: l.score ? SCORE_COLOR[l.score] : "rgba(255,255,255,0.4)",
                        border: l.score ? `1px solid rgba(46,196,182,${l.score === "hot" ? 0.3 : l.score === "warm" ? 0.2 : 0.1})` : "1px solid rgba(255,255,255,0.08)",
                      }}>
                        {l.score ? SCORE_LABEL[l.score] ?? l.score : "—"}
                        {l.score_pts !== null && l.score_pts !== undefined && <span style={{ opacity: 0.5, marginLeft: 4 }}>·{l.score_pts}</span>}
                      </span>
                    </td>
                    <td style={{ padding: "10px 12px", color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap" }}>
                      {new Date(l.created_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "short" })}
                    </td>
                    <td style={{ padding: "10px 12px", fontWeight: 600, whiteSpace: "nowrap" }}>
                      <details>
                        <summary style={{ cursor: "pointer", listStyle: "none" }}>{l.nome}</summary>
                        <LeadDetail lead={l} />
                      </details>
                    </td>
                    <td style={{ padding: "10px 12px", color: "rgba(255,255,255,0.65)", whiteSpace: "nowrap" }}>{l.empresa ?? "—"}</td>
                    <td style={{ padding: "10px 12px", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}>{lbl(l.objetivo)}</td>
                    <td style={{ padding: "10px 12px", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}>
                      {l.segmento === "outro_seg" ? l.segmento_outro ?? "Outro" : lbl(l.segmento)}
                    </td>
                    <td style={{ padding: "10px 12px", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>{lbl(l.urgencia)}</td>
                    <td style={{ padding: "10px 12px", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>{lbl(l.tamanho)}</td>
                    <td style={{ padding: "10px 12px", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>{lbl(l.faturamento)}</td>
                    <td style={{ padding: "10px 12px", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>{l.cargo ?? "—"}</td>
                    <td style={{ padding: "10px 12px", whiteSpace: "nowrap" }}>
                      <a href={`https://wa.me/55${l.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"
                        style={{ color: "#2ec4b6", textDecoration: "none" }}>
                        {l.whatsapp}
                      </a>
                    </td>
                    <td style={{ padding: "10px 12px", color: "rgba(255,255,255,0.55)", whiteSpace: "nowrap", maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis" }}>
                      {l.email ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

function LeadDetail({ lead }: { lead: Lead }) {
  const servicos = (lead.servicos ?? []).map(s => s === "outro_svc" ? lead.servicos_outro ?? "Outro" : (L[s] ?? s)).join(", ")
  const gargalos = (lead.gargalos ?? []).join(", ")
  const ferr = lead.ferramenta_atual === "outro_ferr" ? lead.ferramenta_outro ?? "Outro" : lbl(lead.ferramenta_atual)

  return (
    <div style={{
      marginTop: 8, padding: "10px 12px", background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6,
      fontWeight: 400, fontSize: 11, lineHeight: 1.7, color: "rgba(255,255,255,0.7)",
      whiteSpace: "normal", maxWidth: 360,
    }}>
      {servicos && <div><strong style={{ color: "var(--teal)" }}>Serviços:</strong> {servicos}</div>}
      {ferr !== "—" && <div><strong style={{ color: "var(--teal)" }}>Ferramenta:</strong> {ferr}</div>}
      {gargalos && <div><strong style={{ color: "var(--teal)" }}>Gargalos:</strong> {gargalos}</div>}
      {lead.setor && <div><strong style={{ color: "var(--teal)" }}>Setor:</strong> {lead.setor}</div>}
      {lead.site && <div><strong style={{ color: "var(--teal)" }}>Site:</strong> <a href={lead.site} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.8)" }}>{lead.site}</a></div>}
      {lead.fonte && <div><strong style={{ color: "var(--teal)" }}>Fonte:</strong> {lead.fonte}</div>}
      {lead.mensagem && <div style={{ marginTop: 6, paddingTop: 6, borderTop: "1px solid rgba(255,255,255,0.05)" }}><strong style={{ color: "var(--teal)" }}>Mensagem:</strong> <em>"{lead.mensagem}"</em></div>}
    </div>
  )
}
