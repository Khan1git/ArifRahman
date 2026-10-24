"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react"

type Step = {
  number: string
  title: string
  description: string
}

const railClassName =
  "pointer-events-none absolute bottom-4 left-[18px] top-4 -z-10 w-px [mask-image:linear-gradient(to_bottom,transparent,black_32px,black_calc(100%_-_5rem),transparent)]"

const rowClassName =
  "relative grid grid-cols-[36px_minmax(0,1fr)] gap-x-5 sm:gap-x-7"

function StepBody({ step }: { step: Step }) {
  return (
    <>
      <span className="grid size-9 place-items-center rounded-lg border border-border bg-background font-mono text-xs font-semibold text-primary">
        {step.number}
      </span>
      <div>
        <h3 className="text-base font-medium tracking-tight sm:text-lg">
          {step.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>
    </>
  )
}

/**
 * Numbered methodology list whose connecting rail draws in with the
 * section's scroll progress. The rail is decorative; the steps remain
 * readable without JavaScript and under prefers-reduced-motion.
 */
export function MethodologySteps({ steps }: { steps: readonly Step[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  })

  return (
    <div ref={ref} className="relative mt-12">
      <div aria-hidden="true" className={`${railClassName} bg-border`} />
      {reduce ? (
        <div aria-hidden="true" className={`${railClassName} bg-primary/60`} />
      ) : (
        <motion.div
          aria-hidden="true"
          style={{ scaleY: progress }}
          className={`${railClassName} origin-top bg-primary`}
        />
      )}

      <ol className="grid gap-10 sm:gap-12">
        {steps.map((step, index) =>
          reduce ? (
            <li key={step.number} className={rowClassName}>
              <StepBody step={step} />
            </li>
          ) : (
            <motion.li
              key={step.number}
              data-reveal=""
              className={rowClassName}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: "0px 0px -60px 0px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <StepBody step={step} />
            </motion.li>
          )
        )}
      </ol>
    </div>
  )
}
