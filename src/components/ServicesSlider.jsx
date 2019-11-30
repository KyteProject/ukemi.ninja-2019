import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import PostSliderCard from './PostSliderCard';

export const ServicesSlider = () => {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3
	};

	return (
		<section className="recent-posts">
			{/* img */}
			<Container>
				<Slider className="recent-slider" {...settings} />
			</Container>
		</section>
	);
};
