import React, { VFC } from "react";
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import {
  Code,
  Button,
  useColorModeValue,
  useClipboard,
} from "@chakra-ui/react";

// Required to add support for additional languages
// https://github.com/FormidableLabs/prism-react-renderer#faq
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-rust");
require("prismjs/components/prism-java");

export type CodeBlockProps = {
  children: string;
  className: string;
};

export const CodeBlock: VFC<CodeBlockProps> = ({ children, className }) => {
  const language = className.replace(/language-/, "") as Language;
  const theme = useColorModeValue(nightOwlLight, nightOwl) as PrismTheme;
  const { hasCopied, onCopy } = useClipboard(children);

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Code
          className={className}
          style={style}
          my="4"
          p="4"
          borderRadius="lg"
          fontSize="md"
          overflowX="auto"
          w="100%"
          position="relative"
          zIndex="0"
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
          <Button
            onClick={onCopy}
            position="absolute"
            zIndex="1"
            textTransform="uppercase"
            size="xs"
            top="4"
            right="4"
          >
            {hasCopied ? "Copied" : "Copy"}
          </Button>
        </Code>
      )}
    </Highlight>
  );
};
