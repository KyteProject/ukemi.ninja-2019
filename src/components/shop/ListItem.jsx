import React from "react";
import { Link } from "gatsby";
import { Col, Figure } from "react-bootstrap";

import { formatPrice } from "../../utils/cart-helpers";

const ListItem = ({ item }) => {
  return (
    <Col lg={4} md={6} className="gallery-item">
      <div className="box shadow p-30">
        <Figure className="main overlay">
          <Link to={`shop/${item.product.metadata.slug}`}>
            <Figure.Image rounded src={item.localFiles[0].publicURL} alt={item.product.name} />
          </Link>
        </Figure>
        <div className="box-content">
          <Link to={`shop/${item.product.metadata.slug}`}>
            <h2 className="box-title mb-10">{item.product.name}</h2>
          </Link>
          <p>{formatPrice(item.price, item.currency)}</p>
          <p>{item.product.metadata.short_summary}</p>
          <Link to={`shop/${item.product.metadata.slug}`}>View Item</Link>
        </div>
      </div>
    </Col>
  );
};

export default ListItem;
