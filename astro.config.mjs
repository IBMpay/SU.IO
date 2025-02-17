import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://pabloferreiro.es",
  integrations: [
    svelte()
  ],
  vite: {
    build: {
      cssCodeSplit: false
    },
    ssr: {
      external: ["svgo"],
    },
  }
});
