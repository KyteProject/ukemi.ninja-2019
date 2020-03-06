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

export const requestShippingPrice = async (input) => {
  const endpoint = "https://api.parcelmonkey.co.uk/GetQuote";
  const key = process.env.GATSBY_CONTACT_FORM_KEY;

  const myHeaders = new Headers();
  myHeaders.append("apiversion", "3.1");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("userid", "689856");
  myHeaders.append("token", "2EJYZ-HC4VL-GVWM7-RW4QV-Q8R7W");

  const body = {
    origin: "GB",
    destination: "US",
    boxes: [{ length: 10, width: 10, height: 10, weight: 0.3, id: "drt089u5", name: "4564tfgh" }],
    goods_value: 150,
    sender: {
      name: "Rich",
      phone: "01234567890",
      address1: "Unit 21 Tollgate",
      town: "Eastleigh",
      county: "Hampshire",
      postcode: "SO53 3TG",
    },
    recipient: {
      name: "Nicola",
      phone: "01234567890",
      email: "nicola@example.com",
      address1: "Hilton Midtown",
      address2: "1335 6th Avenue",
      town: "New York",
      county: "NY",
      postcode: "10019",
    },
  };

  const makeRequest = new Request(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
    headers: myHeaders,
    mode: "cors",
  });

  await fetch(makeRequest)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
