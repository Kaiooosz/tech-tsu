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
  stack?: string[]
  stackOutro?: string
  clientesAtivos?: string
  leadsMes?: string
  maturidade?: string
  automacoesAtuais?: string
  casosIa?: string[]
  casosIaOutro?: string
  resultados?: string[]
  investimento?: string
  prazoDesejado?: string
  modeloContratacao?: string
  timeTi?: string
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
const TAM_BIG = new Set(["21-50", "51-200", "200+"])
const TAM_MID = new Set(["6-20"])
const INV_PTS: Record<string, number> = { "100k+": 4, "40-100k": 3, "15-40k": 2, "5-15k": 1 }
const PRAZO_PTS: Record<string, number> = { "1m": 2, "1-3m": 1 }

function scoreLead(d: LeadIn) {
  let p = 0
  // Objetivo de compra
  if (d.objetivo === "orcamento" || d.objetivo === "reuniao") p += 3
  // Urgência
  if (d.urgencia) p += URG_PTS[d.urgencia] ?? 0
  // Faturamento
  if (d.faturamento === "1M+") p += 3
  else if (d.faturamento && FAT_MID.has(d.faturamento)) p += 2
  // Tamanho
  if (d.tamanho && TAM_BIG.has(d.tamanho)) p += 2
  else if (d.tamanho && TAM_MID.has(d.tamanho)) p += 1
  // Gargalos
  if ((d.gargalos ?? []).length >= 4) p += 2
  else if ((d.gargalos ?? []).length >= 2) p += 1
  // Serviços
  if ((d.servicos ?? []).length >= 3) p += 2
  else if ((d.servicos ?? []).length >= 1) p += 1
  // Investimento (sinal forte)
  if (d.investimento) p += INV_PTS[d.investimento] ?? 0
  // Prazo curto = quente
  if (d.prazoDesejado) p += PRAZO_PTS[d.prazoDesejado] ?? 0
  // Interesse em IA
  if ((d.casosIa ?? []).length >= 2) p += 1
  // Stack maduro
  if ((d.stack ?? []).length >= 3) p += 1
  // Maturidade alta = pronto pra comprar
  if (d.maturidade === "avancado" || d.maturidade === "robusto") p += 1
  // Tem time de TI
  if (d.timeTi && ["2-5", "5+"].includes(d.timeTi)) p += 1

  if (p >= 12) return { score: "hot", pts: p }
  if (p >= 7) return { score: "warm", pts: p }
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
        stack, stack_outro,
        clientes_ativos, leads_mes, maturidade, automacoes_atuais,
        casos_ia, casos_ia_outro, resultados,
        investimento, prazo_desejado, modelo_contratacao, time_ti,
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
        ${JSON.stringify(d.stack ?? [])}::jsonb, ${d.stackOutro ?? null},
        ${d.clientesAtivos ?? null}, ${d.leadsMes ?? null}, ${d.maturidade ?? null}, ${d.automacoesAtuais ?? null},
        ${JSON.stringify(d.casosIa ?? [])}::jsonb, ${d.casosIaOutro ?? null}, ${JSON.stringify(d.resultados ?? [])}::jsonb,
        ${d.investimento ?? null}, ${d.prazoDesejado ?? null}, ${d.modeloContratacao ?? null}, ${d.timeTi ?? null},
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
