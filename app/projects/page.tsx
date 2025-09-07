"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Shield, Code, Database, Globe } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Mern Stack Billing System ",
      description:
        "A full-featured billing system built with the MERN stack, offering secure invoicing, payment tracking, and customer management.",
      longDescription:
        "The MERN Stack Billing System is a comprehensive solution for businesses to manage invoices, track payments, and handle customer accounts efficiently. It includes features such as secure authentication, dynamic invoice generation, real-time data updates, role-based access control, and PDF report export. Built for scalability and optimized for performance, it ensures smooth billing operations with an intuitive UI.",
      tech: ["Node.js", "Express", "Redis", "JWT"],
      category: "Security",
      icon: Code,
      github: "#",
      demo: "#",
      image: "/api-gateway-security-dashboard-monitoring.jpg",
    },
    {
      title: "Attendance System",
      description:
        "A smart attendance tracking solution with real-time monitoring, automated reports, and secure authentication. Ideal for organizations and educational institutions.",
      longDescription:
        "The Attendance System is designed to streamline attendance management for organizations and educational institutions. It includes features like secure user authentication, real-time attendance logging, role-based access control (Admin, Teacher, Student), and automated reporting in PDF and Excel formats. The system also supports notifications, biometric or QR-based check-ins, and an intuitive dashboard for easy management. Built using the MERN stack, it ensures scalability, data integrity, and user-friendly interfaces.",

      tech: ["React", "Next.js", "Node.js", "Firebase", "JWT" ],
      category: "Full-Stack",
      icon: Shield,
      github: "#",
      demo: "#",
      image: "/secure-authentication-dashboard-dark-theme.jpg",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Scalable e-commerce solution with payment integration, inventory management, and advanced analytics. Features secure payment processing and real-time inventory tracking.",
      longDescription:
        "A complete e-commerce platform built with modern technologies. Includes features like product catalog, shopping cart, secure payment processing with Stripe, inventory management, order tracking, and comprehensive analytics dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB", ],
      category: "Full-Stack",
      icon: Globe,
      github: "#",
      demo: "#",
      image: "/modern-ecommerce-platform-dark-theme.jpg",
    },
    {
      title: "Penetration Testing Toolkit",
      description:
        "Custom toolkit for penetration testing with automated reconnaissance, payload generation, and report creation. Streamlines the entire penetration testing workflow.",
      longDescription:
        "A comprehensive toolkit that automates various aspects of penetration testing. Includes modules for reconnaissance, vulnerability scanning, exploit generation, and automated report creation with detailed findings and remediation suggestions.",
      tech: ["Python", "Bash", "Metasploit", "Nmap", "Custom Scripts"],
      category: "Security",
      icon: Shield,
      github: "#",
      demo: "#",
      image: "/penetration-testing-toolkit-terminal-interface.jpg",
    },
    {
      title: "Blog Website",
      description:
        "A modern blog platform with dynamic content, SEO optimization, and responsive design. Built for developers and tech enthusiasts.",
      longDescription:
        "The Blog Website is a feature-rich platform designed for publishing and managing technical articles. It includes a dynamic content management system, SEO-friendly architecture, full-text search, category and tag filtering, and an intuitive WYSIWYG editor for writing posts. Built with Next.js for fast performance and optimized rendering, it supports Markdown-based content, code syntax highlighting, and a clean, responsive UI using Tailwind CSS. Ideal for personal blogs or developer communities.",
      tech: ["React", 'Expressjss', "Node.js", "MongoDB"],
      category: "Full-Stack",
      icon: Database,
      github: "#",
      demo: "#",
      image: "/real-time-chat-application-dark-theme-modern.jpg",
    }
  ]

  const categories = ["All", "Full-Stack", "Security"]

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in full-stack development and cybersecurity, featuring secure applications and
            security tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-1 bg-muted/20 rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "ghost"}
                className={category === "All" ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={project.title}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="aspect-video bg-muted/20 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <Badge variant="secondary" className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl group-hover:text-primary transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/50 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities. Let's build something amazing together.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  )
}
