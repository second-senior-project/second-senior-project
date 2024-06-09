"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useRouter } from "next/navigation";
import "./Panier.css";

const Panier = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { cartItems, addToCart, removeFromCart, clearCart } = useAuth();
  const router = useRouter();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="panier-container">
      <div className="breadcrumb">Home / Cart</div>
      <h2>Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="flex gap-4 items-center">
                  <img src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg" alt={item.title} className="product-image" />
                  <div>{item.name}</div>
                </div>
              </td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="apply-coupon"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <button
                  className="apply-coupon"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {cartItems.length > 0 ? (
        <div className="cart-total">
          <h3>Total: ${calculateTotalPrice()}</h3>
          <button className="checkout-button" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      ) : (
        <h3>Your cart is empty</h3>
      )}
    </div>
  );
};

export default Panier;
