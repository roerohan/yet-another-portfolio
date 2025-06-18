import { Badge } from "@/components/ui/badge"

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Cloudflare",
      companyUrl: "https://www.linkedin.com/company/cloudflare",
      role: "Engineer",
      period: "2025 - Present",
      description:
        "I'm part of the Emerging Technology and Incubation team, where I'm driving the Realtime Kit, a set of tools to enable real-time communication on the web. Building a better internet with Cloudflare!",
      technologies: ["WebRTC", "Edge Computing", "TypeScript", "Rust"],
      current: true,
    },
    {
      company: "Dyte (now Cloudflare)",
      companyUrl: "https://www.linkedin.com/company/dyteio",
      role: "Founding Engineer",
      period: "2020 - 2025",
      description:
        "Embarked on an incredible journey from a college project to a 50+ member company that eventually joined Cloudflare. Contributed to all aspects of the technology, most notably architecting and building the core SDK.",
      technologies: ["WebRTC", "Typescript", "Go", "System Administration", "Kubernetes"],
      current: false,
    },
    {
      company: "Upwork",
      companyUrl: "https://www.upwork.com/freelancers/~01a03245e7615b2e2a",
      role: "Freelance Developer",
      period: "2019 - Present",
      description: "Offering full-stack development, content writing, programming tutoring, and penetration testing services to clients worldwide.",
      technologies: ["Full-stack Development", "Content Writing", "Programming Tutor", "Penetration Testing"],
      current: true,
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8 pb-8">
          {/* Timeline connector */}
          {index < experiences.length - 1 && <div className="absolute left-3 top-3 h-full w-px bg-zinc-800" />}

          {/* Timeline dot */}
          <div
            className={`absolute left-0 top-1 h-6 w-6 rounded-full border-2 ${exp.current ? "border-cyan-500 bg-cyan-500/20" : "border-zinc-700 bg-zinc-800"} flex items-center justify-center`}
          >
            <div className={`h-2 w-2 rounded-full ${exp.current ? "bg-cyan-500" : "bg-zinc-600"}`} />
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <span className="text-zinc-400">@</span>
              <span className="font-semibold text-cyan-500"><a href={exp.companyUrl} rel="noreferrer" target="_blank">{exp.company}</a></span>
              {exp.current && (
                <Badge variant="outline" className="border-cyan-500/30 bg-cyan-500/10 text-cyan-500">
                  Current
                </Badge>
              )}
            </div>
            <p className="text-sm text-zinc-500">{exp.period}</p>
            <p className="text-zinc-400">{exp.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-zinc-800">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
