"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Clock, Globe } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arifrahman1k7@gmail.com",
      href: "mailto:arifrahman1k7@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3476530339",
      href: "tel:+0000000000",
    },
    {
      icon: MapPin,
      label: "Pakistan",
      value: "Pakistan",
      href: "#",
    },
    {
      icon: Globe,
      label: "Website",
      value: "Arif Rahman",
      href: "https://arif-rahman.vercel.app/",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/khan1git",
      username: "@khan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arif-rahman-84b1a2262/",
      username: "Arif Rahman",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/arifkhan",
      username: "@#",
    },
  ]

  const services = [
    {
      title: "Full-Stack Development",
      description: "Custom web applications with modern technologies",
      price: "Starting at $50",
    },
    {
      title: "Security Audit",
      description: "Comprehensive website penetration testing and vulnerability assessment",
      price: "Starting at $150",
    },
    {
      title: "Performance Optimization",
      description: "Security-focused code review and recommendations",
      price: "Starting at $50/hour",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to build something secure and amazing? Let's discuss your project and how I can help bring your vision
            to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        placeholder="Your full name"
                        className="bg-input border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="arifrahman1k7@gmail.com"
                        className="bg-input border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      placeholder="What's this about?"
                      className="bg-input border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Web Development", "Security Audit", "Consulting", "Code Review", "Other"].map((type) => (
                        <Badge
                          key={type}
                          variant="outline"
                          className="cursor-pointer border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      rows={6}
                      className="bg-input border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <div key={info.label} className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a href={info.href} className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  )
                })}
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Response Time</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent security matters, please call directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Services & Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={service.title} className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-primary font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              All projects include detailed documentation and post-launch support.
              <br />
              Custom quotes available for enterprise projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
