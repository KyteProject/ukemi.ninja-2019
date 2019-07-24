import React from 'react';
import { Link } from 'gatsby';
import config from '../../data/SiteConfig';

const Footer = () => {
	const url = config.siteRss,
		{ copyright } = config;

	return (
		<footer className="footer">
			<div className="footer-wrapper">{/*  */}</div>
			<div className="footer-bottom">
				<div className="copyrite">
					<p>{copyright}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
