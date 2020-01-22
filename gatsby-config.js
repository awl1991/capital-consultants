module.exports = {
	siteMetadata: {
		title: "Capital Consultants",
		description: "Large Loss Consulting Agency",
		siteUrl: "https://www.thecapitalconsultants.com/",
		banner: "src/images/logo-1024.png"
	},
	plugins: [
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				start_url: "/",
				name: "Capital Consultants",
				headline: "Large Loss Consulting Agency",
				description:
					"Capital Consultants exists to educate policy holders on their options when they are denied coverage by their insurance carrier.",
				icon: "src/images/favicon.png"
			}
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-offline"
	]
}
