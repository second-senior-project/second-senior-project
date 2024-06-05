"use client"
import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
// import "../styles/Sign.css";

const Signin: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const signup = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/register", {
        username,
        email,
        password,
        role,
      });
      setMessage("Signup successful!");
      console.log(message);
      router.push("/login");
    } catch (error) {
      console.log(error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      
      <div id="sign" style={{ marginTop: "200px" }}>
        <div className="session">
          <div className="left">
            <svg
              enableBackground="new 0 0 300 302.5"
              version="1.1"
              viewBox="0 0 300 302.5"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#fff;}\n" }}
              />
            </svg>
          </div>
          <form action="" className="log-in" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <h4>
              We are <span>HERE</span>
            </h4>
            <p>Welcome! Sign up to view today's products:</p>
            <div className="floating-label">
              <input
                placeholder="username"
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">username:</label>
            </div>
            <div className="floating-label">
              <input
                placeholder="email"
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">email:</label>
            </div>
            <div className="floating-label">
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
            </div>
            <div className="floating-label">
              <input
                placeholder="Role"
                type="text"
                name="role"
                id="role"
                autoComplete="off"
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="role">Role:</label>
            </div>
            <button type="button" onClick={signup}>
              Sign up
            </button>
            <button
              type="button"
              onClick={() => {
                router.push("/login");
              }}
            >
              Log in
            </button>
          </form>
          {message && <p>{message}</p>}
          
        </div>
      </div>
    </div>
  );
};

export default Signin;
