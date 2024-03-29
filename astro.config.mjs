import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [svelte()],
  output: 'server',
});