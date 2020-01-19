import React from "react"
import PropTypes from "prop-types"
import bwlogo from "../svg/footer_icon.svg"

const bwlogoStyle = {
	height: ".5rem",
	marginRight: "3px",
	marginBottom: "-.7px"
}

const Footer = props => (
	<footer id="footer" style={props.timeout ? { display: "none" } : {}}>
		<p className="copyright">
			<img style={bwlogoStyle} src={bwlogo} alt="·" />
			│&copy; Capital Consultants L.L.C.
		</p>
	</footer>
)

Footer.propTypes = {
	timeout: PropTypes.bool
}

export default Footer
