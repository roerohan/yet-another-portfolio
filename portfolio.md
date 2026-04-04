# Portfolio Content Reference

> This document captures ALL content, routes, data sources, and configuration from the current portfolio website for migration to a new stack/design. Generated from the source code on 2026-03-19.

---

## Table of Contents

1. [Route Map & Redirects](#route-map--redirects)
2. [SEO & Metadata](#seo--metadata)
3. [Homepage (/) Content](#homepage--content)
4. [Freelance Page (/freelance) Content](#freelance-page-freelance-content)
5. [Blog Redirects (/blog/\*)](#blog-redirects-blog)
6. [Static Public Files](#static-public-files)
7. [Dynamic Data Sources (APIs)](#dynamic-data-sources-apis)
8. [External Links & Social Profiles](#external-links--social-profiles)
9. [Assets & Images](#assets--images)
10. [Analytics & Third-Party Scripts](#analytics--third-party-scripts)
11. [Current Tech Stack](#current-tech-stack)
12. [Design Tokens & Theming](#design-tokens--theming)

---

## Route Map & Redirects

**CRITICAL: All these routes must continue to work (or redirect properly) after migration.**

### Pages

| Route                 | Type                  | Description                                                                    |
| --------------------- | --------------------- | ------------------------------------------------------------------------------ |
| `/`                   | Page                  | Main portfolio homepage                                                        |
| `/freelance`          | Page                  | Freelance services landing page                                                |
| `/blog`               | Server redirect (307) | Redirects to `https://blog.roerohan.com`                                       |
| `/blog/*` (catch-all) | Server redirect (307) | Redirects `/blog/<any/sub/path>` to `https://blog.roerohan.com/<any/sub/path>` |

### Hash Anchors (in-page navigation)

| URL                   | Section                                  |
| --------------------- | ---------------------------------------- |
| `/#about`             | About Me section                         |
| `/#experience`        | Work Experience section                  |
| `/#projects`          | Open Source Projects section             |
| `/#blog`              | Latest Blog Posts section                |
| `/#contact`           | Contact section                          |
| `/freelance#services` | Services I Offer                         |
| `/freelance#github`   | Open Source Contributions (GitHub stats) |
| `/freelance#why`      | Why Work With Me                         |
| `/freelance#contact`  | CTA / Contact section                    |

### Static File Routes

| URL              | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| `/age.html`      | Fun real-time age counter page (birthday: Dec 1, 2000)                              |
| `/favicon.ico`   | Favicon (also references `https://blog.roerohan.com/favicon-32x32.png` in `<head>`) |
| `/images/dp.jpg` | Profile photo                                                                       |

---

## SEO & Metadata

### Homepage

- **Title:** `Rohan Mukherjee | Portfolio`
- **Description:** `Software Engineer at Cloudflare, ex-founding engineer at Dyte (YC W'21), open source contributor, and cybersecurity enthusiast.`

### Freelance Page

- **Title:** `Freelance Services | Rohan Mukherjee`
- **Description:** `Hire Rohan Mukherjee for full-stack development, backend engineering, security audits, and technical content. 5+ years of freelancing experience on Upwork.`

### Global

- **Favicon:** `https://blog.roerohan.com/favicon-32x32.png` (32x32 PNG, loaded from external blog)
- **Language:** `en`
- **Font:** Inter (Google Fonts)
- **Default Theme:** Dark (forced, system theme disabled)

---

## Homepage (/) Content

### Hero Section

- **Badge (top-left):** "Available for freelance" (links to `/freelance`)
- **Heading:**
  ```
  Yet Another
  Portfolio Website
  ```
  (second line in cyan/accent color)
- **Subheading:**
  ```
  You've reached the internet's 134013489908th attempt at a portfolio website. Welcome! I'm a software engineer at Cloudflare, and an ex-founding engineer at Dyte (YC W'21).
  ```
- **CTA Buttons:**
  1. "Hire me" -> `/freelance`
  2. "Get in touch" -> `#contact`
  3. "View projects" -> `#projects`
- **Right side:** Animated terminal window with typing effect showing:

  ```javascript
  const developer = {
    name: "Rohan Mukherjee",
    company: "Cloudflare",
    background: ["Founding Engineer @ Dyte (YC W'21)", "Engineer @ Cloudflare"],
    skills: [
      "System Engineer",
      "Fullstack Development",
      "WebRTC",
      "Edge Computing",
    ],
    passions: ["Open Source", "Cybersecurity", "Music"],
  };

  console.log("What brings you here?");
  ```

  (Terminal header shows "portfolio.js" with macOS-style traffic light dots)

### About Me Section (`#about`)

- **Section Icon:** Terminal icon
- **Section Title:** "About Me"
- **Profile Image:** `/images/dp.jpg` (alt text: "issa me mario")
- **Bio text (paragraphs):**

  > Hi! I'm Rohan.
  >
  > I'm passionate about [contributing to open source](https://github.com/roerohan), penning the [occasional blog](https://blog.roerohan.com), diving into the world of [cyber-security](https://github.com/roerohan/CTF-Write-ups), and grooving to the [beats of music](https://spotify.link/OCbg4u8UWDb).
  >
  > While my primary role is at [Cloudflare](https://cloudflare.com), I also dabble in freelancing on [Upwork](https://www.upwork.com/freelancers/~01a03245e7615b2e2a).
  >
  > Previously, I was a founding engineer at [Dyte](https://dyte.io), a YC W'21 startup. Dyte is now part of Cloudflare, and the product is now called the [Realtime Kit](https://realtime.cloudflare.com).

- **Interest Cards (2x2 grid):**

  1. **Cybersecurity** (Shield icon)

     > I'm passionate about web security, penetration testing, and building secure systems. I regularly participate in [CTF competitions](https://github.com/roerohan/CTF-Write-ups) and contribute to security-focused open source projects.

  2. **Open Source** (GitHub icon)

     > I'm an active contributor to various [open source projects](https://github.com/roerohan), primarily focused on developer tools, WebRTC technologies, and security libraries. I believe in giving back to the community.

  3. **Hobbies** (Music icon)

     > When I'm not coding or pretending to be a security expert, I'm probably trying to find the most creative ways to injure myself while rock climbing, or yelling at the TV while watching football. In between those moments of adrenaline, I also enjoy playing guitar and [exploring new music](https://spotify.link/OCbg4u8UWDb).

  4. **Tech Stack** (Terminal icon)
     > I'm a master of duct-taping together a bunch of different technologies until something works.
     - **Tags:** TypeScript, Go, Rust, React, Node.js, WebRTC, Docker, Kubernetes

### Work Experience Section (`#experience`)

- **Section Icon:** Briefcase icon
- **Section Title:** "Work Experience"
- **Layout:** 2-column - timeline on left, embedded tweet on right

#### Experience Timeline

1. **Engineer @ [Cloudflare](https://www.linkedin.com/company/cloudflare)** (2025 - Present) `[Current]`

   > I'm part of the Emerging Technology and Incubation team, where I'm driving the Realtime Kit, a set of tools to enable real-time communication on the web. Building a better internet with Cloudflare!

   - Technologies: WebRTC, Edge Computing, TypeScript, Rust

2. **Founding Engineer @ [Dyte (now Cloudflare)](https://www.linkedin.com/company/dyteio)** (2020 - 2025)

   > Embarked on an incredible journey from a college project to a 50+ member company that eventually joined Cloudflare. Contributed to all aspects of the technology, most notably architecting and building the core SDK.

   - Technologies: WebRTC, Typescript, Go, System Administration, Kubernetes

3. **Freelance Developer @ [Upwork](https://www.upwork.com/freelancers/~01a03245e7615b2e2a)** (2019 - Present) `[Current]`
   > Offering full-stack development, content writing, programming tutoring, and penetration testing services to clients worldwide.
   - Technologies: Full-stack Development, Content Writing, Programming Tutor, Penetration Testing

#### Embedded Tweet

- **Tweet ID:** `1930998190993719801`
- **Author:** Rohan Mukherjee (@roerohan)
- **Tweet text:** "I used to break things at @dyte_io, now I break things at @Cloudflare"
- **Date:** 2025-06-06
- Uses `react-tweet` library with hardcoded fallback data in `app/data/twt.ts`
- The tweet also quotes a tweet by Abhishek Kankani (@KankaniAbhishek) - tweet ID `1930656077382824248`, text: "Hey there @Cloudflare"
- **Error state:** "Tweet not found"
- **Video fallback text:** "Your browser does not support the video tag."

### Open Source Projects Section (`#projects`)

- **Section Icon:** Code2 icon
- **Section Title:** "Open Source Projects"
- **"View all on GitHub" link** -> `https://github.com/roerohan`
- **Data source:** Pinned repos from `https://pinned.berrysauce.dev/get/roerohan`, falling back to `https://api.github.com/users/roerohan/repos?sort=updated&per_page=6`
- **Display:** Grid of ProjectCards (3 columns), each showing:
  - Repo name
  - Description (fallback: "No description provided.")
  - Language + up to 3 topic tags
  - "View Source" link to GitHub repo
  - "Live Demo" link if homepage URL exists
- **Fallback URL construction:** `https://github.com/roerohan/${repo.name}` when BerrySauce doesn't provide `html_url`
- **Error states:**
  - "Unable to load projects at this time." (when data exists but is empty)
  - "Unable to load projects. Please try again later." (when fetch throws)
- **NOTE:** Projects are dynamically fetched, not hardcoded. The new site should also fetch from GitHub.

### Latest Blog Posts Section (`#blog`)

- **Section Icon:** Shield icon
- **Section Title:** "Latest Blog Posts"
- **"View all posts" link** -> `/blog` (which redirects to `https://blog.roerohan.com`)
- **Data source:** `https://blog.roerohan.com/page-data/index/page-data.json` (Gatsby page-data JSON)
- **Display:** Grid of BlogPostCards (3 columns), showing latest 3 posts with:
  - Category badge (fallback category: "Blog Post")
  - Date
  - Title
  - Excerpt
  - "Read more" link -> `/blog/<slug>` (which redirects to external blog)
- **Error state:** "Unable to load blog posts. Please try again later."

- **Fallback blog posts** (when API fails):

  1. **"The setup that keeps me sane as a developer"** (April 04, 2025, Tech)

     > I have a borderline obsession with good dev setups. The right tools don't just make me faster, they keep me from slowly losing my mind. This...

     - Slug: `/blog/the-setup-that-keeps-me-sane-as-a-developer`

  2. **"How to Protect Yourself Online"** (March 03, 2024, General)

     > Even the most intelligent individuals may find themselves outsmarted under stress, as the pressure of the moment can cloud judgment and...

     - Slug: `/blog/how-to-protect-yourself-online`

  3. **"Type fast, and master your text editor"** (October 25, 2023, Tech)
     > Whether you're a software developer or a technical writer, your primary job is to edit text. It is surprising that most people whose jobs...
     - Slug: `/blog/type-fast-and-master-your-text-editor`

### Contact Section (`#contact`)

- **Section Title:** "Get in touch"
- **Subtext:** "I'm always open to discussing new projects, opportunities, or collaborations."
- **Email:** `me@roerohan.com`
- **Social Icons (Font Awesome):**
  - Twitter/X: `https://x.com/roerohan` (title: "X")
  - LinkedIn: `https://www.linkedin.com/in/roerohan` (title: "LinkedIn")
  - GitHub: `https://github.com/roerohan` (title: "GitHub")
  - StackOverflow: `https://stackoverflow.com/users/11500806/` (title: "Stackoverflow")
  - Medium: `https://medium.com/@roerohan` (title: "Medium")
  - Email (Google): `mailto://roerohan@gmail.com` (title: "Mail") -- **BUG: uses non-standard `mailto://` instead of `mailto:`; fix during migration**
- **Contact Form:**
  - Fields:
    - Name (label: "Name", placeholder: "Your name")
    - Email (label: "Email", placeholder: "your.email@example.com")
    - Message (label: "Message", placeholder: "Your message...")
  - Button states: "Send Message" (default) / "Sending..." (loading)
  - **NOTE:** Currently simulates submission with a setTimeout. Does NOT actually send to any backend. In the new site, this should be wired to a real backend (e.g. Resend, SendGrid, Formspree, etc.)
  - Success state: heading "Message sent!", text "Thanks for reaching out. I'll get back to you soon.", button "Send another message"

---

## Freelance Page (/freelance) Content

### Navigation

- "Back to Home" button (top-left, fixed position) -> `/`

### Hero Section

- **Badge:** "Available for Freelance Work" (with sparkles icon)
- **Heading:**
  ```
  Let's Build Something
  Exceptional Together
  ```
  (second line has cyan-blue-purple gradient)
- **Subheading:**
  ```
  Systems Engineer at Cloudflare. Ex-founding engineer at a Dyte, a YC startup. 5+ years of delivering high-quality solutions to clients worldwide on Upwork.
  ```
- **CTA Buttons:**
  1. "Start a Project" -> `#contact`
  2. "View Upwork Profile" -> `https://www.upwork.com/freelancers/~01a03245e7615b2e2a`

### Achievement Stats (grid)

| Icon       | Value     | Label               | Color  |
| ---------- | --------- | ------------------- | ------ |
| Award      | 5+        | Years Freelancing   | cyan   |
| Zap        | 30+       | Projects Delivered  | purple |
| Star       | Top Rated | Upwork Status       | yellow |
| TrendingUp | 98%       | Client Satisfaction | green  |

### Services Section (`#services`)

- **Section Title:** "Services I Offer"
- **Subtitle:** "From concept to deployment, I provide comprehensive solutions tailored to your needs"

| #   | Service                            | Description                                                                                                                                    | Skills/Tags                                         | Highlight Badge |
| --- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------------- |
| 1   | **Full-Stack Development**         | End-to-end web application development with modern frameworks. From responsive frontends to scalable backends, I build complete solutions.     | React, Next.js, Node.js, TypeScript, Go, Rust       | Most Popular    |
| 2   | **Backend & Infrastructure**       | Robust backend systems, RESTful APIs, real-time services, and cloud infrastructure. Specializing in WebRTC, microservices, and edge computing. | WebRTC, Kubernetes, Docker, System Design, Cloud    | Specialized     |
| 3   | **Security & Penetration Testing** | Web application security audits, penetration testing, and secure code reviews. Helping you find vulnerabilities before attackers do.           | OWASP Top 10, CTF Experience, Security Audits       | Expert          |
| 4   | **Technical Content Writing**      | Clear, engaging technical documentation, blog posts, and tutorials. I translate complex concepts into digestible content.                      | Documentation, Blog Posts, API Docs, Tutorials      | -               |
| 5   | **Programming Tutoring**           | One-on-one programming mentorship and tutoring. Whether you're learning your first language or diving into advanced concepts.                  | JavaScript, Python, Go, Data Structures, Algorithms | -               |
| 6   | **Code Review & Consulting**       | Expert code reviews, architecture consulting, and technical guidance for your projects. Get a fresh perspective from an experienced engineer.  | Architecture Review, Best Practices, Performance    | -               |

### GitHub Stats Section (`#github`)

- **Section Title:** "Open Source Contributions" (with GitHub icon)
- **Subtitle:** "I believe in giving back to the community. Here's a glimpse of my open source work."
- **GitHub username:** `roerohan`
- **Error state:** "Unable to load GitHub profile."
- **Data displayed (all from GitHub API):**
  - Avatar (alt: user's name), name, login (displayed as `@{login}`), bio
  - Stats grid:
    - Repositories (label: "Repositories", icon: BookOpen, color: cyan)
    - Total Stars (label: "Total Stars", suffix: "+", icon: Star, color: yellow)
    - Followers (label: "Followers", icon: Users, color: purple)
    - Account age (label: "Years", suffix: "+", icon: Calendar, color: green)
  - "View Profile" button -> links to GitHub profile
  - Contribution heatmap (heading: "Contribution Activity"): `https://ghchart.rshah.org/22d3ee/roerohan` (alt: "GitHub Contribution Graph")
  - "Top Repositories" heading with Star icon
  - Top 3 repositories (by stars, excluding forks) with: name, description (fallback: "No description provided"), stars, forks, language, topics (up to 3)

### Why Work With Me Section (`#why`)

- **Section Title:** "Why Work With Me?"
- **Subtitle:** "More than just a freelancer. A dedicated partner in your success."

| #   | Title                       | Description                                                                                                                         |
| --- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Real-World Experience**   | Currently building real-time communication tools at Cloudflare. Ex-founding engineer at a YC-backed startup acquired by Cloudflare. |
| 2   | **Full-Stack Expertise**    | From frontend React to backend Go/Rust, infrastructure, and DevOps. I've built systems serving millions of users.                   |
| 3   | **Security-First Mindset**  | Active CTF participant and security enthusiast. I build with security in mind from day one, not as an afterthought.                 |
| 4   | **Clear Communication**     | Regular updates, transparent processes, and clear documentation. You'll always know where your project stands.                      |
| 5   | **Open Source Contributor** | Active in the developer community. I give back by contributing to open source and sharing knowledge through blogs.                  |
| 6   | **Fast & Reliable**         | Deadlines matter. I deliver quality work on time, every time. 5+ years of proven reliability on Upwork.                             |

### CTA Section (`#contact`)

- **Heading:** "Ready to Start Your Project?"
- **Text:** "Whether you need a full-stack application, backend infrastructure, security audit, or technical content, I'm here to help bring your vision to life."
- **Buttons:**
  1. "Get in Touch" -> `/#contact` (homepage contact form)
  2. "Hire me on Upwork" -> `https://www.upwork.com/freelancers/~01a03245e7615b2e2a`
- **Trust indicators:**
  - Fast Response Time
  - Flexible Availability
  - Quality Guaranteed

---

## Blog Redirects (/blog/\*)

- `/blog` -> `https://blog.roerohan.com` (server-side 307 redirect)
- `/blog/<any/path>` -> `https://blog.roerohan.com/<any/path>` (server-side 307 redirect)
- The blog itself is a separate Gatsby site hosted at `blog.roerohan.com`

---

## Static Public Files

| File                   | Path                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `age.html`             | `/age.html`             | Real-time age counter (birthday: December 1, 2000). Uses JavaScript `setInterval` to show age to 9 decimal places. CSS declares `font-family: "Space Mono", sans-serif` but loads Poppins from Google Fonts CDN (`https://fonts.googleapis.com/css2?family=Poppins:...`). Also references `main.css` (relative link -- file does not exist in `/public/`, likely broken/unused). Preconnects to `fonts.googleapis.com` and `fonts.gstatic.com`. |
| `favicon.ico`          | `/favicon.ico`          | Local favicon file                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `dp.jpg`               | `/images/dp.jpg`        | Profile photo used on About section                                                                                                                                                                                                                                                                                                                                                                                                             |
| `placeholder.jpg`      | `/placeholder.jpg`      | Placeholder image (not actively used)                                                                                                                                                                                                                                                                                                                                                                                                           |
| `placeholder.svg`      | `/placeholder.svg`      | Placeholder SVG (not actively used)                                                                                                                                                                                                                                                                                                                                                                                                             |
| `placeholder-logo.png` | `/placeholder-logo.png` | Placeholder logo (not actively used)                                                                                                                                                                                                                                                                                                                                                                                                            |
| `placeholder-logo.svg` | `/placeholder-logo.svg` | Placeholder logo SVG (not actively used)                                                                                                                                                                                                                                                                                                                                                                                                        |
| `placeholder-user.jpg` | `/placeholder-user.jpg` | Placeholder user image (not actively used)                                                                                                                                                                                                                                                                                                                                                                                                      |

---

## Dynamic Data Sources (APIs)

All API fetches use ISR with 1-hour cache (`revalidate: 3600`).

| API                           | Endpoint                                                              | Used For                                              | Fallback Behavior                                         |
| ----------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| **BerrySauce Pinned Repos**   | `https://pinned.berrysauce.dev/get/roerohan`                          | Homepage projects section - fetch pinned GitHub repos | Falls back to GitHub API                                  |
| **GitHub Repos API**          | `https://api.github.com/users/roerohan/repos?sort=updated&per_page=6` | Fallback for pinned repos on homepage                 | Shows error message                                       |
| **GitHub User API**           | `https://api.github.com/users/roerohan`                               | Freelance page - profile stats                        | Shows "Unable to load GitHub profile"                     |
| **GitHub Repos (100)**        | `https://api.github.com/users/roerohan/repos?per_page=100`            | Freelance page - total star count & top repos         | Returns 0 stars / empty repos                             |
| **Blog page-data**            | `https://blog.roerohan.com/page-data/index/page-data.json`            | Homepage latest blog posts                            | Uses hardcoded fallback posts (see above)                 |
| **GitHub Contribution Chart** | `https://ghchart.rshah.org/22d3ee/roerohan`                           | Freelance page - contribution heatmap image           | N/A (just an `<img>`)                                     |
| **Twitter/X (react-tweet)**   | Twitter oEmbed (via `react-tweet` library)                            | Homepage experience section - embedded tweet          | Uses hardcoded fallback tweet data from `app/data/twt.ts` |

---

## External Links & Social Profiles

### Personal Profiles

| Platform         | URL                                                      |
| ---------------- | -------------------------------------------------------- |
| GitHub           | `https://github.com/roerohan`                            |
| Twitter/X        | `https://x.com/roerohan`                                 |
| LinkedIn         | `https://www.linkedin.com/in/roerohan`                   |
| StackOverflow    | `https://stackoverflow.com/users/11500806/`              |
| Medium           | `https://medium.com/@roerohan`                           |
| Upwork           | `https://www.upwork.com/freelancers/~01a03245e7615b2e2a` |
| Blog             | `https://blog.roerohan.com`                              |
| Email (primary)  | `me@roerohan.com`                                        |
| Email (Gmail)    | `roerohan@gmail.com`                                     |
| Spotify Playlist | `https://spotify.link/OCbg4u8UWDb`                       |

### Company / Product Links

| Entity                            | URL                                           |
| --------------------------------- | --------------------------------------------- |
| Cloudflare                        | `https://cloudflare.com`                      |
| Cloudflare LinkedIn               | `https://www.linkedin.com/company/cloudflare` |
| Dyte                              | `https://dyte.io`                             |
| Dyte LinkedIn                     | `https://www.linkedin.com/company/dyteio`     |
| Realtime Kit (Cloudflare product) | `https://realtime.cloudflare.com`             |
| CTF Write-ups                     | `https://github.com/roerohan/CTF-Write-ups`   |

---

## Assets & Images

### Local Assets

| Path             | Usage                          |
| ---------------- | ------------------------------ |
| `/images/dp.jpg` | Profile photo in About section |
| `/favicon.ico`   | Favicon                        |
| `/age.html`      | Standalone age counter page    |

### Remote Assets

| URL                                                                            | Usage                                          |
| ------------------------------------------------------------------------------ | ---------------------------------------------- |
| `https://blog.roerohan.com/favicon-32x32.png`                                  | Favicon in `<head>`                            |
| `https://ghchart.rshah.org/22d3ee/roerohan`                                    | GitHub contribution heatmap on freelance page  |
| GitHub avatar (from API `avatar_url`)                                          | Profile picture on freelance page GitHub stats |
| `https://pbs.twimg.com/profile_images/1901890648086892544/CAqhmo1Z_normal.jpg` | Tweet author profile picture (fallback data)   |
| `https://pbs.twimg.com/media/GsxInNqakAAtsiC.jpg`                              | Tweet media image (fallback data)              |
| `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css`    | Font Awesome icons for social links            |

---

## Analytics & Third-Party Scripts

| Service                                   | ID / Config                   | Implementation                                                                                         |
| ----------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Google Tag Manager / Google Analytics** | `GTM-NSNFW3NL`                | Loaded via `next/script` with `afterInteractive` strategy. Also has a `<noscript>` iframe fallback.    |
| **Font Awesome 6.1.1**                    | CDN stylesheet                | Social media icons in contact section (Twitter, LinkedIn, GitHub, StackOverflow, Medium, Google/Email) |
| **Google Fonts (Inter)**                  | Loaded via `next/font/google` | Primary font across the site                                                                           |

---

## Current Tech Stack

> For reference when choosing the new stack.

| Layer           | Technology                                 |
| --------------- | ------------------------------------------ |
| Framework       | Next.js 15.2.4 (App Router)                |
| Language        | TypeScript 5.x                             |
| React           | React 19                                   |
| Styling         | Tailwind CSS 3.x                           |
| UI Components   | shadcn/ui (Radix primitives)               |
| Animation       | Motion (Framer Motion successor) 12.x      |
| Theme           | next-themes (dark mode forced)             |
| Tweet Embed     | react-tweet 3.x                            |
| Deployment      | Cloudflare Workers via OpenNext + Wrangler |
| Package Manager | pnpm                                       |

---

## Design Tokens & Theming

### Color Scheme

- **Background:** Dark (`bg-gradient-to-br from-gray-950 to-gray-900`)
- **Primary Accent:** Cyan (`text-cyan-500`, `#00b4d8` for links)
- **Secondary accents:** Purple, Yellow, Green (used for stats/highlights)
- **Text:** White primary, `text-zinc-400` for secondary, `text-zinc-500` for muted
- **Borders:** `border-zinc-800`
- **Cards:** `bg-zinc-900/50` with `border-zinc-800`
- **Hover states:** Cards get `border-cyan-500/30`, links get cyan color

### CSS Variables

```css
:root {
  --background: 20, 14%, 4%;
  --radius: 0.5rem;
  --links: #00b4d8;
  --primary: 160 84% 39%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 9%;
  --secondary-foreground: 0 0% 100%;
}
```

### Special CSS

- `.beautify-links a` - Custom animated underline effect on hover (scales from right to left)
- `.icons a:hover::before` - Disables the underline animation for social icon links
- Font Awesome icons: `opacity: 0.6` default, `1` on hover, with platform-specific hover colors

### Visual Components

- **AnimatedGridPattern** - SVG-based animated grid background (used in hero sections of both pages)
- **Terminal Window** - Typing animation effect with blinking cursor
- **Tweet Embed** - Custom styled tweet card using react-tweet

---

## Notes for Migration

1. **Blog redirect is critical** - `/blog` and `/blog/*` MUST redirect to `https://blog.roerohan.com`. This is the most important URL mapping.
2. **`/age.html`** should be preserved as a static file.
3. **Contact form needs real backend** - Currently fakes submission. Wire it to an actual email service.
4. **GitHub data is fetched server-side** with 1-hour ISR cache. Consider the same pattern or use client-side fetching with SWR/React Query.
5. **Blog posts are fetched from Gatsby's page-data JSON** - This may break if the blog changes platforms. Keep the fallback posts.
6. **Tweet embed uses hardcoded fallback data** - Keep this pattern to avoid Twitter API rate limits.
7. **Two email addresses exist**: `me@roerohan.com` (shown in contact) and `roerohan@gmail.com` (in social icons).
8. **Upwork profile link** is used in multiple places across both pages.
9. **Font Awesome is loaded from CDN** only for 6 social icons in the contact section. Consider replacing with Lucide or similar to reduce dependencies.
10. **Birthday for age.html**: December 1, 2000.
11. **`mailto://` bug** - The Gmail link in the contact section uses `mailto://roerohan@gmail.com` instead of the correct `mailto:roerohan@gmail.com`. Fix this during migration.
12. **`age.html` has a broken `main.css` reference** - It links to `main.css` which doesn't exist in `/public/`. Either remove it or create the file if needed.
13. **`age.html` declares `Space Mono` font but loads `Poppins`** from Google Fonts. The actual rendering likely falls back to `sans-serif`. Clarify which font is intended.
