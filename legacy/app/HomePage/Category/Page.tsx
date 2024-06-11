"use client"
import React, { useState } from 'react';
import axios from "axios";
import { FaRunning, FaGamepad, FaMobileAlt, FaDesktop, FaUtensils, FaFish } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import "./Cats.css";
import OneCat from '../../OneCat/page';

const Category = () => {
  const cats = [
    { name: "sport", icon: <FaRunning /> },
    { name: "gaming", icon: <FaGamepad /> },
    { name: "phones", icon: <FaMobileAlt /> },
    { name: "pcs", icon: <FaDesktop /> },
    { name: "kitchen", icon: <FaUtensils /> },
    { name: "fishing", icon: <FaFish /> }
  ];
  const [categ, setCat] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const router = useRouter();
  console.log("testOnecateg", categ);

  const getByCategory = (cat) => {
    axios
      .get(`http://localhost:4000/api/products/category/${cat}`)
      .then((response) => {
        setCat(response.data);
        setSelectedCat(cat);
        console.log("category", response.data);
        router.push("/HomePage"); 
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="cats-container">
      {cats.map((cat) => (
          <div key={cat.name} className="cats" onClick={() => getByCategory(cat.name)}>
            {cat.icon} {cat.name}
          </div>
        ))}
      </div>
      {selectedCat && (
        <div className="selected-category">
          <h2>Selected Category: {selectedCat}</h2>
          <OneCat data={categ} />
        </div>
      )}
    </div>
  );
};

export default Category;
