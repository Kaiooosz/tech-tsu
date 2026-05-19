export function Case() {
  return (
    <>
      <section id="case" className="case-band">
        <div className="case-copy">
          <p className="eyebrow">Projeto vendido</p>
          <h2>BBLAW: ERP/CRM jurídico sob medida.</h2>
          <p style={{ color: "var(--muted)" }}>
            Plataforma para centralizar leads, clientes, ordens de serviço, documentos,
            agenda, WhatsApp, controle de acesso e propostas comerciais.
          </p>
          <dl className="case-dl">
            {[
              { dt: "Fluxo", dd: "Lead até execução" },
              { dt: "Equipe", dd: "Perfis e permissões" },
              { dt: "Operação", dd: "Kanban, tarefas e prazos" },
            ].map((item) => (
              <div key={item.dt} style={{ padding: 18, background: "rgba(255,255,255,.62)", border: "1px solid var(--line)" }}>
                <dt style={{ fontSize: 13, fontWeight: 900, color: "var(--steel)" }}>{item.dt}</dt>
                <dd style={{ margin: "6px 0 0", fontWeight: 800 }}>{item.dd}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Mock dashboard */}
        <div className="case-visual" aria-label="Mockup de dashboard operacional">
          <div style={{ display: "flex", gap: 10, alignItems: "center", height: 46, padding: "0 20px", background: "rgba(255,255,255,.08)" }}>
            {["var(--coral)","var(--amber)","var(--teal)"].map((c, i) => (
              <span key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "118px 1fr", minHeight: 384 }}>
            <aside style={{ display: "flex", flexDirection: "column", gap: 18, padding: "28px 20px", background: "rgba(255,255,255,.06)" }}>
              {[1,2,3,4].map((i) => <span key={i} style={{ height: 14, background: "rgba(255,255,255,.22)" }} />)}
            </aside>
            <div style={{ padding: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {["128","42","09"].map((n) => (
                  <strong key={n} style={{ display: "grid", minHeight: 88, placeItems: "center", background: "var(--paper)", color: "var(--ink)", fontFamily: "ui-monospace,monospace", fontSize: 30 }}>{n}</strong>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 18 }}>
                {["var(--teal)","var(--amber)","var(--coral)"].map((c, i) => (
                  <span key={i} style={{ height: 108, background: "rgba(255,255,255,.12)", borderTop: `5px solid ${c}` }} />
                ))}
              </div>
              <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
                {[1,2,3].map((i) => <span key={i} style={{ height: 16, background: "rgba(255,255,255,.18)" }} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .eyebrow { margin: 0 0 16px; color: var(--teal); font-size: 13px; font-weight: 900; text-transform: uppercase; }
        .case-band {
          display: grid; grid-template-columns: .92fr 1.08fr;
          gap: 44px; align-items: center; padding: 88px 40px;
          background: var(--mist);
        }
        .case-dl { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin: 30px 0 0; }
        .case-visual { min-height: 430px; overflow: hidden; background: var(--ink); box-shadow: var(--shadow); }
        @media (max-width: 980px) {
          .case-band { grid-template-columns: 1fr; }
          .case-dl { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) { .case-band { padding: 60px 20px; } }
      `}</style>
    </>
  )
}
