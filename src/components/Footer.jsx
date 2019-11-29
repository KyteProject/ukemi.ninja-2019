import React from 'react';
import { Link } from 'gatsby';
import { Nav, Container } from 'react-bootstrap';

import config from '../../data/siteConfig';

const Footer = () => {
	const url = config.siteRss,
		{ copyright } = config;

	return (
		<footer className="footer">
			<Container>
				<Nav className="footer-nav">
					<div className="footer-col footer-col-intro">
						<a className="footer-logo" href="/" data-footer-link="1">
							<img src="/logos/kanji-text-white2.svg" alt="Ukemi Project text logo" />
						</a>
						<p className="footer-slogan">
							<span className="text-white">受け身</span>
							<br />
							Movement inspired design specialists.<br />
							<strong>Be Dauntless.</strong>
						</p>
					</div>

					<div className="footer-col">
						<div className="footer-col-wrap">
							<h6 className="footer-col-title">Explore</h6>
							<div className="footer-nav-list">
								<a href="/" className="footer-link" data-footer-link="1">
									Home
								</a>
								<a href="/about" className="footer-link" data-footer-link="2">
									About
								</a>
								<a href="/blog" className="footer-link" data-footer-link="3">
									Blog
								</a>
								<a href="/shop" className="footer-link" data-footer-link="4">
									Shop
								</a>
								<a href="/contact" className="footer-link" data-footer-link="5">
									Contact
								</a>
							</div>
						</div>
					</div>

					<div className="footer-col">
						<div className="footer-col-wrap">
							<h6 className="footer-col-title">Services</h6>
							<div className="footer-nav-list">
								<a href="/" className="footer-link" data-footer-link="1">
									Park & Equipment Design
								</a>
								<a href="/" className="footer-link" data-footer-link="2">
									Events & Shows
								</a>
								<a href="/" className="footer-link" data-footer-link="3">
									Consultation, Presentation & Workshops
								</a>
							</div>
						</div>
					</div>

					<div className="footer-col">
						<div className="footer-col-wrap">
							<h6 className="footer-col-title">Projects</h6>
							<div className="footer-nav-list">
								<a href="/" className="footer-link" data-footer-link="1">
									The Greatest Park
								</a>
								<a href="/about" className="footer-link" data-footer-link="2">
									Ukemi Card Game
								</a>
								<a href="/blog" className="footer-link" data-footer-link="3">
									Parkour Van
								</a>
								<a href="/shop" className="footer-link" data-footer-link="4">
									Fucked Knee eBook
								</a>
							</div>
						</div>
					</div>

					<section className="footer-col">
						<div className="footer-col-wrap">
							<h6 className="footer-col-title">Follow</h6>
							<a
								href="https://www.instagram.com/UkemiProject/"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-link"
							>
								Instagram
							</a>
							<a
								href="https://twitter.com/UkemiProject/"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-link"
							>
								Twitter
							</a>
							<a
								href="https://www.Facebook.com/UkemiProject/"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-link"
							>
								Facebook
							</a>
						</div>
					</section>

					<section className="footer-col footer-col-next">
						<div className="footer-col-wrap">
							<h6 className="footer-col-title">Legal</h6>
							<a href="/terms" className="footer-link">
								Terms
							</a>
							<a href="/privacy" className="footer-link">
								Privacy
							</a>
						</div>
					</section>

					<small className="footer-legal">{copyright}</small>
				</Nav>
			</Container>
		</footer>
	);
};

export default Footer;
