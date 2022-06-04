import React from "react";
import "./Product.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { useStateValue } from "../../StateProvider";
export const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addTOBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarOutlinedIcon className="product__ratingIcon" />
              </p>
            ))}
        </div>
        <img src={image} alt="" />
        <button onClick={addTOBasket}>Add to Basket</button>
      </div>
    </div>
  );
};

// https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg
//https://m.media-amazon.com/images/I/61DRnuSAgqL._UX522_.jpg
