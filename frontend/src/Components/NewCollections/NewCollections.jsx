import React, { useEffect, useState } from "react";
import "./NewCollections.css";
// import new_collections from "../Assets/new_collections";
import Item from "../Items/Item";
const NewCollections = () => {
  const [new_collections, setnew_collections] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data) => setnew_collections(data));
  }, []);
  return (
    <>
      <div className="new-colletions">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item, index) => {
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
          })}
        </div>
      </div>
    </>
  );
};
export default NewCollections;
