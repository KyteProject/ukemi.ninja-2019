import React from "react";
import { useCart } from "react-use-cart";
import { Container, Col, Row } from "react-bootstrap";

import { CheckoutProvider } from "../../context/Checkout";
import CartItem from "./CartItem";
import Coupon from "./Coupon";
import OrderTotals from "./OrderTotals";

const Cart = () => {
  const { items } = useCart();
  const { isEmpty } = useCart();

  return (
    <CheckoutProvider>
      <Container className="inner pt-5">
        <div className="table-cart">
          <table className="table table-responsive-lg mb-0">
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{!isEmpty ? items.map(CartItem) : <p>Your cart is empty!</p>}</tbody>
          </table>
        </div>
        <Row>
          <Col md={6}>
            <Coupon />
          </Col>
          <Col md={6}>
            <OrderTotals />
          </Col>
          <Col>
            <div className="text-md-right">
              <a className="btn" href="/shop/checkout">
                Proceed to Checkout
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </CheckoutProvider>
  );
};

export default Cart;
