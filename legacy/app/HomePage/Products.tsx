"use client";
import React, { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import axios from "axios";

const Products = () => {
 
  const [sellerProduct, setSellerProduct] = useState<[]>([]);
  const [update, setUpdate] = useState(false);
  const getProd = () => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        setSellerProduct(res.data);
        setUpdate(!update);
        console.log("test", res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProd();
  }, []);

  return (
    <div>
      <div className="seller-interface-container">
        <div className="navbar-container"></div>

        <h2 className="products-heading"></h2>
      
        <div className="products-container ">
          <ul className="products-list flex">
            {sellerProduct.map((product, index) => (
              <div className="div" key={index}>
                <AllProduct el={product} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
