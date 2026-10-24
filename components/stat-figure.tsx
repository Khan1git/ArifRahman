"use client"

import { motion, useReducedMotion } from "motion/react"

/**
 * Big statistic figures slide up from behind a tight mask when they scroll
 * into view. Values are digits and "+" only, so a tight overflow mask is safe.
 */
export function StatFigure({ value }: { value: string }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <span className="inline-block">{value}</span>
  }

  return (
    <span className="-mb-1 inline-block overflow-hidden pb-1">
      <motion.span
        data-reveal=""
        className="inline-block"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {value}
      </motion.span>
    </span>
  )
}
