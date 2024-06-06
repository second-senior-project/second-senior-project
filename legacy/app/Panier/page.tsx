"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { Product, User } from "../types";
import styles from "./panier.css";

const Panier: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const { user } = useAuth() as { user: User };
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/panier/usercart/${user.id}`)
      .then((res) => {
        setProducts(res.data[0].products);
        const sum = res.data[0].products.reduce((acc: number, product: Product) => {
          const productTotal = product.price * (product.quantity || 1);
          return acc + productTotal;
        }, 0);
        setTotal(sum);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [refresh, user.id]);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = newQuantity;

    const newTotal = updatedProducts.reduce((acc, product) => {
      const productTotal = product.price * (product.quantity || 1);
      return acc + productTotal;
    }, 0);

    setProducts(updatedProducts);
    setTotal(newTotal);
  };

  const removeProduct = (productId: string) => {
    axios
      .delete(`http://localhost:4000/api/panier/del/${productId}`)
      .then((response) => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      
      <div className={styles.panierContainer}>
        <h2>Cart</h2>
        <table className={styles.cartTable}>
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
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>
                  <img src={product.imgUrl} alt={product.name} className={styles.productImage} />
                  {product.name}
                </td>
                <td>${product.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity || 1}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    className={styles.quantityInput}
                  />
                </td>
                <td>${product.price * (product.quantity || 1)}</td>
                <td onClick={() => removeProduct(product.id)}>X</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.returnButton} onClick={() => router.push("/")}>
          Return To Shop
        </button>
        <div className={styles.couponContainer}>
          <input type="text" placeholder="Coupon Code" className={styles.couponInput} />
          <button className={styles.applyCoupon}>Apply Coupon</button>
        </div>
        <div className={styles.cartTotal}>
          <h3>Cart Total</h3>
          <p>Subtotal: ${total}</p>
          <p>Shipping: Free</p>
          <p>Total: ${total}</p>
          <button className={styles.checkoutButton}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Panier;
