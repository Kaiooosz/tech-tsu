import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL not set")
}

export const sql = neon(process.env.DATABASE_URL)

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id         SERIAL PRIMARY KEY,
      objetivo   TEXT NOT NULL,
      gargalo    TEXT,
      tamanho    TEXT,
      nome       TEXT NOT NULL,
      whatsapp   TEXT NOT NULL,
      email      TEXT,
      empresa    TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `
}
