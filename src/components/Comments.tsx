import React, { FC } from "react";
import { Link, Text, useColorModeValue } from "@chakra-ui/react";
import Giscus from "@giscus/react";

import { Card } from ".";
import { useAccentColor } from "../hooks";

export type CommentsProps = {
  title: string;
};

export const Comments: FC<CommentsProps> = ({ title }) => {
  const giscusTheme = useColorModeValue("light", "dark");

  return (
    <Card as="section" p={8} borderRadius="xl">
      <Giscus
        id="comments"
        repo="BojanStipic/website"
        repoId="MDEwOlJlcG9zaXRvcnk0MDM0MDYzMTk="
        category="Post Comments"
        categoryId="DIC_kwDOGAt9784CQkIw"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={giscusTheme}
        lang="en"
        loading="lazy"
      />
      <Text>
        Do you have a problem, want to share feedback, or discuss further ideas?
        Feel free to leave a comment here! This comment thread directly maps to
        a{" "}
        <Link
          href={`https://github.com/BojanStipic/website/discussions/categories/post-comments?discussions_q=${encodeURIComponent(
            title
          )}`}
          isExternal={true}
          color={useAccentColor()}
        >
          discussion on GitHub
        </Link>
        , so you can also comment there if you prefer.
      </Text>
    </Card>
  );
};
