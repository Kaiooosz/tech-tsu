"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { WA } from "@/lib/site"
import { E } from "@/lib/motion"

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 520)
    fn()
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WA.geral}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Tech Tsu no WhatsApp"
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          transition={{ duration: 0.35, ease: E }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          whileTap={{ scale: 0.95 }}
          style={{
            position: "fixed", right: 24, bottom: 24, zIndex: 55,
            display: "inline-flex", alignItems: "center", gap: 10,
            height: 52, padding: hover ? "0 20px 0 16px" : "0 15px",
            borderRadius: 999,
            background: "var(--teal)",
            color: "#fff", fontWeight: 700, fontSize: 14,
            boxShadow: "0 10px 30px rgba(44,85,232,0.35), 0 2px 8px rgba(0,0,0,0.25)",
            transition: "padding 0.25s ease",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.07-1.115l-.292-.174-3.027.869.852-3.11-.19-.312A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
          </svg>
          <AnimatePresence initial={false}>
            {hover && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.22, ease: E }}
                style={{ overflow: "hidden", display: "inline-block" }}
              >
                Falar no WhatsApp
              </motion.span>
            )}
          </AnimatePresence>
          <span
            className="pulse-dot"
            style={{
              position: "absolute", top: 6, right: 6,
              width: 8, height: 8, borderRadius: "50%",
              background: "var(--sky)", border: "2px solid var(--teal)",
            }}
          />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
