"use client"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faGamepad, faMobileAlt, faDesktop, faUtensils, faFish } from "@fortawesome/free-solid-svg-icons";
import './Cats.css';

const Category = () => {
  const cats = [
    { name: "SPORT", icon: faFutbol },
    { name: "GAMING", icon: faGamepad },
    { name: "PHONES", icon: faMobileAlt },
    { name: "PCS", icon: faDesktop },
    { name: "KITCHEN", icon: faUtensils },
    { name: "FISHING", icon: faFish },
  ];

  const [cat, setCat] = useState({}); // Initialize as an object, not an array
  const router = useRouter();

  const getByCategory = (category) => {
    axios
      .get(`http://localhost:4000/api/products/category/${category}`)
      .then((response) => {
        setCat(response.data);
        router.push('/HomePage/Category'); // Ensure this path matches your actual route
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  return (
    <div>
      <div className="catsContainer">
        {cats.map((category) => (
          <div key={category.name}>
            <div className="cats" onClick={() => getByCategory(category.name)}>
              <FontAwesomeIcon icon={category.icon} className="cats-icon" />
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
