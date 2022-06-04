import React from "react";
import { getBasketTotal } from "../../reducer";
import "./Checkout.css";
import { Subtotal } from "./Subtotal";
import { CheckoutProduct } from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";

export const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div
      className="
    checkout"
    >
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/May_22/Z_HSBCSCB_EMI_Fest_LP_1500x250.jpg"
          className="checkout__image"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
