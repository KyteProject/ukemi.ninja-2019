import React from "react";
import { Link } from "gatsby";
import { Figure } from "react-bootstrap";
import { formatPrice } from "../../utils/cart-helpers";

const CheckoutItem = ({ id, name, quantity, price, image }) => {
  const total = quantity * price;

  return (
    <>
      <tr>
        <td className="cart-thumbnail">
          <Figure>
            <Link to="#">
              <Figure.Image src={image} alt="" rounded />
            </Link>
          </Figure>
        </td>
        <td className="cart-description">
          <h5 className="mb-0">{name}</h5>
          <p className="mb-0">Ref. {id}</p>
        </td>
        <td className="cart-quantity">
          <p>{quantity}</p>
        </td>
        <td className="cart-subtotal">
          <span className="amount">{formatPrice(total, "GBP")}</span>
        </td>
      </tr>
    </>
  );
};

export default CheckoutItem;
