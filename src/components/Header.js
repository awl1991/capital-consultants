import React, { useEffect } from "react"
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

// const WrapperComponent = props => {
// 	useEffect(() => {
// 		window.onresize = function() {
// 			document.body.height = window.innerHeight
// 		}

// 		window.onresize() // called to initially set the height.
// 	}, [])

// 	return props.children
// }

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

// const containerVariants = {
// 	before: {},
// 	after: { transition: { staggerChildren: 0.03 } }
// }
// const letterVariants = {
// 	before: {
// 		opacity: 0,
// 		fontSize: "1.5rem",
// 		y: 0,
// 		transition: {
// 			type: "spring",
// 			ease: "easeOut",
// 			damping: 40,
// 			stiffness: 100
// 		}
// 	},
// 	after: {
// 		opacity: 1,
// 		fontSize: "0.8rem",
// 		y: 0,
// 		transition: {
// 			type: "spring",
// 			ease: "easeOut",
// 			damping: 40,
// 			stiffness: 100
// 		}
// 	}
// }
// const string = Array.from("Large Loss Consulting Agency")
// <motion.p
// 						variants={containerVariants}
// 						initial={"before"}
// 						animate={"after"}
// 						width={"100%"}
// 						height={20}
// 						background={""}
// 						style={{
// 							display: "flex",
// 							justifyContent: "center"
// 						}}
// 					>
// 						{string.map((letter, index) => (
// 							<motion.span
// 								key={index}
// 								variants={letterVariants}
// 								width={"auto"}
// 								height={20}
// 								style={{ position: "relative" }}
// 							>
// 								{letter === " " ? "\u00A0" : letter}
// 							</motion.span>
// 						))}
// 					</motion.p>
