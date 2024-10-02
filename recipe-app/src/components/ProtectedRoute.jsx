import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Get the user from localStorage
  const user = JSON.parse(localStorage.getItem('user')); 

  // If no user is found, redirect to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user is authenticated, render the protected component
  return children;
};

export default ProtectedRoute;
