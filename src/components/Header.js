import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import fallbackLogo from "../images/logo.png"
import mainlogo from "../svg/mainlogo.svg"

const navScale = {
	before: { opacity: 0.5, scaleX: 0 },
	after: {
		opacity: 1,
		scaleX: 1,
		transformOrigin: "topcenter",
		transition: {
			delay: 0.5,
			type: "spring",
			mass: 0.5,
			stiffness: 250,
			bounceDamping: 20
		}
	}
}

const logoDelay = {
	before: { display: "none" },
	after: {
		display: "inline-block",
		transition: { delay: 0.6 }
	}
}

const Header = props => {
	return (
		<header id="header" style={props.timeout ? { display: "none" } : {}}>
			<div className="logo">
				<motion.object
					variants={logoDelay}
					initial={"before"}
					animate={"after"}
					data={mainlogo}
					type="image/svg+xml"
					class="mainLogo"
				>
					<img class="mainLogo" src={fallbackLogo} alt="Capital Consultants" />
				</motion.object>
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
