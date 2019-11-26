import PropTypes from "prop-types"
import React from "react"
import { navigate } from "gatsby-link"
//import pic01 from "../images/pic01.jpg"
import pic02 from "../images/pic02.png"
import pic03 from "../images/pic03.jpg"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }
  componentDidMount() {
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    const handleChange = () => {
      const name = this.target.name

      this.setState({
        [name]: this.target.value
      })
    }
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <div id="topBorder"></div>
        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h3 className="major">About</h3>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Complex insurance claims require a multitude of expert consultants
            such as engineers, architects, experienced estimators, insurance
            policy experts, CPA’s and claims management professionals. Your
            insurance carrier has all of these experts in place prior to the
            event of your loss in order to protect their interests.{" "}
            {/*<a href="#work">awesome work</a>*/}
          </p>
          <p>
            It is to your benefit to retain your own firm to manage this process
            on your behalf to allocate the proper experts to pursue your own
            interests and to achieve the greatest outcome of claim satisfaction.
            Claim satisfaction may not always be specific to financial outcome,
            but an expeditious, accurate closure to avoid business or personal
            interruption.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h3 className="major">Work</h3>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h3 className="major">About</h3>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          name="contact"
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h3 className="major">Contact</h3>
          <form
            name="contact"
            method="post"
            onSubmit={this.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div type="hidden" className="field half first">
              <label htmlFor="name">Name</label>
              <input
                value={this.state.name}
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                value={this.state.email}
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                value={this.state.message}
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/thecapitalconsultants/"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
        <div id="bottomBorder"></div>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
}

export default Main
