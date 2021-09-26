import { Container, Stack } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";

import { Layout, ProjectCard } from "../components";

const ProjectsPage = ({
  data: {
    projectsToml: { projects },
  },
}) => (
  <Layout>
    <Container maxW="container.sm">
      <Stack spacing={8}>
        {projects.map((project) => (
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
      </Stack>
    </Container>
  </Layout>
);

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

export default ProjectsPage;
