"use client"

import { motion, useReducedMotion } from "motion/react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Seconds to delay the animation — used to stagger siblings. */
  delay?: number
  /** Starting translate distance in pixels. */
  y?: number
}

/**
 * Scroll-reveal wrapper: fade + slight translate, triggered once.
 * Respects prefers-reduced-motion and keeps content visible if JS is disabled.
 */
export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      data-reveal=""
      className={className}
      // Avoid opacity: 0 initial — blank page if client JS never hydrates.
      initial={{ y }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
