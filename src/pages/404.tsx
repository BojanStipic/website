import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Container, VStack, Heading, Text, Link } from "@chakra-ui/react";

import { Layout } from "../components";

const NotFoundPage = () => (
  <Layout>
    <Container my={24}>
      <VStack spacing={4}>
        <Heading>Page not found</Heading>
        <Text>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
        </Text>
        <Link as={GatsbyLink} to="/">
          Go home
        </Link>
      </VStack>
    </Container>
  </Layout>
);

export default NotFoundPage;
