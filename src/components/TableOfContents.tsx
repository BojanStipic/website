import { Box, Divider, Link, ListItem, OrderedList } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React, { FC } from "react";

import { Card } from "./";

export type TableOfContentsProps = {
  items: Array<TocItem>;
};

export type TocItem = {
  url: string;
  title: string;
  items?: Array<TocItem>;
};

export const TableOfContents: FC<TableOfContentsProps> = ({ items }) => (
  <Card
    as="nav"
    p={4}
    my={8}
    variant="outline"
    borderRadius="xl"
    fontWeight="bold"
    fontSize="lg"
    lineHeight="taller"
  >
    {generateToc(items)}
  </Card>
);

const generateToc = (items: Array<TocItem>) => (
  <OrderedList styleType="none">
    {items?.map((item) => (
      <Box key={item.url}>
        <ListItem>
          <Link as={GatsbyLink} to={item.url} fontSize="lg">
            {item.title}
          </Link>
        </ListItem>
        <Divider />
        {generateToc(item.items ?? [])}
      </Box>
    ))}
  </OrderedList>
);
