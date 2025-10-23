"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Award, ExternalLink, Building } from "lucide-react"

export default function CertificatesPage() {
  const certificates = [
    {
      name: "Foundation OF Cybersecurity",
      issuer: "Coursera",
      year: "2024",
      description: "Introduced the fundamentals of cybersecurity, including the CIA Triad, risk management, and security best practices Covered common cyber threats, attack vectors, and methods to identify and mitigate vulnerabilities.Explored network security basics, authentication, and encryption concepts for securing digital systems.Built a strong foundation for advanced topics such as ethical hacking and penetration testing",
      skills: ["Penetration Testing", "Phishing", "Security", "Web Application Security"],
      credentialId: "ECC-CEH-2024-001234",
      verifyUrl: "#",
      icon: Shield,
      color: "text-red-400",
    },
    {
      name: "Api Fundamentals",
      issuer: "ApiSec University",
      year: "2025",
      description: "Mastered core API security fundamentals: API discovery and enumeration, vulnerability identification, and remediation workflows.",
      skills: ["Penetration Testing", "Api Security", "Api Hacking", "Api Top 10", "Security", "Web Application Security"],
      credentialId: "ECC-CEH-2024-001234",
      verifyUrl: "#",
      icon: Shield,
      color: "text-red-400",
    },
    {
      name: "Api Pentesting",
      issuer: "ApiSec University",
      year: "2025",
      description: "Performed hands-on API penetration testing with Burp Suite and Postman: BOLA, BAFLA, mass assignment and the OWASP API Top 10. ",
      skills: ["Penetration Testing", "Api Security", "Api Hacking", "Api Top 10", "Web Application Security"],
      credentialId: "ECC-CEH-2024-001234",
      verifyUrl: "#",
      icon: Shield,
      color: "text-red-400",
    },
    {
      name: "The Ultimate Bug Bounty",
      issuer: "ZTM Security",
      year: "2023",
      description:
        "Comprehensive bug bounty course covering web application security, OWASP Top 10 vulnerabilities, and hands-on exploitation techniques including SQL Injection, Command Injection,IDOR Vulnerabilites, SSRF and Broken Authentication. Included practical exercises in vulnerability discovery and reporting.",
      skills: [
        "OWASP Top 10",
        "Web Application Security",
        "SQL Injection",
        "Command Injection",
        "Vulnerability Exploitation",
        "Bug Reporting"
      ],
      credentialId: "ZTM-BB-2023-112233",
      verifyUrl: "#",
      icon: Shield,
      color: "text-primary",
    },
    {
      name: "Kali Linux 101",
      issuer: "TCM Security",
      year: "2025",
      description:
        "Covered the basics of Kali Linux, including essential command-line operations, file navigation, cron jobs, user and group management, and practical usage of security tools within the Kali environment.",
      skills: ["Linux Commands", "File Navigation", "User & Group Management", "Security Tools", "Cron Jobs"],
      credentialId: "TCM-KL-101-2023-987654",
      verifyUrl: "#",
      icon: Shield,
      color: "text-green-500",
    },
    {
      name: "Javascript For Beginners",
      issuer: "Simple Learn",
      year: "2024",
      description: "Mastered the fundamentals of JavaScript, including data types, arrays, objects, and classes. Learned to create and manipulate functions for building dynamic web applications. Gained hands-on experience in writing clean and efficient JavaScript code.",
      skills: ["Arrays", "Objects And Methods", "Types", "Functions"],
      credentialId: "AWS-SAA-2023-567890",
      verifyUrl: "#",
      icon: Award,
      color: "text-orange-400",
    },
    {
      name: "HTML",
      issuer: "Coursera",
      year: "2023",
      description:
        "Mastered the basics of HTML structure and semantic elements for web development.Learned to create well-structured layouts using HTML tags and attributes.Explored best practices for organizing content and accessibility standards.Built multiple page layouts as part of hands-on exercises.",
      skills: ["Network Security", "Risk Management", "Cryptography", "Identity Management"],
      credentialId: "COMP-SEC-2022-778899",
      verifyUrl: "#",
      icon: Shield,
      color: "text-green-400",
    },
    {
      name: "IOT 3 Days Traning Workshop",
      issuer: "UOM",
      year: "2022",
      description:
        "Participated in a 3-day hands-on workshop focused on Internet of Things (IoT) fundamentals.Learned how IoT devices work, communicate, and integrate into smart ecosystems.Explored the role and impact of IoT in future technologies and real-world applications.Gained practical experience in connecting and managing IoT devices and networks",
      skills: ["Network Security", "Risk Management", "Cryptography", "Identity Management"],
      credentialId: "COMP-SEC-2022-778899",
      verifyUrl: "#",
      icon: Shield,
      color: "text-green-400",
    },
    {
      name: "Wordpress Guided Project Certificate",
      issuer: "Coursera",
      year: "2024",
      description:
        "Professional certificate covering the basic of wrodpress including setup theme installation and elementor for manual designing",
      skills: ["Website", "Wordpress themes", "Plugins"],
      credentialId: "META-REACT-2022-445566",
      verifyUrl: "#",
      icon: Award,
      color: "text-blue-400",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise in cybersecurity, cloud computing, and modern web
            development.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">8</h3>
            <p className="text-muted-foreground">Total Certifications</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">5</h3>
            <p className="text-muted-foreground">Security Focused</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">2025</h3>
            <p className="text-muted-foreground">Latest Achievement</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
            <p className="text-muted-foreground">Pass Rate</p>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => {
            const Icon = cert.icon
            return (
              <Card
                key={cert.name}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted/20 rounded-lg">
                        <Icon className={`w-6 h-6 ${cert.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {cert.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Building className="w-4 h-4" />
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {cert.year}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Credential Info */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="text-muted-foreground">Credential ID: </span>
                        <span className="font-mono text-xs">{cert.credentialId}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm committed to staying current with the latest security trends and technologies. Currently pursuing
            additional certifications in cloud security and advanced penetration testing.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View My Skills
          </Button>
        </div>
      </div>
    </div>
  )
}
