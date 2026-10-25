"use client"

import { motion, useReducedMotion } from "motion/react"

/** Real service keywords only — decorative repetition of what the site does. */
const items = [
  "Web application penetration testing",
  "Authentication & session testing",
  "Broken access control / IDOR",
  "Business logic review",
  "API security assessment",
  "Secure full-stack development",
  "Fix verification",
  "OWASP Top 10",
  "Manual testing, verified findings",
  "Remote worldwide",
]

/**
 * Kinetic marquee. The item list is duplicated once inside a w-max row;
 * each block carries its own trailing gap so a -50% translate loops seamlessly.
 */
export function Ticker() {
  const reduce = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="relative select-none overflow-hidden border-t border-border/60 bg-secondary/20 py-3.5"
    >
      <motion.div
        className="flex w-max"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduce
            ? undefined
            : { duration: 46, ease: "linear", repeat: Infinity }
        }
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 pr-8"
          >
            <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {item}
            </span>
            <span className="size-1 shrink-0 rounded-full bg-primary/50" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
