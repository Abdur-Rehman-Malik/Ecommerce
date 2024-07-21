import React, { useContext, useEffect } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Item";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  // Log all products and category from props
  useEffect(() => {
    console.log("All Products in ShopCategory: ", all_products);
    console.log("Category from props: ", props.category);
  }, [all_products, props.category]);

  // Filter the products based on the category
  const filteredProducts = all_products.filter((item) => {
    console.log("Checking item: ", item); // Log each item being checked
    return item.category === props.category;
  });

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
            <span>Showing 1-{filteredProducts.length}</span> out of{" "}
            {all_products.length} products
          </p>
          <div className="shopcategory-sort">
            Sort By <img src={dropdown_icon} alt="" height={13} />
          </div>
        </div>
        <div className="shopcategory-products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        <div className="shopcategory-loadmore">Explore More</div>
      </div>
    </>
  );
};

export default ShopCategory;

// import React, { useContext } from "react";
// import "./CSS/ShopCategory.css";
// import { ShopContext } from "../Context/ShopContext";
// import Item from "../Components/Items/Item";
// import dropdown_icon from "../Components/Assets/dropdown_icon.png";

// const ShopCategory = (props) => {
//   const { all_products } = useContext(ShopContext);
//   return (
//     <>
//       <div className="shop-category">
//         <img
//           className="shopcategory-banner"
//           src={props.banner}
//           alt=""
//           height={450}
//         />
//         <div className="shopcategory-indexsort">
//           <p>
//             <span>Showing 1{}</span> {all_products.length}
//           </p>
//           <div className="shopcategory-sort">
//             Sort By <img src={dropdown_icon} alt="" height={13} />
//           </div>
//         </div>
//         <div className="shopcategory-products">
//           {all_products.map((item, index) => {
//             if (props.category === item.category) {
//               return (
//                 <Item
//                   key={index}
//                   id={item.id}
//                   name={item.name}
//                   image={item.image}
//                   new_price={item.new_price}
//                   old_price={item.old_price}
//                 />
//               );
//             } else {
//               return null;
//             }
//           })}
//         </div>
//         <div className="shopcategory-loadmore">Explore More</div>
//       </div>
//     </>
//   );
// };

// export default ShopCategory;
