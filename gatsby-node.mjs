import slugify from "@sindresorhus/slugify";
import readingTime from "reading-time";

export const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "slug",
      value: `${slugify(node.frontmatter.title)}`,
    });
    createNodeField({
      node,
      name: "timeToRead",
      value: readingTime(node.body),
    });
  }
};
