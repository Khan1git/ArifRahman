import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { BlogContent } from "@/components/blog-content"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import {
  blogAuthor,
  blogPosts,
  formatBlogDate,
  getBlogPost,
} from "@/lib/blogData"
import { pageMetadata } from "@/lib/page-metadata"

type BlogPostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const related = blogPosts
    .filter((entry) => entry.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-border/60">
          <div
            aria-hidden="true"
            className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_5%,transparent_75%)]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-28 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft
                className="size-3.5 transition-transform group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              All posts
            </Link>

            <p className="mt-8 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="sr-only">Author</dt>
                <dd>
                  <span className="font-medium text-foreground">
                    {blogAuthor.name}
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    · {blogAuthor.role}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Published</dt>
                <dd className="text-muted-foreground">
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                  <span aria-hidden="true"> · </span>
                  {post.readTime}
                </dd>
              </div>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
          <Reveal>
            <BlogContent blocks={post.blocks} />
          </Reveal>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Keep reading
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/blog/${entry.slug}`}
                  className="group rounded-xl border border-border/80 bg-card/40 p-5 transition-colors hover:border-primary/40"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary/80">
                    {entry.category}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-primary">
                    {entry.title}
                  </h2>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Read
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-8 h-11 px-5">
              <Link href="/blog">Back to all posts</Link>
            </Button>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  )
}
