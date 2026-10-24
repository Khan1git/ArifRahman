import { PageHero } from "@/components/page-hero"
import { site } from "@/lib/site-data"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata = pageMetadata({
  title: "Terms",
  description:
    "Terms of engagement for security testing: written authorization, rules of engagement, responsible disclosure and confidentiality.",
  path: "/terms",
})

const sections = [
  {
    title: "What these terms cover",
    paragraphs: [
      "These terms explain how a security testing engagement with Arif Rahman works. They exist so both sides know exactly what is agreed before anything is tested.",
    ],
  },
  {
    title: "Written authorization is required",
    paragraphs: [
      "No testing of any kind happens without written authorization from you, or from the person responsible for the systems in scope. The authorization names the target systems, the testing window and the rules of engagement. Testing never extends beyond that written scope.",
    ],
  },
  {
    title: "Rules of engagement",
    list: [
      "Testing is limited to the systems named in the written scope.",
      "Accessing data unrelated to the engagement, disrupting real users, and social engineering of your staff are outside standard testing unless explicitly agreed in writing.",
      "If testing uncovers something urgent, you are told promptly — not held until the final report.",
    ],
  },
  {
    title: "Responsible disclosure",
    paragraphs: [
      "Vulnerabilities are reported privately to you first, with enough time to fix them before any wider disclosure. Individual engagements are never published with client names or identifying details — only fully anonymized write-ups may be used to demonstrate methodology, and you can ask for yours to be excluded.",
    ],
  },
  {
    title: "Confidentiality",
    paragraphs: [
      "Everything shared during an engagement — code, infrastructure details, credentials and findings — stays confidential. Confidential material is used only for the purpose of the engagement and is not shared with third parties.",
    ],
  },
  {
    title: "Deliverables and re-testing",
    paragraphs: [
      "What you receive, in what format, and by when, is defined in the written scope before work starts — typically a severity-rated report with evidence and remediation guidance, followed by a re-test of the fixes once they ship.",
    ],
  },
  {
    title: "No guarantee of completeness",
    paragraphs: [
      "A security assessment is a point-in-time review performed by a human tester. It cannot guarantee that every possible vulnerability has been found. It is one layer of a security program — not a replacement for secure development, monitoring and routine updates.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these terms, or about scoping an engagement? Email the address below before any work begins.",
    ],
  },
] as const

export default function TermsPage() {
  return (
    <>
      <PageHero
        index="Legal"
        label="Terms"
        title="Terms of engagement"
        description="How security testing engagements work: written authorization first, responsible disclosure always, and confidentiality throughout."
      />

      <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-10">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-3">
              <h2 className="text-base font-semibold tracking-tight">
                {section.title}
              </h2>
              {"paragraphs" in section && section.paragraphs
                ? section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))
                : null}
              {"list" in section && section.list ? (
                <ul className="grid gap-2">
                  {section.list.map((item) => (
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
              ) : null}
            </section>
          ))}

          <p className="border-t border-border/60 pt-6 text-sm leading-relaxed text-muted-foreground">
            Ready to scope an engagement? Start on the{" "}
            <a
              href="/contact"
              className="font-medium text-foreground underline underline-offset-4"
            >
              contact page
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-foreground underline underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>

          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Last updated — October 2026
          </p>
        </div>
      </div>
    </>
  )
}
