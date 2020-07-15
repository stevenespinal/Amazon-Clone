import React from "react";
import {useStateValue} from "../State/Provider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const [{basket}] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt="Advertisement"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__ad"/>
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket Is Empty</h2>
            <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map(item => {
              console.log(item);
              return <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            })}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal/>
        </div>
      )}
    </div>
  )
}

export default Checkout;