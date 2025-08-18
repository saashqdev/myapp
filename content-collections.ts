import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const changelog = defineCollection({
  name: "changelog",
  directory: "src/changelog",
  include: "**/*.md",
  schema: (z) => ({
    version: z.string(),
    date: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [changelog],
});
