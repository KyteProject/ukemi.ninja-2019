import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';
import { TiSocialAtCircular } from 'react-icons/ti';
import { TiMail } from 'react-icons/ti';

const Contact = () => {
	return (
		<React.Fragment>
			<section className="contact-section">
				<Container className="text-center">
					<h1 className="title">Get in touch!</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quaerat quod unde sit.
						Voluptatibus cum blanditiis laborum esse mollitia placeat, officia sit eveniet, neque est alias
						consequuntur eligendi ab facilis?
					</p>
				</Container>
			</section>

			<section className="contact-info">
				<Container>
					<Row>
						<Col lg={4}>
							<div className="single wow fadeInUp" data-wow-duration="1500ms">
								<div className="icon">
									<TiLocationOutline size={65} />
								</div>
								<h2 className="title">Our Location</h2>
								<p className="text">
									Glasgow & Aberdeen<br />
									Scotland, UK
								</p>
							</div>
						</Col>
						<Col lg={4}>
							<div className="single wow fadeInDown" data-wow-duration="1500ms">
								<div className="icon">
									<TiSocialAtCircular size={65} />
								</div>
								<h2 className="title">Social Media</h2>
								<p>@UkemiProject</p>
								<ul className="social-links">
									<li>
										<a href="https://fb.me/UkemiProject" alt="Ukemi Project Facebook page">
											<FaFacebookF size={24} />
										</a>
									</li>
									<li>
										<a href="https://instagram.com/UkemiProject" alt="Ukemi Project Instagram page">
											<FaInstagram size={24} />
										</a>
									</li>
									<li>
										<a href="https://twitter.com/UkemiProject" alt="Ukemi Project Twitter page">
											<FaTwitter size={24} />
										</a>
									</li>
								</ul>
							</div>
						</Col>
						<Col lg={4}>
							<div className="single wow fadeInDown" data-wow-duration="1500ms">
								<div className="icon">
									<TiMail size={65} />
								</div>
								<h2 className="title">Contact Info</h2>
								<p className="text">
									founders@ukemi.ninja<br />
									support@ukemi.ninja
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="contact-form">
				<Container>
					<h2 className="title text-center">
						Send us a<br />message
					</h2>
					<Form action="#" className="contact-one__form">
						<Row>
							<Col lg={6}>
								<Form.Control type="text" placeholder="Your Name" />
							</Col>
							<Col lg={6}>
								<Form.Control type="email" placeholder="Email Address" />
							</Col>
							<Col lg={12}>
								<Form.Control as="textarea" rows="3" placeholder="Write Message" />
								<div className="text-center">
									<Button type="submit" className="contact-one__btn thm-btn">
										Submit Comment
									</Button>
								</div>
							</Col>
						</Row>
					</Form>
				</Container>
			</section>
		</React.Fragment>
	);
};

export default Contact;
