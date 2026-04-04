import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://roerohan.com",
  adapter: cloudflare(),
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});