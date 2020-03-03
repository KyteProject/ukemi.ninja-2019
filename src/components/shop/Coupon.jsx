import React from "react";
import { Form } from "react-bootstrap";

const Coupon = () => {
  return (
    <>
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
    </>
  );
};

export default Coupon;
