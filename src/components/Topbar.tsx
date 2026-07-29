"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { WA } from "@/lib/site"
import { E } from "@/lib/motion"

const links = [
  { href: "#problema", label: "Problema" },
  { href: "#solucao",  label: "Solução"  },
  { href: "#solucoes", label: "Soluções" },
  { href: "#vitrine",  label: "Vitrine"  },
  { href: "#empresa",  label: "Empresa"  },
  { href: "#disparos", label: "Disparos" },
]

export function Topbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64, padding: "0 40px",
        background: scrolled || open ? "rgba(25,27,33,0.88)" : "transparent",
        borderBottom: scrolled || open ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled || open ? "blur(20px)" : "none",
        transition: "all 0.3s ease",
      }} className="topbar">
        {/* Logo */}
        <a href="#inicio" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/mark-white.svg" alt="" width={28} height={28} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: "-0.04em", lineHeight: 1 }}>
            <span style={{ color: "var(--text)" }}>tech</span><span style={{ color: "var(--sky)" }}>tsu</span>
          </span>
        </a>

        {/* Nav */}
        <nav className="topbar-nav" style={{ display: "flex", gap: 26 }}>
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

        {/* Ações */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href={WA.geral}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="topbar-wa"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 36, height: 36, borderRadius: 6,
              border: "1px solid var(--border-m)",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(31,168,85,0.5)"; e.currentTarget.style.background = "rgba(31,168,85,0.10)" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-m)"; e.currentTarget.style.background = "transparent" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--text)">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.07-1.115l-.292-.174-3.027.869.852-3.11-.19-.312A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
            </svg>
          </a>

          <a href="#contato" className="topbar-cta" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            height: 36, padding: "0 16px",
            background: "var(--teal)", color: "#fff",
            fontSize: 13, fontWeight: 700, borderRadius: 4,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            Marcar diagnóstico
          </a>

          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="topbar-burger"
            style={{
              display: "none", alignItems: "center", justifyContent: "center",
              width: 36, height: 36, borderRadius: 6,
              border: "1px solid var(--border-m)", background: "transparent",
              color: "var(--text)", cursor: "pointer", padding: 0,
            }}
          >
            {open ? <X size={17} strokeWidth={2} /> : <Menu size={17} strokeWidth={2} />}
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: E }}
            className="topbar-menu"
            style={{
              position: "fixed", top: 64, left: 0, right: 0, bottom: 0, zIndex: 49,
              background: "rgba(25,27,33,0.97)",
              backdropFilter: "blur(20px)",
              padding: "28px 24px 40px",
              display: "flex", flexDirection: "column", gap: 4,
              overflowY: "auto",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + i * 0.05, ease: E }}
                style={{
                  padding: "16px 0", fontSize: 22, fontWeight: 600,
                  letterSpacing: "-0.02em", color: "var(--text)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {l.label}
              </motion.a>
            ))}

            <a
              href={WA.geral}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 24, height: 50,
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: "#1FA855", color: "#fff",
                fontSize: 15, fontWeight: 700, borderRadius: 8,
              }}
            >
              Falar no WhatsApp
            </a>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 10, height: 50,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                border: "1px solid var(--border-m)", color: "var(--text)",
                fontSize: 15, fontWeight: 600, borderRadius: 8,
              }}
            >
              Marcar diagnóstico gratuito
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) {
          .topbar-nav { display: none !important; }
          .topbar-burger { display: inline-flex !important; }
        }
        @media (max-width: 560px) {
          .topbar { padding: 0 20px !important; }
          .topbar-cta { display: none !important; }
        }
      `}</style>
    </>
  )
}
