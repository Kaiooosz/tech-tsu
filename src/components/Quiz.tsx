"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type FormData = {
  objetivo: string
  gargalo: string
  tamanho: string
  nome: string
  whatsapp: string
  email: string
  empresa: string
}

const TOTAL = 4

const GARGALOS = [
  { id: "processos", label: "Processos manuais e planilhas", desc: "Perco tempo com tarefas repetitivas" },
  { id: "crm", label: "CRM / vendas desorganizados", desc: "Pipeline e clientes sem controle" },
  { id: "dados", label: "Falta de visibilidade dos dados", desc: "Não consigo enxergar o que está acontecendo" },
  { id: "automacao", label: "Quero automatizar algo específico", desc: "Tenho um processo em mente" },
]

const TAMANHOS = [
  { id: "1-5", label: "1 – 5 pessoas" },
  { id: "6-20", label: "6 – 20 pessoas" },
  { id: "21-100", label: "21 – 100 pessoas" },
  { id: "100+", label: "100+ pessoas" },
]

function OptionCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 18px",
        borderRadius: 8,
        border: selected ? "1px solid var(--teal)" : "1px solid var(--border-m)",
        background: selected ? "rgba(46,196,182,0.07)" : "var(--bg-3)",
        cursor: "pointer",
        textAlign: "left",
        transition: "border 0.18s, background 0.18s",
        width: "100%",
      }}
    >
      <span style={{
        width: 18, height: 18, borderRadius: 4, flexShrink: 0,
        border: selected ? "2px solid var(--teal)" : "1.5px solid rgba(255,255,255,0.2)",
        background: selected ? "var(--teal)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.18s",
      }}>
        {selected && (
          <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" stroke="#070809" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
      {children}
    </button>
  )
}

function ProgressBar({ step }: { step: number }) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
      {Array.from({ length: TOTAL }).map((_, i) => (
        <div key={i} style={{
          flex: 1, height: 3, borderRadius: 999,
          background: i < step ? "var(--teal)" : "rgba(255,255,255,0.1)",
          transition: "background 0.35s",
        }} />
      ))}
    </div>
  )
}

export function Quiz() {
  const [step, setStep] = useState(1)
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState<FormData>({
    objetivo: "", gargalo: "", tamanho: "",
    nome: "", whatsapp: "", email: "", empresa: "",
  })

  const set = (key: keyof FormData, val: string) =>
    setForm(f => ({ ...f, [key]: val }))

  const canContinue = () => {
    if (step === 1) return !!form.objetivo
    if (step === 2) return !!form.gargalo
    if (step === 3) return !!form.tamanho
    if (step === 4) return !!form.nome && !!form.whatsapp
    return false
  }

  async function submit() {
    setSending(true)
    setError("")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Erro ao enviar")
      setDone(true)
    } catch {
      setError("Algo deu errado. Tente novamente.")
    } finally {
      setSending(false)
    }
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center", padding: "48px 24px" }}
      >
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: "rgba(46,196,182,0.12)",
          border: "1px solid rgba(46,196,182,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px",
        }}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Recebemos seu pedido!</p>
        <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 320, margin: "0 auto" }}>
          Nossa equipe vai entrar em contato em até 24h via WhatsApp.
        </p>
      </motion.div>
    )
  }

  return (
    <div>
      <ProgressBar step={step} />
      <p style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>
        Passo {step} de {TOTAL}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.22 }}
        >
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h3 style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 700, marginBottom: 6 }}>
                O que você busca?
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>
                Escolha a melhor opção para começarmos.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { id: "orcamento", label: "Solicitar Orçamento", desc: "Quero saber valores e escopo do projeto" },
                  { id: "reuniao", label: "Agendar Reunião", desc: "Quero conversar com um especialista Tech TSU" },
                ].map(opt => (
                  <OptionCard key={opt.id} selected={form.objetivo === opt.id} onClick={() => set("objetivo", opt.id)}>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)" }}>{opt.label}</p>
                      <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{opt.desc}</p>
                    </div>
                  </OptionCard>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h3 style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 700, marginBottom: 6 }}>
                Qual é o maior gargalo hoje?
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>
                Isso nos ajuda a preparar o diagnóstico certo.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {GARGALOS.map(opt => (
                  <OptionCard key={opt.id} selected={form.gargalo === opt.id} onClick={() => set("gargalo", opt.id)}>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)" }}>{opt.label}</p>
                      <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{opt.desc}</p>
                    </div>
                  </OptionCard>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h3 style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 700, marginBottom: 6 }}>
                Tamanho da operação?
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>
                Quantas pessoas usariam o sistema?
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {TAMANHOS.map(opt => (
                  <OptionCard key={opt.id} selected={form.tamanho === opt.id} onClick={() => set("tamanho", opt.id)}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)" }}>{opt.label}</p>
                  </OptionCard>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div>
              <h3 style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 700, marginBottom: 6 }}>
                Seus dados de contato
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24 }}>
                Entraremos em contato em até 24h.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { key: "nome", label: "Nome *", placeholder: "Seu nome completo", required: true, type: "text" },
                  { key: "whatsapp", label: "WhatsApp *", placeholder: "(11) 99999-9999", required: true, type: "tel" },
                  { key: "email", label: "E-mail", placeholder: "seu@email.com", required: false, type: "email" },
                  { key: "empresa", label: "Empresa", placeholder: "Nome da empresa", required: false, type: "text" },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: "block", fontSize: 12, color: "var(--muted-2)", fontFamily: "var(--font-mono)", marginBottom: 6, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof FormData]}
                      onChange={e => set(f.key as keyof FormData, e.target.value)}
                      style={{
                        width: "100%", padding: "12px 14px",
                        background: "var(--bg-3)",
                        border: "1px solid var(--border-m)",
                        borderRadius: 6, color: "var(--text)",
                        fontSize: 14, outline: "none",
                        fontFamily: "inherit",
                        transition: "border 0.18s",
                      }}
                      onFocus={e => (e.target.style.borderColor = "var(--teal)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.14)")}
                    />
                  </div>
                ))}
              </div>
              {error && <p style={{ fontSize: 13, color: "#ff5f5f", marginTop: 12 }}>{error}</p>}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(s => s - 1)}
            style={{
              padding: "12px 20px", borderRadius: 6,
              border: "1px solid var(--border-m)",
              background: "transparent", color: "var(--muted)",
              fontSize: 14, cursor: "pointer", fontFamily: "inherit",
            }}
          >
            Voltar
          </button>
        )}
        <button
          type="button"
          disabled={!canContinue() || sending}
          onClick={step < TOTAL ? () => setStep(s => s + 1) : submit}
          style={{
            flex: 1, padding: "13px 20px", borderRadius: 6,
            background: canContinue() && !sending ? "var(--teal)" : "rgba(255,255,255,0.08)",
            color: canContinue() && !sending ? "#070809" : "var(--muted-2)",
            fontSize: 14, fontWeight: 700, cursor: canContinue() && !sending ? "pointer" : "not-allowed",
            border: "none", fontFamily: "inherit", transition: "all 0.18s",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}
        >
          {sending ? "Enviando..." : step < TOTAL ? "Continuar" : "Enviar"}
          {!sending && (
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
