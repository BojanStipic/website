import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../../components";

const BlogPostPage = ({ data: { mdx } }) => (
  <Layout>
    <MDXRenderer>{mdx.body}</MDXRenderer>
  </Layout>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`;

export default BlogPostPage;
