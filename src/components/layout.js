import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import favicon16 from "../images/favicon/favicon16.png"
import favicon32 from "../images/favicon/favicon32.png"
import favicon64 from "../images/favicon/favicon64.png"

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
						}
					}
				}
			`}
			render={data => (
				<>
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{
								name: "description",
								content: data.site.siteMetadata.description
							}
						]}
						link={[
							{
								rel: "icon",
								type: "image/png",
								sizes: "16x16",
								href: `${favicon16}`
							},
							{
								rel: "icon",
								type: "image/png",
								sizes: "32x32",
								href: `${favicon32}`
							},
							{ rel: "shortcut icon", type: "image/png", href: `${favicon64}` }
						]}
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

// { name: "keywords", content: "sample, something" }

export default Layout
