"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, colors } from "@mui/material";
import SquareIcon from '@mui/icons-material/Square';
import AllProduct from "./AllProduct";
import axios from "axios";

const Products = () => {
  const [sellerProduct, setSellerProduct] = useState([]);
  const [timeLeft, setTimeLeft] = useState({});

  const getNextMidnight = () => {
    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0
    );
    return nextMidnight;
  };

  const calculateTimeLeft = () => {
    const difference = +getNextMidnight() - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const getProd = () => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        setSellerProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProd();
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTimer = () => {
    return (
      
      <span style={{color: '#ff1744'}} >
        {timeLeft.days}d :{timeLeft.hours}h :{timeLeft.minutes}m :{timeLeft.seconds}s
      </span>
    );
  };

  return (
    <div>
      <div className="seller-interface-container">
        <div className="navbar-container"></div>

        <h2 className="products-heading"></h2>

        <div className="products-container">
          <Box sx={{ padding: 25, marginTop: '-100px' }}>
            <Typography variant="h5" component="h5" sx={{ color: '#cc0000', display: 'flex', alignItems: 'center' }}>
              <SquareIcon /> This Month
            </Typography>
            <Typography variant="h4" component="div" >
              Flash Sales {renderTimer()}
            </Typography>
          </Box>
          <ul className="products-list flex" style={{padding: 180 , marginTop: '-350px'}}>
            {sellerProduct.map((product, index) => (
              <div className="product-item" key={index}>
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
