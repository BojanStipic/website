import React from "react"
import {graphql, Link} from "gatsby"

const IndexPage = ({data: {site}}) => (
  <main>
    {site.siteMetadata.title}
    <div>
      <Link to="/blog">Blog</Link>
    </div>
  </main>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
