import { PageHero } from "@/components/page-hero"
import { site } from "@/lib/site-data"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How contact form data and anonymous analytics are handled on this site.",
  path: "/privacy",
})

const sections = [
  {
    title: "What this policy covers",
    paragraphs: [
      "This site is the personal portfolio of Arif Rahman. This policy explains what data is collected when you use it, why it is collected, and how it is handled. It covers the contact form and anonymous usage analytics only.",
    ],
  },
  {
    title: "What is collected",
    list: [
      "Contact form: the name, email address and message you choose to submit.",
      "Usage analytics: anonymous, aggregated data about page views and site performance. Vercel Analytics is cookieless and does not identify individual visitors.",
    ],
  },
  {
    title: "Why it is collected",
    list: [
      "To read and reply to the message you send.",
      "To understand which parts of the site are useful and where it can improve.",
    ],
  },
  {
    title: "How form messages are delivered",
    paragraphs: [
      "Form submissions are sent through a form-delivery service to the email address listed on the contact page. If that service is not configured, the form will tell you to email directly instead — nothing is stored in the meantime.",
    ],
  },
  {
    title: "What is never done with your data",
    list: [
      "Your details are not sold, rented or added to marketing lists.",
      "Messages are not shared with anyone else.",
      "Details about client work — including any security findings — are always anonymized before they appear anywhere on this site.",
    ],
  },
  {
    title: "Retention and your rights",
    paragraphs: [
      "Contact messages are kept only for as long as needed to handle the conversation. You can ask for your message and contact details to be deleted at any time — email the address below and it will be removed.",
    ],
  },
  {
    title: "Third parties",
    paragraphs: [
      "The site is hosted on Vercel and uses Vercel Analytics for anonymous usage statistics. When the contact form is active, message delivery is handled by a dedicated form-delivery provider, which processes the message only to deliver it to the inbox above.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "If this policy changes, the updated version will be posted on this page with a new date.",
    ],
  },
] as const

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        index="Legal"
        label="Privacy"
        title="Privacy policy"
        description="Short version: this site collects only what you send through the contact form, plus anonymous analytics. Nothing is sold or shared."
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
            Questions about privacy? Email{" "}
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
