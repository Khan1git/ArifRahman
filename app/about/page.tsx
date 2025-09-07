"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Shield, Server, Database, Globe, Lock } from "lucide-react"

export default function AboutPage() {
  const skills = {
    Frontend: {
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
      color: "text-blue-400",
    },
    Backend: {
      icon: Server,
      skills: ["Node.js", "Firebase", "Expresjs", "MongoDB"],
      color: "text-green-400",
    },
    Security: {
      icon: Shield,
      skills: ["Try Hack Me", "Website Pentesting", "OWASP Top 10", "Burp Suite", "Nmap", "Metasploit", "Nikto", "Dirb,Gobuster"],
      color: "text-primary",
    },
    Computer: {
      icon: Database,
      skills: ["Word", "Power point", "Excel",],
      color: "text-purple-400",
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building secure, scalable applications and protecting digital assets through comprehensive
            security testing.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">My Journey</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started my career as a passionate developer, building modern, responsive web applications using the MERN stack,
                and later expanding into advanced frameworks like Next.js with TypeScript, Tailwind CSS, and Firebase.
              </p>
              <p>
                Along the way, I developed a strong interest in cybersecurity, completing certifications in bug bounty,
                and web application security. This journey allowed me to combine development expertise with security-first
                principles, ensuring every application I build is both high-performing and secure.
              </p>
              <p>
                Today, I am a Full Stack Developer, focusing on UI optimization, backend logic implementation, and
                performance tuning while conducting security testing to identify vulnerabilities. I continuously explore new trends in
                secure coding and penetration testing to deliver safer digital experiences.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">What I Do</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Building modern web applications with React, Next.js, and Node.js | Firebase
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Website Security Testing</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive penetration testing and vulnerability assessments
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">IT Support </h3>
                  <p className="text-muted-foreground text-sm">
                    As an IT graduate, I provide Basic technical support including Windows configuration, software installation, troubleshooting, and system optimization to ensure smooth operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, data]) => {
              const Icon = data.icon
              return (
                <Card key={category} className="bg-card border-border hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className={`w-6 h-6 ${data.color}`} />
                      <span className="text-lg">{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6 p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-primary font-semibold">2024</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Full Stack Internship </h3>
                  <p className="text-primary mb-3">Eztech</p>
                  <p className="text-muted-foreground">
                    Developed full stack attendance system with role based authentication and access,stuent can mark their daily attendance, submit a leave request and on month end admin/teacher can generate a pdf report for overall month attendnace
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
