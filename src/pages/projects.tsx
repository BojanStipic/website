import { Container, VStack } from "@chakra-ui/react";
import React from "react";

import { Layout, ProjectCard } from "../components";

const ProjectsPage = () => (
  <Layout>
    <Container maxW="container.md">
      <VStack spacing={8}>
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
      </VStack>
    </Container>
  </Layout>
);

export default ProjectsPage;
