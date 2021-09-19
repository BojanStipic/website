import React, { VFC, useState } from "react";
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby";
import {
  Flex,
  Stack,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaBars,
  FaTimes,
  FaBlog,
  FaFolder,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { Card, NavigationLink } from "./";

export const Header: VFC = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [showMenu, setShowMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Card as="nav" variant="outline" p="4">
      <Flex align="center" justify="space-between" wrap="wrap">
        <Heading as="h1" size="xl" fontFamily="logo">
          <GatsbyLink to="/">{site.siteMetadata.title}</GatsbyLink>
        </Heading>

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Toggle main menu"
          icon={showMenu ? <FaTimes /> : <FaBars />}
          fontSize="2xl"
          colorScheme="gray"
          onClick={() => setShowMenu((show) => !show)}
        />

        <Stack
          display={{ base: showMenu ? "flex" : "none", md: "flex" }}
          direction={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "auto" }}
          align="center"
          mt={{ base: 4, md: 0 }}
          spacing="4"
        >
          <NavigationLink to="/projects" icon={FaFolder}>
            Projects
          </NavigationLink>
          <NavigationLink to="/blog" icon={FaBlog}>
            Blog
          </NavigationLink>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
            fontSize="2xl"
            colorScheme="gray"
            onClick={toggleColorMode}
          />
        </Stack>
      </Flex>
    </Card>
  );
};
