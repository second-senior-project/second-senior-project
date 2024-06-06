"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { useAuth } from '../../components/context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const { loginAction } = useAuth();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await loginAction({ username, email, password });
      router.push('/');
    } catch (error) {
      console.error(error); 
      setMessage('Login failed. Please try again.');
    }
  };
console.log(loginAction,"login");

  return (
    <div style={{ marginTop: '200px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <svg
            enableBackground="new 0 0 300 302.5"
            version="1.1"
            viewBox="0 0 300 302.5"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100px', height: '100px' }}
          >
            <style key="custom-svg-style" type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#fff;}\n" }} />
          </svg>
        </div>
        <form autoComplete="off" onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4>
            We are <span>HERE</span>
          </h4>
          <p>Welcome! Sign in to view today's products:</p>
          <div style={{ marginBottom: '10px' }}>
            <input
              placeholder="username"
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: '10px', width: '200px' }}
            />
            <label htmlFor="username" style={{ marginLeft: '10px' }}>username:</label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              placeholder="email"
              
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '10px', width: '200px' }}
            />
            <label htmlFor="email" style={{ marginLeft: '10px' }}>email:</label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '10px', width: '200px' }}
            />
            <label htmlFor="password" style={{ marginLeft: '10px' }}>Password:</label>
          </div>
          <button type="submit" style={{ padding: '10px 20px' }}>Log in</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
