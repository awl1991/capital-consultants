module.exports = {
  siteMetadata: {
    title: "Capital Consultants",
    author: "Andrew Labunski",
    description: "Large Loss Consulting Agency",
    icon: ""
  },
  plugins: [
    {
      options: {
        start_url: "/",
        background_color: "#000",
        theme_color: "#000",
        icon: "src/images/logo.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline"
  ]
}
