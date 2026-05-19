// Shared animation variants and easings for Tech Tsu

export const E = [0.25, 0.1, 0.25, 1] as const
export const SPRING = { type: "spring", stiffness: 320, damping: 24 } as const
export const SPRING_SOFT = { type: "spring", stiffness: 200, damping: 20 } as const

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: E, delay },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
}

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.75, ease: E },
  },
}

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.75, ease: E },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: E },
  },
}

export const staggerContainer = (children = 0.1, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: children, delayChildren: delay } },
})

export const childFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: E } },
}

export const childSlideUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: E } },
}

export const tagPop = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: E } },
}

export const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: E },
  },
}
