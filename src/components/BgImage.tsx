"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type Lado = "right" | "left" | "full"

type Props = {
  src: string
  /** Vídeo entra em loop mudo — mesmo tratamento de máscara da imagem. */
  kind?: "image" | "video"
  poster?: string
  /** De onde a mídia nasce. Ela sempre derrete para transparente na direção do conteúdo. */
  lado?: Lado
  /** Opacidade final depois do reveal. */
  opacity?: number
  /** Cor da seção — usada no véu vertical que funde a mídia com o fundo. */
  blend: string
  /** Largura da faixa quando lado é right/left. */
  width?: string
  /** Deslocamento do parallax em px. 0 desliga. */
  parallax?: number
  /** Some abaixo de 980px — fundo decorativo não paga a banda do mobile. */
  soDesktop?: boolean
  /** Até onde o véu vertical avança, em %. Menor = imagem visível mais perto do topo. */
  veu?: number
  /** Degradê lateral mais leve: a mídia sobrevive mais longe antes de sumir. */
  suave?: boolean
  /** Recorte da imagem dentro da faixa. Ex.: "50% 80%" puxa a parte de baixo da foto para cima. */
  foco?: string
}

const MASCARA: Record<Lado, string> = {
  right: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 22%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0) 96%)",
  left:  "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 22%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0) 96%)",
  full:  "radial-gradient(ellipse 78% 72% at 50% 45%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 100%)",
}

const MASCARA_SUAVE: Record<Lado, string> = {
  right: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 46%, rgba(0,0,0,0.78) 72%, rgba(0,0,0,0) 100%)",
  left:  "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 46%, rgba(0,0,0,0.78) 72%, rgba(0,0,0,0) 100%)",
  full:  "radial-gradient(ellipse 92% 88% at 50% 45%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0) 100%)",
}

export function BgImage({
  src,
  kind = "image",
  poster,
  lado = "right",
  opacity = 0.5,
  blend,
  width = "58%",
  parallax = 60,
  soDesktop = false,
  veu = 26,
  suave = false,
  foco = "center",
}: Props) {
  const mascara = (suave ? MASCARA_SUAVE : MASCARA)[lado]
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
      className={soDesktop ? "bg-media so-desktop" : "bg-media"}
      style={{ position: "absolute", ...caixa, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}
    >
      {kind === "video" ? (
        <motion.video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ ...midiaStyle(parallax, opacity, mascara, foco), y: parallax ? y : 0 }}
        />
      ) : (
        <motion.img
          src={src}
          alt=""
          loading="lazy"
          style={{ ...midiaStyle(parallax, opacity, mascara, foco), y: parallax ? y : 0 }}
        />
      )}
      {/* Véu vertical: some no topo e na base para a mídia nunca encostar na borda da seção */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to bottom, ${blend} 0%, transparent ${veu}%, transparent ${100 - veu}%, ${blend} 100%)`,
      }} />

      <style>{`
        @media (max-width: 980px) { .bg-media.so-desktop { display: none !important; } }
      `}</style>
    </motion.div>
  )
}

function midiaStyle(parallax: number, opacity: number, mascara: string, foco: string) {
  return {
    position: "absolute" as const,
    top: -parallax, left: 0,
    width: "100%", height: `calc(100% + ${parallax * 2}px)`,
    objectFit: "cover" as const,
    objectPosition: foco,
    opacity,
    maskImage: mascara,
    WebkitMaskImage: mascara,
  }
}
