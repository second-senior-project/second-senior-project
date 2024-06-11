"use client"
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const ThisMonth = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('http://localhost:5000/Client/products')
      .then(response => {
        setProducts(response.data.slice(8, 12));
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <Box sx={{ padding: 25, marginBottom: '70px' }}>
      <Typography variant="h5" component="h5" sx={{ color: '#cc0000', display: 'flex', alignItems: 'center' }}>
        <SquareIcon /> This Month
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Typography variant="h4" component="div">
          Best Selling Products
        </Typography>
        <Button variant="contained" style={{ color: 'white', backgroundColor: '#cc0000' }} component={Link} href='/shop'>
          View all
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ marginBottom: 3, marginTop: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            
          </Grid>
        ))}
      </Grid>
      <img src="https://glamaxin.com/wp-content/uploads/2023/12/Frame-600.png" alt="gaming chair" style={{ width: '100%', marginTop: '30px' }} />
    </Box>
  );
};

export default ThisMonth;
