"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Name - Large and Prominent */}
            <h1 className="text-7xl md:text-9xl lg:text-5rem] font-black mb-8 font-[family-name:var(--font-playfair)] text-primary leading-none">
              Arif Rahman
            </h1>

            {/* Subtitle - Smaller and Centered */}
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
                Full-Stack Developer & Web Pentester
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Crafting secure, scalable solutions with modern technologies
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 bg-transparent"
                >
                  Get In Touch
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-foreground font-semibold px-8 py-4"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Link
                  href={'https://github.com/khan1git'}
                >
                <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Link
                  href={'https://www.linkedin.com/in/arif-rahman-84b1a2262'}
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">18</h3>
              <p className="text-muted-foreground">TryHackMe National Rank</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">8</h3>
              <p className="text-muted-foreground">Certifications</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
