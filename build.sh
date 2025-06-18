#!/bin/bash

# Exit on error
set -e

echo "Installing dependencies..."
pnpm install

echo "Building Next.js application..."
pnpm run build

echo "Building OpenNext bundle..."
npx @opennextjs/cloudflare build

echo "Build completed successfully!"
echo "To deploy to Cloudflare Pages, run: wrangler pages deploy .open-next"
