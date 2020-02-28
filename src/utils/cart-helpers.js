import { toast } from "react-toastify";

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
