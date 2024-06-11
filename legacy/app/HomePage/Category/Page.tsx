"use client"
import React, { useState } from 'react';
import axios from "axios";
import { FaRunning, FaGamepad, FaMobileAlt, FaDesktop, FaUtensils, FaFish } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import "./Cats.css";
import OneCat from '../../OneCat/page';

const Category = () => {
  const cats = [
    { name: "Camera", icon: <img loading="lazy" decoding="async" width="30" height="30" src="https://glamaxin.com/wp-content/uploads/2023/12/Category-Camera.svg" class="attachment-full size-full" alt=""/>  },
    { name: "Computers", icon:<img loading="lazy" decoding="async" width="30" height="30" src="https://glamaxin.com/wp-content/uploads/2023/12/Category-Computer.svg" class="attachment-full size-full" alt=""/>  },
    { name: "gaming", icon: <img loading="lazy" decoding="async" width="30" height="30" src="https://glamaxin.com/wp-content/uploads/2023/12/Category-Gamepad.svg" class="attachment-full size-full" alt=""/> },
    { name: "HeadPhone", icon: <img loading="lazy" decoding="async" width="30" height="30" src="https://glamaxin.com/wp-content/uploads/2023/12/Category-Headphone.svg" class="attachment-full size-full" alt=""/> },
    { name: "phones", icon: <img loading="lazy" decoding="async" width="30" height="30" src="https://glamaxin.com/wp-content/uploads/2023/12/Category-CellPhone.svg" class="attachment-full size-full" alt=""/>  },
    { name: "smartWatch", icon: <img loading="lazy" decoding="async" width="30" height="30" src="https://glamaxin.com/wp-content/uploads/2023/12/Category-SmartWatch.svg" class="attachment-full size-full" alt=""/> }
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
