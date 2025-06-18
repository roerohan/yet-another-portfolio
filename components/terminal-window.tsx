"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"

export default function TerminalWindow() {
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const fullText = `const developer = {
   name: "Rohan Mukherjee",
   company: "Cloudflare",
   background: [
     "Founding Engineer @ Dyte (YC W'21)",
     "Engineer @ Cloudflare"
   ],
   skills: ["System Engineer", "Fullstack Development", "WebRTC", "Edge Computing"],
   passions: ["Open Source", "Cybersecurity", "Music"],
};

console.log("What brings you here?");`

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(typingInterval)
      }
    }, 50)

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className="w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900/90 font-mono text-sm shadow-lg">
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
        <div className="flex items-center space-x-2">
          <Terminal className="h-4 w-4 text-cyan-500" />
          <span className="text-xs text-zinc-400">portfolio.js</span>
        </div>
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
      </div>
      <div className="p-4">
        <pre className="whitespace-pre-wrap text-cyan-400">
          {text}
          {cursorVisible && <span className="animate-blink text-cyan-500">▋</span>}
        </pre>
      </div>
    </div>
  )
}
