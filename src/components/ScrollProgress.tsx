"use client"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 260, damping: 34, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        height: 2, zIndex: 60, transformOrigin: "0% 50%",
        background: "linear-gradient(90deg, #1238C4, #2C55E8 55%, #8FA8FF)",
        scaleX,
      }}
    />
  )
}
