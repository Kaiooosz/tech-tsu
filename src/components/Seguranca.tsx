"use client"
import { motion } from "framer-motion"
import { KeyRound, UserLock, Scale, DatabaseBackup, BadgeCheck, ServerCog } from "lucide-react"
import { E, staggerContainer } from "@/lib/motion"

const pilares = [
  {
    icon: KeyRound,
    title: "Código e banco no seu nome",
    desc: "Repositório, banco e domínio ficam em contas da sua empresa. Se um dia quiser trocar de fornecedor, você troca — sem dado sequestrado como argumento de renovação.",
  },
  {
    icon: UserLock,
    title: "Permissão por perfil",
    desc: "Cada função enxerga o que precisa enxergar. Vendedor, operação, gestor e sócio não abrem a mesma tela nem o mesmo relatório.",
  },
  {
    icon: Scale,
    title: "LGPD desde a modelagem",
    desc: "Base legal, finalidade, retenção e trilha de auditoria entram no desenho do sistema — não viram remendo depois da primeira reclamação de titular.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup e histórico de alteração",
    desc: "Banco gerenciado com backup contínuo e registro de quem mudou o quê e quando. Erro humano deixa de ser perda definitiva.",
  },
  {
    icon: BadgeCheck,
    title: "WhatsApp só pela API Oficial",
    desc: "Sem automação por WhatsApp Web e sem chip aquecido na gambiarra. Conta homologada na Meta, template aprovado e opt-out registrado em cada campanha.",
  },
  {
    icon: ServerCog,
    title: "Validação no servidor",
    desc: "Regra crítica roda na API, nunca só no navegador. O que o usuário consegue ver na tela não é o que protege o seu dado.",
  },
]

export function Seguranca() {
  return (
    <>
      <section id="seguranca" style={{ padding: "96px 40px", background: "var(--paper-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: E }}
            style={{ marginBottom: 48, maxWidth: 720 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid rgba(44,85,232,0.25)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--teal)",
              fontFamily: "var(--font-mono)", background: "rgba(44,85,232,0.06)",
            }}>
              Segurança e conformidade
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700,
              lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16,
              color: "var(--ink)",
            }}>
              O dado é seu.<br />
              <span style={{ color: "var(--muted-ink)", fontWeight: 300, fontStyle: "italic" }}>A operação também.</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--muted-ink)", lineHeight: 1.65 }}>
              Sistema sob medida só faz sentido se você não virar refém de quem construiu.
              Por isso a estrutura de acesso, retenção e propriedade entra no projeto desde a primeira reunião.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            variants={staggerContainer(0.07)}
            style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16, marginBottom: 40,
            }}
            className="seguranca-grid"
          >
            {pilares.map(p => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
                }}
                whileHover={{ y: -3, boxShadow: "var(--shadow-md)" } as never}
                style={{
                  padding: "28px 26px",
                  background: "#fff",
                  border: "1px solid var(--border-light)",
                  borderRadius: 12,
                  boxShadow: "var(--shadow-sm)",
                  display: "flex", flexDirection: "column", gap: 12,
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 9,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(44,85,232,0.07)",
                  border: "1px solid rgba(44,85,232,0.16)",
                }}>
                  <p.icon size={18} strokeWidth={1.7} color="var(--teal)" />
                </div>
                <h3 style={{ fontSize: 16.5, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--muted-ink)", lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 12.5, color: "var(--muted-ink)", lineHeight: 1.8,
              borderTop: "1px solid var(--border-light)", paddingTop: 24,
            }}
          >
            Tratamento de dados do próprio site descrito no{" "}
            <a href="/privacidade" style={{ color: "var(--teal)", fontWeight: 600 }}>Aviso de Privacidade</a>{" "}
            e nos{" "}
            <a href="/termos" style={{ color: "var(--teal)", fontWeight: 600 }}>Termos de Uso</a>.
            Encarregado de dados pelo e-mail de contato.
          </motion.p>

        </div>
      </section>

      <style>{`
        @media (max-width: 980px) { .seguranca-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) {
          #seguranca { padding: 64px 20px !important; }
          .seguranca-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
