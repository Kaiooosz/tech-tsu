export function Topbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 72,
        padding: "0 40px",
        background: "rgba(247,248,244,0.92)",
        borderBottom: "1px solid var(--line)",
        backdropFilter: "blur(14px)",
      }}
    >
      <a
        href="#inicio"
        style={{ display: "inline-flex", alignItems: "center", gap: 12, fontWeight: 800 }}
        aria-label="Tech Tsu"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mark.svg" alt="" width={36} height={36} />
        <span>Tech Tsu</span>
      </a>

      <nav style={{ display: "flex", alignItems: "center", gap: 28, color: "var(--muted)", fontSize: 14, fontWeight: 700 }}>
        <a href="#oferta" className="nav-link">Oferta</a>
        <a href="#case" className="nav-link">Case</a>
        <a href="#processo" className="nav-link">Processo</a>
        <a href="#contato" className="nav-link">Contato</a>
      </nav>

      <style>{`
        .nav-link:hover { color: var(--ink); }
        @media (max-width: 980px) { nav { display: none; } }
      `}</style>
    </header>
  )
}
