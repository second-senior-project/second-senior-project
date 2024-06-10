"use client"
import React,{useEffect,useState} from 'react';
import axios from "axios";
import { useRouter } from "next/navigation";
import "./Cats.css";

const Category = () => {
  const cats = ["sport", "gaming", "phones", "pcs", "kitchen", "fishing"];
  const [cat, setCat] = useState([]);
  const router = useRouter();
console.log("testOnecateg",cat);


  const getByCategory = (category:any) => {
    axios
      .get(`http://localhost:4000/api/products/category/${category}`)
      .then((response) => {
        setCat(response.data)
        console.log("category",response.data);
        
        router.push("/HomePage/OneCat") 
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="cats-container">
        {cats.map((cat) => (
          <div key={cat}>
            <div
              className="cats"
              onClick={() => getByCategory(cat)}
            >
              {cat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
