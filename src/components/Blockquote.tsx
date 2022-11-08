import React, { FC } from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

export type BlockquoteProps = BoxProps & {};

export const Blockquote: FC<BlockquoteProps> = (props) => {
  const bg = useColorModeValue("white", "gray.700");
  const mutedText = useColorModeValue("gray.400", "gray.600");

  return (
    <Box
      display="flex"
      bg={bg}
      borderLeftWidth="10px"
      borderLeftColor={mutedText}
      borderRadius="lg"
      px={4}
      py={1}
      _before={{
        content: `open-quote`,
        color: mutedText,
        fontSize: "7xl",
        lineHeight: "1em",
        height: 0,
        mr: 2,
      }}
      _after={{
        content: `no-close-quote`,
      }}
      {...props}
    />
  );
};
