import React from "react"
import {graphql, useStaticQuery} from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      {data.site.siteMetadata.title}
    </main>
  )
}

export default IndexPage
