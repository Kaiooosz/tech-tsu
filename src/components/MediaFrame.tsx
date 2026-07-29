"use client"
import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { E } from "@/lib/motion"

type Props = {
  /** Caminho em /public. Se o arquivo ainda não existir, cai no placeholder da marca. */
  src?: string
  kind?: "image" | "video"
  poster?: string
  alt: string
  /** Texto do placeholder enquanto a mídia não é enviada. */
  label?: string
  caption?: string
  ratio?: number
  /** Deslocamento vertical do parallax em px. 0 desliga. */
  parallax?: number
  dark?: boolean
  chrome?: boolean
}

export function MediaFrame({
  src,
  kind = "image",
  poster,
  alt,
  label,
  caption,
  ratio = 16 / 10,
  parallax = 48,
  dark = false,
  chrome = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06])

  const show = Boolean(src) && !failed

  const border = dark ? "1px solid rgba(255,255,255,0.10)" : "1px solid var(--border-light)"
  const shadow = dark
    ? "0 20px 60px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3)"
    : "var(--shadow-lg)"

  return (
    <figure ref={ref} style={{ margin: 0, width: "100%" }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: E }}
        style={{
          position: "relative",
          borderRadius: 14,
          border,
          boxShadow: shadow,
          overflow: "hidden",
          background: dark ? "var(--bg-2)" : "#fff",
        }}
      >
        {chrome && (
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "10px 14px",
            borderBottom: border,
            background: dark ? "rgba(255,255,255,0.03)" : "var(--paper)",
          }}>
            {["rgba(255,255,255,0.18)", "rgba(255,255,255,0.13)", "rgba(255,255,255,0.09)"].map((c, i) => (
              <span key={i} style={{
                width: 8, height: 8, borderRadius: "50%",
                background: dark ? c : "rgba(25,27,33,0.12)",
              }} />
            ))}
            <span style={{
              marginLeft: 8, fontSize: 10, fontFamily: "var(--font-mono)",
              color: dark ? "var(--muted-2)" : "var(--muted-ink-2)",
              letterSpacing: "0.08em",
            }}>
              {label ?? alt}
            </span>
          </div>
        )}

        <div style={{ position: "relative", aspectRatio: String(ratio), overflow: "hidden" }}>
          {show ? (
            kind === "video" ? (
              <motion.video
                src={src}
                poster={poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onError={() => setFailed(true)}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%", objectFit: "cover",
                  y: parallax ? y : 0,
                  scale: parallax ? scale : 1,
                }}
              />
            ) : (
              <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                onError={() => setFailed(true)}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%", objectFit: "cover",
                  y: parallax ? y : 0,
                  scale: parallax ? scale : 1,
                }}
              />
            )
          ) : (
            <Placeholder label={label ?? alt} dark={dark} />
          )}
        </div>
      </motion.div>

      {caption && (
        <figcaption style={{
          marginTop: 12, fontSize: 12, lineHeight: 1.6,
          fontFamily: "var(--font-mono)",
          color: dark ? "var(--muted-2)" : "var(--muted-ink-2)",
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function Placeholder({ label, dark }: { label: string; dark: boolean }) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 12,
      background: dark
        ? "linear-gradient(145deg, #1e2028 0%, #252830 100%)"
        : "linear-gradient(145deg, #F8F7F4 0%, #EFECEA 100%)",
    }}>
      <div className="circuit-grid" style={{ position: "absolute", inset: 0, opacity: dark ? 0.35 : 0.12 }} />
      <img
        src={dark ? "/mark-white.svg" : "/mark-primary.svg"}
        alt=""
        width={34}
        height={34}
        style={{ opacity: 0.5, position: "relative" }}
      />
      <span style={{
        position: "relative", maxWidth: "72%", textAlign: "center",
        fontSize: 11, fontFamily: "var(--font-mono)", lineHeight: 1.6,
        letterSpacing: "0.1em", textTransform: "uppercase",
        color: dark ? "var(--muted-2)" : "var(--muted-ink-2)",
      }}>
        {label}
      </span>
    </div>
  )
}
