"use client"

import { motion, useReducedMotion } from "motion/react"

/** Route-level entrance transition — a simple fade/slide, entrance only. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
