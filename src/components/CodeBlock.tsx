import {
  Box,
  Button,
  Code,
  useClipboard,
  useColorModeValue,
} from "@chakra-ui/react";
import { Highlight, Language, Prism, themes } from "prism-react-renderer";
import React, { FC } from "react";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-toml");
require("prismjs/components/prism-java");

export type CodeBlockProps = {
  children: string;
  className: string;
};

export const CodeBlock: FC<CodeBlockProps> = ({ children, className }) => {
  const language = className.replace(/language-/, "") as Language;
  const theme = useColorModeValue(themes.nightOwlLight, themes.nightOwl);
  const { hasCopied, onCopy } = useClipboard(children);

  return (
    <Highlight code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box position="relative" my={4}>
          <Code
            className={className}
            style={style}
            fontSize="md"
            w="full"
            p={4}
            borderRadius="lg"
            boxShadow="base"
            overflowX="auto"
            zIndex={0}
          >
            {tokens.slice(0, -1).map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
            <Button
              onClick={onCopy}
              position="absolute"
              zIndex={1}
              textTransform="uppercase"
              size="xs"
              top={4}
              right={4}
            >
              {hasCopied ? "Copied" : "Copy"}
            </Button>
          </Code>
        </Box>
      )}
    </Highlight>
  );
};
