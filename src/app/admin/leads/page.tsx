import { sql, initDb } from "@/lib/db"
import { notFound } from "next/navigation"

type Lead = {
  id: number
  objetivo: string
  gargalo: string | null
  tamanho: string | null
  nome: string
  whatsapp: string
  email: string | null
  empresa: string | null
  created_at: string
}

const LABELS: Record<string, string> = {
  orcamento: "Orçamento",
  reuniao: "Reunião",
  processos: "Processos manuais",
  crm: "CRM/Vendas",
  dados: "Dados",
  automacao: "Automação",
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ secret?: string }>
}) {
  const { secret } = await searchParams

  if (secret !== process.env.ADMIN_SECRET) {
    notFound()
  }

  await initDb()
  const leads = (await sql`SELECT * FROM leads ORDER BY created_at DESC`) as Lead[]

  return (
    <div style={{
      minHeight: "100vh", background: "#070809", color: "#e7eaee",
      fontFamily: "ui-sans-serif, system-ui, sans-serif", padding: "40px 24px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Central de Leads</h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
            {leads.length} lead{leads.length !== 1 ? "s" : ""} captado{leads.length !== 1 ? "s" : ""}
          </p>
        </div>

        {leads.length === 0 ? (
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>Nenhum lead ainda.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  {["#", "Data", "Nome", "WhatsApp", "E-mail", "Empresa", "Objetivo", "Gargalo", "Tamanho"].map(h => (
                    <th key={h} style={{
                      textAlign: "left", padding: "10px 14px",
                      color: "rgba(255,255,255,0.35)", fontSize: 11,
                      textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((l, i) => (
                  <tr key={l.id} style={{
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  }}>
                    <td style={{ padding: "12px 14px", color: "rgba(255,255,255,0.3)" }}>{l.id}</td>
                    <td style={{ padding: "12px 14px", color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap" }}>
                      {new Date(l.created_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "short" })}
                    </td>
                    <td style={{ padding: "12px 14px", fontWeight: 600 }}>{l.nome}</td>
                    <td style={{ padding: "12px 14px" }}>
                      <a href={`https://wa.me/55${l.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"
                        style={{ color: "#2ec4b6" }}>
                        {l.whatsapp}
                      </a>
                    </td>
                    <td style={{ padding: "12px 14px", color: "rgba(255,255,255,0.6)" }}>{l.email ?? "—"}</td>
                    <td style={{ padding: "12px 14px", color: "rgba(255,255,255,0.6)" }}>{l.empresa ?? "—"}</td>
                    <td style={{ padding: "12px 14px" }}>
                      <span style={{
                        padding: "2px 10px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                        background: l.objetivo === "orcamento" ? "rgba(246,200,95,0.12)" : "rgba(46,196,182,0.12)",
                        color: l.objetivo === "orcamento" ? "#f6c85f" : "#2ec4b6",
                      }}>
                        {LABELS[l.objetivo] ?? l.objetivo}
                      </span>
                    </td>
                    <td style={{ padding: "12px 14px", color: "rgba(255,255,255,0.6)" }}>
                      {l.gargalo ? LABELS[l.gargalo] ?? l.gargalo : "—"}
                    </td>
                    <td style={{ padding: "12px 14px", color: "rgba(255,255,255,0.6)" }}>{l.tamanho ?? "—"}</td>
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
