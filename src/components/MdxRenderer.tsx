import React, { FC } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import {
  Text,
  TextProps,
  Heading as ChakraHeading,
  HeadingProps,
  UnorderedList,
  OrderedList,
  ListItem,
  Table,
  Tr,
  Td,
  Th,
  Code,
  Divider,
  Link,
  LinkProps,
  CodeProps,
} from "@chakra-ui/react";

import { CodeBlock, CodeBlockProps, Blockquote, BlockquoteProps } from "./";
import { useAccentColor } from "../hooks";

const Heading: FC<HeadingProps> = ({ ...rest }) => (
  <ChakraHeading
    my={8}
    textDecorationLine="underline"
    textDecorationColor={useAccentColor()}
    textDecorationThickness="8px"
    textUnderlineOffset="12px"
    lineHeight="taller"
    {...rest}
  />
);

const components = {
  p: (props: TextProps) => <Text my={4} {...props} />,
  h1: (props: HeadingProps) => <Heading as="h1" size="2xl" {...props} />,
  h2: (props: HeadingProps) => <Heading as="h2" size="xl" {...props} />,
  h3: (props: HeadingProps) => <Heading as="h3" size="lg" {...props} />,
  h4: (props: HeadingProps) => <Heading as="h4" size="md" {...props} />,
  h5: (props: HeadingProps) => <Heading as="h5" size="sm" {...props} />,
  h6: (props: HeadingProps) => <Heading as="h6" size="xs" {...props} />,
  blockquote: (props: BlockquoteProps) => <Blockquote {...props} />,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  table: Table,
  tr: Tr,
  td: Td,
  th: Th,
  code: (props: CodeBlockProps) => <CodeBlock {...props} />,
  em: (props: TextProps) => <Text as="em" {...props} />,
  strong: (props: TextProps) => <Text as="strong" {...props} />,
  delete: (props: TextProps) => <Text as="del" {...props} />,
  inlineCode: (props: CodeProps) => <Code {...props} />,
  hr: Divider,
  a: (props: LinkProps) => (
    <Link textDecorationLine="underline" color={useAccentColor()} {...props} />
  ),
};

export type MdxRendererProps = {
  children: string;
};

export const MdxRenderer: FC<MdxRendererProps> = ({ children }) => (
  <MDXProvider components={components}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
);
