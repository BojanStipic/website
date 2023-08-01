import { Link, Text } from "@chakra-ui/react";
import React, { FC } from "react";

import { useAccentColor } from "../hooks";
import { Card } from "./";

export const Footer: FC = () => {
  const linkColor = useAccentColor();

  return (
    <Card as="footer" variant="outline" p={4}>
      <Text fontSize="sm" fontWeight="light" textAlign="center">
        Copyright © 2021-2023 Bojan Stipic | Website source code is available
        on{" "}
        <Link
          href="https://github.com/BojanStipic/website"
          isExternal={true}
          color={linkColor}
        >
          GitHub
        </Link>
        , licensed under{" "}
        <Link
          href="https://github.com/BojanStipic/website/blob/master/LICENSE"
          isExternal={true}
          color={linkColor}
        >
          AGPL-3.0-or-later
        </Link>
        .
      </Text>
    </Card>
  );
};
