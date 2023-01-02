import {
  Flex,
  Heading,
  IconButton,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
import React, { FC, useState } from "react";
import {
  FaBars,
  FaBlog,
  FaFolder,
  FaMoon,
  FaSun,
  FaTimes,
  FaUser,
} from "react-icons/fa";

import { Card, NavigationLink } from "./";

export const Header: FC = () => {
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
    <Card as="header" variant="outline" p={4}>
      <Flex align="center" justify="space-between" wrap="wrap">
        <Heading
          as="h1"
          size="xl"
          fontFamily="logo"
          fontWeight="normal"
          letterSpacing="wider"
        >
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
          as="nav"
          display={{ base: showMenu ? "flex" : "none", md: "flex" }}
          direction={{ base: "column", md: "row" }}
          w={{ base: "full", md: "auto" }}
          align="center"
          mt={{ base: 4, md: 0 }}
          spacing={4}
        >
          <NavigationLink to="/about" icon={FaUser}>
            About
          </NavigationLink>
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
