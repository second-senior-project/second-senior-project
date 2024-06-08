"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js router
// import Navbar from '../components/Navbar';
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
      const response = await axios.post('http://localhost:4000/api/auth/register', {
        username,
        email,
        password,
        role,
      });
      setMessage('Signup successful!');
      console.log(message);
      router.push('/Signin/Login');
    } catch (error) {
      console.error(error); // Use console.error for logging errors
      setMessage('Signup failed. Please try again.');
    }
  };

  return (
    <div>
     
      <div id="sign" style={{ marginTop: '200px' }}>
        <div className="session">
          <div className="left">
            <svg
              enableBackground="new 0 0 300 302.5"
              version="1.1"
              viewBox="0 0 300 302.5"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#fff;}\n" }} />
            </svg>
          </div>
          <form action="" className="login" autoComplete="off" onSubmit={signup}>
            <h4>
              We are <span>HERE</span>
            </h4>
            <p>Welcome! Sign up to view today's products:</p>
            <div className="floatingLabel">
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
            <div className="floatingLabel">
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
            <div className="floatingLabel">
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
            <div className="floatingLabel">
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
            <button type="submit">Sign up</button>
            <button type="button" onClick={() => router.push('/Signin/Login')}>
              log in
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signin;
