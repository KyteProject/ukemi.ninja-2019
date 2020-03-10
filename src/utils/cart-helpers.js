import { toast } from "react-toastify";
import * as bent from "bent";
import { respond } from "../../node_modules/xstate/lib/actions";

export const handleItemAdded = (item) => toast.success(`${item.name} added to cart!`);

export const handleItemUpdated = (item) => toast.success(`${item.name} updated!`);

export const handleItemRemoved = () => toast.success(`Removed from cart`);

export const formatPrice = (amount, currency) => {
  const price = (amount / 100).toFixed(2);
  const numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(price);
};

export const requestShippingToken = async () => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlEncoded = new URLSearchParams();
    urlEncoded.append("grant_type", "client_credentials");
    urlEncoded.append("client_id", process.env.SHIPPING_QUOTE_CLIENT_ID);
    urlEncoded.append("client_secret", process.env.SHIPPING_QUOTE_SECRET);

    const requestOptions = {
      method: "POST",
      headers,
      body: urlEncoded,
      redirect: "follow",
    };

    const response = await fetch(`https://www.parcel2go.com/auth/connect/token`, requestOptions);

    return console.log(response);
  } catch (err) {
    return console.log(err);
  }
};

export const requestShippingPrice = async (input) => {
  requestShippingToken();
};
