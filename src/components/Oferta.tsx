const cards = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Mapeamos entrada de leads, clientes, tarefas, documentos, prazos, indicadores e gargalos.",
  },
  {
    step: "02",
    title: "MVP operacional",
    desc: "Entregamos uma versão enxuta com os módulos que mais destravam a rotina da equipe.",
  },
  {
    step: "03",
    title: "Evolução mensal",
    desc: "Suporte, melhorias, automações, integrações e novas camadas de dados conforme o negócio cresce.",
  },
]

export function Oferta() {
  return (
    <>
      <section id="oferta" className="section-oferta">
        <div style={{ width: "min(760px,100%)", marginBottom: 34 }}>
          <p className="eyebrow">Oferta inicial</p>
          <h2>Uma primeira versão funcional antes de prometer o mundo.</h2>
        </div>
        <div className="offer-grid">
          {cards.map((c) => (
            <article key={c.step} className="offer-card">
              <span className="step-badge">{c.step}</span>
              <h3>{c.title}</h3>
              <p style={{ color: "var(--muted)" }}>{c.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <style>{`
        .section-oferta { padding: 88px 40px; }
        .eyebrow { margin: 0 0 16px; color: var(--teal); font-size: 13px; font-weight: 900; text-transform: uppercase; }
        h2 { margin: 0; font-size: clamp(29px,4vw,42px); line-height: 1.08; }
        h3 { margin: 30px 0 12px; font-size: 24px; }
        .offer-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
        .offer-card {
          min-height: 260px; padding: 28px;
          background: var(--chalk); border: 1px solid var(--line);
          box-shadow: 0 16px 44px rgba(13,17,23,.06);
        }
        .step-badge {
          display: inline-grid; width: 42px; height: 42px; place-items: center;
          background: var(--ink); color: var(--amber);
          font-family: ui-monospace,monospace; font-weight: 900;
        }
        @media (max-width: 980px) { .offer-grid { grid-template-columns: 1fr; } }
        @media (max-width: 560px) { .section-oferta { padding: 60px 20px; } }
      `}</style>
    </>
  )
}
