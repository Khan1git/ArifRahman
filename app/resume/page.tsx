import { Download, Mail } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { PrintButton } from "@/components/print-button"
import { Button } from "@/components/ui/button"
import {
  certifications,
  education,
  experience,
  research,
  site,
  skillGroups,
  workshops,
} from "@/lib/site-data"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata = pageMetadata({
  title: "Resume",
  description:
    "Full resume of Arif Rahman — full stack developer and web security researcher: experience at Blackacre, skills, education, certifications and research.",
  path: "/resume",
})

function ResumeSection({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <section className="grid gap-4 border-t border-border/60 py-12 first:border-t-0 first:pt-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-12 print:break-inside-avoid">
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:pt-1">
        {label}
      </h2>
      <div>{children}</div>
    </section>
  )
}

export default function ResumePage() {
  return (
    <>
      <PageHero
        index="05"
        label="Resume"
        title="Arif Rahman"
        description="Full Stack Developer & Web Security Researcher. The complete resume, readable on the web."
      >
        <div className="mt-8 flex flex-wrap items-center gap-3 print:hidden">
          <Button asChild className="h-11 gap-2 px-6">
            <a
              href={site.resume}
              title={
                site.resume === "#"
                  ? "PDF coming soon — use Print / Save as PDF"
                  : "Download resume PDF"
              }
            >
              <Download className="size-4" aria-hidden="true" />
              Download PDF
            </a>
          </Button>
          <PrintButton />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground print:hidden">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            {site.email}
          </a>
          <span aria-hidden="true" className="size-1 rounded-full bg-border" />
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <span aria-hidden="true" className="size-1 rounded-full bg-border" />
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>

        {site.resume === "#" ? (
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground print:hidden">
            PDF coming soon — Print / Save as PDF works today
          </p>
        ) : null}
      </PageHero>

      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
        <ResumeSection label="Summary">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Full Stack Developer and Web Security Researcher with a BS in
            Information Technology. Builds, tests and secures
            modern web applications using JavaScript frameworks, applies
            security principles throughout the development lifecycle, and has
            hands-on experience in live production testing, vulnerability
            research and performance optimization. Current research focuses on
            AI-driven content automation, integrating OpenAI, DALL·E and
            Perplexity models; a paper is in preparation.
          </p>
        </ResumeSection>

        <ResumeSection label="Experience">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                {experience.role}
              </h3>
              <p className="mt-1 text-sm text-primary">{experience.company}</p>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {experience.period}
            </p>
          </div>

          <div className="mt-7 grid gap-8">
            {experience.groups.map((group) => (
              <div key={group.title}>
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
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-border/60 pt-5 text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Tooling: </span>
            {experience.tech.join(" · ")}
          </p>
        </ResumeSection>

        <ResumeSection label="Skills">
          <div className="grid gap-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium tracking-tight">
                  {group.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {group.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection label="Education">
          <ul className="grid gap-8">
            {education.map((entry) => (
              <li key={entry.degree}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-sm font-medium tracking-tight">
                    {entry.degree}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {entry.period}
                  </p>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {entry.institution} — {entry.location}
                </p>
                <p className="mt-1 text-sm">
                  {entry.result}
                  {entry.note ? ` · ${entry.note}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection label="Certifications">
          <ul className="grid gap-4">
            {certifications.map((certification) => (
              <li
                key={certification.name}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-sm font-medium">
                  {certification.name}
                </span>
                <span className="text-sm text-muted-foreground sm:text-right">
                  {certification.issuer}
                </span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection label="Research">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-sm font-medium tracking-tight">
              {research.title}
            </h3>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {research.status}
            </span>
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            {research.description}
          </p>
        </ResumeSection>

        <ResumeSection label="Conferences">
          <ul className="grid gap-5">
            {workshops.map((workshop) => (
              <li key={workshop.title}>
                <p className="text-sm font-medium">{workshop.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {workshop.venue} · {workshop.date}
                </p>
              </li>
            ))}
          </ul>
        </ResumeSection>
      </div>
    </>
  )
}
