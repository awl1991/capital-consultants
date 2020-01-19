import PropTypes from "prop-types"
import React from "react"
import { motion } from "framer-motion"
import pic01 from "../svg/CommercialPerils.svg"
import pic01Fallback from "../images/CommercialPerils.png"
import pic02 from "../images/pic02.png"
import pic03 from "../images/pic03.png"

const animationDelay = {
	before: { display: "none" },
	after: {
		display: "inline-block",
		transition: { delay: 1 }
	}
}

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
			<article
				id="about"
				className={`${props.article === "about" ? "active" : ""} ${
					props.articleTimeout ? "timeout" : ""
				}`}
				style={{ display: "none" }}
			>
				<h3 className="major">About</h3>
				<span className="image main">
					<motion.object
						variants={animationDelay}
						initial={"before"}
						animate={"after"}
						data={pic01}
						type="image/svg+xml"
					>
						<img src={pic01Fallback} alt="Commercial Perils" />
					</motion.object>
				</span>
				<p>
					<b>
						Capital Consultants provides consultation services to individuals or
						businesses who have filed <i>or</i> are considering filing an
						insurance claim. We also offer assistance with denied and/or old
						claims (filed within the previous two years).
					</b>{" "}
					We provide advice as to the quality of the claim, as well as
					assistance with selecting the most qualified experts who will provide
					you with the highest likelihood of achieving a desirable outcome.
					Additionally, we offer appraisal or umpire services to individuals who
					have not employed our consultation services for the particular claim
					(this is to avoid a possible conflict of interest).
				</p>
				<p>
					<b>
						Complex insurance claims often require a multitude of expert
						consultants
					</b>{" "}
					such as adjusters, engineers, contractors, experienced estimators,
					insurance policy experts, and claims management professionals.{" "}
					<b>Your insurance carrier has such experts in place</b> <i>prior</i>{" "}
					to the event of your loss in order to protect <i>their</i> interests.
				</p>
				<p>
					<b>It is to your benefit</b> to retain your own firm to manage this
					process on your behalf to allocate the proper experts to pursue{" "}
					<i>your</i> own interests and to achieve the greatest outcome of claim
					satisfaction. Claim satisfaction may not always be specific to
					financial outcome but an expeditious, accurate closure to avoid
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
					<b>Filing an insurance claim can seem daunting</b> depending on the
					scope of liability that is at stake. Generally, your insurance carrier
					holds the liability of certain structures on your property given a
					certain "peril" (tornado, fire, flood, etc) occurs. There are,
					however, a host of instances outlined in your policy where your
					carrier can deny coverage and legally refuse to accept liability under
					the basis that the damages do not fall within the parameters listed
					within the particular insurance policy.
					<br />
					<br />
					<b>Attempting to leverage coverage restrictions in a policy,</b>{" "}
					carriers often enlist <i>their</i> "experts" to inspect the damages.
					They paint a <i>particular</i> picture as to the cause or extent of
					certain damages (usually the most expensive ones) and{" "}
					<b>
						provide a persuasive justification as to why these damages will not
						be covered.
					</b>{" "}
					One such justification would be that the claimed peril did not cause
					the damage but that the damage was "pre-existing."
					<br />
					<br />
					Many policy holders do not understand that these justifications are
					not black and white but are often{" "}
					<b>
						heavily influenced by the carrier's interest to escape the
						resposibility of an expensive liability.
					</b>{" "}
					Additionally,{" "}
					<b>
						most policy holders are simply unaware of certain options hidden in
						their policy that, when utilized, are <i>highly-successful</i> when
						combined with some patience and a couple third-party professionals.
					</b>
					<br />
					<br />
					<b>Capital Consultants provides general consultation services</b> that
					will take into account your specific situation, and will advise you on
					the best course of action to take with your claim. Depending on your
					situation, we may assist in selecting necessary third party
					professionals (such as public adjusters or appraisers) who we know
					have a history of{" "}
					<b>succesfully negotiating insurance claims to a positive outcome.</b>
					<br />
					<br />
					<b>
						Our company exists to educate policy holders on their options and to
						provide assistance in making difficult decisions when facing a
						seemingly unbeatable opponent.
					</b>
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
						<b>
							<h3>Appraisals</h3>
						</b>
					</li>{" "}
					<p className="indent">
						<b>
							Appraisal is a process which effectively removes the checkbook
							from your carrier's control
						</b>{" "}
						and puts it into the hand of third party appraisers. In appraisal,
						both the policy holder and the carrier provide a third party
						appraiser to observe the damages and come to a conclusion about the
						cost of the the damages in question. This is an option oulined in
						almost every insurance policy, and <i>usually</i>{" "}
						<b>the outcome proves beneficial to the policy holder</b> ─ provided
						the policy holder hires a quality appraiser.{" "}
						<b>
							Once <i>both</i> appraisers come to an agreement on the settlement
							amount as outlined by the particular insurance policy, the
							insurance carrier <i>MUST</i> pay that amount.
						</b>
					</p>
					<li>
						<b>
							<h3>Umpire Services</h3>
						</b>
					</li>
					<p className="indent">
						<b>In the event that the appraisers do not come to an agreement</b>{" "}
						on the cost of the settlement of the claim, an umpire is selected to
						consider both appraisers' estimates and make the final decision on a
						fair settlement. In this case, both the policy holder and the
						carrier provide several candidates to act as an umpire. Once these
						candidates are provided, both parties must agree on <i>only one</i>{" "}
						umpire from the list of options. If both parties do not come to an
						agreement on an umpire, a judge will appoint the umpire from the
						given pool of candidates. Once an umpire is appointed, he/she
						observes the damages and considers both appraisals and comes to a
						final conclusion about the final settlement that will be paid by the
						carrier.{" "}
						<b>
							Just like with appraisal, this decision is final, and the carrier{" "}
							<i>MUST</i> pay.
						</b>
					</p>
					<li>
						<b>
							<h3>General Claim Consulting</h3>
						</b>
					</li>
					<p className="indent">
						In our experience, when a claim is filed,{" "}
						<b>
							the biggest threat to policy holders is <i>not</i> a possible
							denial from their insurance carrier
						</b>{" "}
						but the{" "}
						<b>
							understandable lack of familiarity with the complex claims process
							and an unawarness of highly-successful available options.{" "}
						</b>
						Capital Consultants' general consultation services offer access to
						our years of accumulated knowledge of the insurance claim industry
						that can help you correctly navigate your insurance claim to a
						desirable outcome. We will take into account your specific situation
						and advise you with clear and concise reasons on the best course of
						action to take regarding your claim. We also offer assistance in
						selecting necessary third party professionals (such as public
						adjusters, appraisers, or umpires) who have a{" "}
						<b>
							history of successfully and professionally negotiating insurance
							claim disputes.
						</b>
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
				</ul>
				{close}
			</article>
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
