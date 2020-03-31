import React from "react";
import { useCart } from "react-use-cart";
import { Button, Figure } from "react-bootstrap";
import { formatPrice } from "../../utils/cart-helpers";

const CartItem = ({ id, name, quantity, price, image }) => {
  const { updateItemQuantity, removeItem } = useCart();

  const increment = () => updateItemQuantity(id, quantity + 1);
  const decrement = () => updateItemQuantity(id, quantity - 1);
  const remove = () => removeItem(id);

  const total = quantity * price;

  return (
    <>
      <tr>
        <td className="cart-thumbnail">
          <Figure>
            <Figure.Image src={image} alt="" rounded />
          </Figure>
        </td>
        <td className="cart-description">
          <h5 className="mb-0">{name}</h5>
          <p className="mb-0">Ref. {id}</p>
        </td>
        <td className="cart-price">
          <span className="amount">{formatPrice(price, "GBP")}</span>
        </td>
        <td className="cart-quantity">
          <div className="form-group item-quantity">
            <input type="button" value="-" onClick={decrement} />{" "}
            <input type="text" name="quantity" value={quantity} className="qty" />{" "}
            <input type="button" value="+" onClick={increment} />
          </div>
        </td>
        <td className="cart-subtotal">
          <span className="amount">{formatPrice(total, "GBP")}</span>
        </td>
        <td className="cart-remove">
          <Button as="a" className="btn-white btn-close" onClick={remove}>
            x
          </Button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
