import React, { FC } from "react";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  Flex,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaClock, FaUserGraduate } from "react-icons/fa";

import { Card } from "./";
import { useMutedColor } from "../hooks";

export type BlogPostCardProps = {
  slug: string;
  image: IGatsbyImageData;
  imageAlt: string;
  tags: Array<string>;
  title: string;
  excerpt: string;
  author: string;
  timeToRead: string;
};

export const BlogPostCard: FC<BlogPostCardProps> = ({
  slug,
  image,
  imageAlt,
  tags,
  title,
  excerpt,
  author,
  timeToRead,
}) => {
  const mutedText = useMutedColor();

  return (
    <LinkBox>
      <Card as="article" borderRadius="xl" h="full">
        <GatsbyImage image={image} alt={imageAlt} />
        <Stack p={4} spacing={4}>
          <Wrap spacing={2}>
            {tags.map((tag) => (
              <WrapItem key={tag}>
                <Tag as={Text} casing="uppercase">
                  {tag}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
          <Heading as="h2" size="md">
            <LinkOverlay as={GatsbyLink} to={`/blog/${slug}`}>
              {title}
            </LinkOverlay>
          </Heading>
          <Text color={mutedText} noOfLines={2}>
            {excerpt}
          </Text>
          <Flex justify="space-between" color={mutedText} fontSize="sm">
            <Text display="flex" alignItems="center">
              <Icon as={FaUserGraduate} mr={1} />
              By {author}
            </Text>
            <Text display="flex" alignItems="center">
              <Icon as={FaClock} mr={1} />
              {timeToRead} min read
            </Text>
          </Flex>
        </Stack>
      </Card>
    </LinkBox>
  );
};
