import React from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";

import { Layout, AuthorProfile, SkillCard, Section } from "../components";

const AboutPage = () => (
  <Layout>
    <Container maxW="container.lg">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <AuthorProfile />
        <Section title="Skills:">
          <SkillCard />
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default AboutPage;
