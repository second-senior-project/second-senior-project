'use client';
import React from "react";
import Carosel from "./Carosel";
import Products from "./Products";
import Category from "./Category/Page"
import Featured from "./feautred/Page";
import Services from "./feautred/Services";
import ThisMonth from "./feautred/ThisMonth";

const Home = () => {
  return (
    <>
      <Carosel/>
      <Category/>
      <Products />
      <ThisMonth/>
      <Featured/>
      <Services/>
     
    </>
  );
};

export default Home;
