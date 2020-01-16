import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
// import Div100vh from "react-div-100vh"

import shadowLogo from "../images/mainlogo.svg"

const logoSlide = {
	before: { marginTop: "-30px", display: "none" },

	after: {
		display: "inline-block",
		marginTop: "-10px",
		transition: {
			delay: 0.5,
			duration: 1,
			easing: "ease",
			damping: 10
		}
	}
}

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
				<motion.object
					type="image/svg+xml"
					className="capLogo"
					data={shadowLogo}
					alt="Capital Consultants"
					variants={logoSlide}
					initial={"before"}
					animate={"after"}
				/>
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
