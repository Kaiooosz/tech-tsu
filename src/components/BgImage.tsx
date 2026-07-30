"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type Lado = "right" | "left" | "full"

type Props = {
  src: string
  /** De onde a imagem nasce. Ela sempre derrete para transparente na direção do conteúdo. */
  lado?: Lado
  /** Opacidade final depois do reveal. */
  opacity?: number
  /** Cor da seção — usada no véu vertical que funde a imagem com o fundo. */
  blend: string
  /** Largura da faixa quando lado é right/left. */
  width?: string
  /** Deslocamento do parallax em px. 0 desliga. */
  parallax?: number
}

const MASCARA: Record<Lado, string> = {
  right: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 22%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0) 96%)",
  left:  "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 22%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0) 96%)",
  full:  "radial-gradient(ellipse 78% 72% at 50% 45%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 100%)",
}

export function BgImage({
  src,
  lado = "right",
  opacity = 0.5,
  blend,
  width = "58%",
  parallax = 60,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])

  const caixa =
    lado === "full"
      ? { inset: 0 }
      : lado === "right"
        ? { top: 0, bottom: 0, right: 0, width }
        : { top: 0, bottom: 0, left: 0, width }

  return (
    <motion.div
      ref={ref}
      aria-hidden
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      style={{ position: "absolute", ...caixa, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}
    >
      <motion.img
        src={src}
        alt=""
        loading="lazy"
        style={{
          position: "absolute",
          top: -parallax, left: 0,
          width: "100%", height: `calc(100% + ${parallax * 2}px)`,
          objectFit: "cover",
          opacity,
          maskImage: MASCARA[lado],
          WebkitMaskImage: MASCARA[lado],
          y: parallax ? y : 0,
        }}
      />
      {/* Véu vertical: some no topo e na base para a imagem nunca encostar na borda da seção */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to bottom, ${blend} 0%, transparent 26%, transparent 74%, ${blend} 100%)`,
      }} />
    </motion.div>
  )
}
