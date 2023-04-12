import { defineConfig } from "astro/config";
import prerenderByDefault from "./integrations/prerenderByDefault";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [prerenderByDefault()],
  adapter: netlify(),
});
