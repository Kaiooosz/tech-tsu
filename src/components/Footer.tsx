"use client"

const navLinks = [
  { href: "#problema", label: "Problema" },
  { href: "#solucao",  label: "Solução"  },
  { href: "#case",     label: "Case"     },
  { href: "#processo", label: "Processo" },
  { href: "#contato",  label: "Contato"  },
]

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--bg)",
      padding: "40px 40px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", flexWrap: "wrap", gap: 32,
          paddingBottom: 32, marginBottom: 24,
          borderBottom: "1px solid var(--border)",
        }}>
          {/* Brand */}
          <div>
            <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <img src="/mark.svg" alt="Tech Tsu" width={24} height={24} />
              <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em", color: "var(--text)" }}>Tech Tsu</span>
            </a>
            <p style={{ fontSize: 12, color: "var(--muted-2)", lineHeight: 1.6, maxWidth: 240 }}>
              Sistemas sob medida para operações de serviços que precisam sair da planilha.
            </p>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} style={{
                fontSize: 13, color: "var(--muted-2)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-2)")}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)" }}>
            TSUNOKAWA TECH LTDA · CNPJ 66.720.724/0001-18
          </span>
          <span style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)" }}>
            © {new Date().getFullYear()} Tech Tsu
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          footer { padding: 32px 20px 24px !important; }
        }
      `}</style>
    </footer>
  )
}
