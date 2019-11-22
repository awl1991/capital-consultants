import React from "react"
import PropTypes from "prop-types"
import left from "../images/left_bracket.png"
import right from "../images/right_bracket.png"

const bracketStyle = {
  opacity: ".5",
  marginBottom: "-.32rem",
  height: "1.2rem"
}

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <p className="copyright">
      <img style={bracketStyle} src={left} />
      {"\t"}
      &copy; Capital Consultants L.L.C. │ Plano, TX ─ USA
      {"\t"}
      <img style={bracketStyle} src={right} />
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
