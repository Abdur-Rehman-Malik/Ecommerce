import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/remove_icon.png";
const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/getAllProducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    fetchInfo();
  };

  return (
    <>
      <div className="list-product">
        <h1>All Products Lists</h1>
        <div className="listproduct-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>New Price</p>
          <p>Old Price</p>
          <p>Category</p>
          <p>Removed</p>
        </div>
        <div className="listproduct-allproducts">
          <hr />
          {allproducts.map((product, index) => {
            return (
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  className="listproduct-product-icon"
                  src={product.image}
                  alt=""
                  height={60}
                />
                <p>{product.name}</p>
                <p>{product.old_price}</p>
                <p>{product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  className="listproduct-remove-icon"
                  src={cross_icon}
                  alt=""
                  height={40}
                />
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default ListProduct;
