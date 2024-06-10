"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../components/context/AuthContext';
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { loginAction } = useAuth();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await loginAction({ username, email, password});
      setMessage('Login successful!');
      router.push('/HomePage');
    } catch (error) {
      console.error(error); 
      setMessage('Login failed. Please try again.');
    }
  };
console.log(loginAction,"login");

  return (
    <div id="login">
      <div className="session">
        <div className="left">
        </div>
        <form className="login" autoComplete="off" onSubmit={handleLogin}>
          <h4>We are HERE</h4>
          <p>Welcome! Log In to view today's products:</p>
          <div className="floatingLabel">
            <input
              placeholder=" "
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">username:</label>
          </div>
          <div className="floatingLabel">
            <input
              placeholder=" "
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">email:</label>
          </div>
          <div className="floatingLabel">
            <input
              placeholder=" "
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
          </div>
          <button type="submit">Log in</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}
