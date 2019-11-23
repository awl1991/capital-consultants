module.exports = {
  siteMetadata: {
    title: "Capital Consultants",
    author: "Andrew Labunski",
    description: "Large Loss Consulting Agency",
    icon: ""
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "",
        theme_color: "",
        display: "minimal-ui",
        icon: "src/images/logo.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline"
  ]
}
