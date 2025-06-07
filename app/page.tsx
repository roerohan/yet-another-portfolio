import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, Github, ExternalLink, Code2, Shield, Music, Briefcase } from "lucide-react"
import TerminalWindow from "@/components/terminal-window"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import BlogPostCard from "@/components/blog-post-card"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute h-full w-full bg-gradient-to-b from-black/30 via-black/60 to-black" />
        <div className="container relative z-10 mx-auto px-4 py-32 md:py-40">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Badge variant="outline" className="border-emerald-500/50 bg-emerald-500/10 text-emerald-500">
                  Available for freelance
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Software Engineer
                <span className="block text-emerald-500">at Cloudflare</span>
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
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="experience" className="space-y-12">
          <TabsList className="grid w-full grid-cols-4 gap-2">
            <TabsTrigger value="experience" className="data-[state=active]:bg-zinc-800">
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-zinc-800">
              <Code2 className="mr-2 h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="blog" className="data-[state=active]:bg-zinc-800">
              <Shield className="mr-2 h-4 w-4" />
              Blog
            </TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-zinc-800">
              <Terminal className="mr-2 h-4 w-4" />
              About
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            <ExperienceTimeline />
          </TabsContent>

          <TabsContent value="projects" className="space-y-8" id="projects">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Open Source Projects</h2>
              <Link
                href="https://github.com"
                className="flex items-center text-sm text-zinc-400 hover:text-emerald-500"
              >
                View all on GitHub <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Cloudflare Workers Library"
                description="A collection of utilities and middleware for Cloudflare Workers"
                tags={["TypeScript", "Cloudflare", "Edge Computing"]}
                githubUrl="https://github.com"
              />
              <ProjectCard
                title="WebRTC Security Scanner"
                description="Security auditing tool for WebRTC applications"
                tags={["Rust", "WebRTC", "Security"]}
                githubUrl="https://github.com"
              />
              <ProjectCard
                title="Realtime Data Visualization"
                description="Dashboard for visualizing realtime data streams"
                tags={["React", "D3.js", "WebSockets"]}
                githubUrl="https://github.com"
              />
            </div>
          </TabsContent>

          <TabsContent value="blog" className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Latest Blog Posts</h2>
              <Link href="/blog" className="flex items-center text-sm text-zinc-400 hover:text-emerald-500">
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
          </TabsContent>

          <TabsContent value="about" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-zinc-800 bg-zinc-900/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-emerald-500" />
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
                    <Github className="h-5 w-5 text-emerald-500" />
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
                    <Music className="h-5 w-5 text-emerald-500" />
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
                    <Terminal className="h-5 w-5 text-emerald-500" />
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
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <section id="contact" className="mt-16 pt-8 border-t border-zinc-800">
          <ContactSection />
        </section>
      </div>
    </div>
  )
}
