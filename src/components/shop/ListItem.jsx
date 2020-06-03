import React from "react";
import { Link } from "gatsby";
import { Col, Figure } from "react-bootstrap";

import { formatPrice } from "../../utils/cart-helpers";

const ListItem = ({ item }) => {
  const url = `/shop/${item.slug}`;

  return (
    <Col lg={4} md={6} className="gallery-item">
      <div className="box shadow p-30">
        <Figure className="main overlay">
          <Link to={url}>
            <Figure.Image rounded src={item.thumbnail} alt={item.name} />
          </Link>
        </Figure>
        <div className="box-content">
          <Link to={url}>
            <h2 className="box-title mb-10">{item.name}</h2>
          </Link>
          <p>{formatPrice(item.price, "GBP")}</p>
          <p>{item.short_description}</p>
          <Link to={url}>View Item</Link>
        </div>
      </div>
    </Col>
  );
};

export default ListItem;
