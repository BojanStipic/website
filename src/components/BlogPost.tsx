import React, { VFC } from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  Box,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaCalendarAlt, FaClock, FaUserGraduate } from "react-icons/fa";

import { MdxRenderer, TableOfContents, TableOfContentsProps } from "./";
import { useMutedColor } from "../hooks";

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
  const mutedText = useMutedColor();

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <GatsbyImage image={getImage(image)} alt={imageAlt} />
        <Stack spacing={2} align={{ base: "center", md: "normal" }}>
          <Heading
            as="h1"
            size="xl"
            mt={4}
            textAlign={{ base: "center", md: "inherit" }}
          >
            {title}
          </Heading>
          <Wrap spacing={2}>
            {tags.map((tag) => (
              <WrapItem key={tag}>
                <Tag as={Text} casing="uppercase">
                  {tag}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
          <HStack spacing={4} color={mutedText} fontSize="sm">
            <Text>
              <Icon as={FaUserGraduate} mr={1} />
              By {author}
            </Text>
            <Text>
              <Icon as={FaCalendarAlt} mr={1} />
              {date}
            </Text>
            <Text>
              <Icon as={FaClock} mr={1} />
              {timeToRead} min read
            </Text>
          </HStack>
        </Stack>
      </SimpleGrid>

      {tableOfContents.items?.length && (
        <TableOfContents items={tableOfContents.items} />
      )}

      <Box fontSize="lg">
        <MdxRenderer>{children}</MdxRenderer>
      </Box>
    </>
  );
};
