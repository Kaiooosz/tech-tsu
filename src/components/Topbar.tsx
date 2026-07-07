"use client"
import { useEffect, useState } from "react"

const links = [
  { href: "#problema", label: "Problema" },
  { href: "#solucao",  label: "Solução"  },
  { href: "#case",     label: "Case"     },
  { href: "#processo", label: "Processo" },
]

export function Topbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64, padding: "0 40px",
        background: scrolled ? "rgba(7,8,9,0.88)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.3s ease",
      }}>
        {/* Logo */}
        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/mark-white.svg" alt="" width={28} height={28} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: "-0.04em", lineHeight: 1 }}>
            <span style={{ color: "var(--text)" }}>tech</span><span style={{ color: "var(--sky)" }}>tsu</span>
          </span>
        </a>

        {/* Nav */}
        <nav className="topbar-nav" style={{ display: "flex", gap: 32 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: 13, fontWeight: 500, color: "var(--muted)",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contato" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          height: 36, padding: "0 16px",
          background: "var(--teal)", color: "var(--bg)",
          fontSize: 13, fontWeight: 700, borderRadius: 4,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
          Marcar diagnóstico
        </a>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .topbar-nav { display: none !important; }
        }
      `}</style>
    </>
  )
}
