import Link from "next/link"
import { CtaBand } from "@/components/cta-band"
import { EditorialSection } from "@/components/editorial-section"
import { MethodologySteps } from "@/components/methodology-steps"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import {
  aiSecurityFocus,
  testingMethodology,
  toolGroups,
  workingExpectations,
} from "@/lib/site-data"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata = pageMetadata({
  title: "How I Work",
  description:
    "The process behind every engagement: a six-step testing methodology for web applications and APIs, and how I approach security for AI-integrated features.",
  path: "/how-i-work",
})

export default function HowIWorkPage() {
  return (
    <>
      <PageHero
        index="03"
        label="How I Work"
        title="A repeatable process, from first conversation to final report."
        description="How an engagement actually runs: the testing process for web applications and APIs, and, separately, how I approach security for AI-integrated features."
      />

      <EditorialSection number="01" label="Introduction">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed sm:text-xl">
              This page is the honest version of how I work — the process
              behind every engagement, not a sales pitch. It covers two things
              separately: my testing methodology for web applications and APIs,
              and how I approach security for AI-integrated features, which is
              a newer and still-evolving area.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              If you only read the step titles, you will still get the full
              picture. The detail underneath is there for when you want to
              check the thinking — and the sequence stays the same on every
              engagement, with the depth adapted to the application in front
              of me.
            </p>
          </Reveal>
        </div>
      </EditorialSection>

      <EditorialSection
        number="02"
        label="Web app testing"
        title="How I test web applications."
      >
        <Reveal>
          <p className="max-w-3xl text-pretty text-lg leading-relaxed sm:text-xl">
            Six steps, in this order, every time.
          </p>
        </Reveal>
        <MethodologySteps steps={testingMethodology} />
      </EditorialSection>

      <EditorialSection
        number="03"
        label="AI-integrated apps"
        title="How I test AI-integrated applications."
      >
        <Reveal>
          <p className="inline-flex flex-wrap items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-primary/70"
            />
            Emerging area — applied experience, not a formal certification
          </p>
        </Reveal>

        <Reveal
          delay={0.05}
          className="mt-8 max-w-3xl space-y-5 text-pretty leading-relaxed text-muted-foreground"
        >
          <p>
            More applications now rely on AI models for core features — chat
            interfaces, content generation, automation. That introduces a
            category of risk that traditional web security testing
            doesn&apos;t fully cover.
          </p>
          <p>
            My background combines hands-on web and API security testing with
            direct experience integrating AI models — OpenAI, DALL·E and
            Perplexity — into real applications. I test these features
            understanding both how they are built and how they can be misused.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Areas of focus
          </h3>
        </Reveal>
        <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
          {aiSecurityFocus.map((area, index) => (
            <li key={area.title}>
              <Reveal
                delay={index * 0.04}
                className="grid gap-1.5 py-5 sm:grid-cols-[240px_minmax(0,1fr)] sm:gap-8"
              >
                <h4 className="text-sm font-medium tracking-tight">
                  {area.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10 max-w-3xl">
          <blockquote className="border-l-2 border-primary/60 pl-5 text-pretty text-lg font-medium leading-snug tracking-tight sm:pl-6 sm:text-xl">
            AI security is a fast-moving field. My approach is to apply proven
            web and API security principles to these new features, while
            staying current with how AI-specific attacks are evolving.
          </blockquote>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            The hands-on side of this comes from building with these systems,
            not just reading about them. My current research — the{" "}
            <Link
              href="/about#research"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              AI-Powered Content Automation system
            </Link>{" "}
            — integrates OpenAI, DALL·E and Perplexity to research trending
            topics, generate articles and produce matching images. Building
            and testing it is where most of this experience comes from; a
            paper is in preparation.
          </p>
        </Reveal>
      </EditorialSection>

      <EditorialSection number="04" label="Tooling" title="Tools I use.">
        <Reveal>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            A representative working set — not an exhaustive list, and not a
            checklist that runs in a fixed order. Tools are chosen per
            engagement, and what gets tested is decided by the application,
            not limited by the tooling.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {toolGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
                {group.tools.map((tool) => (
                  <li key={tool} className="py-2.5 text-sm">
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal
          delay={0.08}
          className="mt-10 max-w-3xl border-t border-border/60 pt-6"
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            Manual analysis goes beyond any single tool, and this list keeps
            growing with every engagement. Where relevant, compliance and
            policy checks are included as well — for example HIPAA policy
            review for applications that handle health data.
          </p>
        </Reveal>
      </EditorialSection>

      <EditorialSection
        number="05"
        label="Working together"
        title="What you can expect working with me."
      >
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {workingExpectations.map((item, index) => (
            <li key={item}>
              <Reveal
                delay={index * 0.04}
                className="flex items-start gap-3 py-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary/70"
                />
                <p className="text-sm leading-relaxed">{item}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </EditorialSection>

      <CtaBand
        title="Want to see how this applies to your application? Let's talk."
        description="A free 15-minute consultation is enough to find out whether a full assessment makes sense for your application."
        secondary={null}
      />
    </>
  )
}
