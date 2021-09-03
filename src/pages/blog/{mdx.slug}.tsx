import React from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"

const BlogPostPage = ({data: {mdx}}) => {
  return (
    <MDXRenderer>{mdx.body}</MDXRenderer>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

export default BlogPostPage
