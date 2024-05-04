import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "astro-blog-sample-k7tagoohu-shaswat-deeps-projects.vercel.app",
  integrations: [preact()],
});
