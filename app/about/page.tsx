import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EditorialSection } from "@/components/editorial-section"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import {
  certifications,
  education,
  experience,
  languages,
  research,
  workshops,
} from "@/lib/site-data"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata = pageMetadata({
  title: "About",
  description:
    "Full stack developer and web security researcher. BS in Information Technology, production security testing at Blackacre, and AI content-automation research.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="01"
        label="About"
        title="I build web applications — and find out how they break."
        description="The short version: I develop modern web apps, then test them the way an attacker would. Here is the background behind that."
      />

      <EditorialSection number="01" label="Background">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start lg:gap-14">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed sm:text-xl">
                I am a full stack developer and web security researcher. I
                hold a BS in Information Technology, and I spend my working
                life on two sides of the same problem: building modern web
                applications, and finding the ways they can be broken.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <blockquote className="my-8 border-l-2 border-primary/60 pl-5 text-pretty text-xl font-medium leading-snug tracking-tight text-foreground sm:pl-6 sm:text-2xl">
                Security is not a step at the end of a project. I apply it
                throughout the development lifecycle — and then test the
                result the way an attacker would.
              </blockquote>
            </Reveal>

            <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <Reveal delay={0.05}>
                <p>
                  At Blackacre I build and maintain secure, responsive web
                  applications using Next.js, React, TypeScript, Tailwind CSS,
                  Shadcn/UI and Firebase — full CRUD workflows and reusable
                  components. I optimize for performance, SEO, accessibility
                  and Core Web Vitals, with 90+ Lighthouse scores on desktop.
                  Because I also test the applications I work on, security is
                  applied throughout the build rather than added at the end.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p>
                  On the security side, I run live production testing with Burp
                  Suite, OWASP ZAP, Nikto and Kali Linux. I have identified and
                  documented real vulnerabilities in production applications —
                  the anonymized write-ups are on the Work page — and worked
                  directly with developers to remediate findings and verify
                  that each fix actually closed the issue.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p>
                  Outside client work, my current research focuses on AI-driven
                  content automation: a system that uses OpenAI, DALL·E and
                  Perplexity to identify trending topics, generate articles and
                  produce matching images. A paper is in preparation.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal className="grid gap-8 lg:sticky lg:top-28" delay={0.1}>
            <div>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Availability
              </h3>
              <p className="mt-2 text-sm">
                Available for remote and international work.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Languages
              </h3>
              <ul className="mt-2 grid gap-1.5">
                {languages.map((language) => (
                  <li
                    key={language.label}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span>{language.label}</span>
                    <span className="text-right text-xs text-muted-foreground">
                      {language.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </EditorialSection>

      <EditorialSection
        number="02"
        label="Experience"
        title="Building and testing in production."
      >
        <Reveal>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {experience.role}
              </h3>
              <p className="mt-1 text-sm text-primary">{experience.company}</p>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {experience.period}
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {experience.intro}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {experience.groups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.07}
              className="border-t-2 border-border pt-4"
            >
              <h4 className="text-sm font-medium tracking-tight">
                {group.title}
              </h4>
              <ul className="mt-3 grid gap-2.5">
                {group.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary/70"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-1.5 border-t border-border/60 pt-5">
          {experience.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </Reveal>
      </EditorialSection>

      <EditorialSection number="03" label="Education">
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {education.map((entry, index) => (
            <li key={entry.degree} className="py-5">
              <Reveal
                delay={index * 0.06}
                className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
              >
                <div>
                  <p className="font-medium tracking-tight">{entry.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entry.institution} — {entry.location}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-xs text-muted-foreground">
                    {entry.period}
                  </p>
                  <p className="mt-1 text-sm">
                    {entry.result}
                    {entry.note ? ` · ${entry.note}` : ""}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </EditorialSection>

      <EditorialSection id="research" number="04" label="Research">
        <Reveal className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold tracking-tight">
              {research.title}
            </h3>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {research.status}
            </span>
          </div>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {research.description}
          </p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Focus areas
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {research.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Models used
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {research.models.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </EditorialSection>

      <EditorialSection number="05" label="Credentials">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Certifications
            </h3>
            <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
              {certifications.map((certification) => (
                <li
                  key={certification.name}
                  className="flex items-baseline justify-between gap-6 py-3.5"
                >
                  <span className="text-sm font-medium">
                    {certification.name}
                  </span>
                  <span className="text-right text-sm text-muted-foreground">
                    {certification.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Conferences & seminars
            </h3>
            <ul className="mt-4 divide-y divide-border/60 border-y border-border/60">
              {workshops.map((workshop) => (
                <li key={workshop.title} className="py-3.5">
                  <p className="text-sm font-medium">{workshop.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {workshop.venue} · {workshop.date}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </EditorialSection>

      <section className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-sm text-muted-foreground">
            See how this work is applied on real applications.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="h-10 px-5">
              <Link href="/work">View the work</Link>
            </Button>
            <Button asChild className="h-10 px-5">
              <Link href="/resume">Read the resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
