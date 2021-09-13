import React, { VFC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { VStack, Text, ButtonGroup, Button, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const AuthorProfile: VFC = () => (
  <VStack>
    <StaticImage
      src="../images/profile.jpg"
      alt="Bojan Stipic's Profile Picture"
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
  </VStack>
);
