// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
var changelog = defineCollection({
  name: "changelog",
  directory: "src/changelog",
  include: "**/*.md",
  schema: (z) => ({
    version: z.string(),
    date: z.string(),
    content: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx
    };
  }
});
var content_collections_default = defineConfig({
  collections: [changelog]
});
export {
  content_collections_default as default
};
