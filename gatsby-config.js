module.exports = {
	siteMetadata: {
		title: "Capital Consultants",
		description: "Large Loss Consulting Agency",
		siteUrl: "https://www.thecapitalconsultants.com/",
		social: [
			{
				name: "facebook",
				url: "https://www.facebook.com/thecapitalconsultants/"
			}
		]
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `capital-consultants`,
				start_url: `/`,
				display: `minimal-ui`,
				icon: `src/images/icon.png`
			}
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-offline"
	]
}
