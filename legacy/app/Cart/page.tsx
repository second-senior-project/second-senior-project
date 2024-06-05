"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "../Cart/cart.css"; 
// import { useAuth } from "../../context/AuthContext";

const Cart: React.FC = () => {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [refre, setRefre] = useState(false);
//   const { user } = useAuth();
  const router = useRouter();

//   useEffect(() => {
//     // if (!user) return;

//     axios
//       .get(`http://localhost:4000/api/panier/usercart/${id}`)
//       .then((res) => {
//         console.log(res.data[0].products, "product");
//         setProduct(res.data[0].products);
//         const sum = res.data[0].products.reduce((acc: number, product: Product) => {
//           const productTotal = product.price * (product.quantity || 1);
//           return acc + productTotal;
//         }, 0);
//         setTotal(sum);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, [refre]);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedProducts = [...product];
    // updatedProducts[index].quantity = newQuantity;

    const newTotal = updatedProducts.reduce((acc: number, product: Product) => {
      const productTotal = product.price * (product.quantity || 1);
      return acc + productTotal;
    }, 0);

    setProduct(updatedProducts);
    setTotal(newTotal);
  };

  const remove = (productId: number) => {
    axios
      .delete(`http://localhost:4000/api/panier/del/${productId}`)
      .then((response) => {
        console.log(response);
        setRefre(!refre);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="panier-container">
        <div className="breadcrumb">
          {/* <span>Home</span> / <span>Cart</span> */}
        </div>
        <h2>Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((el, index) => (
              <tr key={el.id}>
                <td>
                  <img src={el.imgUrl} alt={el.name || el.product} className="product-image" />
                  {el.name}
                </td>
                <td>${el.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={el.quantity || 1}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    className="quantity-input"
                  />
                </td>
                <td>${el.price * (el.quantity || 1)}</td>
                <td onClick={() => remove(el.id)}>X</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="coupon-container">
          <input type="text" placeholder="Coupon Code" className="coupon-input" />
          <button className="apply-coupon">Apply Coupon</button>
        </div>
        <div className="cart-total">
          <h3>Cart Total</h3>
          <p>Subtotal: ${total}</p>
          <p>Shipping: Free</p>
          <p>Total: ${total}</p>
          <button className="checkout-button" onClick={() => router.push("/checkout")}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
