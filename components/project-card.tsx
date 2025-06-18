import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-zinc-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-zinc-800">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-zinc-800 bg-background/20 p-4">
        <Link href={githubUrl} className="flex items-center text-sm text-zinc-400 hover:text-cyan-500">
          <Github className="mr-1 h-4 w-4" />
          View Source
        </Link>
        {liveUrl && (
          <Link href={liveUrl} className="flex items-center text-sm text-zinc-400 hover:text-cyan-500">
            <ExternalLink className="mr-1 h-4 w-4" />
            Live Demo
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
