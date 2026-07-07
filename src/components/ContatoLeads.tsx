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
            style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--border)" }}
          >
            <p style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", marginBottom: 14 }}>
              Ou fale diretamente
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              {/* WhatsApp */}
              <a href="https://wa.me/5511952364424" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 8, border: "1px solid var(--border)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.06)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "transparent" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25d366"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.95-1.418A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.07-1.115l-.292-.174-3.027.869.852-3.11-.19-.312A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" fill="#25d366"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/tech.tsu" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 8, border: "1px solid var(--border)", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(193,53,132,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(193,53,132,0.06)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "transparent" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#C13584" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4.5" stroke="#C13584" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#C13584"/>
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:contato@techtsu.com.br"
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 6, border: "1px solid var(--border)", color: "var(--muted)", fontSize: 13, fontFamily: "var(--font-mono)", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-m)"; (e.currentTarget as HTMLElement).style.color = "var(--text)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                  <path d="M2 8l10 6 10-6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                contato@techtsu.com.br
              </a>
            </div>
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
