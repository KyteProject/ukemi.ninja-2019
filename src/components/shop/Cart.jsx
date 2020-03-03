import React from "react";
import { useCart } from "react-use-cart";
import { Container, Col, Row, Form } from "react-bootstrap";

import CartItem from "./CartItem";
import { CheckoutProvider } from "../../context/Checkout";
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
            <Form>
              <div className="input-group">
                <label className="sr-only" htmlFor="inlineFormInput">
                  Coupon Code
                </label>
                <input
                  type="text"
                  className="form-control mb-0 mr-2 mb-sm-0"
                  id="inlineFormInput"
                  placeholder="Coupon Code"
                />
                <button type="submit" className="btn mb-0">
                  Apply
                </button>
              </div>
            </Form>
            <p className="small text-muted">
              Enter any valid coupon or promo code here to redeem your discount.
            </p>
          </Col>
          <OrderTotals />
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
