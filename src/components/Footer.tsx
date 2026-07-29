"use client"
import { EMPRESA, WA } from "@/lib/site"

const navLinks = [
  { href: "#problema", label: "Problema" },
  { href: "#solucao",  label: "Como entregamos" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#segmentos", label: "Segmentos" },
  { href: "#comparativo", label: "Por que sob medida" },
  { href: "#processo", label: "Processo" },
  { href: "#vitrine",  label: "Vitrine" },
  { href: "#empresa",  label: "A empresa" },
  { href: "#seguranca", label: "Segurança e LGPD" },
]

const solucaoLinks = [
  { href: "#solucoes", label: "CRM e pipeline comercial" },
  { href: "#solucoes", label: "ERP e gestão operacional" },
  { href: "#solucoes", label: "Agente de IA de atendimento" },
  { href: "#disparos", label: "Disparos via API Oficial" },
  { href: "#solucoes", label: "Dashboards e BI" },
  { href: "#ferramentas", label: "Ferramentas próprias" },
]

const linkStyle = {
  fontSize: 13, color: "var(--muted-2)",
  transition: "color 0.2s", lineHeight: 1.9,
} as const

function hoverIn(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "var(--text)"
}
function hoverOut(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "var(--muted-2)"
}

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--bg)",
      padding: "64px 40px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Colunas */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr",
          gap: 40,
          paddingBottom: 40, marginBottom: 24,
          borderBottom: "1px solid var(--border)",
        }} className="footer-cols">

          {/* Marca */}
          <div>
            <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <img src="/mark-white.svg" alt="" width={24} height={24} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: "-0.04em", lineHeight: 1 }}>
                <span style={{ color: "var(--text)" }}>tech</span><span style={{ color: "var(--sky)" }}>tsu</span>
              </span>
            </a>
            <p style={{ fontSize: 13, color: "var(--muted-2)", lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              Software sob medida para operações de serviços que não cabem mais em planilha.
              Diagnóstico, MVP em semanas e evolução mensal — com agente de IA de atendimento em todo contrato.
            </p>
            <div style={{
              fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
              lineHeight: 1.9,
            }}>
              <div>{EMPRESA.razaoSocial}</div>
              <div>CNPJ {EMPRESA.cnpj}</div>
              <div>{EMPRESA.praca}</div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <p style={{
              fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
              letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14,
            }}>
              Navegação
            </p>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {navLinks.map(l => (
                <a key={l.label} href={l.href} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Soluções */}
          <div>
            <p style={{
              fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
              letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14,
            }}>
              Soluções
            </p>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {solucaoLinks.map(l => (
                <a key={l.label} href={l.href} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <p style={{
              fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
              letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14,
            }}>
              Contato
            </p>

            <a
              href={WA.geral}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9,
                height: 42, padding: "0 18px", marginBottom: 16,
                background: "#1FA855", color: "#fff",
                fontSize: 13.5, fontWeight: 700, borderRadius: 6,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.07-1.115l-.292-.174-3.027.869.852-3.11-.19-.312A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
              </svg>
              Falar no WhatsApp
            </a>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <a href={WA.geral} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                {EMPRESA.whatsappDisplay}
              </a>
              <a href={`mailto:${EMPRESA.emailComercial}`} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                {EMPRESA.emailComercial}
              </a>
              <a href={EMPRESA.instagramUrl} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                Instagram {EMPRESA.instagram}
              </a>
              <a href="#contato" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                Marcar diagnóstico gratuito
              </a>
            </div>
          </div>
        </div>

        {/* Linha final */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)" }}>
            © {new Date().getFullYear()} {EMPRESA.razaoSocial}
          </span>
          <span style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a href="/termos" style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", transition: "color 0.2s" }}
              onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
              Termos de Uso
            </a>
            <a href="/privacidade" style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", transition: "color 0.2s" }}
              onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
              Aviso de Privacidade
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("tt:cookie-preferences"))}
              style={{
                fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)",
                background: "transparent", border: "none", padding: 0,
                cursor: "pointer", transition: "color 0.2s",
              }}
              onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
              Gerenciar cookies
            </button>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          footer { padding: 48px 20px 24px !important; }
          .footer-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
