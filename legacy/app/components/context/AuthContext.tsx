"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem("user") || "null"));
  const [seller, setSeller] = useState<Seller | null>(JSON.parse(localStorage.getItem("seller") || "null"));
  const [admin, setAdmin] = useState<Admin | null>(JSON.parse(localStorage.getItem("admin") || "null"));
  const [token, setToken] = useState<string>(localStorage.getItem("token") || "");

  const router = useRouter();

  const loginAction = async (data: any) => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", data);

      if (response.status === 200) {
        toast.success(response.data.message);

        if (response.data.seller) {
          setSeller(response.data.seller);
          localStorage.setItem("seller", JSON.stringify(response.data.seller));
          setToken(response.data.tokenSeller);
          localStorage.setItem("token", response.data.tokenSeller);
          await router.push("/seller");
        } else if (response.data.admin) {
          setAdmin(response.data.admin);
          localStorage.setItem("admin", JSON.stringify(response.data.admin));
          setToken(response.data.tokenadmin);
          localStorage.setItem("token", response.data.tokenadmin);
          await router.push("/admin");
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
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, admin, seller, loginAction, logOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
    if (context === undefined){}
  }
  return context;
};
