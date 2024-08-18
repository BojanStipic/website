import type { MarkdownHeading } from "astro";

import type { TocItem } from "./TableOfContents.types";

export const generateToc = (
  headings: Array<MarkdownHeading>,
): Array<TocItem> => {
  const toc: Array<TocItem> = [];
  const parentHeadings = new Map<number, TocItem>();
  for (const heading of headings.map((h) => ({ ...h, subheadings: [] }))) {
    parentHeadings.set(heading.depth, heading);
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1)?.subheadings.push(heading);
    }
  }
  return toc;
};
