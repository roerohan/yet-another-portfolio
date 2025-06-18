"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
        <p className="mt-2 text-zinc-400">
          I'm always open to discussing new projects, opportunities, or collaborations.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-cyan-500" />
            <a href="mailto:me@roerohan.com" className="text-zinc-300 hover:text-cyan-500">
              me@roerohan.com
            </a>
          </div>
          <ul className="icons flex space-x-4">
            <li>
              <a href="https://x.com/roerohan" target="_blank" title="X"><i className="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/roerohan" target="_blank" title="LinkedIn"><i
                  className="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a href="https://github.com/roerohan" target="_blank" title="GitHub"><i className="fab fa-github"></i></a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/11500806/" target="_blank" title="Stackoverflow"><i
                  className="fab fa-stack-overflow"></i></a>
            </li>
            <li>
              <a href="https://medium.com/@roerohan" target="_blank" title="Medium"><i className="fab fa-medium"></i></a>
            </li>
            <li>
              <a href="mailto://roerohan@gmail.com" target="_blank" title="Mail"><i className="fab fa-google"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
        {isSubmitted ? (
          <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
            <div className="rounded-full bg-cyan-500/20 p-3">
              <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Message sent!</h3>
            <p className="text-zinc-400">Thanks for reaching out. I'll get back to you soon.</p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="border-zinc-800 bg-zinc-950 focus-visible:ring-cyan-500 placeholder-zinc-400"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="border-zinc-800 bg-zinc-950 focus-visible:ring-cyan-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                className="min-h-[120px] border-zinc-800 bg-zinc-950 focus-visible:ring-cyan-500"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
