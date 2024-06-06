'use client';

import React from 'react';
import "./Wishlist.css";

interface ItemType {
  imgUrl: string;
  name: string;
  price: number;
  oldPrice?: number;
}

interface WishlistItemProps {
  item: ItemType;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ item }) => {
  console.log('item:', item); 
  return (
    <div className="card">
      <img src={item.imgUrl} alt={item.name} />
      <div className="details">
        <h3>{item.name}</h3>
        <p className="price">
          ${item.price} {item.oldPrice && <span className="oldPrice">${item.oldPrice}</span>}
        </p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default WishlistItem;
