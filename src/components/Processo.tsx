const steps = [
  { label: "Mapear",     desc: "Entender como a operação realmente funciona hoje." },
  { label: "Priorizar",  desc: "Escolher o menor escopo que gera controle e retorno." },
  { label: "Construir",  desc: "Criar o sistema com dados, permissões e telas de uso diário." },
  { label: "Evoluir",    desc: "Adicionar automações, relatórios e integrações conforme a equipe usa." },
]

export function Processo() {
  return (
    <>
      <section id="processo" style={{ padding: "88px 40px", background: "var(--paper)" }}>
        <div style={{ width: "min(760px,100%)", marginBottom: 34 }}>
          <p className="eyebrow">Como trabalhamos</p>
          <h2>Menos reunião vazia. Mais processo virando produto.</h2>
        </div>
        <ol className="process-list">
          {steps.map((s) => (
            <li key={s.label}>
              <span style={{ display: "block", color: "var(--coral)", fontSize: 20, fontWeight: 900 }}>{s.label}</span>
              <p style={{ color: "var(--muted)" }}>{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>
      <style>{`
        .eyebrow { margin: 0 0 16px; color: var(--teal); font-size: 13px; font-weight: 900; text-transform: uppercase; }
        .process-list {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 1px; margin: 0; padding: 0; list-style: none;
          background: var(--line);
        }
        .process-list li { min-height: 210px; padding: 28px; background: var(--chalk); }
        @media (max-width: 980px) { .process-list { grid-template-columns: 1fr; } }
        @media (max-width: 560px) { #processo { padding: 60px 20px !important; } }
      `}</style>
    </>
  )
}
