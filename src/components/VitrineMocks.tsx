"use client"

// Mocks de tela usados como capa dos cards da Vitrine enquanto não há print real.
// Escala pensada para 420x236 no desktop — tipografia pequena, hierarquia por peso e cor.

const mono = "var(--font-mono)"

/* ─────────────────────────────────────────────────────────────
   Bezerra Borges — agente conectado a todas as pontas
   ───────────────────────────────────────────────────────────── */

const canais = [
  { nome: "WhatsApp", vol: "412" },
  { nome: "Site", vol: "188" },
  { nome: "Instagram", vol: "96" },
  { nome: "E-mail", vol: "74" },
]

const pontas = [
  { nome: "CRM de clientes", st: "sync" },
  { nome: "Processos e prazos", st: "sync" },
  { nome: "Documentos", st: "sync" },
  { nome: "Formulários", st: "sync" },
]

export function MockAgente() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(145deg, #0B0E17 0%, #12183A 55%, #1B2A6B 100%)",
      padding: "13px 15px",
      display: "flex", flexDirection: "column", gap: 9,
      overflow: "hidden",
    }}>
      <div className="circuit-grid" style={{ position: "absolute", inset: 0, opacity: 0.22 }} />

      {/* Topo */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <img src="/logo-bblaw.svg" alt="" style={{ height: 17, filter: "brightness(0) invert(1) opacity(0.92)" }} />
          <span style={{ fontSize: 7.5, fontFamily: mono, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Central de agentes
          </span>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 5,
          padding: "2px 7px", borderRadius: 999,
          background: "rgba(143,168,255,0.14)", border: "1px solid rgba(143,168,255,0.28)",
        }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#8FA8FF", display: "inline-block" }} />
          <span style={{ fontSize: 7, fontFamily: mono, color: "#8FA8FF", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            14 ativos
          </span>
        </div>
      </div>

      {/* Três colunas: canais → agente → pontas */}
      <div style={{ position: "relative", flex: 1, display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 10, alignItems: "center" }}>

        {/* Canais de entrada */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {canais.map(c => (
            <div key={c.nome} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "5px 8px", borderRadius: 5,
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)",
            }}>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.78)" }}>{c.nome}</span>
              <span style={{ fontSize: 7.5, fontFamily: mono, color: "#8FA8FF" }}>{c.vol}</span>
            </div>
          ))}
        </div>

        {/* Núcleo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
          <svg width="34" height="1" style={{ opacity: 0 }} />
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "linear-gradient(145deg, #1238C4, #4B74FF)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 0 5px rgba(75,116,255,0.14), 0 6px 20px rgba(0,0,0,0.5)",
          }}>
            <img src="/mark-white.svg" alt="" width={22} height={22} />
          </div>
          <span style={{ fontSize: 7, fontFamily: mono, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Agente
          </span>
        </div>

        {/* Pontas do sistema */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {pontas.map(p => (
            <div key={p.nome} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "5px 8px", borderRadius: 5,
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)",
            }}>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.78)" }}>{p.nome}</span>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#8FA8FF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>

        {/* Linhas de conexão */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="fio-e" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(143,168,255,0)" />
              <stop offset="100%" stopColor="rgba(143,168,255,0.5)" />
            </linearGradient>
            <linearGradient id="fio-d" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(143,168,255,0.5)" />
              <stop offset="100%" stopColor="rgba(143,168,255,0)" />
            </linearGradient>
          </defs>
          {[14, 38, 62, 86].map(p => (
            <path key={`e${p}`} d={`M 34% ${p}% Q 43% ${p}% 45% 50%`} stroke="url(#fio-e)" strokeWidth="1" fill="none" />
          ))}
          {[14, 38, 62, 86].map(p => (
            <path key={`d${p}`} d={`M 55% 50% Q 57% ${p}% 66% ${p}%`} stroke="url(#fio-d)" strokeWidth="1" fill="none" />
          ))}
        </svg>
      </div>

      {/* Rodapé */}
      <div style={{
        position: "relative", display: "flex", justifyContent: "space-between",
        paddingTop: 7, borderTop: "1px solid rgba(255,255,255,0.08)",
        fontSize: 7, fontFamily: mono, color: "rgba(255,255,255,0.42)", letterSpacing: "0.08em",
      }}>
        <span>15+ JURISDIÇÕES</span>
        <span>TRIAGEM ANTES DO HUMANO</span>
        <span>24/7</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Cicatribem — painel de operação do e-commerce
   Paleta do cliente: ciano/teal da marca
   ───────────────────────────────────────────────────────────── */

const CT = { deep: "#00618C", mid: "#0089AC", light: "#4FC3DC", pale: "#B8E5F0" }

const kpis = [
  { label: "Faturamento", value: "R$ 1,84M", delta: "+23%" },
  { label: "Pedidos", value: "6.412", delta: "+18%" },
  { label: "Ticket médio", value: "R$ 287", delta: "+4%" },
]

const funil = [
  { etapa: "Sessões", n: "184k", w: 100 },
  { etapa: "Carrinho", n: "22,1k", w: 62 },
  { etapa: "Checkout", n: "9,8k", w: 40 },
  { etapa: "Pago", n: "6,4k", w: 27 },
]

const rastreios = [
  { id: "#48210", st: "Em trânsito", cor: CT.light },
  { id: "#48207", st: "Entregue", cor: CT.pale },
  { id: "#48199", st: "Postado", cor: CT.mid },
]

export function MockEcommerce() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(150deg, #F4FBFD 0%, #E4F3F8 100%)",
      padding: "11px 13px",
      display: "flex", flexDirection: "column", gap: 8,
      overflow: "hidden",
    }}>
      {/* Topo */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src="/logo-cicatribem.png" alt="" style={{ height: 13, objectFit: "contain" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: CT.mid, display: "inline-block" }} />
          <span style={{ fontSize: 6.5, fontFamily: mono, color: CT.deep, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Operação · últimos 30 dias
          </span>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
        {kpis.map(k => (
          <div key={k.label} style={{
            padding: "7px 9px", borderRadius: 6,
            background: "#fff", border: `1px solid ${CT.pale}`,
          }}>
            <div style={{ fontSize: 6.5, fontFamily: mono, color: CT.deep, opacity: 0.65, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>
              {k.label}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: CT.deep, letterSpacing: "-0.02em" }}>{k.value}</span>
              <span style={{ fontSize: 6.5, fontFamily: mono, color: CT.mid, fontWeight: 600 }}>{k.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Funil + rastreio */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 7, minHeight: 0 }}>

        {/* Funil de venda */}
        <div style={{ padding: "8px 10px", borderRadius: 6, background: "#fff", border: `1px solid ${CT.pale}`, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ fontSize: 6.5, fontFamily: mono, color: CT.deep, opacity: 0.65, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Funil de venda
          </div>
          {funil.map((f, i) => (
            <div key={f.etapa} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 7, color: CT.deep, width: 40, flexShrink: 0 }}>{f.etapa}</span>
              <div style={{ flex: 1, height: 7, borderRadius: 3, background: "#EAF6FA", overflow: "hidden" }}>
                <div style={{
                  width: `${f.w}%`, height: "100%", borderRadius: 3,
                  background: `linear-gradient(90deg, ${CT.deep}, ${[CT.deep, CT.mid, CT.light, CT.light][i]})`,
                }} />
              </div>
              <span style={{ fontSize: 7, fontFamily: mono, color: CT.mid, width: 26, textAlign: "right", flexShrink: 0 }}>{f.n}</span>
            </div>
          ))}
        </div>

        {/* Rastreio */}
        <div style={{ padding: "8px 10px", borderRadius: 6, background: "#fff", border: `1px solid ${CT.pale}`, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ fontSize: 6.5, fontFamily: mono, color: CT.deep, opacity: 0.65, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Rastreio
          </div>
          {rastreios.map(r => (
            <div key={r.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 5 }}>
              <span style={{ fontSize: 7, fontFamily: mono, color: CT.deep }}>{r.id}</span>
              <span style={{
                fontSize: 6.5, padding: "1.5px 5px", borderRadius: 3,
                background: `${r.cor}22`, color: CT.deep, border: `1px solid ${r.cor}`,
                whiteSpace: "nowrap",
              }}>
                {r.st}
              </span>
            </div>
          ))}
          <div style={{ marginTop: "auto", paddingTop: 4, borderTop: `1px solid ${CT.pale}` }}>
            <span style={{ fontSize: 6.5, fontFamily: mono, color: CT.mid }}>98,2% entregue no prazo</span>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        fontSize: 6.5, fontFamily: mono, color: CT.deep, opacity: 0.55, letterSpacing: "0.08em",
      }}>
        <span>ESTOQUE SINCRONIZADO</span>
        <span>ATENDIMENTO POR IA</span>
        <span>TEMPO REAL</span>
      </div>
    </div>
  )
}
