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
import { FaBalanceScale, FaCode } from "react-icons/fa";

import { Card } from "../components";
import { useMutedColor } from "../hooks";

export type ProjectCardProps = {
  title: string;
  url: string;
  visibility: "public" | "private";
  description: string;
  tags: Array<string>;
  language: string;
  license: string;
};

export const ProjectCard: VFC<ProjectCardProps> = ({
  title,
  url,
  visibility,
  description,
  tags,
  language,
  license,
}) => {
  const mutedText = useMutedColor();

  return (
    <Card as={Stack} p={4} borderRadius="xl">
      <Heading as="h2" size="md">
        <Link href={url} isExternal={true}>
          {title}
        </Link>
        <Badge ml={2}>{visibility}</Badge>
      </Heading>
      <Text color={mutedText}>{description}</Text>
      <Wrap spacing={2}>
        {tags.map((tag) => (
          <WrapItem key={tag}>
            <Tag size="sm">{tag}</Tag>
          </WrapItem>
        ))}
      </Wrap>
      <HStack spacing={4} color={mutedText} fontSize="sm">
        <Text>
          <Icon as={FaCode} mr={1} />
          {language}
        </Text>
        <Text>
          <Icon as={FaBalanceScale} mr={1} />
          {license}
        </Text>
      </HStack>
    </Card>
  );
};
