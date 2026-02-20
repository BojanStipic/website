import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      cover: image(),
      tags: z.array(z.string()),
      series: reference("blogSeries").optional(),
    }),
});

const blogSeries = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/blog-series" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    posts: z.array(reference("blog")),
  }),
});

export const collections = {
  blog,
  blogSeries,
};
