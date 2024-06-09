"use client"
import React, { createContext, useContext, useState, ReactNode,useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuthContext = createContext(undefined);


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "null"));
  const [seller, setSeller] = useState(JSON.parse(localStorage.getItem("seller") || "null"));
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin") || "null"));
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const router = useRouter();
 
  const loginAction = async (data: any) => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", data);
console.log(response,"response");

      if (response.status === 200) {
        toast.success(response.data.message);

        if (response.data.seller) {
          setSeller(response.data.seller);
          localStorage.setItem("seller", JSON.stringify(response.data.seller));
          setToken(response.data.tokenSeller);
          console.log(response.data.seller,"resseller");
          
          localStorage.setItem("token", response.data.tokenSeller);
           router.push("/seller");
        } else if (response.data.admin) {
          setAdmin(response.data.admin);
          localStorage.setItem("admin", JSON.stringify(response.data.admin));
          setToken(response.data.tokenadmin);
          localStorage.setItem("token", response.data.tokenadmin);
          router.push("/admin");
        } else {
          setUser(response.data.user);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          await router.push("/");
        }
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Login failed!");
    }
  };

  const logOut = () => {
    setUser(null);
    setSeller(null);
    setAdmin(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("seller");
    localStorage.removeItem("admin");
    toast.success("Logged out successfully");
    router.push("/Signin/Login");
  };
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

  const addToCart = (item:any)=> {
    const isItemInCart = cartItems.find((cartItem:any) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem:any) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item:any) => {
    const isItemInCart = cartItems.find((cartItem:any) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem:any) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem:any) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total:any, item:any) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);


  return (
    <AuthContext.Provider value={{ token, user, admin, seller, loginAction, logOut, setUser, cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getCartTotal,}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=> {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
    
  }
  return context;
};
