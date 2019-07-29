import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
	return (
		<div className="about-section">
			<section className="about">
				<Container>
					<Row>
						<Col md={6} className="pt-2">
							<h1 className="title">
								we are <strong>UKEMI</strong>.
							</h1>
							<p className="about-text">
								Ukemi promote activity in highly urbanised areas and encourage a healthier society
								through digital design, product creation, and community arts development.
							</p>

							<p className="about-text">
								We create experiences in response to, and in collaboration with, communities in order to
								reclaim the city for free and open activity. Our aim is to tackle health and safety
								culture, to encourage play, and to demystify movement and make it more accessible
								through our products and services.
							</p>

							<p className="about-text">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis et quas eius
								voluptatum, sint placeat atque soluta dolorum doloribus sequi illo quasi numquam quo,
								ipsam rerum animi harum laboriosam voluptate.
							</p>
						</Col>
						<div className="img-right">
							<img src="/images/about-team.svg" alt="Ukemi team photo" />
						</div>
					</Row>
				</Container>
			</section>

			<section className="story">
				<Container>
					<Row>
						<Col md={6}>
							<img src="/images/about-story.svg" alt="Ukemi Back Story" />
						</Col>

						<Col md={6} className="mx-auto pl-5">
							<h2 className="title text-left">
								a lifelong <strong>TEAM</strong>.
							</h2>

							<span className="subtitle">Our Story</span>
							<p className="about-text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto facilis nam maxime autem
								assumenda ea, recusandae vitae similique accusantium id nobis, voluptatibus architecto,
								quasi nostrum? Doloremque beatae sapiente alias sunt!
							</p>
							<p className="about-text pb-2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis molestias odit
								nihil distinctio. Maxime in enim et odit animi, temporibus minus voluptates voluptas
								explicabo nulla nesciunt placeat sint sapiente?
							</p>

							<span className="subtitle">Our Experience</span>
							<Row className="bottom-text">
								<Col md={4} className="text-center">
									<span>43</span>
									<small>Years of Parkour (combined)</small>
								</Col>
								<Col md={4} className="text-center">
									<span>17</span>
									<small>Years of Friendship</small>
								</Col>
								<Col md={4} className="text-center">
									<span>1.5</span>
									<small>Years of Ukemi</small>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="cta">
				<Container>
					<Row>
						<Col md={12}>
							<div className="cta-text text-center">
								<span>Get started</span>

								<h2 className="title text-white">
									A bold statement in design <br />
									or something here.
								</h2>

								<Button className="btn-white">Ask us a Question</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default About;
