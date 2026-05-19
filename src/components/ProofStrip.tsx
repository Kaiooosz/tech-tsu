const items = ["CRM", "ERP leve", "Dashboards", "WhatsApp", "Documentos", "IA aplicada"]

export function ProofStrip() {
  return (
    <>
      <div className="proof-strip" aria-label="Resumo da proposta">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <style>{`
        .proof-strip {
          display: grid;
          grid-template-columns: repeat(6,1fr);
          gap: 1px;
          background: var(--line);
          border-bottom: 1px solid var(--line);
        }
        .proof-strip span {
          display: grid; min-height: 74px; place-items: center;
          background: var(--paper); color: var(--muted);
          font-size: 14px; font-weight: 900;
        }
        @media (max-width: 980px) { .proof-strip { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 560px) { .proof-strip { grid-template-columns: repeat(2,1fr); } }
      `}</style>
    </>
  )
}
