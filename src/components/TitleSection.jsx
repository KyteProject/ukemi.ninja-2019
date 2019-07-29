import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

export const TitleSection = ( props ) => {
	console.log( props );

	return (
		<section className="section-title">
			<Container>
				<Row>
					<Col>
						<div className="text-center">
							<h2>Title</h2>

							<Breadcrumb location={props.location} crumbLabel={props.location} />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
