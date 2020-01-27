import React from 'react';
import { Link } from 'gatsby';
import { Card, Col } from 'react-bootstrap';

import { FaCalendarAlt } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';

const PostSliderCard = ( { post } ) => {
	const url = `/blog/${post.slug}`,
		published = new Date( `${post.published_at}` ).toDateString();

	return (
		<Col>
			<Card className="latest-item">
				<div className="image">
					{post.feature_image && (
						<Link to={url}>
							<Card.Img variant="top" src={post.feature_image} alt={post.title} />
						</Link>
					)}
					<span className="blog-overlay">#{post.primary_tag.name}</span>
				</div>
				<Card.Body className="content">
					<div>
						<Link to={url} className="post-title">
							{post.title}
						</Link>
					</div>
					<Card.Subtitle>
						<ul>
							<li>
								<FaCalendarAlt size={15} /> {published}
							</li>
							<li>
								<FaUserAlt size={15} /> {post.primary_author.name}
							</li>
						</ul>
					</Card.Subtitle>
					<Card.Text>{post.excerpt}</Card.Text>
					<Card.Link href={url}>Read More →</Card.Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default PostSliderCard;
