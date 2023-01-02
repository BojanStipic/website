import {
  Heading as ChakraHeading,
  Code,
  CodeProps,
  Divider,
  HeadingProps,
  Link,
  LinkProps,
  ListItem,
  OrderedList,
  Table,
  Td,
  Text,
  TextProps,
  Th,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import React, { FC } from "react";

import { useAccentColor } from "../hooks";
import { Blockquote, BlockquoteProps, CodeBlock, CodeBlockProps } from "./";

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
  code: (props: CodeBlockProps | CodeProps) =>
    /language-/.test(props.className ?? "") ? (
      <CodeBlock {...(props as CodeBlockProps)} />
    ) : (
      <Code {...(props as CodeProps)} />
    ),
  em: (props: TextProps) => <Text as="em" {...props} />,
  strong: (props: TextProps) => <Text as="strong" {...props} />,
  delete: (props: TextProps) => <Text as="del" {...props} />,
  hr: Divider,
  a: (props: LinkProps) => (
    <Link textDecorationLine="underline" color={useAccentColor()} {...props} />
  ),
};

export type MdxRendererProps = {
  children: string;
};

export const MdxRenderer: FC<MdxRendererProps> = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
