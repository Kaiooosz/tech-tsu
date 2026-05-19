export function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "78vh",
        overflow: "hidden",
        display: "grid",
        alignItems: "center",
        padding: "86px 40px 80px",
        background: "var(--ink)",
        color: "var(--chalk)",
      }}
    >
      {/* Scene background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
            backgroundSize: "88px 88px",
            opacity: 0.32,
          }}
        />

        {/* Panel A — metrics */}
        <div className="system-panel panel-a">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--teal)", flexShrink: 0 }} />
            <span style={{ height: 10, width: 112, background: "rgba(255,255,255,.34)" }} />
            <span style={{ marginLeft: "auto", color: "var(--amber)", fontFamily: "ui-monospace,monospace", fontSize: 36, fontWeight: 800 }}>42</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 72, marginTop: 30 }}>
            {[24, 42, 56, 34, 64].map((h, i) => (
              <span
                key={i}
                style={{
                  display: "block", width: 24, height: h,
                  background: i === 1 ? "var(--teal)" : i === 2 ? "var(--amber)" : i === 4 ? "var(--coral)" : "rgba(255,255,255,.28)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Panel B — pipeline */}
        <div className="system-panel panel-b">
          <div style={{ marginBottom: 22, color: "rgba(255,255,255,.72)", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>Pipeline</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
            {["var(--teal)","var(--amber)","var(--coral)","var(--steel)"].map((c, i) => (
              <span key={i} style={{ height: 80, background: "rgba(255,255,255,.18)", borderTop: `5px solid ${c}` }} />
            ))}
          </div>
        </div>

        {/* Panel C — tasks */}
        <div className="system-panel panel-c">
          <div style={{ marginBottom: 22, color: "rgba(255,255,255,.72)", fontSize: 13, fontWeight: 800, textTransform: "uppercase" }}>Operacao</div>
          {["var(--teal)","var(--amber)","var(--coral)"].map((c, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "22px 1fr", alignItems: "center", gap: 12, marginTop: 18 }}>
              <span style={{ width: 22, height: 22, background: c }} />
              <span style={{ height: 12, background: "rgba(255,255,255,.32)" }} />
            </div>
          ))}
        </div>

        {/* Signals */}
        <div style={{ position: "absolute", width: 170, height: 170, border: "1px solid rgba(46,196,182,.45)", top: "16%", left: "54%" }} />
        <div style={{ position: "absolute", width: 170, height: 170, border: "1px solid rgba(246,200,95,.48)", right: "7%", bottom: "8%" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, width: "min(720px,100%)", maxWidth: "calc(100vw - 80px)" }}>
        <p style={{ margin: "0 0 16px", color: "var(--teal)", fontSize: 13, fontWeight: 900, textTransform: "uppercase" }}>
          Software sob medida / Automação / Operação
        </p>
        <h1 style={{ margin: 0, fontSize: "clamp(46px,7vw,74px)", lineHeight: 0.95 }}>Tech Tsu</h1>
        <p style={{ maxWidth: 640, margin: "26px 0 0", color: "rgba(255,255,255,.82)", fontSize: "clamp(18px,2.5vw,22px)" }}>
          Sistemas sob medida para empresas de serviços que precisam sair da planilha, organizar o WhatsApp e transformar processo real em gestão.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
          <a href="#contato" className="btn-primary">Marcar diagnóstico</a>
          <a href="#case" className="btn-ghost">Ver prova comercial</a>
        </div>
      </div>

      <style>{`
        .system-panel {
          position: absolute; width: 280px; min-height: 160px; padding: 22px;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(247,248,244,.1);
          box-shadow: 0 22px 70px rgba(0,0,0,.28);
          backdrop-filter: blur(12px);
        }
        .panel-a { top: 18%; right: 14%; }
        .panel-b { right: 30%; bottom: 13%; }
        .panel-c { top: 33%; right: -28px; }
        .btn-primary {
          display: inline-flex; align-items: center; justify-content: center;
          min-height: 48px; padding: 0 20px;
          background: var(--teal); color: var(--ink); font-weight: 800;
        }
        .btn-ghost {
          display: inline-flex; align-items: center; justify-content: center;
          min-height: 48px; padding: 0 20px;
          border: 1px solid rgba(255,255,255,.3); color: var(--chalk); font-weight: 800;
        }
        @media (max-width: 980px) {
          .panel-a { right: -70px; }
          .panel-b { right: 18px; bottom: 24px; }
          .panel-c { display: none; }
        }
        @media (max-width: 560px) {
          .panel-a { top: 11%; right: -120px; }
          .panel-b { right: -94px; }
        }
      `}</style>
    </section>
  )
}
