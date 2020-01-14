import React from "react"
import PropTypes from "prop-types"
import shadowLogo from "../images/logo_w_shadow.png"

const Header = props => (
	<header id="header" style={props.timeout ? { display: "none" } : {}}>
		<div className="logo">
			<img className="logoStyle" src={shadowLogo} alt="Capital Consultants" />
		</div>
		<div className="content">
			<div className="inner">
				<h1>Capital Consultants</h1>
				<p>Large Loss Consulting Agency</p>
			</div>
		</div>
		<nav>
			<ul>
				{/* eslint-disable */}
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle("about")
						}}
					>
						About
					</a>
				</li>
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle("work")
						}}
					>
						Why?
					</a>
				</li>
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle("intro")
						}}
					>
						Services
					</a>
				</li>
				<li>
					<a
						href="javascript:;"
						onClick={() => {
							props.onOpenArticle("contact")
						}}
					>
						Contact
					</a>
				</li>
				{/* eslint-enable */}
			</ul>
		</nav>
	</header>
)

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
}

export default Header
