"use client"
import React from 'react';

const CheckoutForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>
        <div>
          <label htmlFor="localisation">Localisation:</label>
          <input type="text" id="localisation" name="localisation" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
