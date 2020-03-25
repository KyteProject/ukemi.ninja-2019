import React, { useState } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Container, Row, Col, Button, Form, InputGroup, Figure } from "react-bootstrap";
import { useCart } from "react-use-cart";

import { MetaData } from "../components/meta";
import { formatPrice } from "../utils/cart-helpers";

const Product = ({ data, location }) => {
  const product = data.markdownRemark.frontmatter;
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const productImage = product.product_images[0];

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
            <h1 className="product-title">{product.name}</h1>
            <h4>{formatPrice(product.price, "GBP")}</h4>
            <p>{product.short_description}</p>
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
                        id: product.stripe_id,
                        price: product.price,
                        image: product.thumbnail,
                        name: product.name,
                        summary: product.short_summary,
                        width: product.width,
                        height: product.height,
                        length: product.length,
                        weight: product.weight,
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
  query ProductBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        slug
        weight
        width
        details
        height
        length
        name
        price
        category
        product_images
        shipping_info
        short_description
        stripe_id
        thumbnail
      }
    }
  }
`;
