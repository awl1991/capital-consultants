module.exports = {
	siteMetadata: {
		title: "Capital Consultants",
		author: "Andrew Labunski",
		description: "Large Loss Consulting Agency"
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "gatsby-starter-default",
				start_url: "/",
				icon: "src/images/logo.png"
			}
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-offline"
	]
}
