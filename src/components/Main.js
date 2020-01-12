import PropTypes from "prop-types"
import React from "react"
import pic02 from "../images/pic02.png"
import pic03 from "../images/pic03.jpg"
//import pic01 from "../images/pic01.jpg"
const Main = props => {
	let close = (
		<div
			className="close"
			onClick={() => {
				props.onCloseArticle()
			}}
		></div>
	)
	return (
		<div
			ref={props.setWrapperRef}
			id="main"
			style={props.timeout ? { display: "flex" } : { display: "none" }}
		>
			<div id="topBorder"></div>
			<article
				id="about"
				className={`${props.article === "about" ? "active" : ""} ${
					props.articleTimeout ? "timeout" : ""
				}`}
				style={{ display: "none" }}
			>
				<h3 className="major">About</h3>
				<span className="image main">
					<img src={pic02} alt="" />
				</span>
				<p>
					<b>
						Capital Consultants provides consultation services to indivuals or
						businesses who have filed <i>or</i> are considering filing an
						insurance claim.
					</b>{" "}
					We provide advice as to the quality of the claim, as well as
					assistance in selecting the most qualified experts who will provide
					you with the highest likelihood of achieving a desirable outcome. We
					also provide appraisal or umpire services to individuals who have not
					employeed our consultation services for the particular claim (this is
					to avoid a possible conflict of interest).
				</p>
				<p>
					Complex insurance claims require a multitude of expert consultants
					such as engineers, architects, experienced estimators, insurance
					policy experts, CPA’s and claims management professionals.{" "}
					<b>Your insurance carrier has all of these experts in place</b> prior
					to the event of your loss in order to protect <i>their</i> interests.
				</p>
				<p>
					<b>It is to your benefit</b> to retain your own firm to manage this
					process on your behalf to allocate the proper experts to pursue{" "}
					<i>your</i> own interests and to achieve the greatest outcome of claim
					satisfaction. Claim satisfaction may not always be specific to
					financial outcome, but an expeditious, accurate closure to avoid
					business or personal interruption.
				</p>
				{close}
			</article>

			<article
				id="work"
				className={`${props.article === "work" ? "active" : ""} ${
					props.articleTimeout ? "timeout" : ""
				}`}
				style={{ display: "none" }}
			>
				<h3 className="major">Why hire a consultant?</h3>
				<span className="image main">
					<img src={pic02} alt="" />
				</span>
				<p>
					Filing an insurance claim can seem daunting depending on the scope of
					liability that is at stake. Generally, your insurance carrier carries
					the liability of certain structures on your property given a certain
					peril (tornado, fire, flood, etc) occurs, however, there are a host of
					instances outlined in your policy where your carrier can deny coverage
					and legally refuse to accept liability under the basis that the
					damages do not fall within the parameters listed within the particular
					insurance policy.
					<br />
					<br />
					Because of this, carriers often enlist "experts" to inspect the
					damages who paint a picture as to the cause or extent of certain
					damages (usually the most expensive ones), and a persuasive
					justification as to why these damages will not be covered. One such
					justification would be that the claimed peril did not cause the
					damage, but that the damage was "pre-existing."
					<br />
					<br />
					Many policy holders do not understand that these justifications are
					not black and white but are heavily influenced by the carrier's
					interest to escape the resposibility of an expensive liability.
					Additionally, most policy holders simply are not aware that they have
					options hidden in their policy that are highly successful when
					combined with a little patience and a couple industry experts.
					<br />
					<br />
					We provide general consultation services that will take into account
					your specific situation, and will advise you on the best course of
					action to take with your claim. Depending on your situation, we may
					advise you to employ the assistance of certain necessary experts (such
					as a public adjuster) who we know have a history of succesfully
					negotiating insurance claims to a desired outcome.
					<br />
					<br />
					Our company exists to educate policy holders on their options and to
					provide assistance in making difficult decisions when facing a
					seemingly unbeatable opponent.
				</p>
				{close}
			</article>

			<article
				id="intro"
				className={`${props.article === "intro" ? "active" : ""} ${
					props.articleTimeout ? "timeout" : ""
				}`}
				style={{ display: "none" }}
			>
				<h3 className="major">Services</h3>
				<span className="image main">
					<img src={pic03} alt="" />
				</span>
				<ul>
					<li>
						<h4>Appraisals</h4>
					</li>{" "}
					<p className="indent">
						Appraisal is a process which effectively removes the checkbook from
						your carriers control and puts it into the hand of third party
						appraisers. In appraisal, both the policy holder and the carrier
						provide a third party appraiser to observe the damages and come to a
						conclusion about the cost of the the damages at question. This is an
						option oulined in almost every insurance policy and usually the
						outcome proves beneficial to the policy holder ─ provided the policy
						holder hires a quality appraiser. Once both of the appraisers come
						to an agreement on the amount of the settlement as outlined by the
						particular insurance policy, the insurance carrier MUST pay that
						amount.
					</p>
					<li>
						<h4>Umpire Services</h4>
					</li>
					<p className="indent">
						In the event that the appraisers do not come to an agreement on the
						cost of the settlement of the claim, an umpire is selected to
						consider both appraisers estimates, and make the final decision on a
						fair settlement. In this case, both the policy holder and the
						carrier provide several candidates to act as an umpire. Once these
						candidates are provided, both parties must agree on only one umpire
						from the list of options. If the both parties do not come to an
						agreement on an umpire, a judge is appointed to make the umpire
						selection from the given pool. Once an umpire is appointed, he/she
						observes the damages and considers both appraisals and comes to a
						final conclusion about the final settlement that will be paid by the
						carrier. Just like with appraisal this decision is final and the
						carrier MUST pay.
					</p>
					<li>
						<h4>General Claim Consulting</h4>
					</li>
					<p className="indent">
						We provide general consultation services that will take into account
						your specific situation, and will advise you on the best course of
						action to take with your claim. Depending on your situation, we may
						advise you to employ the assistance of certain necessary experts
						(such as a public adjuster) who we know have a history of
						succesfully negotiating insurance claims to a desirable outcome. Our
						company exists to educate policy holders on their options, and to
						provide assistance in making difficult decisions when facing a
						seemingly unbeatable opponent.
					</p>
				</ul>
				{close}
			</article>

			<article
				name="contact"
				id="contact"
				className={`${props.article === "contact" ? "active" : ""} ${
					props.articleTimeout ? "timeout" : ""
				}`}
				style={{ display: "none" }}
			>
				<h3 className="major">Contact</h3>
				<form
					subject={"New Website Submission"}
					name="contact-cap"
					method="post"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="contact-cap" />
					<div className="field half first">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div className="field half">
						<label htmlFor="email">Email</label>
						<input type="text" name="email" id="email" />
					</div>
					<div className="field">
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" rows="4"></textarea>
					</div>
					<ul className="actions">
						<li>
							<button className="special">Send Message</button>
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

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired
}

export default Main
