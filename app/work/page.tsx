import { ShieldCheck } from "lucide-react"
import { CtaBand } from "@/components/cta-band"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { SeverityBadge } from "@/components/severity-badge"
import { cn } from "@/lib/utils"
import { caseStudies } from "@/lib/site-data"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Anonymized write-ups of real production Critical findings — forgeable sessions, broken access control, unauthenticated SSRF, fail-open webhooks and stored XSS — each with issue, impact and resolution.",
  path: "/work",
})

function StoryBlock({
  label,
  text,
  emphasis = false,
  accent = false,
  delay = 0,
}: {
  label: string
  text: string
  emphasis?: boolean
  accent?: boolean
  delay?: number
}) {
  return (
    <Reveal
      delay={delay}
      className={cn(
        "border-l-2 pl-5 sm:pl-6",
        accent ? "border-primary/60" : "border-border"
      )}
    >
      <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </h3>
      <p
        className={cn(
          "mt-2.5 max-w-2xl text-pretty leading-relaxed",
          emphasis
            ? "text-lg text-foreground sm:text-xl"
            : "text-muted-foreground"
        )}
      >
        {text}
      </p>
    </Reveal>
  )
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        index="04"
        label="Work"
        title="Real findings, explained in plain language."
        description="Five Critical vulnerabilities identified in production web applications during security assessments — what was wrong, why it mattered, and how each one was fixed."
      >
        <div className="mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-card/60 p-4">
          <ShieldCheck
            className="mt-0.5 size-4 shrink-0 text-primary"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Every finding below is real work, fully anonymized: no client
            names, application names or identifying details. Details are kept
            at an explanatory level — no exploit steps are published.
          </p>
        </div>
      </PageHero>

      {caseStudies.map((study) => (
        <article
          key={study.id}
          id={study.id}
          className="scroll-mt-24 border-t border-border/60"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-24">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Finding {study.number}
                </p>
                <div className="mt-3">
                  <SeverityBadge severity={study.severity} />
                </div>
                <h2 className="mt-4 text-balance text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                  {study.title}
                </h2>
              </Reveal>
            </div>

            <div className="grid gap-9">
              <StoryBlock label="Issue" text={study.issue} />
              <StoryBlock label="Impact" text={study.impact} emphasis delay={0.05} />
              <StoryBlock
                label="Resolution"
                text={study.resolution}
                accent
                delay={0.1}
              />
            </div>
          </div>
        </article>
      ))}

      <CtaBand
        title="Want a review like this on your own application?"
        description="Send a short message about what you are building, and we will scope the assessment together on a free 15-minute call."
        secondary={null}
      />
    </>
  )
}
