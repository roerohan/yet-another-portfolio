import { Badge } from "@/components/ui/badge"

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Cloudflare",
      role: "Software Engineer",
      period: "Present",
      description: "Working on Cloudflare Realtimekit, bringing real-time communication capabilities to the edge.",
      technologies: ["WebRTC", "Edge Computing", "TypeScript", "Rust"],
      current: true,
    },
    {
      company: "Dyte",
      role: "Founding Engineer",
      period: "2021 - Acquisition",
      description:
        "Helped build Dyte from the ground up as part of YC W'21 batch. Developed core WebRTC infrastructure and APIs that led to Cloudflare acquisition.",
      technologies: ["WebRTC", "React", "Node.js", "Kubernetes"],
      current: false,
    },
    {
      company: "Upwork",
      role: "Freelance Developer",
      period: "2019 - Present",
      description:
        "Providing specialized development services in WebRTC, real-time applications, and security solutions.",
      technologies: ["Full-stack", "WebRTC", "Security", "API Development"],
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
            className={`absolute left-0 top-1 h-6 w-6 rounded-full border-2 ${exp.current ? "border-emerald-500 bg-emerald-500/20" : "border-zinc-700 bg-zinc-800"} flex items-center justify-center`}
          >
            <div className={`h-2 w-2 rounded-full ${exp.current ? "bg-emerald-500" : "bg-zinc-600"}`} />
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <span className="text-zinc-400">@</span>
              <span className="font-semibold text-emerald-500">{exp.company}</span>
              {exp.current && (
                <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
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
