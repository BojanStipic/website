import { Container } from "@chakra-ui/react";
import { graphql } from "gatsby";
import { getImage, getSrc } from "gatsby-plugin-image";
import React from "react";

import { BlogPost, Layout } from "../../components";

const BlogPostPage = ({
  data: {
    mdx: {
      frontmatter: { title, date, image, imageAlt, tags, author },
      tableOfContents,
      fields: { timeToRead },
    },
  },
  children,
}) => (
  <Layout>
    <Container maxW="container.md">
      <BlogPost
        title={title}
        date={date}
        image={getImage(image)!}
        imageAlt={imageAlt}
        tags={tags}
        author={author}
        tableOfContents={tableOfContents}
        timeToRead={timeToRead.text}
      >
        {children}
      </BlogPost>
    </Container>
  </Layout>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
        tags
        author
      }
      tableOfContents
      fields {
        timeToRead {
          text
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export const Head = ({
  location,
  data: {
    mdx: {
      frontmatter: { title, image },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => (
  <>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`${siteUrl}${location.pathname}`} />
    <meta property="og:image" content={`${siteUrl}${getSrc(image)}`} />
  </>
);

export default BlogPostPage;
