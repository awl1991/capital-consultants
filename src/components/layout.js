import React, {Fragment} from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {StaticQuery, graphql} from "gatsby"

import "../assets/scss/main.scss"

const Layout = ({children, location}) => {
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
							banner
						}
					}
				}
			`}
            render={data => (
                <Fragment>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            {
                                name: "description",
                                content: data.site.siteMetadata.description
                            },
                            {
                                rel: "icon",
                                type: "image/png",
                                href: `${data.site.siteMetadata.banner}`
                            }
                        ]}
                    >
                        <html lang="en"/>
                    </Helmet>
                    {content}
                </Fragment>
            )}
        />
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

// { name: "keywords", content: "sample, something" }

export default Layout
