import React from "react"
import PropTypes from "prop-types"
import icon from "../svg/footer_icon.svg"

const iconStyle = {
    height: ".5rem",
    marginRight: "3px",
    marginBottom: "-.7px",
    opacity: ".5"
}

const Footer = props => (
    <footer id="footer" style={props.timeout ? {display: "none"} : {}}>
        <p className="copyright">
            <img style={iconStyle} src={icon} alt="·"/>
            │&copy; Capital Consultants L.L.C.
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
