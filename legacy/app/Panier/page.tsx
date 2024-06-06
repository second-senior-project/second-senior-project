"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import { useRouter } from "next/navigation";
import "./panier.css";

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
      
      <div className="panierContainer">
        <h2>Panier</h2>
        <table className="panierTable">
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
                  <img src={product.imgUrl} alt={product.name} className="productImage"/>
                  {product.name}
                </td>
                <td>${product.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity || 1}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    className="quantityInput"
                  />
                </td>
                <td>${product.price * (product.quantity || 1)}</td>
                <td onClick={() => removeProduct(product.id)}>X</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="returnButton" onClick={() => router.push("/")}>
          Return To Shop
        </button>
        <div className="couponContainer">
          <input type="text" placeholder="Coupon Code" className="couponInput" />
          <button className="applyCoupon">Apply Coupon</button>
        </div>
        <div className="cartTotal">
          <h3>Panier Total</h3>
          <p>Subtotal: ${total}</p>
          <p>Shipping: Free</p>
          <p>Total: ${total}</p>
          <button className="checkoutButton">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Panier;
