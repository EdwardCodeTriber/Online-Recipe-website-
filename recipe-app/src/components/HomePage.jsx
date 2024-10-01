import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const response = await axios.get('http://localhost:5000/recipes');
    setRecipes(response.data);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Recipes</Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid container spacing={2}>
        <RecipeList recipes={filteredRecipes} />
      </Grid>
    </Container>
  );
};

export default HomePage;
