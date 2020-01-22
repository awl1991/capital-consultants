import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../images/logo.png"

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
					>
						<html lang="en" />
						link=
						{[
							{
								rel: "Capital Consultants Logo",
								type: "image/png",
								href: `${favicon}`
							}
						]}
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
