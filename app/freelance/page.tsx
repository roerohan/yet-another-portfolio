import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code2,
  Database,
  Shield,
  Layers,
  BookOpen,
  GraduationCap,
  Github,
  Star,
  GitFork,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Zap,
  Award,
  ArrowLeft,
  Home,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import GitHubProfileStats from "@/components/github-profile-stats";

export const metadata: Metadata = {
  title: "Freelance Services | Rohan Mukherjee",
  description:
    "Hire Rohan Mukherjee for full-stack development, backend engineering, security audits, and technical content. 5+ years of freelancing experience on Upwork.",
};

export default function FreelancePage() {
  const services = [
    {
      icon: Layers,
      title: "Full-Stack Development",
      description:
        "End-to-end web application development with modern frameworks. From responsive frontends to scalable backends, I build complete solutions.",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "Go", "Rust"],
      highlight: "Most Popular",
    },
    {
      icon: Database,
      title: "Backend & Infrastructure",
      description:
        "Robust backend systems, RESTful APIs, real-time services, and cloud infrastructure. Specializing in WebRTC, microservices, and edge computing.",
      skills: ["WebRTC", "Kubernetes", "Docker", "System Design", "Cloud"],
      highlight: "Specialized",
    },
    {
      icon: Shield,
      title: "Security & Penetration Testing",
      description:
        "Web application security audits, penetration testing, and secure code reviews. Helping you find vulnerabilities before attackers do.",
      skills: ["OWASP Top 10", "CTF Experience", "Security Audits"],
      highlight: "Expert",
    },
    {
      icon: BookOpen,
      title: "Technical Content Writing",
      description:
        "Clear, engaging technical documentation, blog posts, and tutorials. I translate complex concepts into digestible content.",
      skills: ["Documentation", "Blog Posts", "API Docs", "Tutorials"],
      highlight: null,
    },
    {
      icon: GraduationCap,
      title: "Programming Tutoring",
      description:
        "One-on-one programming mentorship and tutoring. Whether you're learning your first language or diving into advanced concepts.",
      skills: ["JavaScript", "Python", "Go", "Data Structures", "Algorithms"],
      highlight: null,
    },
    {
      icon: Code2,
      title: "Code Review & Consulting",
      description:
        "Expert code reviews, architecture consulting, and technical guidance for your projects. Get a fresh perspective from an experienced engineer.",
      skills: ["Architecture Review", "Best Practices", "Performance"],
      highlight: null,
    },
  ];

  const achievements = [
    {
      icon: Award,
      value: "5+",
      label: "Years Freelancing",
      color: "text-cyan-500",
    },
    {
      icon: Zap,
      value: "30+",
      label: "Projects Delivered",
      color: "text-purple-500",
    },
    {
      icon: Star,
      value: "Top Rated",
      label: "Upwork Status",
      color: "text-yellow-500",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Client Satisfaction",
      color: "text-green-500",
    },
  ];

  const whyWorkWithMe = [
    {
      title: "Real-World Experience",
      description:
        "Currently building real-time communication tools at Cloudflare. Ex-founding engineer at a YC-backed startup acquired by Cloudflare.",
    },
    {
      title: "Full-Stack Expertise",
      description:
        "From frontend React to backend Go/Rust, infrastructure, and DevOps. I've built systems serving millions of users.",
    },
    {
      title: "Security-First Mindset",
      description:
        "Active CTF participant and security enthusiast. I build with security in mind from day one, not as an afterthought.",
    },
    {
      title: "Clear Communication",
      description:
        "Regular updates, transparent processes, and clear documentation. You'll always know where your project stands.",
    },
    {
      title: "Open Source Contributor",
      description:
        "Active in the developer community. I give back by contributing to open source and sharing knowledge through blogs.",
    },
    {
      title: "Fast & Reliable",
      description:
        "Deadlines matter. I deliver quality work on time, every time. 5+ years of proven reliability on Upwork.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Back to Home Link */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="sm" asChild className="group">
          <Link href="/" className="flex items-center text-zinc-400 hover:text-cyan-500">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={1}
          repeatDelay={0.5}
        />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute h-full w-full bg-gradient-to-b from-black/30 via-black/60 to-background" />

        <div className="container relative z-10 mx-auto px-4 py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2">
              <Badge
                variant="outline"
                className="border-cyan-500/50 bg-cyan-500/10 text-cyan-500"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                Available for Freelance Work
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
                Exceptional Together
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400">
              Systems Engineer at Cloudflare. Ex-founding engineer at a Dyte, a YC startup.
              5+ years of delivering high-quality solutions to clients worldwide on Upwork.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="#contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://www.upwork.com/freelancers/~01a03245e7615b2e2a"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Upwork Profile
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800"
                >
                  <achievement.icon className={`h-6 w-6 mb-2 ${achievement.color}`} />
                  <div className={`text-2xl font-bold ${achievement.color}`}>
                    {achievement.value}
                  </div>
                  <div className="text-sm text-zinc-500">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Services Section */}
        <section id="services" className="scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Services I Offer
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              From concept to deployment, I provide comprehensive solutions tailored to your needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all hover:border-cyan-500/30 group relative overflow-hidden"
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className="border-cyan-500/30 bg-cyan-500/10 text-cyan-500"
                    >
                      {service.highlight}
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 space-y-4">
                  <service.icon className="h-10 w-10 text-cyan-500 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-zinc-400">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-zinc-800 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="border-zinc-800" />

        {/* GitHub Stats Section */}
        <section id="github" className="scroll-mt-32">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Github className="h-8 w-8 mr-3 text-cyan-500" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Open Source Contributions
              </h2>
            </div>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              I believe in giving back to the community. Here's a glimpse of my open source work.
            </p>
          </div>

          <GitHubProfileStats username="roerohan" />
        </section>

        <hr className="border-zinc-800" />

        {/* Why Work With Me */}
        <section id="why" className="scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Work With Me?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              More than just a freelancer. A dedicated partner in your success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyWorkWithMe.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-zinc-400 text-sm">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-zinc-800" />

        {/* CTA Section */}
        <section id="contact" className="scroll-mt-32">
          <Card className="border-zinc-800 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            <CardContent className="p-12 relative z-10">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-zinc-400">
                  Whether you need a full-stack application, backend infrastructure, security audit,
                  or technical content, I'm here to help bring your vision to life.
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/#contact">
                      Get in Touch
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link
                      href="https://www.upwork.com/freelancers/~01a03245e7615b2e2a"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hire me on Upwork
                    </Link>
                  </Button>
                </div>
                <div className="pt-6 flex flex-wrap gap-8 justify-center text-sm text-zinc-500">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Fast Response Time
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Flexible Availability
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Quality Guaranteed
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
