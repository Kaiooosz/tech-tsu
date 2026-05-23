import { NextRequest, NextResponse } from "next/server"
import { sql, initDb } from "@/lib/db"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { objetivo, gargalo, tamanho, nome, whatsapp, email, empresa } = body

    if (!objetivo || !nome || !whatsapp) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 })
    }

    await initDb()

    await sql`
      INSERT INTO leads (objetivo, gargalo, tamanho, nome, whatsapp, email, empresa)
      VALUES (${objetivo}, ${gargalo ?? null}, ${tamanho ?? null}, ${nome}, ${whatsapp}, ${email ?? null}, ${empresa ?? null})
    `

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (err) {
    console.error("leads POST error:", err)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret")
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    await initDb()
    const rows = await sql`SELECT * FROM leads ORDER BY created_at DESC`
    return NextResponse.json(rows)
  } catch (err) {
    console.error("leads GET error:", err)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
