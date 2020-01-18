import React from "react"
import PropTypes from "prop-types"
import bwlogo from "../images/bw_logo_small.png"

const bwlogoStyle = {
  height: ".5rem",
  opacity: ".65",
  marginRight: "3px"
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
