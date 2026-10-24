import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CtaBand } from "@/components/cta-band"
import { EditorialSection } from "@/components/editorial-section"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { servicesDetailed } from "@/lib/site-data"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Web application penetration testing, API security assessment, secure full-stack development, and fix verification — scoped in writing with a clear report on every engagement.",
  path: "/services",
})

const serviceLabels = ["Testing", "Assessment", "Build", "Verification"]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        index="02"
        label="Services"
        title="Security work with a clear scope and a written report."
        description="Four services, each scoped in writing before any work starts — so you always know what is being tested and exactly what you receive at the end."
      />

      {servicesDetailed.map((service, index) => (
        <EditorialSection
          key={service.slug}
          id={service.slug}
          number={service.number}
          label={serviceLabels[index]}
          title={service.title}
        >
          <Reveal>
            <p className="max-w-3xl text-pretty text-lg leading-relaxed sm:text-xl">
              {service.summary}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                What&apos;s included
              </h3>
              <ul className="mt-4 grid gap-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary/70"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                What you receive
              </h3>
              <ul className="mt-4 grid gap-3 border-l border-border pl-5">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mt-10 border-t border-border/60 pt-6">
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              How it&apos;s scoped
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {service.scoping}
            </p>
          </Reveal>
        </EditorialSection>
      ))}

      {/* How I work — teaser; the full methodology lives on its own page */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 lg:px-8">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
              How I work
            </p>
            <h2 className="mt-3 text-balance text-lg font-semibold leading-snug tracking-tight sm:text-xl">
              From first call to verified fix.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Every engagement follows the same sequence — scoped in writing
              before anything is tested, manually verified findings, a
              plain-language report, and a re-test after the fixes ship.
            </p>
            <Button asChild variant="outline" className="mt-6 h-11 gap-2 px-5">
              <Link href="/how-i-work">
                Read the full methodology
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand secondary={null} />
    </>
  )
}
