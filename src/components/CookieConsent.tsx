"use client"
import { useEffect, useState } from "react"

const STORAGE_KEY = "tt-cookie-consent"

type Consent = {
  essential: true
  analytics: boolean
  marketing: boolean
  date: string
}

export function getCookieConsent(): Consent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Consent) : null
  } catch {
    return null
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const saved = getCookieConsent()
    if (!saved) {
      setVisible(true)
    } else {
      setAnalytics(saved.analytics)
      setMarketing(saved.marketing)
    }

    const reopen = () => {
      const current = getCookieConsent()
      if (current) {
        setAnalytics(current.analytics)
        setMarketing(current.marketing)
      }
      setExpanded(true)
      setVisible(true)
    }
    window.addEventListener("tt:cookie-preferences", reopen)
    return () => window.removeEventListener("tt:cookie-preferences", reopen)
  }, [])

  function save(consent: { analytics: boolean; marketing: boolean }) {
    const value: Consent = { essential: true, ...consent, date: new Date().toISOString() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    window.dispatchEvent(new CustomEvent("tt:cookie-consent", { detail: value }))
    setVisible(false)
    setExpanded(false)
  }

  if (!visible) return null

  const toggles = [
    {
      label: "Essenciais",
      desc: "Necessários ao funcionamento e à segurança do site. Sempre ativos.",
      value: true,
      locked: true,
      set: () => {},
    },
    {
      label: "Estatísticas",
      desc: "Medição de audiência e melhoria do site, de forma agregada.",
      value: analytics,
      locked: false,
      set: () => setAnalytics(v => !v),
    },
    {
      label: "Marketing",
      desc: "Personalização de campanhas e anúncios em outras plataformas.",
      value: marketing,
      locked: false,
      set: () => setMarketing(v => !v),
    },
  ]

  return (
    <div style={{
      position: "fixed", bottom: 16, left: 16, right: 16, zIndex: 9999,
      display: "flex", justifyContent: "center",
      pointerEvents: "none",
    }}>
      <div style={{
        pointerEvents: "auto",
        width: "100%", maxWidth: 560,
        background: "var(--bg-2)",
        border: "1px solid var(--border-m)",
        borderRadius: 14,
        padding: "22px 24px",
        boxShadow: "0 12px 48px rgba(0,0,0,0.45)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="var(--sky)" strokeWidth="1.6"/>
            <circle cx="9.5" cy="9.5" r="1.2" fill="var(--sky)"/>
            <circle cx="14.5" cy="13.5" r="1.2" fill="var(--sky)"/>
            <circle cx="10.5" cy="15" r="1.2" fill="var(--sky)"/>
          </svg>
          <span style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--sky)",
            fontFamily: "var(--font-mono)",
          }}>
            Cookies e privacidade
          </span>
        </div>

        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, marginBottom: expanded ? 18 : 16 }}>
          Usamos armazenamento essencial ao funcionamento do site. Recursos de estatística e
          marketing só rodam com o seu consentimento. Detalhes no{" "}
          <a href="/privacidade" style={{ color: "var(--sky)", textDecoration: "underline" }}>Aviso de Privacidade</a>.
        </p>

        {expanded && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
            {toggles.map(t => (
              <div key={t.label} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14,
                padding: "12px 14px",
                background: "var(--bg-3)",
                border: "1px solid var(--border)",
                borderRadius: 8,
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 3 }}>
                    {t.label}
                    {t.locked && (
                      <span style={{
                        marginLeft: 8, fontSize: 9, fontFamily: "var(--font-mono)",
                        color: "var(--muted-2)", letterSpacing: "0.1em", textTransform: "uppercase",
                      }}>
                        sempre ativos
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--muted-2)", lineHeight: 1.5 }}>{t.desc}</div>
                </div>
                <button
                  onClick={t.set}
                  disabled={t.locked}
                  aria-label={`${t.value ? "Desativar" : "Ativar"} cookies de ${t.label}`}
                  style={{
                    width: 38, height: 22, borderRadius: 999, flexShrink: 0,
                    border: "1px solid " + (t.value ? "rgba(44,85,232,0.5)" : "var(--border-m)"),
                    background: t.value ? "var(--teal)" : "var(--bg)",
                    position: "relative",
                    cursor: t.locked ? "default" : "pointer",
                    opacity: t.locked ? 0.55 : 1,
                    transition: "background 0.2s, border-color 0.2s",
                    padding: 0,
                  }}
                >
                  <span style={{
                    position: "absolute", top: 2,
                    left: t.value ? 18 : 2,
                    width: 16, height: 16, borderRadius: "50%",
                    background: "#fff",
                    transition: "left 0.2s ease",
                  }} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          {expanded ? (
            <button
              onClick={() => save({ analytics, marketing })}
              style={{
                height: 38, padding: "0 18px",
                background: "var(--teal)", color: "#fff",
                fontSize: 13, fontWeight: 700, borderRadius: 6,
                border: "none", cursor: "pointer", fontFamily: "inherit",
              }}
            >
              Salvar preferências
            </button>
          ) : (
            <button
              onClick={() => save({ analytics: true, marketing: true })}
              style={{
                height: 38, padding: "0 18px",
                background: "var(--teal)", color: "#fff",
                fontSize: 13, fontWeight: 700, borderRadius: 6,
                border: "none", cursor: "pointer", fontFamily: "inherit",
              }}
            >
              Aceitar todos
            </button>
          )}
          <button
            onClick={() => save({ analytics: false, marketing: false })}
            style={{
              height: 38, padding: "0 18px",
              background: "transparent", color: "var(--text)",
              fontSize: 13, fontWeight: 600, borderRadius: 6,
              border: "1px solid var(--border-m)", cursor: "pointer", fontFamily: "inherit",
            }}
          >
            Somente essenciais
          </button>
          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              style={{
                height: 38, padding: "0 6px",
                background: "transparent", color: "var(--muted)",
                fontSize: 13, fontWeight: 500,
                border: "none", cursor: "pointer", fontFamily: "inherit",
                textDecoration: "underline", textUnderlineOffset: 3,
              }}
            >
              Personalizar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
