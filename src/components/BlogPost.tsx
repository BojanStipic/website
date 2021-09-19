import React, { VFC } from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaClock, FaUserGraduate } from "react-icons/fa";

import { MdxRenderer, TableOfContents, TableOfContentsProps } from "./";

export type BlogPostProps = {
  title: string;
  date: string;
  image: IGatsbyImageData;
  imageAlt: string;
  tags: Array<string>;
  author: string;
  tableOfContents: TableOfContentsProps;
  timeToRead: string;
  children: string;
};

export const BlogPost: VFC<BlogPostProps> = ({
  title,
  date,
  image,
  imageAlt,
  tags,
  author,
  timeToRead,
  tableOfContents,
  children,
}) => {
  const mutedText = useColorModeValue("gray.600", "gray.400");

  return (
    <Container maxW="container.md">
      <Box m={{ base: 0, sm: 8 }}>
        <Flex justify="center">
          <GatsbyImage image={getImage(image)} alt={imageAlt} />
        </Flex>
        <Heading as="h1" size="3xl" mt="4">
          {title}
        </Heading>
        <HStack spacing={2} my="2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag.toUpperCase()}</Tag>
          ))}
        </HStack>
        <Flex justify="space-between">
          <Text color={mutedText} fontSize="sm">
            <Icon as={FaUserGraduate} mr={1} />
            By {author} on {date}
          </Text>
          <Text color={mutedText} fontSize="sm">
            <Icon as={FaClock} mr={1} />
            {timeToRead} min read
          </Text>
        </Flex>
      </Box>

      {tableOfContents.items?.length && (
        <TableOfContents items={tableOfContents.items} />
      )}

      <Divider my="8" />
      <MdxRenderer>{children}</MdxRenderer>
    </Container>
  );
};
