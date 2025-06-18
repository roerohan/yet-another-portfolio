# Yet Another Portfolio

This is my personal portfolio website built with Next.js and deployed on Cloudflare Pages using OpenNext.

## Features

- Server-side rendering with Next.js
- Responsive design
- Dark mode
- Blog integration
- Project showcase

## Prerequisites

- Node.js 18+ and pnpm
- Cloudflare account
- Wrangler CLI (`pnpm add -g wrangler`)

## Local Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

1. Build the application:
   ```bash
   ./build.sh
   ```

2. Preview the production build locally:
   ```bash
   npx wrangler pages dev .open-next
   ```

## Deployment

### Prerequisites

1. Install Wrangler CLI if you haven't already:
   ```bash
   pnpm add -g wrangler
   ```

2. Log in to your Cloudflare account:
   ```bash
   wrangler login
   ```

### Deploy to Cloudflare Pages

1. Build the application:
   ```bash
   ./build.sh
   ```

2. Deploy to Cloudflare Pages:
   ```bash
   wrangler pages deploy .open-next
   ```

3. Follow the prompts to complete the deployment.

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# GitHub API token for fetching repositories
GITHUB_TOKEN=your_github_token_here
```

## Project Structure

- `/app` - Next.js 13+ app directory
- `/components` - Reusable React components
- `/public` - Static files
- `next.config.js` - Next.js configuration
- `opennext.config.js` - OpenNext configuration for Cloudflare
- `wrangler.toml` - Cloudflare Pages configuration

## License

MIT
