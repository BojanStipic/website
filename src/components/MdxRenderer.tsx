import React, { VFC } from "react";
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
  CodeProps,
} from "@chakra-ui/react";

import { CodeBlock, CodeBlockProps } from "./";
import { useAccentColor } from "../hooks";

const Heading: VFC<HeadingProps> = ({ ...rest }) => (
  <ChakraHeading
    my={8}
    textDecorationLine="underline"
    textDecorationColor={useAccentColor()}
    textDecorationThickness="8px"
    textUnderlineOffset="12px"
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
  blockquote: Text, // TODO
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
  a: Link,
};

export type MdxRendererProps = {
  children: string;
};

export const MdxRenderer: VFC<MdxRendererProps> = ({ children }) => (
  <MDXProvider components={components}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
);
