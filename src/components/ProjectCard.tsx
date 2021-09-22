import React, { VFC } from "react";
import {
  Link,
  Text,
  Heading,
  HStack,
  Tag,
  Icon,
  Badge,
  WrapItem,
  Wrap,
  Stack,
} from "@chakra-ui/react";
import { FaBalanceScale, FaCode, FaRegStar } from "react-icons/fa";

import { Card } from "../components";
import { useMutedColor } from "../hooks";

export type ProjectCardProps = {
  title: string;
  visibility: "public" | "private";
  description: string;
  tags: Array<string>;
  language: string;
  stars: number;
  license: string;
};

export const ProjectCard: VFC<ProjectCardProps> = ({
  title,
  visibility,
  description,
  tags,
  language,
  stars,
  license,
}) => {
  const mutedText = useMutedColor();

  return (
    <Card as={Stack} p={4} borderRadius="xl">
      <Heading as="h2" size="md">
        <Link
          href="https://github.com/BojanStipic/spring-skeleton"
          isExternal={true}
        >
          {title}
        </Link>
        <Badge ml={2}>{visibility}</Badge>
      </Heading>
      <Text color={mutedText}>{description}</Text>
      <Wrap spacing={2}>
        {tags.map((tag) => (
          <WrapItem key={tag}>
            <Tag>{tag}</Tag>
          </WrapItem>
        ))}
      </Wrap>
      <HStack spacing={4} color={mutedText} fontSize="sm">
        <Text>
          <Icon as={FaCode} mr={1} />
          {language}
        </Text>
        <Text>
          <Icon as={FaRegStar} mr={1} />
          {stars}
        </Text>
        <Text>
          <Icon as={FaBalanceScale} mr={1} />
          {license}
        </Text>
      </HStack>
    </Card>
  );
};
