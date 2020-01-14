import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import shadowLogo from "../images/logo_w_shadow.png"

const fade = {
	visible: { delay: 0.5, opacity: 1, transition: { duration: 2 } },
	hidden: { opacity: 0 }
}

const slide = {
	visible: {
		marginTop: "0px",
		transition: {
			delay: 0.5,
			duration: 1,
			type: "spring",
			velocity: 2
		}
	},
	hidden: { marginTop: "30px" }
}

const Header = props => {
	return (
		<header id="header" style={props.timeout ? { display: "none" } : {}}>
			<div className="logo">
				<motion.div initial="hidden" animate="visible" variants={slide}>
					<motion.img
						className="capLogo"
						src={shadowLogo}
						alt="Capital Consultants"
						initial="hidden"
						animate="visible"
						variants={fade}
					/>
				</motion.div>
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
}

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
}
export default Header
