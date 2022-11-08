import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Text, Link } from "@chakra-ui/react";

import { useAccentColor } from "../hooks";

export const CCBYSALicenseNotice: FC = () => {
  const linkColor = useAccentColor();

  return (
    <Box textAlign="center">
      <Link
        href="http://creativecommons.org/licenses/by-sa/4.0/"
        rel="license"
        isExternal={true}
      >
        <StaticImage
          src="../assets/cc-by-sa-license-badge.png"
          alt="Creative Commons License"
        />
      </Link>
      <Text fontSize="md" mt={2}>
        This work is licensed under a{" "}
        <Link
          href="http://creativecommons.org/licenses/by-sa/4.0/"
          rel="license"
          isExternal={true}
          textDecorationLine="underline"
          color={linkColor}
        >
          Creative Commons Attribution-ShareAlike 4.0 International License
        </Link>
        .
      </Text>
    </Box>
  );
};
