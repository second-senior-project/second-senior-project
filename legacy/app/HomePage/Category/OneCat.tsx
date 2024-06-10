"usec client"
import React from "react";
import { useRouter } from "next/navigation";
import "./OneCat.css";

const OneCat = ({ cat:any }) => {
    console.log("cat",cat);
    
  return (
    <div>
      <div className="onecats-container">
        {cat.map((el:any) => (
          <div
            key={el.id}
            className="container"
            style={{
              background: `url(${el.imgUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay">
              <div className="items" />
              <div className="items head">
                <p>{el.name}</p>
                <hr />
              </div>
              <div className="items price">
                {/* <p className="old">$699</p> */}
                <p className="new">${el.price}</p>
              </div>
              <div className="items cart">
                <i className="fa fa-shopping-cart" />
                <span>ADD TO CART</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OneCat