import React from "react";
import { useCart } from "react-use-cart";
import CheckoutItem from "./CheckoutItem";

const CheckoutList = () => {
  const { items } = useCart();
  const { isEmpty } = useCart();

  return (
    <>
      <h3>Your Order</h3>
      <div className="table-cart">
        <table className="table table-responsive-lg mb-0">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{!isEmpty ? items.map(CheckoutItem) : <p>Your cart is empty!</p>}</tbody>
        </table>
      </div>
    </>
  );
};

export default CheckoutList;
