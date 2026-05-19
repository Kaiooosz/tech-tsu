export function Contato() {
  return (
    <>
      <section
        id="contato"
        className="contato-section"
      >
        <div style={{ width: "min(720px,100%)" }}>
          <p className="eyebrow">Próxima conversa</p>
          <h2 style={{ color: "var(--chalk)" }}>Vamos encontrar o primeiro gargalo que vale virar sistema.</h2>
          <p style={{ color: "rgba(255,255,255,.72)" }}>
            O melhor início é um diagnóstico de 30 minutos com o fluxo comercial e operacional aberto na mesa.
          </p>
        </div>
        <a
          href="mailto:contato@techtsu.com.br?subject=Diagnóstico%20Tech%20Tsu"
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            minHeight: 48, padding: "0 28px", flexShrink: 0,
            background: "var(--teal)", color: "var(--ink)", fontWeight: 800,
          }}
        >
          Solicitar diagnóstico
        </a>
      </section>
      <style>{`
        .eyebrow { margin: 0 0 16px; color: var(--teal); font-size: 13px; font-weight: 900; text-transform: uppercase; }
        .contato-section {
          display: flex; gap: 28px; align-items: center; justify-content: space-between;
          padding: 88px 40px; background: var(--ink); color: var(--chalk);
        }
        @media (max-width: 980px) { .contato-section { align-items: flex-start; flex-direction: column; } }
        @media (max-width: 560px) { .contato-section { padding: 60px 20px; } }
      `}</style>
    </>
  )
}
