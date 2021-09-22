import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Container } from "@chakra-ui/react";

import { Layout, BlogPost } from "../../components";

const BlogPostPage = ({
  data: {
    mdx: {
      frontmatter: { title, date, image, imageAlt, tags, author },
      tableOfContents,
      timeToRead,
      body,
    },
  },
}) => (
  <Layout>
    <Container maxW="container.md">
      <BlogPost
        title={title}
        date={date}
        image={getImage(image)}
        imageAlt={imageAlt}
        tags={tags}
        author={author}
        tableOfContents={tableOfContents}
        timeToRead={timeToRead}
      >
        {body}
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
      timeToRead
      body
    }
  }
`;

export default BlogPostPage;
