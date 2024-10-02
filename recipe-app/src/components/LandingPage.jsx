import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import picture from '../assets/back.jpg'; 

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="xm"
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
        overflow: 'hidden', 
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
        textAlign="center"
        width="100%"  
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Recipe Manager
        </Typography>
        <Typography variant="h6" paragraph>
          Store, manage, and refer to all your favorite recipes in one place. 
          Whether you're a professional chef or just love to cook, our app makes it easy 
          to organize and find the perfect recipe for any occasion.
        </Typography>

        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/login')}
            style={{ marginRight: '10px' }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/register')}
            style={{ marginRight: '10px' }}
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/home')}
          >
            Explore Recipes
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
