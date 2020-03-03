import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import { CheckoutProvider } from "../../context/Checkout";
import OrderTotals from "./OrderTotals";
import CheckoutForm from "./CheckoutForm";
import CheckoutList from "./CheckoutList";

const Cart = () => {
  return (
    <CheckoutProvider>
      <Container className="inner pt-5">
        <Row>
          <Col lg={6} className="mb-0">
            <CheckoutForm />
          </Col>
          <Col lg={6} className="mb-0">
            <CheckoutList />
            <OrderTotals />
          </Col>
          <Col>
            <div className="text-md-right">
              <a className="btn" href="#">
                Place Order
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </CheckoutProvider>
  );
};

export default Cart;
