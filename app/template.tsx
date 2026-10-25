"use client"

import { motion, useReducedMotion } from "motion/react"

/**
 * Route entrance — light slide only. Do NOT start at opacity 0:
 * if client JS fails to load, opacity-0 would leave the whole page blank.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ y: 8 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
