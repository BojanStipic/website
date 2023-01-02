import {
  Badge,
  HStack,
  Heading,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { FC } from "react";
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

export const ProjectCard: FC<ProjectCardProps> = ({
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
    <Card as="article" p={4} borderRadius="xl">
      <Stack>
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
          <Text display="flex" alignItems="center">
            <Icon as={FaCode} mr={1} />
            {language}
          </Text>
          <Text display="flex" alignItems="center">
            <Icon as={FaBalanceScale} mr={1} />
            {license}
          </Text>
        </HStack>
      </Stack>
    </Card>
  );
};
