import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Terminal,
  Github,
  ExternalLink,
  Code2,
  Shield,
  Music,
  Briefcase,
} from "lucide-react";
import GitHubProjects from "@/components/github-projects";
import LatestBlogPosts from "@/components/latest-blog-posts";
import TerminalWindow from "@/components/terminal-window";
import ProjectCard from "@/components/project-card";
import ExperienceTimeline from "@/components/experience-timeline";
import BlogPostCard from "@/components/blog-post-card";
import ContactSection from "@/components/contact-section";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { ClientTweetCard } from "@/components/magicui/client-tweet-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
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
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Badge
                  variant="outline"
                  className="border-cyan-500/50 bg-cyan-500/10 text-cyan-500"
                >
                  Available for freelance
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Yet Another
                <span className="block text-cyan-500">Portfolio Website</span>
              </h1>
              <p className="max-w-[600px] text-zinc-400 md:text-xl">
                You've reached the internet's 134013489908th attempt at a
                portfolio website. Welcome! I'm a software engineer at
                Cloudflare, and an ex-founding engineer at Dyte (YC W'21).
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
        <section id="about" className="scroll-mt-32 beautify-links">
          <div className="flex items-center mb-8">
            <Terminal className="h-6 w-6 mr-3 text-cyan-500" />
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-6 items-center mb-8">
            <div className="flex justify-center items-center">
              <img
                src="/images/dp.jpg"
                alt="issa me mario"
                className="rounded-lg sm:w-56 object-fit"
              />
            </div>
            <div className="lg:text-xl text-zinc-400 col-span-5">
              <p>Hi! I'm Rohan.</p>
              <br />
              <p>
                I'm passionate about&nbsp;
                <a
                  href="https://github.com/roerohan"
                  rel="noreferrer"
                  target="_blank"
                >
                  contributing to open source
                </a>
                , penning the&nbsp;
                <a
                  href="https://blog.roerohan.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  occasional blog
                </a>
                , diving into the world of&nbsp;
                <a
                  href="https://github.com/roerohan/CTF-Write-ups"
                  rel="noreferrer"
                  target="_blank"
                >
                  cyber-security
                </a>
                , and grooving to the&nbsp;
                <a
                  href="https://spotify.link/OCbg4u8UWDb"
                  rel="noreferrer"
                  target="_blank"
                >
                  beats of music
                </a>
                .
              </p>
              <br />
              <p>
                While my primary role is at&nbsp;
                <a
                  href="https://cloudflare.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Cloudflare
                </a>
                , I also dabble in freelancing on&nbsp;
                <a
                  href="https://www.upwork.com/freelancers/~01a03245e7615b2e2a"
                  rel="noreferrer"
                  target="_blank"
                >
                  Upwork
                </a>
                .
              </p>
              <br />
              <p>
                Previously, I was a founding engineer at&nbsp;
                <a href="https://dyte.io" rel="noreferrer" target="_blank">
                  Dyte
                </a>
                , a YC W'21 startup. Dyte is now part of Cloudflare, and the
                product is now called the&nbsp;
                <a
                  href="https://realtime.cloudflare.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Realtime Kit
                </a>
                .
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-bold">Cybersecurity</h3>
                </div>
                <p className="text-zinc-400">
                  I'm passionate about web security, penetration testing, and
                  building secure systems. I regularly participate in{" "}
                  <a
                    href="https://github.com/roerohan/CTF-Write-ups"
                    rel="noreferrer"
                    target="_blank"
                  >
                    CTF competitions
                  </a>{" "}
                  and contribute to security-focused open source projects.
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
                  I'm an active contributor to various&nbsp;
                  <a
                    href="https://github.com/roerohan"
                    rel="noreferrer"
                    target="_blank"
                  >
                    open source projects
                  </a>
                  , primarily focused on developer tools, WebRTC technologies,
                  and security libraries. I believe in giving back to the
                  community.
                </p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center space-x-2">
                  <Music className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-bold">Hobbies</h3>
                </div>
                <p className="text-zinc-400">
                  When I'm not coding or pretending to be a security expert, I'm
                  probably trying to find the most creative ways to injure
                  myself while rock climbing, or yelling at the TV while
                  watching football. In between those moments of adrenaline, I
                  also enjoy playing guitar and&nbsp;
                  <a
                    className="text-cyan-500 underline"
                    href="https://spotify.link/OCbg4u8UWDb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    exploring new music
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center space-x-2">
                  <Terminal className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-bold">Tech Stack</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  I'm a master of duct-taping together a bunch of different
                  technologies until something works.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Go",
                    "Rust",
                    "React",
                    "Node.js",
                    "WebRTC",
                    "Docker",
                    "Kubernetes",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-zinc-800"
                    >
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
        <section id="experience" className="scroll-mt-32 beautify-links">
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 mr-3 text-cyan-500" />
            <h2 className="text-3xl font-bold tracking-tight">
              Work Experience
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ExperienceTimeline />
            <div className="flex justify-center items-center h-[70%]">
              <ClientTweetCard
                id="1930998190993719801"
                className="shadow-2xl"
              />
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-12" />

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32 beautify-links">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Code2 className="h-6 w-6 mr-3 text-cyan-500" />
              <h2 className="text-3xl font-bold tracking-tight">
                Open Source Projects
              </h2>
            </div>
            <Link
              href="https://github.com/roerohan"
              className="flex items-center text-sm text-zinc-400 hover:text-cyan-500"
            >
              View all on GitHub <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <GitHubProjects />
        </section>

        <hr className="border-zinc-800 my-12" />

        {/* Blog Section */}
        <section id="blog" className="scroll-mt-32 beautify-links">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Shield className="h-6 w-6 mr-3 text-cyan-500" />
              <h2 className="text-3xl font-bold tracking-tight">
                Latest Blog Posts
              </h2>
            </div>
            <Link
              href="/blog"
              className="flex items-center text-sm text-zinc-400 hover:text-cyan-500"
            >
              View all posts <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <LatestBlogPosts />
        </section>

        <hr className="border-zinc-800 my-12" />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}
