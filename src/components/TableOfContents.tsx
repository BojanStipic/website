import React, { VFC } from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Link, ListItem, OrderedList } from "@chakra-ui/react";

import { Card } from ".";

export type TableOfContentsProps = {
  items: Array<TocItem>;
};

export type TocItem = {
  url: string;
  title: string;
  items?: Array<TocItem>;
};

export const TableOfContents: VFC<TableOfContentsProps> = ({ items }) => (
  <Card p="4" m="8" variant="outline" boxShadow="xl" fontWeight="bold">
    {generateToc(items)}
  </Card>
);

const generateToc = (items: Array<TocItem>) => (
  <OrderedList>
    {items?.map((item) => (
      <Box key={item.url}>
        <ListItem>
          <Link as={GatsbyLink} to={item.url} fontSize="lg">
            {item.title}
          </Link>
        </ListItem>
        {generateToc(item.items)}
      </Box>
    ))}
  </OrderedList>
);
