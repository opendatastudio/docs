import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "opendata.studio docs",
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo_dark.svg",
      },
      social: {
        github: "https://github.com/opendatastudio/docs",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            { label: "What are datapackages?", slug: "intro/intro" },
            { label: "Hello world!", slug: "intro/helloworld" },
            { label: "Working with tabular data", slug: "intro/tabulardata" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
