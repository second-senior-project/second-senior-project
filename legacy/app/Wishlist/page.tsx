'use client';


import React from 'react';
import "./Wishlist.css";

const WishlistItem: React.FC= ({ item }) => {
  return (
    <div className="card">
      tedst
      {/* <img src={item.image} alt={item.name} />
      <div className="details">
        <h3>{item.name}</h3>
        <p className="price">
          ${item.price} {item.oldPrice && <span className="oldPrice">${item.oldPrice}</span>}
        </p>
        <button>Add To Cart</button>
      </div> */}
    </div>
  );
};

export default WishlistItem;
