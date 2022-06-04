import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

export const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <div className="checkoutProduct">
        <img src={image} className="checkoutProduct__image" alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>
                  <StarOutlinedIcon className="checkoutProduct__ratingIcon" />
                </p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </>
  );
};
