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
            <h3>Estimate Shipping</h3>
            <form>
              <div className="form-group custom-select-wrapper">
                <select className="custom-select">
                  <option selected="">Select Country</option>
                  <option value="country1">Country 1</option>
                  <option value="country2">Country 2</option>
                  <option value="country3">Country 3</option>
                  <option value="country4">Country 4</option>
                </select>
              </div>
              <Row>
                <Col sm={6}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="State*" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Postcode / ZIP*" />
                  </div>
                </Col>
              </Row>

              <button type="submit" className="btn">
                Update Totals
              </button>
            </form>
          </Col>
          <Col md={6}>
            <h3>Order Total</h3>
            <div className="table-responsive">
              <table className="table table-order">
                <tbody>
                  <tr>
                    <td>
                      <strong className="color-dark">Subtotal</strong>
                    </td>
                    <td className="text-right">$71.96</td>
                  </tr>
                  <tr>
                    <td>
                      <strong className="color-dark">Tax (5%)</strong>
                    </td>
                    <td className="text-right">$3.6</td>
                  </tr>
                  <tr>
                    <td>
                      <strong className="color-dark">Shipping</strong>
                    </td>
                    <td className="text-right">$10</td>
                  </tr>
                  <tr>
                    <td>
                      <strong className="color-dark">Grand Total</strong>
                    </td>
                    <td className="text-right">$76.56</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
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
          <Col>
            <div className="text-md-right">
              {" "}
              <a className="btn" href="#">
                Proceed to Checkout
              </a>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
