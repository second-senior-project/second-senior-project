'use client';
import React from "react";
import Carosel from "./Carosel";
import Products from "./Products";
import Category from "./Category/Page"
import Featured from "./feautred/Page";
import Services from "./feautred/Services";
import ThisMonth from "./feautred/ThisMonth";



const Home = () => {
  const item = {
    imgUrl: 'https://m.media-amazon.com/images/I/51+AvgQs50L.jpg', 
    name: 'Sample Item',
    price: 99.99,
    oldPrice: 129.99,
  };

  return (
    <>
      <Carosel />
      <Category/>
      <Products />
      <ThisMonth/>
      <Featured/>
      <Services/>
     
    </>
  );
};

export default Home;
