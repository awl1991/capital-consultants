module.exports = {
  siteMetadata: {
    title: "Capital Consultants",
    author: "Andrew Labunski",
    description: "Large Loss Consulting Agency"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/logo.png",
        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "",
        theme_color: "",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline"
  ]
}
