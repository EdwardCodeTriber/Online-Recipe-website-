import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Snackbar, Alert, Link } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';  
import picture from '../assets/back.jpg'; 
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // Check credentials
    try {
      const response = await axios.get('http://localhost:5000/users', {
        params: {
          email: email,
          password: password
        }
      });
      
      // Check if the user exists
      if (response.data.length > 0) {
        setError(null); 
        navigate('/home');
      } else {
        setError('Invalid email or password.'); 
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.'); 
    }
  };

  const handleCloseAlert = () => {
    setError(null); 
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
        minHeight: '100vh',  
        display: 'flex',
        justifyContent: 'center',  
        alignItems: 'center',  
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="rgba(255, 255, 255, 0.8)"  
        p={4}  
        borderRadius={2}
        width="100%"  
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
            error={!!error && error.includes('Email')}
            helperText={error && error.includes('Email') ? error : ''} 
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
            error={!!error && error.includes('Password')}
            helperText={error && error.includes('Password') ? error : ''} 
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>

        {/* Add link to register page */}
        <Typography variant="body2" mt={2}>
          Don't have an account?{' '}
          <Link component={RouterLink} to="/register" variant="body2">
            Register here
          </Link>
        </Typography>

        {/* Snackbar for error messages */}
        {error && (
          <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          </Snackbar>
        )}
      </Box>
    </Container>
  );
};

export default LoginPage;
