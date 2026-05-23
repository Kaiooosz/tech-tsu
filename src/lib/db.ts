import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not set")
}

export const sql = neon(process.env.DATABASE_URL)

let _initDone = false

export async function initDb() {
  if (_initDone) return
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id         SERIAL PRIMARY KEY,
      objetivo   TEXT NOT NULL,
      nome       TEXT NOT NULL,
      whatsapp   TEXT NOT NULL,
      email      TEXT,
      empresa    TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `
  // Step 2-4 (existentes)
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS segmento TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS segmento_outro TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS servicos JSONB DEFAULT '[]'::jsonb`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS servicos_outro TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS ferramenta_atual TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS ferramenta_outro TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS gargalos JSONB DEFAULT '[]'::jsonb`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS urgencia TEXT`
  // Step 5-8 (novos)
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS stack JSONB DEFAULT '[]'::jsonb`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS stack_outro TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS clientes_ativos TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS leads_mes TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS maturidade TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS automacoes_atuais TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS casos_ia JSONB DEFAULT '[]'::jsonb`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS casos_ia_outro TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS resultados JSONB DEFAULT '[]'::jsonb`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS investimento TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS prazo_desejado TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS modelo_contratacao TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS time_ti TEXT`
  // Step 9 (empresa) + meta
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS tamanho TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS faturamento TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS cargo TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS setor TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS site TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS fonte TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS mensagem TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS score TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS score_pts INT DEFAULT 0`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'novo'`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS user_agent TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS referer TEXT`
  _initDone = true
}
