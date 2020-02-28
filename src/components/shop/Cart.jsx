import React from "react";
import { Link } from "gatsby";
import { useCart } from "react-use-cart";
import { Container, Col, Figure, Table, Row, Form } from "react-bootstrap";
import CartItem from "./CartItem";

const Cart = () => {
  const { items } = useCart();
  const { isEmpty, cartTotal } = useCart();

  return (
    <>
      <Container className="inner">
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
          <Col md={5}>
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
        </Row>
      </Container>
    </>
  );
};

export default Cart;
