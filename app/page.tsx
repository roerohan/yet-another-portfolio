import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { Terminal, Github, ExternalLink, Code2, Shield, Music, Briefcase } from "lucide-react"
import TerminalWindow from "@/components/terminal-window"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import BlogPostCard from "@/components/blog-post-card"
import ContactSection from "@/components/contact-section"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
      />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute h-full w-full bg-gradient-to-b from-black/30 via-black/60 to-background" />
        <div className="container relative z-10 mx-auto px-4 py-32 md:py-40">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Badge variant="outline" className="border-cyan-500/50 bg-cyan-500/10 text-cyan-500">
                  Available for freelance
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Software Engineer
                <span className="block text-cyan-500">at Cloudflare</span>
              </h1>
              <p className="max-w-[600px] text-zinc-400 md:text-xl">
                Founding engineer at Dyte (YC W'21) — now Cloudflare Realtimekit. Open source contributor, cybersecurity
                enthusiast, and music lover.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="#contact">Get in touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View projects</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <TerminalWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <div className="flex items-center mb-8">
            <Terminal className="h-6 w-6 mr-3 text-cyan-500" />
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-bold">Cybersecurity</h3>
                </div>
                <p className="text-zinc-400">
                  Passionate about web security, penetration testing, and building secure systems. I regularly
                  participate in CTF competitions and contribute to security-focused open source projects.
                </p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center space-x-2">
                  <Github className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-bold">Open Source</h3>
                </div>
                <p className="text-zinc-400">
                  Active contributor to various open source projects, primarily focused on developer tools, WebRTC
                  technologies, and security libraries. I believe in giving back to the community.
                </p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center space-x-2">
                  <Music className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-bold">Music</h3>
                </div>
                <p className="text-zinc-400">
                  When I'm not coding, you'll find me exploring new music or playing guitar. I've even built a few
                  music visualization projects combining my technical skills with my passion for audio.
                </p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center space-x-2">
                  <Terminal className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-bold">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Rust",
                    "Go",
                    "React",
                    "Node.js",
                    "WebRTC",
                    "Cloudflare Workers",
                    "Edge Computing",
                    "WebAssembly",
                    "Docker",
                    "Kubernetes",
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-zinc-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <hr className="border-zinc-800 my-12" />

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-32">
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 mr-3 text-cyan-500" />
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          </div>
          <ExperienceTimeline />
        </section>

        <hr className="border-zinc-800 my-12" />

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Code2 className="h-6 w-6 mr-3 text-cyan-500" />
              <h2 className="text-3xl font-bold tracking-tight">Open Source Projects</h2>
            </div>
            <Link
              href="https://github.com/roerohan"
              className="flex items-center text-sm text-zinc-400 hover:text-cyan-500"
            >
              View all on GitHub <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Cloudflare Workers Library"
              description="A collection of utilities and middleware for Cloudflare Workers"
              tags={["TypeScript", "Cloudflare", "Edge Computing"]}
              githubUrl="https://github.com/roerohan/cloudflare-workers-library"
            />
            <ProjectCard
              title="WebRTC Security Scanner"
              description="Security auditing tool for WebRTC applications"
              tags={["Rust", "WebRTC", "Security"]}
              githubUrl="https://github.com/roerohan/webrtc-security-scanner"
            />
            <ProjectCard
              title="Realtime Data Visualization"
              description="Dashboard for visualizing realtime data streams"
              tags={["React", "D3.js", "WebSockets"]}
              githubUrl="https://github.com/roerohan/realtime-data-viz"
            />
          </div>
        </section>

        <hr className="border-zinc-800 my-12" />

        {/* Blog Section */}
        <section id="blog" className="scroll-mt-32">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Shield className="h-6 w-6 mr-3 text-cyan-500" />
              <h2 className="text-3xl font-bold tracking-tight">Latest Blog Posts</h2>
            </div>
            <Link href="/blog" className="flex items-center text-sm text-zinc-400 hover:text-cyan-500">
              View all posts <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogPostCard
              title="Building Secure WebRTC Applications"
              excerpt="Best practices for securing your WebRTC applications against common vulnerabilities"
              date="May 15, 2023"
              category="Security"
            />
            <BlogPostCard
              title="From Startup to Acquisition: The Dyte Journey"
              excerpt="Lessons learned from founding a YC startup and joining Cloudflare"
              date="March 22, 2023"
              category="Startup"
            />
            <BlogPostCard
              title="Edge Computing: The Future of Web Performance"
              excerpt="How Cloudflare Workers are changing the landscape of web application architecture"
              date="January 10, 2023"
              category="Technology"
            />
          </div>
        </section>

        <hr className="border-zinc-800 my-12" />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  )
}
