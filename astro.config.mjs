import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "opendata.studio documentation",
      logo: {
        src: './src/assets/logo.svg',
      },
      social: {
        github: "https://github.com/opendatafit/docs",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [{ label: "Datapackages", slug: "intro/datapackages" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
