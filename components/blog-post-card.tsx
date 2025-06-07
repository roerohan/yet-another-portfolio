import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug?: string
}

export default function BlogPostCard({ title, excerpt, date, category, slug = "#" }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:bg-zinc-900/80">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            {category}
          </Badge>
          <span className="text-xs text-zinc-500">{date}</span>
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-zinc-400">{excerpt}</p>
      </CardContent>
      <CardFooter className="border-t border-zinc-800 bg-black/20 p-4">
        <Link href={slug} className="flex items-center text-sm text-zinc-400 hover:text-emerald-500">
          Read more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
