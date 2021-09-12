import React, { VFC } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import {
  Text,
  Heading,
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
} from "@chakra-ui/react";

const components = {
  p: Text,
  h1: (props: unknown) => <Heading as="h1" size="2xl" {...props} />,
  h2: (props: unknown) => <Heading as="h2" size="xl" {...props} />,
  h3: (props: unknown) => <Heading as="h3" size="lg" {...props} />,
  h4: (props: unknown) => <Heading as="h4" size="md" {...props} />,
  h5: (props: unknown) => <Heading as="h5" size="sm" {...props} />,
  h6: (props: unknown) => <Heading as="h6" size="xs" {...props} />,
  blockquote: Text, // TODO
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  table: Table,
  tr: Tr,
  td: Td,
  th: Th,
  code: Code,
  em: (props: unknown) => <Text as="em" {...props} />,
  strong: (props: unknown) => <Text as="strong" {...props} />,
  delete: (props: unknown) => <Text as="del" {...props} />,
  inlineCode: (props: unknown) => <Code as="span" {...props} />,
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
