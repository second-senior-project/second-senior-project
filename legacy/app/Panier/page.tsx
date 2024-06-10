// "use client"
// import React from 'react';
// import { useRouter } from 'next/navigation'; 
// import CheckoutForm from '../CheckoutForm/page';
// import { useAuth } from '../components/context/AuthContext';

// const Panier = () => {
//   const router = useRouter();
//   const {removeFromCart,addToCart,cartItems,clearCart,getCartTotal}=useAuth()

//   const handleCheckout = () => {
//     router.push('/checkout');
//   };

//   return (
//     <div className="panier-container">
//       <div className="breadcrumb">Home / Cart</div>
//       <h2>Cart</h2>
//       <table className="cart-table">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//         {cartItems.map((item) => (
//   <tr key={item.id}>
//     <td>
//       <div className="flex gap-4 items-center">
//         <img src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg" alt={item.title} className="product-image" />
//         <div>{item.name}</div>
//       </div>
//     </td>
//     <td>${item.price}</td>
//     <td>{item.quantity}</td>
//     <td>${(item.price * item.quantity).toFixed(2)}</td>
//     <td>
//       <button
//         className="apply-coupon"
//         onClick={() => addToCart(item)}
//       >
//         +
//       </button>
//       <button
//         className="apply-coupon"
//         onClick={() => removeFromCart(item)}
//       >
//         -
//       </button>
//     </td>
//   </tr>
// ))}
//         </tbody>
//       </table>
//       {cartItems.length > 0 ? (
//         <div className="cart-total">
//           <h3>Total: ${getCartTotal}</h3>
//           <button className="checkout-button" onClick={handleCheckout}>
//             Checkout
//           </button>
//         </div>
//       ) : (
//         <h3>Your cart is empty</h3>
//       )}
//     </div>
//   );
// };

// export default Panier;





"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; 
import CheckoutForm from '../CheckoutForm/page';
import { useAuth } from '../components/context/AuthContext';
import './Panier.css'; 

const Panier = () => {
  const router = useRouter();
  const { removeFromCart, addToCart, cartItems, clearCart, getCartTotal } = useAuth();
  {console.log(cartItems.price)}
  {console.log(cartItems.total)}
  const handleCheckout = () => {
    router.push('/checkout');
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
                  <img 
                    src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg" 
                    alt={item.title} 
                    className="product-image" 
                  />
                  <div>{item.name}</div>
                </div>
              </td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${console.log("total",(item.price * item.quantity).toFixed(2))}
                
                
              </td>
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
          <h3>Total: ${getCartTotal()}</h3>
          <button 
            className="checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <button 
            className="checkout-button"
            onClick={clearCart}
          >
            Clearcart
          </button>
        </div>
      ) : (
        <h3>Your cart is empty</h3>
      )}
    </div>
  );
};

export default Panier;
