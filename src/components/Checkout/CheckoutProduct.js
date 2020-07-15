import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "../State/Provider";

const CheckoutProduct = ({id, title, price, rating, image}) => {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id
    })
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}><span role="img" aria-label="Star">⭐</span></p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;