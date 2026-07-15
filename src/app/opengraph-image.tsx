import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Tech Tsu | Sistemas sob medida"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const [grotesk700, grotesk400] = await Promise.all([
    fetch(new URL("./fonts/space-grotesk-700.woff", import.meta.url)).then(r => r.arrayBuffer()),
    fetch(new URL("./fonts/space-grotesk-400.woff", import.meta.url)).then(r => r.arrayBuffer()),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#191B21",
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <svg width="150" height="150" viewBox="0 0 100 100">
            <path
              d="M27 33 H57 C71 33 79 45 72 57 C67 67 55 72 43 70"
              fill="none"
              stroke="#F5F2EB"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="44" cy="70" r="7.5" fill="#8FA8FF" />
          </svg>
          <div style={{ display: "flex", fontSize: 130, fontWeight: 700, letterSpacing: "-6px" }}>
            <span style={{ color: "#F5F2EB" }}>tech</span>
            <span style={{ color: "#8FA8FF" }}>tsu</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 34,
            fontSize: 34,
            fontWeight: 400,
            color: "rgba(245,242,235,0.55)",
          }}
        >
          Sistemas sob medida para operações reais
        </div>

        <div
          style={{
            marginTop: 46,
            display: "flex",
            gap: 14,
            fontSize: 19,
            color: "rgba(245,242,235,0.4)",
          }}
        >
          {["CRM", "ERP", "Dashboards", "Automação de WhatsApp"].map(t => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "8px 20px",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: grotesk700, weight: 700, style: "normal" },
        { name: "Space Grotesk", data: grotesk400, weight: 400, style: "normal" },
      ],
    }
  )
}
