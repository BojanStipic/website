import React, { VFC } from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

import { useAccentColor } from "../hooks";

export type CardProps = BoxProps & {
  variant?: "ghost" | "outline";
};

export const Card: VFC<CardProps> = ({ variant = "ghost", ...props }) => {
  const bg = useColorModeValue("white", "gray.700");
  const borderColor = useAccentColor();

  const variantProps = () => {
    switch (variant) {
      case "ghost":
        return {};
      case "outline":
        return {
          borderTop: "4px",
          borderColor: borderColor,
        };
    }
  };

  return <Box bg={bg} {...variantProps()} {...props} />;
};
