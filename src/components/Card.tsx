import React, { VFC } from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

export type CardProps = BoxProps & {
  variant?: "ghost" | "outline";
};

export const Card: VFC<CardProps> = ({ variant = "ghost", ...props }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("brand.500", "brand.300");

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
