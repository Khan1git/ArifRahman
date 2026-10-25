import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { CtaBand } from "@/components/cta-band"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import {
  blogPosts,
  formatBlogDate,
} from "@/lib/blogData"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Notes on how I test authentication, find business logic and access-control flaws, and report Critical issues — written for developers and clients.",
  path: "/blog",
})

export default function BlogPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      <PageHero
        index="05"
        label="Blog"
        title="How I test, what I find, and how I explain it."
        description="Short write-ups on authentication testing, business logic, Critical chains, and integration security — methodology only, no exploit steps or client details."
      />

      <section className="border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="divide-y divide-border/60 border-y border-border/60">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <article>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-3 py-8 sm:grid-cols-[140px_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8 sm:py-10"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-col sm:items-start sm:gap-1.5">
                      <time dateTime={post.date}>
                        {formatBlogDate(post.date)}
                      </time>
                      <span className="text-primary/80">{post.category}</span>
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-balance text-xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                        {post.title}
                      </h2>
                      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {post.excerpt}
                      </p>
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {post.readTime}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="hidden size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:mt-1.5 sm:block"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want this level of review on your application?"
        description="Share a short note about what you are building. We can scope a focused assessment on a free 15-minute call."
        secondary={null}
      />
    </>
  )
}
