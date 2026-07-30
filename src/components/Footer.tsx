"use client"
import { EMPRESA, WA } from "@/lib/site"

const navLinks = [
  { href: "#problema",    label: "Problema" },
  { href: "#solucao",     label: "Como trabalhamos" },
  { href: "#solucoes",    label: "Soluções" },
  { href: "#segmentos",   label: "Segmentos" },
  { href: "#comparativo", label: "Por que sob medida" },
  { href: "#processo",    label: "Nosso processo" },
]

const solucaoLinks = [
  { href: "#solucoes",    label: "CRM e pipeline comercial" },
  { href: "#solucoes",    label: "ERP e gestão operacional" },
  { href: "#solucoes",    label: "Agente de IA de atendimento" },
  { href: "#disparos",    label: "Disparos via API Oficial" },
  { href: "#ferramentas", label: "Ferramentas próprias" },
  { href: "#seguranca",   label: "Segurança e LGPD" },
]

const provaLinks = [
  { href: "#case",        label: "Antes vs Depois" },
  { href: "#vitrine",     label: "Vitrine de entregas" },
  { href: "#empresa",     label: "A empresa" },
  { href: "/termos",      label: "Termos de Uso" },
  { href: "/privacidade", label: "Aviso de Privacidade" },
]

const linkStyle = {
  fontSize: 13, color: "var(--muted-2)",
  transition: "color 0.2s", lineHeight: 2,
} as const

const colunaTitulo = {
  fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
  letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14,
} as const

const redeStyle = {
  display: "flex", alignItems: "center", justifyContent: "center",
  width: 38, height: 38, borderRadius: 8,
  border: "1px solid var(--border)",
  color: "var(--muted-2)",
  transition: "border-color 0.2s, color 0.2s",
} as const

function hoverIn(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "var(--text)"
}
function hoverOut(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "var(--muted-2)"
}
function redeIn(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.borderColor = "rgba(143,168,255,0.4)"
  e.currentTarget.style.color = "var(--sky)"
}
function redeOut(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.borderColor = "var(--border)"
  e.currentTarget.style.color = "var(--muted-2)"
}

const iconeWa = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.07-1.115l-.292-.174-3.027.869.852-3.11-.19-.312A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
  </svg>
)

export function Footer() {
  return (
    <footer style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>

      {/* Fechamento */}
      <div style={{
        position: "relative",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "72px 40px",
      }} className="footer-cta">
        <div className="circuit-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }} />
        <div style={{
          position: "absolute", top: "-45%", left: "50%", transform: "translateX(-50%)",
          width: 760, height: 760, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(44,85,232,0.16) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "relative", maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 40, flexWrap: "wrap",
        }}>
          <div>
            <h2 style={{
              fontSize: "clamp(26px, 3.4vw, 40px)", fontWeight: 700,
              letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text)",
              marginBottom: 14, maxWidth: 560,
            }}>
              Vamos mapear a sua operação?<br />
              <span style={{ color: "rgba(245,242,235,0.42)", fontWeight: 300, fontStyle: "italic" }}>
                O diagnóstico não custa nada.
              </span>
            </h2>
            <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.7, maxWidth: 470 }}>
              30 a 60 minutos para entender o processo real, nomear os gargalos e dizer o que dá
              para entregar primeiro. Sem PowerPoint de venda.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href={WA.diagnostico}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                height: 52, padding: "0 26px",
                background: "var(--teal)", color: "#fff",
                fontSize: 15, fontWeight: 700, borderRadius: 8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {iconeWa}
              Falar no WhatsApp agora
            </a>
            <a
              href="#contato"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                height: 52, padding: "0 26px",
                border: "1px solid var(--border-m)", color: "var(--muted)",
                fontSize: 15, fontWeight: 600, borderRadius: 8,
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)" }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border-m)" }}
            >
              Responder o formulário
            </a>
          </div>
        </div>
      </div>

      {/* Colunas */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 0" }} className="footer-corpo">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 40, paddingBottom: 40,
        }} className="footer-cols">

          {/* Marca */}
          <div>
            <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
              <img src="/mark-white.svg" alt="" width={26} height={26} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: "-0.04em", lineHeight: 1 }}>
                <span style={{ color: "var(--text)" }}>tech</span><span style={{ color: "var(--sky)" }}>tsu</span>
              </span>
            </a>
            <p style={{ fontSize: 13, color: "var(--muted-2)", lineHeight: 1.75, maxWidth: 290, marginBottom: 22 }}>
              Software sob medida para operações de serviços que não cabem mais em planilha.
              Agente de IA de atendimento em todo contrato.
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              <a href={WA.geral} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                style={redeStyle} onMouseEnter={redeIn} onMouseLeave={redeOut}>
                {iconeWa}
              </a>
              <a href={EMPRESA.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={redeStyle} onMouseEnter={redeIn} onMouseLeave={redeOut}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/>
                </svg>
              </a>
              <a href={`mailto:${EMPRESA.emailComercial}`} aria-label="E-mail"
                style={redeStyle} onMouseEnter={redeIn} onMouseLeave={redeOut}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p style={colunaTitulo}>Navegação</p>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {navLinks.map(l => (
                <a key={l.label} href={l.href} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p style={colunaTitulo}>Soluções</p>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {solucaoLinks.map(l => (
                <a key={l.label} href={l.href} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p style={colunaTitulo}>Prova e legal</p>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {provaLinks.map(l => (
                <a key={l.label} href={l.href} style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("tt:cookie-preferences"))}
                style={{
                  ...linkStyle, background: "transparent", border: "none",
                  padding: 0, cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                }}
                onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                Gerenciar cookies
              </button>
            </nav>
          </div>
        </div>

        {/* Linha final */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
          padding: "22px 0 30px",
          borderTop: "1px solid var(--border)",
          fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--muted-2)",
        }}>
          <span>{EMPRESA.razaoSocial} · CNPJ {EMPRESA.cnpj}</span>
          <span>{EMPRESA.praca}</span>
          <span>© {new Date().getFullYear()} Tech Tsu</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .footer-cta   { padding: 56px 20px !important; }
          .footer-corpo { padding: 44px 20px 0 !important; }
          .footer-cols  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
