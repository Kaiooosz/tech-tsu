"use client"
import { motion } from "framer-motion"
import { staggerContainer, childFadeUp, E } from "@/lib/motion"
import { Quiz } from "@/components/Quiz"

const trustPoints = [
  "Sem custo, sem compromisso",
  "Diagnóstico real do processo, não pitch comercial",
  "Proposta em até 48h após a conversa",
]

export function ContatoLeads() {
  return (
    <>
      <section id="contato" className="topology-bg" style={{
        padding: "96px 40px",
        background: "var(--bg-2)",
        position: "relative", overflow: "hidden",
      }}>
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

        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Copy header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.13)}
            style={{ textAlign: "center", marginBottom: 36 }}
          >
            <motion.div variants={childFadeUp} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 22, padding: "4px 12px",
              border: "1px solid rgba(46,196,182,0.25)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--teal)",
              fontFamily: "var(--font-mono)",
            }}>
              <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
              Diagnóstico gratuito · 6 etapas
            </motion.div>

            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E, delay: 0.1 } } }}
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700,
                  lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16,
                }}
              >
                Qual é o gargalo que<br />
                <span style={{ color: "rgba(255,255,255,0.32)", fontWeight: 300, fontStyle: "italic" }}>mais custa caro hoje?</span>
              </motion.h2>
            </div>

            <motion.p variants={childFadeUp} style={{ fontSize: 15, color: "var(--muted)", maxWidth: 520, margin: "0 auto 24px", lineHeight: 1.7 }}>
              Preencha o formulário abaixo e nosso especialista entra em contato em até 24h úteis com um diagnóstico real — sem PowerPoint de venda.
            </motion.p>

            {/* Trust points inline */}
            <motion.div
              variants={staggerContainer(0.08)}
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 18 }}
            >
              {trustPoints.map(pt => (
                <motion.div
                  key={pt}
                  variants={childFadeUp}
                  style={{ display: "flex", alignItems: "center", gap: 7 }}
                >
                  <div style={{
                    width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                    background: "rgba(46,196,182,0.1)",
                    border: "1px solid rgba(46,196,182,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="8" height="8" fill="none" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" stroke="var(--teal)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>{pt}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quiz card — full width */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: E }}
            style={{
              padding: "30px 28px",
              background: "var(--bg-3)",
              border: "1px solid var(--border-m)",
              borderRadius: 14,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 1,
              background: "linear-gradient(90deg, transparent, rgba(46,196,182,0.4), transparent)",
            }} />
            <Quiz />
          </motion.div>

          {/* Secondary contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: "center", marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}
          >
            <p style={{ fontSize: 12, color: "var(--muted-2)", lineHeight: 1.6 }}>
              Ou fale diretamente:{" "}
              <a href="mailto:contato@techtsu.com.br"
                style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 11, transition: "color 0.2s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--teal)")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
              >
                contato@techtsu.com.br
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 560px) {
          #contato { padding: 64px 16px !important; }
        }
      `}</style>
    </>
  )
}
