import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
	return (
		<section className="contact-section">
			<Container>
				<Row>
					<Col md={7} class="pt-5">
						<div className="contact-info">
							<div className="contact-list">
								<h1 className="title">
									get in <strong>TOUCH</strong>.
								</h1>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quaerat quod unde
									sit. Voluptatibus cum blanditiis laborum esse mollitia placeat, officia sit eveniet,
									neque est alias consequuntur eligendi ab facilis?
								</p>
								<hr />
								<br />
								<h3 className="subtitle"> Contact Info </h3>

								<ul>
									<li>
										<strong>Founders Email:</strong> founders@ukemi.ninja
									</li>
									<li>
										<strong>Support Email:</strong> support@ukemi.ninja
									</li>
								</ul>
							</div>

							<h3 className="subtitle"> Social Media</h3>
							<ul className="social-links">
								<li>
									<a href="https://fb.me/UkemiProject" alt="Ukemi Project Facebook page">
										<FaFacebookF size={42} />
									</a>
								</li>
								<li>
									<a href="https://instagram.com/UkemiProject" alt="Ukemi Project Instagram page">
										<FaInstagram size={42} />
									</a>
								</li>
								<li>
									<a href="https://twitter.com/UkemiProject" alt="Ukemi Project Twitter page">
										<FaTwitter size={42} />
									</a>
								</li>
							</ul>
						</div>
					</Col>

					<Col md={5} className="img-right">
						<img src="/images/map-pin.svg" alt="Ukemi Location Map Pin" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact;
