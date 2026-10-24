import { CtaBand } from "@/components/cta-band"
import { EditorialSection } from "@/components/editorial-section"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { processSteps, servicesDetailed } from "@/lib/site-data"
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

      {/* How I Work */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
                How I work
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                From first call to verified fix.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Every engagement follows the same five steps. Nothing gets tested
              before it is agreed in writing.
            </p>
          </div>

          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, index) => (
              <li key={step.number}>
                <Reveal delay={index * 0.06} className="border-t-2 border-border pt-4">
                  <p className="font-mono text-xs text-primary">{step.number}</p>
                  <h3 className="mt-2 text-sm font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand secondary={null} />
    </>
  )
}
