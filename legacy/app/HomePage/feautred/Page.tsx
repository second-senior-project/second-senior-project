"use client"
import React from 'react';
import { Box, Grid, Card, CardMedia, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';

const Featured = () => {
  return (
    <Box sx={{ padding: 25, marginTop: '-250px' }}>
      <Typography variant="h5" component="h5" sx={{ color: '#cc0000', display: 'flex', alignItems: 'center' }}>
        <SquareIcon /> Featured
      </Typography>

      <Typography variant="h4" component="div" sx={{ marginTop: 2 }}>
        New Arrival
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.news_app_ed.jpg"
              alt="Left Image"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://w0.peakpx.com/wallpaper/35/1014/HD-wallpaper-alienware-gaming-laptop-computer-videogame-5-399395.jpg"
                  alt="Top Right Image"
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/1904.jpg"
                  alt="Bottom Right Image 1"
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>    
                <CardMedia
                  component="img"
                  height="250"
                  image="https://www.fredzone.org/wp-content/uploads/2023/05/Xiaomi-13-Ultra-2-1200x675.jpg"
                  alt="Bottom Right Image 2"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Featured;
