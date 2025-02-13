import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Breadcrum } from "../Components/Breadcrums/Breadcrum";
import { useParams } from "react-router-dom";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <>
      <div>
        {product ? (
          <>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </>
  );
};

export default Product;
