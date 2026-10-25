import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CtaBand } from "@/components/cta-band"
import { HomeHero } from "@/components/home-hero"
import { Reveal } from "@/components/reveal"
import { SeverityBadge } from "@/components/severity-badge"
import { StatFigure } from "@/components/stat-figure"
import { Ticker } from "@/components/ticker"
import { Button } from "@/components/ui/button"
import { blogPosts, formatBlogDate } from "@/lib/blogData"
import { caseStudies, homeStats, servicesDetailed } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const featuredFinding = caseStudies[0]
const latestPosts = [...blogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Ticker />

      {/* What I do — condensed */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
              What I do
            </p>
            <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
              Four ways I can help.
            </h2>
          </div>

          <div>
            <div className="divide-y divide-border/60 border-y border-border/60">
              {servicesDetailed.map((service, index) => (
                <Reveal key={service.slug} delay={index * 0.06}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="group grid gap-2 py-7 sm:grid-cols-[56px_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                      {service.number}
                    </span>
                    <span className="min-w-0">
                      <span className="relative inline-block text-xl font-medium tracking-tight after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 sm:text-2xl">
                        {service.title}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {service.short}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="hidden size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:block"
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>

            <Link
              href="/services"
              className="group/link mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              All services, in detail
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights strip — real numbers, used as design elements */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 lg:px-8">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            By the numbers
          </p>
          <div className="grid gap-12 sm:grid-cols-3 sm:gap-0">
            {homeStats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.08}
                className={cn(
                  index === 0
                    ? "sm:pr-6"
                    : "sm:border-l sm:border-border/60 sm:px-6"
                )}
              >
                <p className="text-6xl font-semibold leading-none tracking-tight tabular-nums sm:text-7xl">
                  <StatFigure value={stat.value} />
                </p>
                <p className="mt-4 text-sm font-medium">{stat.label}</p>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {stat.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured finding */}
      <section className="border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="relative border-y border-border/60 py-10 lg:py-12">
            {[
              "-left-1 -top-1.5",
              "-right-1 -top-1.5",
              "-left-1 -bottom-1.5",
              "-right-1 -bottom-1.5",
            ].map((position) => (
              <span
                key={position}
                aria-hidden="true"
                className={cn(
                  "absolute select-none font-mono text-xs leading-none text-border",
                  position
                )}
              >
                +
              </span>
            ))}

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
                    Featured finding
                  </p>
                  <SeverityBadge severity={featuredFinding.severity} />
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {featuredFinding.title}
                </h2>
                <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {featuredFinding.issue}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="group mt-8 h-11 gap-2 px-5"
                >
                  <Link href={`/work#${featuredFinding.id}`}>
                    Read the full write-up
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </div>

              <dl className="grid content-start self-start">
                {[
                  {
                    label: "Finding",
                    value: `${featuredFinding.number} / ${String(
                      caseStudies.length
                    ).padStart(2, "0")}`,
                  },
                  { label: "Status", value: "Fix verified and re-tested" },
                  {
                    label: "Confidentiality",
                    value: "Client and application details removed",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="border-t border-border/60 py-4 first:border-t-0 first:pt-0"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Latest writing */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
              Blog
            </p>
            <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight sm:text-xl">
              How I test and explain findings.
            </h2>
          </div>

          <div>
            <div className="divide-y divide-border/60 border-y border-border/60">
              {latestPosts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-2 py-7 sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
                  >
                    <time
                      dateTime={post.date}
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      {formatBlogDate(post.date)}
                    </time>
                    <span className="min-w-0">
                      <span className="relative inline-block text-lg font-medium tracking-tight after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 group-hover:after:scale-x-100 sm:text-xl">
                        {post.title}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="hidden size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:block"
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>

            <Link
              href="/blog"
              className="group/link mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              All posts
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
