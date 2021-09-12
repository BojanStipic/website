import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { SimpleGrid } from "@chakra-ui/react";

import { BlogPostCard, Layout } from "../../components";

const BlogPage = ({ data: { allMdx } }) => (
  <Layout>
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} m={8}>
      {allMdx.nodes.map((post) => (
        <BlogPostCard
          key={post.id}
          slug={post.slug}
          title={post.frontmatter.title}
          excerpt={post.excerpt}
          image={getImage(post.frontmatter.image)}
          imageAlt={post.frontmatter.imageAlt}
          tags={post.frontmatter.tags}
          author={post.frontmatter.author}
          timeToRead={post.timeToRead}
        />
      ))}
    </SimpleGrid>
  </Layout>
);

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          date
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          imageAlt
          tags
          author
        }
        excerpt
        timeToRead
      }
    }
  }
`;

export default BlogPage;
