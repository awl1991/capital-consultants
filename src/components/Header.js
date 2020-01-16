import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import shadowLogo from "../images/mainlogo.svg"
import fallbackLogo from "../images/logo.png"

const navScale = {
	before: { opacity: 1, scaleX: 0.5 },
	after: {
		opacity: 1,
		scaleX: 1,
		transformOrigin: "topcenter",
		transition: {
			delay: 0.1,
			duration: 1,
			when: "beforeChildren",
			staggerChildren: 0.1
		}
	}
}

const Header = props => {
	return (
		<header id="header" style={props.timeout ? { display: "none" } : {}}>
			<div className="logo">
				<object
					type="image/svg+xml"
					className="capLogo"
					data={shadowLogo}
					alt="Capital Consultants"
				>
					<img className="capLogo" src={fallbackLogo} />
				</object>
			</div>
			<div className="content">
				<div className="inner">
					<h1>Capital Consultants</h1>
					<p>Large Loss Consulting Agency</p>
				</div>
			</div>
			<nav>
				<motion.ul variants={navScale} initial={"before"} animate={"after"}>
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
				</motion.ul>
			</nav>
		</header>
	)
}

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
}
export default Header
