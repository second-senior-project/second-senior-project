"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, Button, TextField, Typography, Container, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const GradientButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  },
});

const Profile: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    avatarUrl: ''
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getUserProfile();
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          avatarUrl: data.avatarUrl || ''
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile');
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      await updateUserProfile(formData);
      setEditing(false);
      setUser(formData);
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={4} textAlign="center">
        <Avatar alt={user.name} src={user.avatarUrl} sx={{ width: 100, height: 100, margin: '0 auto' }} />
        <Typography variant="h5" component="h1" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {user.email}
        </Typography>
      </Box>
      {editing ? (
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Avatar URL"
                name="avatarUrl"
                value={formData.avatarUrl}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <GradientButton onClick={handleSave}>Save</GradientButton>
            <Button onClick={() => setEditing(false)}>Cancel</Button>
          </Box>
        </Box>
      ) : (
        <Box mt={2}>
          <GradientButton onClick={() => setEditing(true)}>Edit Profile</GradientButton>
        </Box>
      )}
    </Container>
  );
};

export default Profile;
