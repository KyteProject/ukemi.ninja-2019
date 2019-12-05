import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { GiJumpAcross, GiAcrobatic, GiPublicSpeaker, GiTeacher, GiTeamIdea, GiToolbox, GiHammerNails } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi';

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
			<Container className="text-center">
				<div className="block-title">
					<h2 className="block-title-text">Explore our services</h2>
				</div>
				<Row className="services-group">
					<Col sm={6} md={4} xl={4}>
						<div className="service-item">
							<div className="service-item-content">
								<div className="service-item-header">
										<FiMonitor size={80}/>
								</div>
								<div className="service-item-body">
										<h3>3D Models & Websites</h3>
										<p className="mb-0">
												Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
										</p>
								</div>
							</div>
						</div>
					</Col>
					<Col sm={6} md={4} xl={4}>
						<div className="service-item">
							<div className="service-item-content">
								<div className="service-item-header">
										<GiHammerNails size={80} />
								</div>
								<div className="service-item-body">
										<h3>Bespoke Equipment</h3>
										<p className="mb-0">
												Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
										</p>
								</div>
							</div>
						</div>
					</Col>
					<Col sm={6} md={4} xl={4}>
						<div className="service-item">
							<div className="service-item-content">
								<div className="service-item-header">
										<GiTeamIdea size={80} />
								</div>
								<div className="service-item-body">
										<h3>Consultation</h3>
										<p className="mb-0">
												Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
										</p>
								</div>
							</div>
						</div>
					</Col>
					<Col sm={6} md={4} xl={4}>
						<div className="service-item">
							<div className="service-item-content">
								<div className="service-item-header">
										<GiPublicSpeaker size={80 }/>
								</div>
								<div className="service-item-body">
										<h3>Events & Presentations</h3>
										<p className="mb-0">
												Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
										</p>
								</div>
							</div>
						</div>
					</Col>
					<Col sm={6} md={4} xl={4}>
						<div className="service-item">
							<div className="service-item-content">
								<div className="service-item-header">
										<GiJumpAcross size={80} />
								</div>
								<div className="service-item-body">
										<h3>Park Design</h3>
										<p className="mb-0">
												Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
										</p>
								</div>
							</div>
						</div>
					</Col>
					<Col sm={6} md={4} xl={4}>
						<div className="service-item">
							<div className="service-item-content">
								<div className="service-item-header">
										<GiTeacher size={80} />
								</div>
								<div className="service-item-body">
										<h3>Workshops</h3>
										<p className="mb-0">
												Duis molestie enim mattis gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
										</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
