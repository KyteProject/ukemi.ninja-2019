import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';

export const ServicesSlider = () => {
	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1
	};

	return (
		<section className="section-services-slider">
			<Container fluid className="text-center">
				<div className="block-title">
					<h2 className="block-title-text">Discover our services</h2>
				</div>
				<Slider className="services-slider" {...settings}>
					<div className="service-item">
						<div className="service-box">
							<div className="service-icon">
								<i className="kipso-icon-targeting" />
							</div>
							<h3 className="service-box-title">
								<a href="#">Park Design</a>
							</h3>
						</div>
					</div>
					<div className="service-item">
						<div className="service-box">
							<div className="service-icon">
								<i className="kipso-icon-targeting" />
							</div>
							<h3 className="service-box-title">
								<a href="#">Bespoke Equipment</a>
							</h3>
						</div>
					</div>
					<div className="service-item">
						<div className="service-box">
							<div className="service-icon">
								<i className="kipso-icon-targeting" />
							</div>
							<h3 className="service-box-title">
								<a href="#">Event Planning</a>
							</h3>
						</div>
					</div>
					<div className="service-item">
						<div className="service-box">
							<div className="service-icon">
								<i className="kipso-icon-targeting" />
							</div>
							<h3 className="service-box-title">
								<a href="#">Consultation</a>
							</h3>
						</div>
					</div>
					<div className="service-item">
						<div className="service-box">
							<div className="service-icon">
								<i className="kipso-icon-targeting" />
							</div>
							<h3 className="service-box-title">
								<a href="#">Presentations</a>
							</h3>
						</div>
					</div>
					<div className="service-item">
						<div className="service-box">
							<div className="service-icon">
								<i className="kipso-icon-targeting" />
							</div>
							<h3 className="service-box-title">
								<a href="#">Workshops</a>
							</h3>
						</div>
					</div>
				</Slider>
			</Container>
		</section>
	);
};
