'use client';
import React from "react";
import Carosel from "./Carosel";
import Products from "./Products";
<<<<<<< HEAD
=======
import Category from "./Category/Page"


>>>>>>> 9913aab002d920a1dd04b4c89e4b20a1a4b3f19e

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
<<<<<<< HEAD
=======
      <Category/>
>>>>>>> 9913aab002d920a1dd04b4c89e4b20a1a4b3f19e
      <Products />
    </>
  );
};

export default Home;
