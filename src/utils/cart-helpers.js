import { toast } from "react-toastify";
import * as bent from "bent";

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

export const requestShippingPrice = async (input) => {
  try {
    const post = bent("POST", process.env.GATSBY_SHIPPING_API_ENDPOINT, "json", 200);
    const headers = { "x-api-key": process.env.GATSBY_SHIPPING_API_KEY };
    const body = JSON.stringify(input);

    console.log(input);

    const response = await post("calculateShipping", body, headers);

    return response;
  } catch (err) {
    return err;
  }
};
