'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/context/AuthContext';
import "./wish.css"
import AllProduct from '../HomePage/AllProduct';

interface ItemType {
  imgUrl: string;
  name: string;
  price: number;
  oldPrice?: number;
}

const WishlistItem: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [product, setProduct] = useState<ItemType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    if (stored) {
      const items: ItemType[] = JSON.parse(stored) || [];
      setProduct(items);
      console.log("items", items);
    }
    console.log(localStorage.getItem('wishlist'));
  }, []);

  const remove = (index: number) => {
    const updatedFavorites = [...product.slice(0, index), ...product.slice(index + 1)];
    setProduct(updatedFavorites);
    localStorage.setItem('wishlist', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <table className="favorites-table">
        <tbody>
          {product.map((item, index) => (
           <AllProduct el={item}/>
          ))}
        </tbody>
      </table>
      <div className="favorites-actions">
        <button className="return-shop" onClick={() => router.push("/HomePage")}>Return to Shop</button>
      </div>
    </div>
  );
};

export default WishlistItem;
