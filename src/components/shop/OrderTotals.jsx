import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { Col } from "react-bootstrap";

import { formatPrice } from "../../utils/cart-helpers";
import CheckoutContext from "../../context/Checkout";

const OrderTotals = () => {
  const { cartTotal } = useCart();
  const { orderTotal, shipping, discount } = useContext(CheckoutContext);

  return (
    <Col md={6}>
      <h3>Order Total</h3>
      <div className="table-responsive">
        <table className="table table-order">
          <tbody>
            <tr>
              <td>
                <strong className="color-dark">Subtotal</strong>
              </td>
              <td className="text-right">{formatPrice(cartTotal, "GBP")}</td>
            </tr>
            <tr>
              <td>
                <strong className="color-dark">Discount</strong>
              </td>
              <td className="text-right">{discount ? formatPrice(discount, "GBP") : "-"}</td>
            </tr>
            <tr>
              <td>
                <strong className="color-dark">Shipping</strong>
              </td>
              <td className="text-right">{shipping ? formatPrice(shipping, "GBP") : "-"}</td>
            </tr>
            <tr>
              <td>
                <strong className="color-dark">Grand Total</strong>
              </td>
              <td className="text-right">{orderTotal ? formatPrice(orderTotal, "GBP") : "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Col>
  );
};

export default OrderTotals;
