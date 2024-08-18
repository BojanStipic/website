import type { MarkdownHeading } from "astro";

export type TocItem = MarkdownHeading & { subheadings: Array<TocItem> };
