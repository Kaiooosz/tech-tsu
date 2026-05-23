import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not set")
}

export const sql = neon(process.env.DATABASE_URL)

let _initDone = false

export async function initDb() {
  if (_initDone) return
  // Tabela base — campos legados continuam aceitos
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
  // Migrações aditivas — só adiciona colunas que não existem
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS segmento TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS segmento_outro TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS servicos JSONB DEFAULT '[]'::jsonb`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS servicos_outro TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS ferramenta_atual TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS ferramenta_outro TEXT`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS gargalos JSONB DEFAULT '[]'::jsonb`
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS urgencia TEXT`
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
