import { Container, SimpleGrid } from "@chakra-ui/react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";

import { BlogPostCard, Layout } from "../../components";

const BlogPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Container maxW="container.xl">
      <SimpleGrid as="section" columns={[1, 2, 3, 4]} spacing={8}>
        {posts.map((post) => (
          <BlogPostCard
            key={post.id}
            slug={post.fields.slug}
            title={post.frontmatter.title}
            excerpt={post.excerpt}
            image={getImage(post.frontmatter.image)!}
            imageAlt={post.frontmatter.imageAlt}
            tags={post.frontmatter.tags}
            author={post.frontmatter.author}
            timeToRead={post.fields.timeToRead.text}
          />
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
);

export const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
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
        fields {
          slug
          timeToRead {
            text
          }
        }
      }
    }
  }
`;

export default BlogPage;
