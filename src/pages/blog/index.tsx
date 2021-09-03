import React from "react";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data: { allMdx } }) =>
  allMdx.nodes.map((node) => (
    <article key={node.id}>
      <h2>{node.frontmatter.title}</h2>
      <div>{node.frontmatter.date}</div>
      <div>{node.excerpt}</div>
      <div>
        <Link to={`/blog/${node.slug}`}>Read</Link>
      </div>
    </article>
  ));

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      nodes {
        id
        slug
        frontmatter {
          title
          date
        }
        excerpt
      }
    }
  }
`;

export default BlogPage;
