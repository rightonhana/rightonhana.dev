import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), vercel()],
});