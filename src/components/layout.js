import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "../assets/scss/main.scss"

const Layout = ({ children, location }) => {
	let content

	if (location && location.pathname === "/") {
		content = <div>{children}</div>
	} else {
		content = (
			<div id="wrapper" className="page">
				<div>{children}</div>
			</div>
		)
	}

	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
							description
							image
						}
					}
				}
			`}
			render={data => (
				<>
					<Helmet
						image={data.site.siteMetadata.image}
						title={data.site.siteMetadata.title}
						description={data.site.siteMetadata.description}
						meta={
							/*[

								name: data.site.siteMetadata.description,
								description:data.site.siteMetadata.description,
								image: data.site.siteMetadata.imag,
							},
							{ //name: "keywords", content: "sample, something" }
						]*/
						}
					>
						<html lang="en" />
					</Helmet>
					{content}
				</>
			)}
		/>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
