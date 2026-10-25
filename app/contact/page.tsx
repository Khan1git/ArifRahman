import { ContactForm } from "@/components/contact-form"
import { PageHero } from "@/components/page-hero"
import { SocialIcon } from "@/components/social-icon"
import { site, socialLinks } from "@/lib/site-data"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a conversation about securing your web application — or book the free 15-minute consultation call. Full stack development and security testing by Arif Rahman.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="07"
        label="Contact"
        title="Let's talk about what you need secured."
        description="Have a project, a security concern or a role in mind? Send a short message — or start with the free 15-minute consultation call and we will work out the scope together."
      />

      <section className="border-t border-border/60">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Direct contact
            </h2>

            <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
              <li className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
                <span className="text-sm text-muted-foreground">Email</span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
              {socialLinks.map((link) => (
                <li
                  key={link.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5"
                >
                  <span className="text-sm text-muted-foreground">
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    target={link.href === "#" ? undefined : "_blank"}
                    rel={link.href === "#" ? undefined : "noreferrer"}
                    title={
                      link.href === "#" ? "Profile coming soon" : link.label
                    }
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    <SocialIcon name={link.icon} className="size-3.5" />
                    {link.href === "#" ? "Coming soon" : link.handle}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-l-2 border-primary/60 pl-5">
              <h3 className="text-sm font-medium">
                Free 15-minute consultation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A short call to understand what you are building and to decide
                together whether an assessment is the right next step. No
                commitment.
              </p>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              In your message it helps to include what the application does,
              roughly how many people use it, and what you are worried about.
              Anything you share stays confidential — details about client work
              are always anonymized.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Every message comes straight to my inbox and I reply to it
              myself.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
