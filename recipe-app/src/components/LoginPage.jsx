import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import picture from '../assets/back.jpg'; // Assuming the background image is the same

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate and authenticate the user
    // On success: navigate to the home page
    navigate('/home');
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '8px',
        height: '100vh',  // Full height
        display: 'flex',  // Flex container
        justifyContent: 'center',  // Center content horizontally
        alignItems: 'center',  // Center content vertically
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="rgba(255, 255, 255, 0.8)"  // Transparent white background for readability
        p={4}  // Padding inside the box
        borderRadius={2}  // Rounded corners
        width="100%"  // Full width of the form
      >
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
