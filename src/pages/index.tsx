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
    projectsToml: { projects },
  },
}) => (
  <Layout>
    <Container maxW="container.lg">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <AuthorProfile />
        <Section title="Top Projects:">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              url={project.url}
              visibility={project.visibility}
              description={project.description}
              tags={project.tags}
              language={project.language}
              license={project.license}
            />
          ))}
        </Section>
      </SimpleGrid>

      <Section title="Latest Blog Posts:" mt={8}>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {posts.map((post) => (
            <BlogPostCard
              key={post.id}
              slug={post.fields.slug}
              title={post.frontmatter.title}
              excerpt={post.excerpt}
              image={getImage(post.frontmatter.image)}
              imageAlt={post.frontmatter.imageAlt}
              tags={post.frontmatter.tags}
              author={post.frontmatter.author}
              timeToRead={post.fields.timeToRead.text}
            />
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
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
    projectsToml {
      projects {
        title
        url
        visibility
        description
        tags
        language
        license
      }
    }
  }
`;

export default IndexPage;
