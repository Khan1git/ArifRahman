"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Advanced SQL Injection Techniques in 2024",
      excerpt:
        "Exploring modern SQL injection vectors, bypass techniques, and comprehensive prevention strategies for web applications in the current threat landscape.",
      content:
        "A deep dive into the latest SQL injection techniques including time-based blind injection, second-order injection, and NoSQL injection methods...",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Security",
      tags: ["SQL Injection", "Web Security", "OWASP", "Penetration Testing"],
      featured: true,
      link: "advanced-sql-injection-techniques-2024"
    },
    {
      title: "Building Secure React Applications: A Complete Guide",
      excerpt:
        "Best practices for implementing security in React applications, covering XSS prevention, secure authentication, and data protection strategies.",
      content:
        "Security should be a primary concern when building React applications. This comprehensive guide covers essential security practices...",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Development",
      tags: ["React", "Security", "Frontend", "Authentication"],
      featured: true,
      link: "building-secure-react-applications"
    },
    {
      title: "API Security Gateway Implementation",
      excerpt:
        "Designing and implementing a robust API gateway with rate limiting, authentication, and comprehensive security monitoring capabilities.",
      content:
        "API gateways serve as the first line of defense for your microservices architecture. Learn how to implement comprehensive security...",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "Security",
      tags: ["API Security", "Microservices", "Rate Limiting", "Authentication"],
      featured: true,
      link: 'api-security-gateway-implementation'
    },
    {
      title: "Modern Authentication Patterns with JWT",
      excerpt:
        "Implementing secure authentication systems using JSON Web Tokens, including refresh token strategies and security considerations.",
      content:
        "JWT has become the standard for modern authentication. This article explores secure implementation patterns and common pitfalls...",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Development",
      tags: ["JWT", "Authentication", "Security", "Node.js"],
      featured: false,
    },
    {
      title: "Automated Vulnerability Scanning in CI/CD",
      excerpt:
        "Integrating security scanning into your development pipeline for continuous security assessment and early vulnerability detection.",
      content:
        "Security should be integrated into every stage of the development lifecycle. Learn how to implement automated vulnerability scanning...",
      date: "2023-12-15",
      readTime: "11 min read",
      category: "DevOps",
      tags: ["CI/CD", "Security Scanning", "DevSecOps", "Automation"],
      featured: false,
    },
  ]

  const categories = ["All", "Security", "Development", "DevOps"]
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Insights on cybersecurity, web development, and the intersection of security and modern software
            engineering.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10 bg-input border-border focus:border-primary" />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-primary text-primary-foreground" : "border-border"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card
                key={post.title}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-primary/50 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <Link
                      href={`/blog/${post.link}`}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card
                key={post.title}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary-foreground hover:bg-primary text-xs"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest articles on cybersecurity and web development delivered to your inbox.
              </p>
              <div className="flex gap-4">
                <Input placeholder="Enter your email" className="flex-1 bg-input border-border focus:border-primary" />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
