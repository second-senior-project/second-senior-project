"use client";
import React from "react";
import Carosel from "./Carosel";
import Products from "./Products";
import Category from "../Category/Page"


const Home = () => {
  return (
    <>
      <Carosel />
      <Products />
      <Category/>
    </>
  );
};

export default Home;
