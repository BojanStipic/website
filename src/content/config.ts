import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      cover: image(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  blog,
};
