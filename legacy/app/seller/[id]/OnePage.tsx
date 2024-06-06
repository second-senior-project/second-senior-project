import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './one.css';

const GetOneSeller = () => {
  const router = useRouter();
  const { id } = router.query;
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/seller/seller/${id}`);
        setSeller(response.data);
      } catch (error) {
        console.error('Error fetching seller:', error);
      }
    };

    if (id) {
      fetchSeller();
    }
  }, [id]);

  const deleteSeller = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this seller?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/api/seller/seller/${id}`);
        router.push('/admin');
      } catch (error) {
        console.error('Error deleting seller:', error);
      }
    }
  };

  if (!seller) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <div className="seller-details">
        <h2>{seller.username}</h2>
        <h3>Email: {seller.email}</h3>
        <button className="delete-btn" onClick={deleteSeller}>
          Delete Seller
        </button>
      </div>
      <button className="back-btn" onClick={() => router.push('/admin')}>
        Back to Admin Page
      </button>
    </div>
  );
};

export default GetOneSeller;
