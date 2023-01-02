import { Container, SimpleGrid } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";

import {
  AuthorProfile,
  Layout,
  ProjectCard,
  Section,
  SkillCard,
} from "../components";

const AboutPage = ({
  data: {
    projectsToml: { projects },
  },
}) => {
  const dotfiles = projects.find((project) => project.title === "dotfiles");

  return (
    <Layout>
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <AuthorProfile />
          <Section title="Skills:">
            <SkillCard />
          </Section>
          <Section title="Dotfiles:">
            <ProjectCard
              key={dotfiles.title}
              title={dotfiles.title}
              url={dotfiles.url}
              visibility={dotfiles.visibility}
              description={dotfiles.description}
              tags={dotfiles.tags}
              language={dotfiles.language}
              license={dotfiles.license}
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
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

export default AboutPage;
