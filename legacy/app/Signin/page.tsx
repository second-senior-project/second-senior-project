"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./Sign.css";
import axios from 'axios';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const signup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', {
        username,
        email,
        password,
        role,
      });
      setMessage('Signup successful!');
      console.log(message);
      router.push('/Signin/Login');
    } catch (error) {
      console.error(error);
      setMessage('Signup failed. Please try again.');
    }
  };

  return (
    <div id="sign">
      <div className="session">
        <div className="left">
        </div>
        <form action="" className="login" autoComplete="off" onSubmit={signup}>
          <h4>
          Create an Account 
          </h4>
          <p>Welcome! Sign up to view today's products:</p>
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
          <div className="floatingLabel">
            <input
              placeholder=" "
              type="text"
              name="role"
              id="role"
              autoComplete="off"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="role">Role:</label>
          </div>
          <button type="submit">Sign up</button>
          <button type="button" onClick={() => router.push('/Signin/Login')}>
            log in
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Signin;
