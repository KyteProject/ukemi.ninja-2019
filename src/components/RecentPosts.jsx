import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import PostSliderCard from './PostSliderCard';

export const RecentPosts = () => {
	const data = useStaticQuery( graphql`
		query LatestPostsQuery {
			allGhostPost(limit: 9, sort: { order: DESC, fields: published_at }) {
				edges {
					node {
						published_at
						slug
						url
						excerpt
						title
						feature_image
						primary_tag {
							name
							url
						}
						primary_author {
							slug
							name
						}
					}
				}
			}
		}
	` );

	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	const posts = data.allGhostPost.edges;

	return (
		<React.Fragment>
			<section className="recent-title">
				<Container>
					<div className="block-title">
						<h2 className="block-title-text">
							Discover our <br />
							recent articles
						</h2>
					</div>
				</Container>
			</section>

			<section className="recent-posts">
				{/* img */}
				<Container>
					<Slider className="recent-slider" {...settings}>
						{posts.map( ( { node } ) => <PostSliderCard key={node.id} post={node} /> )}
					</Slider>
				</Container>
			</section>
		</React.Fragment>
	);
};
