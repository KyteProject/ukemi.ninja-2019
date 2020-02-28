import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Container, Row, Col, Button, Form, InputGroup, Figure } from "react-bootstrap";
import { useCart } from "react-use-cart";

import { MetaData } from "../components/meta";
import { formatPrice } from "../utils/cart-helpers";

const Product = ({ data, location }) => {
  const product = data.stripeSku;
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const productImage = product.localFiles[0].publicURL;

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>{/* <style type="text/css">{`${post.codeinjection_styles}`}</style> */}</Helmet>
      <Container className="inner">
        <Row>
          <Col lg={6} className="mb-0">
            <Figure>
              <Figure.Image src={productImage} />
            </Figure>
          </Col>
          <aside className="col-lg-6 sidebar product">
            <h1 className="product-title">{product.product.name}</h1>
            <h4>{formatPrice(product.price, product.currency)}</h4>
            <p>{product.product.metadata.summary}</p>
            <p>{`<product rating>`}</p>
            <Form>
              <Form.Row>
                <InputGroup as={Col} md={4} className="item-quantity">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Quantity</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    as="select"
                    name="quantity"
                    value={quantity}
                    onChange={({ target: { value } }) => setQuantity(parseInt(value, 10))}
                    className="qty">
                    {new Array(10)
                      .fill(0)
                      .map((v, k) => k + 1)
                      .map((i) => ({ value: i, label: i }))
                      .map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                  </Form.Control>
                </InputGroup>
              </Form.Row>
              <Form.Group as={Col} md={3} className="item-buy">
                <Button
                  className="cta-btn-pink"
                  onClick={() =>
                    addItem(
                      {
                        id: product.product.id,
                        price: product.price,
                        image: productImage,
                        name: product.product.name,
                        summary: product.product.metadata.short_summary,
                      },
                      quantity
                    )
                  }>
                  Add to Cart
                </Button>
              </Form.Group>
            </Form>
          </aside>
        </Row>
      </Container>
    </>
  );
};

export default Product;

export const productQuery = graphql`
  query($id: String!) {
    stripeSku(id: { eq: $id }) {
      id
      price
      image
      currency
      active
      product {
        id
        active
        attributes
        metadata {
          slug
          summary
          short_summary
        }
        name
        object
        shippable
        type
        updated
      }
      localFiles {
        publicURL
      }
    }
  }
`;
