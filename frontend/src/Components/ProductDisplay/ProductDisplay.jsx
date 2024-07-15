import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" height={100} />
            <img src={product.image} alt="" height={100} />
            <img src={product.image} alt="" height={100} />
            <img src={product.image} alt="" height={100} />
          </div>
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={product.image}
              alt=""
              height={400}
            />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-new">
              PKR {product.new_price}
            </div>
            <div className="productdisplay-right-price-old">
              PKR {product.old_price}
            </div>
          </div>
          <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            neque, alias repellat quis dignissimos dolores sapiente eos eligendi
            nobis eaque nisi facilis odio ab cum harum perferendis quod
            repellendus nesciunt. Labore culpa odit error.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="producrdisplay-right-size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="productdisplay-right-category">
            <span>Category :</span>Men, T-Shirt,
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span>Modern, Latest
          </p>
        </div>
      </div>
    </>
  );
};
