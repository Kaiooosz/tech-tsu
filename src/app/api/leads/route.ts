import { NextRequest, NextResponse } from "next/server"
import { sql, initDb } from "@/lib/db"

type LeadIn = {
  objetivo: string
  segmento?: string
  segmentoOutro?: string
  servicos?: string[]
  servicosOutro?: string
  ferramentaAtual?: string
  ferramentaOutro?: string
  gargalos?: string[]
  urgencia?: string
  tamanho?: string
  faturamento?: string
  cargo?: string
  setor?: string
  nome: string
  email: string
  whatsapp: string
  empresa?: string
  site?: string
  fonte?: string
  mensagem?: string
}

/* ── Lead scoring ────────────────────────────────────────────── */
const URG_PTS: Record<string, number> = { urgente: 3, "1-3m": 2, "3-6m": 1, explorando: 0 }
const FAT_MID = new Set(["30-100k", "100-300k", "300k-1M"])
const TAM_BIG = new Set(["6-20", "21-50", "51-200", "200+"])

function scoreLead(d: LeadIn) {
  let p = 0
  if (d.objetivo === "orcamento" || d.objetivo === "reuniao") p += 3
  if (d.urgencia && URG_PTS[d.urgencia] !== undefined) p += URG_PTS[d.urgencia]
  if (d.faturamento && FAT_MID.has(d.faturamento)) p += 2
  if (d.tamanho && TAM_BIG.has(d.tamanho)) p += 1
  if ((d.gargalos ?? []).length >= 3) p += 1
  if ((d.servicos ?? []).length >= 2) p += 1
  if (p >= 7) return { score: "hot", pts: p }
  if (p >= 4) return { score: "warm", pts: p }
  return { score: "cold", pts: p }
}

/* ── POST ────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  try {
    const d: LeadIn = await req.json()

    if (!d.objetivo || !d.nome || !d.whatsapp || !d.email) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 })
    }

    const { score, pts } = scoreLead(d)
    const ua = req.headers.get("user-agent") ?? null
    const referer = req.headers.get("referer") ?? null

    await initDb()

    const result = await sql`
      INSERT INTO leads (
        objetivo, segmento, segmento_outro,
        servicos, servicos_outro,
        ferramenta_atual, ferramenta_outro,
        gargalos, urgencia,
        tamanho, faturamento, cargo, setor,
        nome, email, whatsapp, empresa,
        site, fonte, mensagem,
        score, score_pts, status,
        user_agent, referer
      ) VALUES (
        ${d.objetivo}, ${d.segmento ?? null}, ${d.segmentoOutro ?? null},
        ${JSON.stringify(d.servicos ?? [])}::jsonb, ${d.servicosOutro ?? null},
        ${d.ferramentaAtual ?? null}, ${d.ferramentaOutro ?? null},
        ${JSON.stringify(d.gargalos ?? [])}::jsonb, ${d.urgencia ?? null},
        ${d.tamanho ?? null}, ${d.faturamento ?? null}, ${d.cargo ?? null}, ${d.setor ?? null},
        ${d.nome}, ${d.email}, ${d.whatsapp}, ${d.empresa ?? null},
        ${d.site ?? null}, ${d.fonte ?? null}, ${d.mensagem ?? null},
        ${score}, ${pts}, 'novo',
        ${ua}, ${referer}
      )
      RETURNING id
    `

    return NextResponse.json({ ok: true, id: (result as { id: number }[])[0]?.id, score, pts }, { status: 201 })
  } catch (err) {
    console.error("leads POST error:", err)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}

/* ── GET ─────────────────────────────────────────────────────── */
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret")
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    await initDb()
    const filter = req.nextUrl.searchParams.get("score")
    const rows = filter
      ? await sql`SELECT * FROM leads WHERE score = ${filter} ORDER BY created_at DESC`
      : await sql`SELECT * FROM leads ORDER BY created_at DESC`
    return NextResponse.json(rows)
  } catch (err) {
    console.error("leads GET error:", err)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
