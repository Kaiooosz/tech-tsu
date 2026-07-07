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
            <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <img src="/mark-white.svg" alt="" width={22} height={22} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: "-0.04em", lineHeight: 1 }}>
                <span style={{ color: "var(--text)" }}>tech</span><span style={{ color: "var(--sky)" }}>tsu</span>
              </span>
            </a>
            <p style={{ fontSize: 12, color: "var(--muted-2)", lineHeight: 1.6, maxWidth: 240 }}>
              Sistemas sob medida para operações de serviços que precisam sair da planilha.
            </p>
          </div>

          {/* Nav + Social */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-end" }}>
            <nav style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "flex-end" }}>
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

            {/* Social links */}
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://wa.me/5511952364424" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: 6, border: "1px solid var(--border)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.05)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "transparent" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25d366"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.07-1.115l-.292-.174-3.027.869.852-3.11-.19-.312A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" fill="#25d366"/>
                </svg>
              </a>
              <a href="https://instagram.com/tech.tsu" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: 6, border: "1px solid var(--border)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(193,53,132,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(193,53,132,0.05)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "transparent" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#C13584" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4.5" stroke="#C13584" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#C13584"/>
                </svg>
              </a>
            </div>
          </div>
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
