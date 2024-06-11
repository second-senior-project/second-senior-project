"usec client"
import React from "react";
import "./OneCat.css";
import AllProduct from "../HomePage/AllProduct";


const OneCat = ({ data }) => {
    console.log("cat",data);
    
  return (
    <div>
      <div className="">
        {data?.map((el) => (
          
     <AllProduct el={el}/>
          
          
        ))}
      </div>
    </div>
  );
};
export default OneCat