import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { SeverityBadge } from "@/components/severity-badge"
import { Button } from "@/components/ui/button"
import { caseStudies, homeStats, servicesDetailed } from "@/lib/site-data"

const featuredFinding = caseStudies[0]

const glanceRows = [
  { label: "Role", value: "Full Stack Developer & Web Security Researcher" },
  { label: "Focus", value: "Web & API security testing, secure development" },
  { label: "Education", value: "BS Information Technology — CGPA 3.58 / 4.00" },
  { label: "Certifications", value: "4 — Coursera, APISEC, Udemy, TCM Security" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_5%,transparent_70%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 pb-20 pt-32 sm:pt-36 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-44">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              Available for new work
            </p>

            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Web apps that work. And hold up under attack.
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am Arif Rahman — a full stack developer and web security
              researcher in Swat, Pakistan. I build modern web applications with
              Next.js, React and TypeScript, then test them the way an attacker
              would and fix what I find.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-11 gap-2 px-6">
                <Link href="/work">
                  See My Work
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 px-6">
                <Link href="/contact">Get a Security Assessment</Link>
              </Button>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Remote worldwide · Available for international work
            </p>
          </div>

          {/* Evidence panel — deliberately not a card */}
          <div className="relative lg:pt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              At a glance
            </p>
            <dl className="mt-5 border-l-2 border-primary/60 pl-6">
              {glanceRows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-b border-border/60 py-4 first:pt-0 last:border-b-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* What I do — condensed */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
              What I do
            </p>
            <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
              Four ways I can help.
            </h2>
          </div>

          <div className="divide-y divide-border/60 border-y border-border/60">
            {servicesDetailed.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group grid gap-2 py-6 sm:grid-cols-[56px_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {service.number}
                  </span>
                  <span>
                    <span className="block text-base font-medium tracking-tight transition-colors group-hover:text-primary">
                      {service.title}
                    </span>
                    <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {service.short}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="hidden size-4 text-muted-foreground transition-colors group-hover:text-primary sm:block"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights strip — real numbers, used as design elements */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 lg:px-8">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            By the numbers
          </p>
          <div className="grid gap-12 sm:grid-cols-3">
            {homeStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <p className="text-5xl font-semibold tracking-tight sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium">{stat.label}</p>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {stat.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured finding */}
      <section className="border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="grid gap-8 border-y border-border/60 py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-14">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
                  Featured finding
                </p>
                <SeverityBadge severity={featuredFinding.severity} />
              </div>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {featuredFinding.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {featuredFinding.issue}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Button asChild variant="outline" className="h-11 gap-2 px-5">
                <Link href={`/work#${featuredFinding.id}`}>
                  Read the full write-up
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Client and application details removed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
