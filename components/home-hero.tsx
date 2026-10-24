"use client"

import { Fragment } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site-data"

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1]

/** Approved hero copy. The second line is rendered as outlined display type. */
const headline: ReadonlyArray<{ text: string; outline?: boolean }> = [
  { text: "Web apps that work." },
  { text: "And hold up under attack.", outline: true },
]

function Stage({
  delay,
  className,
  children,
}: {
  delay: number
  className?: string
  children: React.ReactNode
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function HomeHero() {
  const reduce = useReducedMotion()
  const spotX = useMotionValue(0)
  const spotY = useMotionValue(0)
  const springX = useSpring(spotX, { stiffness: 110, damping: 24, mass: 1 })
  const springY = useSpring(spotY, { stiffness: 110, damping: 24, mass: 1 })

  /**
   * Cursor-follow spotlight. The glow blob sits at 65% / 12% by default; the
   * motion values store the offset from that anchor, smoothed by a spring.
   */
  const onPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduce || event.pointerType === "touch") return
    const rect = event.currentTarget.getBoundingClientRect()
    spotX.set(event.clientX - rect.left - rect.width * 0.65)
    spotY.set(event.clientY - rect.top - rect.height * 0.12)
  }

  const lines = headline.map((line) => line.text.split(" "))
  const offsets = lines.map((_, lineIndex) =>
    lines.slice(0, lineIndex).reduce((count, words) => count + words.length, 0)
  )

  return (
    <section
      onPointerMove={onPointerMove}
      className="relative overflow-hidden lg:flex lg:min-h-[92svh] lg:flex-col"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_5%,transparent_70%)]" />
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute left-[65%] top-[12%] size-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 [background:radial-gradient(circle_closest-side,var(--primary),transparent)]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 pt-32 sm:pt-36 lg:px-8 lg:pb-20 lg:pt-44">
        <Stage
          delay={0.05}
          className="flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            Available for new work
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:ml-auto sm:text-[11px]">
            {site.role}
          </p>
        </Stage>

        <h1 className="mt-8 text-[clamp(2.5rem,6.5vw,5.5rem)] font-semibold leading-[1.04] tracking-[-0.03em] sm:mt-10">
          {lines.map((words, lineIndex) => (
            <span
              key={headline[lineIndex].text}
              className={cn(
                "block",
                headline[lineIndex].outline &&
                  "mt-1 text-transparent [-webkit-text-stroke:1.5px_color-mix(in_oklch,var(--foreground)_38%,transparent)]"
              )}
            >
              {words.map((word, wordIndex) => (
                <Fragment key={`${word}-${wordIndex}`}>
                  <motion.span
                    data-reveal=""
                    className="inline-block"
                    initial={reduce ? false : { opacity: 0, y: "0.42em" }}
                    animate={reduce ? undefined : { opacity: 1, y: "0em" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + (offsets[lineIndex] + wordIndex) * 0.055,
                      ease: EASE,
                    }}
                  >
                    {word}
                  </motion.span>{" "}
                </Fragment>
              ))}
            </span>
          ))}
        </h1>

        <Stage delay={0.5} className="mt-6">
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build modern web applications with Next.js, React and TypeScript —
            then test them the way an attacker would, and fix what I find.
          </p>
        </Stage>

        <Stage delay={0.6} className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="h-11 gap-2 px-6">
            <Link href="/work">
              See My Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11 px-6">
            <Link href="/contact">Get a Security Assessment</Link>
          </Button>
        </Stage>

        {/* Spec bar — client-relevant facts along the bottom edge */}
        <Stage
          delay={0.7}
          className="mt-16 flex flex-col gap-2 border-t border-border/60 pt-6 sm:mt-20 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10 lg:mt-auto lg:pt-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Focus
          </p>
          <p className="text-sm leading-relaxed">
            Web & API security testing, secure development
          </p>
        </Stage>
      </div>
    </section>
  )
}
