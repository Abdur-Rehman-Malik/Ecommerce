import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Item";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <>
      <div className="shop-category">
        <img
          className="shopcategory-banner"
          src={props.banner}
          alt=""
          height={450}
        />
        <div className="shopcategory-indexsort">
          <p>
            <span>Showing 1-9</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort By <img src={dropdown_icon} alt="" height={13} />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_products.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">Explore More</div>
      </div>
    </>
  );
};

export default ShopCategory;
