import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Formik } from "formik";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { number, object } from "yup";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";

const schema = object({
  quantity: number()
    .integer()
    .required()
    .positive()
    .min(1)
    .max(15),
});

const formatPrice = (amount, currency) => {
  const price = (amount / 100).toFixed(2);
  const numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(price);
};

const Product = ({ data, location }) => {
  const stripe = window.Stripe("pk_test_Tf5INqWkBuFwsb6e1VgryonW00lYTyGxDO");
  const product = data.stripeSku;

  const redirectToCheckout = async (values) => {
    const { error } = await stripe.redirectToCheckout({
      items: [{ sku: product.id, quantity: parseInt(values.quantity, 10) }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    });
    if (error) {
      console.warn("Error:", error);
    }
  };

  return (
    <>
      <MainLayout>
        <MetaData data={data} location={location} type="article" />
        <Helmet>{/* <style type="text/css">{`${post.codeinjection_styles}`}</style> */}</Helmet>
        <Container className="inner">
          <Row>
            <Col lg={6} className="mb-0">
              <h1>product images slider</h1>
            </Col>
            <aside className="col-lg-6 sidebar product">
              <h1 className="product-title">{product.product.name}</h1>
              <h4>{formatPrice(product.price, product.currency)}</h4>
              <p>{product.product.metadata.summary}</p>
              <p>{`<product rating>`}</p>
              <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                  redirectToCheckout(values);
                }}
                initialValues={{
                  quantity: 1,
                }}>
                {({ handleSubmit, handleChange, values, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <InputGroup
                        as={Col}
                        md={4}
                        controlId="validationQuantity"
                        className="item-quantity">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroup-sizing-default">Quantity</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          as="select"
                          name="quantity"
                          value={values.quantity}
                          onChange={handleChange}
                          isInvalid={!!errors.quantity}
                          className="qty">
                          <option>{1}</option>
                          <option>{2}</option>
                          <option>{3}</option>
                          <option>{4}</option>
                          <option>{5}</option>
                          <option>{6}</option>
                          <option>{7}</option>
                          <option>{8}</option>
                          <option>{9}</option>
                          <option>{10}</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Row>
                    <Form.Group as={Col} md={3} className="item-buy">
                      <Button type="submit" className="cta-btn-pink">
                        Buy Now
                      </Button>
                    </Form.Group>
                  </Form>
                )}
              </Formik>
            </aside>
          </Row>
        </Container>
      </MainLayout>
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
        active
        attributes
        metadata {
          slug
          summary
        }
        name
        object
        shippable
        type
        updated
      }
    }
  }
`;
