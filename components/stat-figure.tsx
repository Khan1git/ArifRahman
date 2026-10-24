"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"

/**
 * Big statistic figures slide up from behind a tight mask when they scroll
 * into view. Values are digits and "+" only, so a tight overflow mask is safe.
 *
 * The viewport trigger must sit on the outer (unclipped) span. An element
 * translated outside an overflow-hidden mask reports zero intersection, so a
 * whileInView trigger on the inner span would never fire and the number would
 * stay hidden behind the mask.
 */
export function StatFigure({ value }: { value: string }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  if (reduce) {
    return <span className="inline-block">{value}</span>
  }

  return (
    <span ref={ref} className="-mb-1 inline-block overflow-hidden pb-1">
      <motion.span
        data-reveal=""
        className="inline-block"
        initial={{ y: "110%" }}
        animate={inView ? { y: "0%" } : undefined}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {value}
      </motion.span>
    </span>
  )
}
