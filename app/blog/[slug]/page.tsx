import { blogPosts } from "@/lib/blogData"
import { notFound } from "next/navigation"
import Image from "next/image"

interface BlogPageProps {
  params: { slug: string }
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-muted-foreground mb-8">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-16" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Author */}
        <div className="border-t pt-6 flex items-center gap-4">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={50}
            height={50}
            className="rounded-full border"
          />
          <div>
            <h3 className="font-bold">{post.author.name}</h3>
            <p className="text-muted-foreground text-sm">{post.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
