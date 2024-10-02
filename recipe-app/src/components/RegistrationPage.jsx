import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box, CircularProgress, Snackbar, Alert, Link, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';
import picture from '../assets/back.jpg';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', severity: '' });
  const [termsOpen, setTermsOpen] = useState(false); // For controlling the Terms & Conditions modal
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setAlert({ open: true, message: "Passwords don't match!", severity: 'error' });
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:5000/users', { name, email, password });
      setLoading(false);
      setAlert({ open: true, message: 'Registration successful!', severity: 'success' });
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/login');
    } catch (error) {
      setLoading(false);
      setAlert({ open: true, message: 'Error registering user', severity: 'error' });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ open: false, message: '', severity: '' });
  };

  const handleTermsOpen = () => {
    setTermsOpen(true);
  };

  const handleTermsClose = () => {
    setTermsOpen(false);
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
        height: '100vh',
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
        <Typography variant="h4" gutterBottom>Register</Typography>
        <form onSubmit={handleRegister} style={{ width: '100%' }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
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
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
          </Button>
          <Typography variant="body2" align="center" mt={2}>
            By registering, you agree to our{' '}
            <Link component="button" variant="body2" onClick={handleTermsOpen}>
              Terms and Conditions
            </Link>.
          </Typography>
        </form>
      </Box>

      {/* Terms and Conditions Dialog */}
      <Dialog open={termsOpen} onClose={handleTermsClose} maxWidth="md" fullWidth>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            These terms and conditions outline the rules and regulations for the use of our Recipe Application...
            {/* Add your actual terms content here */}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTermsClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Alert for success/error messages */}
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RegistrationPage;
