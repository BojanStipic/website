import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Container, SimpleGrid } from "@chakra-ui/react";

import { Layout, BlogPostCard } from "../../components";

const BlogPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Container maxW="container.xl">
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
        {posts.map((post) => (
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
    </Container>
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
