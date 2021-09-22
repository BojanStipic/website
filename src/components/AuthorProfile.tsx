import React, { VFC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  VStack,
  Text,
  ButtonGroup,
  Button,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

import { Card } from "./";

export const AuthorProfile: VFC = () => (
  <Card as={VStack} p={8} borderRadius="xl">
    <StaticImage
      src="../assets/profile.jpg"
      alt="Bojan Stipic's profile picture"
      width={200}
      loading="eager"
      style={{ borderRadius: "var(--chakra-radii-full)" }}
    />
    <Text fontSize="xl">
      <Text as="span" fontWeight="bold">
        Bojan
      </Text>{" "}
      Stipic
    </Text>
    <Text casing="uppercase" fontWeight="bold">
      Software Engineer
    </Text>
    <Text>
      <Icon as={FaMapMarkerAlt} fontSize="xl" />
      <Text as="span" fontWeight="bold">
        Novi Sad
      </Text>
      , Serbia
    </Text>
    <ButtonGroup variant="outline">
      <Button
        leftIcon={<FaGithub />}
        as={Link}
        href="https://github.com/BojanStipic"
        isExternal={true}
      >
        Github
      </Button>
      <Button
        leftIcon={<FaLinkedin />}
        as={Link}
        href="https://www.linkedin.com/in/bstipic/"
        isExternal={true}
      >
        Linkedin
      </Button>
    </ButtonGroup>
    <Text textAlign="center">
      I am a software engineer interested in full stack web development, systems
      programming, programming language design and compilers.
    </Text>
  </Card>
);
