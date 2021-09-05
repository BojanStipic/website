module.exports = {
  siteMetadata: {
    siteUrl: "https://bojanstipic.rs",
    title: "Bojan Stipic's Website",
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: "./src/",
      },
    },
  ],
};
