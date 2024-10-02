import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
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
