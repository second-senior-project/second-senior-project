
"use client";
import axios from "axios";
import { useAuth } from "../components/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./panier.css"; 

export default function Panier() {
  const [products, setProducts] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [refresh, setRefresh] = useState<boolean>(false);
  const { user } = useAuth();
  const router = useRouter();
console.log("prod",products);


  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/Cart/usercart/${user.id}`)
      .then((res) => {
        console.log(res.data[0].products, "products");
        setProducts(res.data[0].products);
        const sum = res.data[0].products.reduce((acc: any, product: any) => {
          const productTotal = product.price * (product.quantity || 1);
          console.log("price",product);
          
          return acc + productTotal;
        }, 0);
        setTotal(sum);
        console.log(sum,"sum");
        
      })
      .catch((err) => {
        console.error(err);
      });
  }, [refresh, user.id]);
console.log("totalprice",total);

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

  const remove = (productId: any) => {
    axios
      .delete(`http://localhost:4000/api/Cart/del/${productId}`)
      .then((response) => {
        console.log(response);
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="panier-container">
        <div className="breadcrumb"></div>
        <h2>Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal  </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el: any, index: number) => (
              <tr key={el.id}>
                <td>
                  <img
                    src={el.imgUrl}
                    alt={el.name}
                    className="product-image"
                  />
                  {el.name}
                </td>
                <td>${el.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={el.quantity || 1}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    className="quantity-input"
                  />
                </td>
                <td>$ {el.price * (el.quantity || 1)}</td>
                <td
                  onClick={() => {
                    remove(el.id);
                  }}
                >
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="return-button"
          onClick={() => router.push("/HomePage")}
        >
          Return To Shop
        </button>
        <div className="cart-total">
          <h3>Cart Total</h3>
          {/* <p>Subtotal: $ {total.toString()}</p> */}
          <p>Shipping: Free</p>
          {/* <p>Total: $ {total.toString()}</p> */}
          <button
            className="checkout-button"
            onClick={() => router.push("/checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
>>>>>>> 9913aab002d920a1dd04b4c89e4b20a1a4b3f19e
    </div>
  );
}
