import type { ReactNode } from "react"

export function LegalPage({ title, subtitle, updated, children }: {
  title: string
  subtitle: string
  updated: string
  children: ReactNode
}) {
  return (
    <>
      <header style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64, padding: "0 40px",
        background: "var(--bg)", borderBottom: "1px solid var(--border)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/mark-white.svg" alt="" width={28} height={28} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: "-0.04em", lineHeight: 1 }}>
            <span style={{ color: "var(--text)" }}>tech</span><span style={{ color: "var(--sky)" }}>tsu</span>
          </span>
        </a>
        <a href="/" style={{
          fontSize: 13, fontWeight: 500, color: "var(--muted)",
          display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar ao site
        </a>
      </header>

      <main className="legal section-light" style={{ padding: "72px 40px 96px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: 20, padding: "4px 12px",
            border: "1px solid rgba(44,85,232,0.25)", borderRadius: 999,
            fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--teal)",
            fontFamily: "var(--font-mono)",
            background: "rgba(44,85,232,0.06)",
          }}>
            {subtitle}
          </div>
          <h1 style={{
            fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700,
            lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 14,
            color: "var(--ink)",
          }}>
            {title}
          </h1>
          <p style={{
            fontSize: 12, fontFamily: "var(--font-mono)",
            color: "var(--muted-ink-2)", letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: 48,
            paddingBottom: 24, borderBottom: "1px solid var(--border-light)",
          }}>
            Última atualização: {updated}
          </p>

          {children}
        </div>
      </main>

      <footer style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)", padding: "24px 40px",
      }}>
        <div style={{
          maxWidth: 780, margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)" }}>
            TSUNOKAWA TECH LTDA · CNPJ 66.720.724/0001-18 · Barueri/SP
          </span>
          <span style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)" }}>
            © {new Date().getFullYear()} Tech Tsu
          </span>
        </div>
      </footer>

      <style>{`
        .legal h2 {
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 44px 0 14px;
        }
        .legal h2:first-of-type { margin-top: 0; }
        .legal h3 {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 26px 0 10px;
        }
        .legal p {
          font-size: 15px;
          color: var(--muted-ink);
          line-height: 1.75;
          margin: 0 0 14px;
        }
        .legal ul {
          list-style: disc;
          margin: 0 0 14px;
          padding-left: 22px;
        }
        .legal li {
          font-size: 15px;
          color: var(--muted-ink);
          line-height: 1.75;
          margin-bottom: 8px;
        }
        .legal strong { color: var(--ink); font-weight: 600; }
        .legal a { color: var(--teal); }
        .legal a:hover { text-decoration: underline; }
        @media (max-width: 560px) {
          .legal { padding: 48px 20px 64px !important; }
        }
      `}</style>
    </>
  )
}
