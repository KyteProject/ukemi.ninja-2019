import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Image } from 'react-bootstrap';

const CategroyItem = ( { item } ) => {
	const url = `/blog/tag/${item.slug}`;

	return (
		<Link to={url} className="cat-item">
			<div className="cat-item-inner">
				<div className="cat-thumb">
					{item.feature_image && <Image src={item.feature_image} alt={item.name} />}
				</div>
				<div className="cat-name">
					<span>{item.name}</span>
				</div>
			</div>
		</Link>
	);
};

CategroyItem.propTypes = {
	item: PropTypes.shape( {
		slug: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		feature_image: PropTypes.string,
		description: PropTypes.string,
		meta_title: PropTypes.string,
		meta_description: PropTypes.string
	} ).isRequired
};

export default CategroyItem;
