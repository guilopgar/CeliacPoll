import React, { Component } from 'react';

class Cuestionario1 extends Component {
  render() {
    return (
    	<div id="parent">
			<header id="fh5co-header-section" role="header" className="">
				<div className="container">
					<h1 id="fh5co-logo" className="pull-left"><a href="/"><img src="images/logo.png" alt="CeliacPoll"></img></a></h1>
					<nav id="fh5co-menu-wrap">
						<ul className="sf-menu" id="fh5co-primary-menu">
							<li><a href="/">Home</a></li>
							<li className="active">
								<a href="" className="fh5co-sub-ddown">Cuestionarios</a>
								<ul className="fh5co-sub-menu">
									<li className="active"><a href="/cuestionario1">Soy celíaco</a></li>
									<li><a href="/cuestionario2">Quiero saber si soy celíaco</a></li>
								</ul>
							</li>
							<li><a href="/contact" id="contact_button">Contact</a></li>
							<li><a href="/admin" id="admin_button">Admin</a></li>
							<li id="li_log"><a href="/login">Log In</a></li>
						</ul>
					</nav>
				</div>
			</header>

			<div id="fh5co-hero">
				<a href="#fh5co-main" className="smoothscroll fh5co-arrow to-animate hero-animate-4"><i className="ti-angle-down"></i></a>
				<div className="container">
					<div className="col-md-8 col-md-offset-2">
						<div className="fh5co-hero-wrap">
							<div className="fh5co-hero-intro">
								<h1 className="to-animate hero-animate-1">Cuestionario</h1>
								<h2 className="to-animate hero-animate-2">Soy celíaco diagnosticado y quiero ayudar.</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="fh5co-main">
				<div className="container" styles="padding-top: 50px">
					<div className="row">
						<div className="container-fluid">
							<div className="row animate-box">
								<header className="header bg-primary">
									<div className="left-title">JS Quiz</div>
									<div className="right-title">Total Questions: <span id="tque"></span></div>
									<div className="clearfix"></div>
								</header>
								<div className="content">
									<div className="container-fluid">
										<div className="row">
											<div className="col-sm-12">
												<div id="result" className="quiz-body">
													<form name="quizForm" onSubmit="">
														<fieldset className="form-group">
															<h4><span id="qid">1.</span> <span id="question"></span></h4>
															<div className="option-block-container" id="question-options">
															</div>
														</fieldset>
														<button  name="previous" id="previous" className="btn btn-primary btn-lg">Previous</button>
														&nbsp;
														<button  name="next" id="next" className="btn btn-primary btn-lg">Next</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<footer role="contentinfo" id="fh5co-footer">
				<a href="#" className="fh5co-arrow fh5co-gotop footer-box"><i className="ti-angle-up"></i></a>
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-6 footer-box">
							<h3 className="fh5co-footer-heading">Company</h3>
							<ul className="fh5co-footer-links">
								<li><a href="#">About</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Our Products</a></li>
								<li><a href="#">Our Culture</a></li>
								<li><a href="#">Team</a></li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-6 footer-box">
							<h3 className="fh5co-footer-heading">More Links</h3>
							<ul className="fh5co-footer-links">
								<li><a href="#">Terms &amp; Conditions</a></li>
								<li><a href="#">Our Careers</a></li>
								<li><a href="#">Support &amp; FAQ's</a></li>
								<li><a href="signup">Sign up</a></li>
								<li><a href="login">Log in</a></li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-12 footer-box">
							<h3 className="fh5co-footer-heading">Get in touch</h3>
							<ul className="fh5co-social-icons">
								<li><a href="www.lahoradeladigestion.com"><i className="ti-google"></i></a></li>
								<li><a href="#"><i className="ti-twitter-alt"></i></a></li>
								<li><a href="#"><i className="ti-facebook"></i></a></li>
								<li><a href="#"><i className="ti-instagram"></i></a></li>
								<li><a href="#"><i className="ti-dribbble"></i></a></li>
							</ul>
						</div>
						<div className="col-md-12 footer-box text-center">
							<div className="fh5co-copyright">
								<p>&copy; "Dr. Carlos de Sola". All Rights Reserved. <br/>Designed by <a href="#" target="_blank">Bioinformaticos de la UMA</a> Images by: <a href="http://unsplash.com" target="_blank">Unsplash</a></p>
							</div>
						</div>
					</div>
					<div className="fh5co-spacer fh5co-spacer-md"></div>
				</div>
			</footer>
		</div>
    );
  }
}

export default Cuestionario1;