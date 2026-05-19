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
      <section id="contato" style={{
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

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                <p style={{ fontSize: 12, color: "var(--muted-2)", lineHeight: 1.5, margin: 0 }}>
                  Ou fale diretamente:<br />
                  <motion.a
                    href="mailto:contato@techtsu.com.br"
                    whileHover={{ color: "var(--text)" }}
                    transition={{ duration: 0.2 }}
                    style={{
                      color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 11,
                    }}
                  >
                    contato@techtsu.com.br
                  </motion.a>
                </p>
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
