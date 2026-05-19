"use client"
import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorGlow() {
  const x = useMotionValue(-600)
  const y = useMotionValue(-600)

  const sx = useSpring(x, { damping: 32, stiffness: 140, mass: 0.6 })
  const sy = useSpring(y, { damping: 32, stiffness: 140, mass: 0.6 })

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  return (
    <>
      {/* Main glow */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 0,
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,196,182,0.055) 0%, transparent 65%)",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />
      {/* Inner sharp dot */}
      <motion.div
        aria-hidden
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 9999,
          x: useSpring(x, { damping: 20, stiffness: 400 }),
          y: useSpring(y, { damping: 20, stiffness: 400 }),
          translateX: "-50%", translateY: "-50%",
          width: 6, height: 6, borderRadius: "50%",
          background: "rgba(46,196,182,0.5)",
          pointerEvents: "none",
        }}
      />
      <style>{`
        @media (hover: none) { /* hide on touch */ }
        * { cursor: none !important; }
        a, button { cursor: none !important; }
      `}</style>
    </>
  )
}
