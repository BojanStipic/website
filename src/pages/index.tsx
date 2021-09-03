import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Box, Heading, Link } from "@chakra-ui/react";

const IndexPage = ({ data: { site } }) => (
  <Box as="main">
    <Heading>{site.siteMetadata.title}</Heading>
    <Box>
      <Link as={GatsbyLink} to="/blog">
        Blog
      </Link>
    </Box>
  </Box>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
