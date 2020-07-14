import React from "react";
import "./Product.css";

const Product = ({id, title, rating, image, price}) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map(() => (
            <p><span role="img" aria-label="Star">⭐</span></p>
          ))}
        </div>
      </div>
      <img src={image} alt=""/>
      <button>Add to Basket</button>
    </div>
  )
}

export default Product;