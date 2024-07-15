import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/remove_icon.png";
import "./CartItems.css";
export const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <>
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format ">
                  <img
                    src={e.image}
                    alt=""
                    className="carticon-product-icon"
                    height={100}
                  />
                  <p>{e.name}</p>
                  <p>PKR {e.new_price}</p>
                  <button className="cartitems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <p>PKR {e.new_price * cartItems[e.id]}</p>
                  <img
                    src={remove_icon}
                    alt=""
                    height={30}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitem-total">
            <h1>Cart Total</h1>
            <div>
              <div className="cartitems-total-items">
                <p>Subtotal</p>
                <p>PKR {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-items">
                <p>Shipping Free</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-itemss">
                <h3>Total</h3>
                <h3>PKR {getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>Proceed To Checkout</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promocode, Enter here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="enter promocode here" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
