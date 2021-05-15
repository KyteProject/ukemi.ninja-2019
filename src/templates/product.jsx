import React, { useState } from "react";
import { graphql } from "gatsby";
import { Container, Row, Col, Button, Form, InputGroup, Figure, Tabs, Tab } from "react-bootstrap";
// import { useCart } from "react-use-cart";
import ReactMarkdown from "react-markdown";
import { useStripe } from "@stripe/react-stripe-js";
// import Helmet from "react-helmet";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import { formatPrice } from "../utils/cart-helpers";

const Product = ({ data, location }) => {
  const product = data.markdownRemark.frontmatter;
  const [quantity, setQuantity] = useState(1);
  // const { addItem } = useCart();
  const productImage = product.product_images[0];
  const stripe = useStripe();

  return (
    <>
      <MetaData
        data={data}
        location={location}
        image={productImage}
        title={`Shop | ${product.name}`}
      />
      <TitleSection
        location={location}
        sub={{ slug: "shop", label: "Shop" }}
        crumbLabel={product.name}
      />
      <Container className="inner">
        <Row>
          <Col lg={6} className="mb-0">
            <Figure>
              <Figure.Image src={productImage} />
            </Figure>
          </Col>
          <aside className="col-lg-6 sidebar product">
            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              <h4>{formatPrice(product.price, "GBP")}</h4>
              <p>{product.short_description}</p>
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
                  {product.enabled ? (
                    <Button
                      className="cta-btn-pink"
                      href="https://www.etsy.com/uk/listing/668704403/ukemi-card-game-parkour-and-freerunning">
                      Buy Now
                    </Button>
                  ) : (
                    <p>This product is unavailable</p>
                  )}
                </Form.Group>
              </Form>
            </div>
          </aside>
        </Row>
        <Tabs defaultActiveKey="details" id="product-tabs">
          <Tab eventKey="details" title="Product Details">
            <ReactMarkdown children={product.details} />
          </Tab>
          <Tab eventKey="shipping" title="Shipping and Returns">
            <ReactMarkdown children={product.shipping_info} />
          </Tab>
          <Tab eventKey="reviews" title="Reviews">
            <p>Review functionality is in development.</p>
          </Tab>
        </Tabs>
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
        enabled
      }
    }
  }
`;
