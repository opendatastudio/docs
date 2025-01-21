import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.opendata.studio",
  integrations: [
    starlight({
      title: "opendata.studio docs",
      customCss: ["./src/styles/custom.css"],
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo_dark.svg",
      },
      social: {
        github: "https://github.com/opendatastudio/docs",
      },
      sidebar: [
        {
          label: "Introduction to datakits",
          items: [
            { label: "What are datakits?", slug: "intro/intro" },
            { label: "Hello world!", slug: "intro/helloworld" },
            { label: "Working with tabular data", slug: "intro/tabulardata" },
            { label: "Handling multiple runs", slug: "intro/multipleruns" },
            { label: "Tracking with Git", slug: "intro/repositories" },
            {
              label: "Using custom Docker containers",
              slug: "intro/containers",
            },
          ],
        },
        {
          label: "Advanced tutorials",
          items: [
            {
              label: "Creating a model fitting datakit",
              slug: "advanced/modelfit",
            },
            { label: "Using metaschemas", slug: "advanced/metaschemas" },
          ],
        },
        {
          label: "Views and interfaces",
          autogenerate: { directory: "views" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
