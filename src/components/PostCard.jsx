import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { readingTime as readingTimeHelper } from '@tryghost/helpers';
import { Card } from 'react-bootstrap';

import { FaCalendarAlt } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';

const PostCard = ( { post } ) => {
	const url = `/blog/${post.slug}`,
		readingTime = readingTimeHelper( post ),
		published = new Date( `${post.published_at}` ).toDateString();

	return (
		<Card className="blog-item">
			<div>
				{post.feature_image && (
					<Link to={url}>
						<Card.Img variant="top" src={post.feature_image} alt={post.title} />
					</Link>
				)}
				<span className="blog-overlay">#{post.primary_tag.name}</span>
			</div>
			<Card.Body className="blog-summary">
				<Link to={url}>
					<h3>{post.title}</h3>
				</Link>
				<Card.Subtitle>
					<ul>
						<li>
							<FaCalendarAlt size={15} /> {published}
						</li>
						<li>
							<FaUserAlt size={15} /> {post.primary_author.name}
						</li>
						<li>
							<FaRegClock size={15} /> {readingTime}
						</li>
					</ul>
				</Card.Subtitle>
				<Card.Text>{post.excerpt}</Card.Text>
				<Card.Link href={url}>Read More →</Card.Link>
			</Card.Body>
		</Card>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape( {
		title: PropTypes.string.isRequired,
		feature_image: PropTypes.string,
		slug: PropTypes.string,
		featured: PropTypes.bool,
		tags: PropTypes.arrayOf(
			PropTypes.shape( {
				name: PropTypes.string
			} )
		),
		excerpt: PropTypes.string.isRequired,
		primary_author: PropTypes.shape( {
			name: PropTypes.string.isRequired,
			profile_image: PropTypes.string
		} ).isRequired
	} ).isRequired
};

export default PostCard;
