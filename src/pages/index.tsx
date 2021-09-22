import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Container, SimpleGrid } from "@chakra-ui/react";

import {
  Layout,
  AuthorProfile,
  ProjectCard,
  BlogPostCard,
  Section,
} from "../components";

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Container maxW="container.lg">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <AuthorProfile />
        <Section title="Top Projects:">
          <ProjectCard
            title="spring-skeleton"
            visibility="public"
            description="Spring Boot skeleton to kick-start your new application."
            tags={[
              "spring",
              "spring-boot",
              "spring-security",
              "skeleton",
              "boilerplate",
              "starter",
              "postgres",
            ]}
            language="Java"
            stars={1}
            license="GNU Affero General Public License v3.0"
          />
        </Section>
      </SimpleGrid>

      <Section title="Latest Blog Posts:" mt={8}>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
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
      </Section>
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
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

export default IndexPage;
