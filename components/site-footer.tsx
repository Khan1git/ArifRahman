import Link from "next/link"
import { BackToTop } from "@/components/back-to-top"
import { SocialIcon } from "@/components/social-icon"
import { cn } from "@/lib/utils"
import { footerLinks, site, socialLinks } from "@/lib/site-data"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 print:hidden">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Arif Rahman — home"
            >
              <span className="grid size-8 place-items-center rounded-lg border border-border bg-card font-mono text-xs font-semibold text-primary">
                AR
              </span>
              <span className="text-sm font-semibold tracking-tight">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
          </div>

          <div className="flex items-start gap-12">
            <nav aria-label="Footer" className="grid gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Elsewhere
              </p>
              <ul className="mt-3 grid gap-2.5">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href === "#" ? undefined : "_blank"}
                      rel={link.href === "#" ? undefined : "noreferrer"}
                      title={
                        link.href === "#" ? "Profile coming soon" : link.label
                      }
                      className={cn(
                        "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                        link.href === "#" && "cursor-default"
                      )}
                    >
                      <SocialIcon name={link.icon} className="size-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {site.location.split(",")[0]}, Pakistan
            </p>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  )
}
