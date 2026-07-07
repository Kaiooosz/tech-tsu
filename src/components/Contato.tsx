"use client"
import { motion } from "framer-motion"
import { E, staggerContainer, childFadeUp, slideRight } from "@/lib/motion"

const trustPoints = [
  "Sem custo, sem compromisso",
  "Diagnóstico real do processo, não pitch comercial",
  "Proposta em até 48h após a conversa",
]

export function Contato() {
  return (
    <>
      <section id="contato" className="topology-bg" style={{
        padding: "96px 40px",
        background: "var(--bg-2)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background radial — breathe */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", bottom: "-25%", left: "50%",
            translateX: "-50%",
            width: 800, height: 500, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(46,196,182,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto",
            gap: 64, alignItems: "center",
          }} className="contato-grid">

            {/* Copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer(0.13)}
            >
              <motion.div variants={childFadeUp} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginBottom: 24, padding: "4px 12px",
                border: "1px solid rgba(46,196,182,0.2)", borderRadius: 999,
                fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "var(--teal)",
                fontFamily: "var(--font-mono)",
              }}>
                <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
                Diagnóstico gratuito
              </motion.div>

              <div style={{ overflow: "hidden" }}>
                <motion.h2
                  variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E, delay: 0.1 } } }}
                  style={{
                    fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 700,
                    lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 18,
                  }}
                >
                  Qual é o gargalo que<br />
                  <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300, fontStyle: "italic" }}>mais custa caro hoje?</span>
                </motion.h2>
              </div>

              <motion.p variants={childFadeUp} style={{ fontSize: 16, color: "var(--muted)", maxWidth: 520, lineHeight: 1.7, marginBottom: 36 }}>
                30 minutos com o fluxo real aberto na mesa. Sem PowerPoint de venda, sem proposta genérica. Saímos com uma lista do que vale virar sistema — e o que não vale.
              </motion.p>

              {/* Trust points — stagger */}
              <motion.div
                variants={staggerContainer(0.1)}
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {trustPoints.map(pt => (
                  <motion.div
                    key={pt}
                    variants={childFadeUp}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      style={{
                        width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                        background: "rgba(46,196,182,0.1)",
                        border: "1px solid rgba(46,196,182,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <svg width="8" height="8" fill="none" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                    <span style={{ fontSize: 14, color: "var(--muted)" }}>{pt}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA card — slide from right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={slideRight}
              whileHover={{ scale: 1.015, transition: { type: "spring", stiffness: 250, damping: 22 } }}
              style={{
                padding: "40px 36px",
                background: "var(--bg-3)",
                border: "1px solid var(--border-m)",
                borderRadius: 10,
                display: "flex", flexDirection: "column", gap: 20,
                minWidth: 280,
              }}
            >
              <div>
                <p style={{
                  fontSize: 11, fontFamily: "var(--font-mono)",
                  color: "var(--muted-2)", letterSpacing: "0.1em",
                  textTransform: "uppercase", marginBottom: 8,
                }}>
                  Primeiro passo
                </p>
                <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.5 }}>
                  Marque um diagnóstico<br />gratuito de 30 minutos.
                </p>
              </div>

              <motion.a
                href="mailto:contato@techtsu.com.br?subject=Diagnóstico%20Tech%20Tsu"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 18 }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  height: 48, borderRadius: 6,
                  background: "var(--teal)", color: "#070809",
                  fontSize: 14, fontWeight: 700,
                }}
              >
                Solicitar diagnóstico
                <motion.svg
                  width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </motion.svg>
              </motion.a>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                <p style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                  Ou fale diretamente
                </p>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/5511952364424"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ borderColor: "rgba(37,211,102,0.35)", color: "rgba(255,255,255,0.85)" }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 14px", borderRadius: 6,
                    border: "1px solid var(--border)",
                    color: "var(--muted)", fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25d366"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.07-1.115l-.292-.174-3.027.869.852-3.11-.19-.312A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" fill="#25d366"/>
                  </svg>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>(11) 95236-4424</span>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/tech.tsu"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ borderColor: "rgba(193,53,132,0.35)", color: "rgba(255,255,255,0.85)" }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 14px", borderRadius: 6,
                    border: "1px solid var(--border)",
                    color: "var(--muted)", fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="1.5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="url(#ig-grad)"/>
                    <defs>
                      <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f09433"/>
                        <stop offset="0.25" stopColor="#e6683c"/>
                        <stop offset="0.5" stopColor="#dc2743"/>
                        <stop offset="0.75" stopColor="#cc2366"/>
                        <stop offset="1" stopColor="#bc1888"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>@tech.tsu</span>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:contato@techtsu.com.br"
                  whileHover={{ color: "var(--text)" }}
                  transition={{ duration: 0.2 }}
                  style={{ color: "var(--muted-2)", fontFamily: "var(--font-mono)", fontSize: 11 }}
                >
                  contato@techtsu.com.br
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contato-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 560px) { #contato { padding: 64px 20px !important; } }
      `}</style>
    </>
  )
}
