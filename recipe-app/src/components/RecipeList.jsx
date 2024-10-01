import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = ({ recipes }) => {
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      await axios.delete(`http://localhost:5000/recipes/${id}`);
      window.location.reload();
    }
  };

  return recipes.map((recipe) => (
    <Grid item xs={12} sm={6} md={4} key={recipe.id}>
      <Card>
        <CardContent>
          <Typography variant="h5">{recipe.name}</Typography>
          <Typography variant="body2">Category: {recipe.category}</Typography>
          <Typography variant="body2">Prep Time: {recipe.preparationTime} mins</Typography>
          <Typography variant="body2">Cook Time: {recipe.cookingTime} mins</Typography>
          <Typography variant="body2">Servings: {recipe.servings}</Typography>
          <Button component={Link} to={`/edit-recipe/${recipe.id}`} variant="outlined">Edit</Button>
          <Button onClick={() => handleDelete(recipe.id)} color="error" variant="outlined">Delete</Button>
        </CardContent>
      </Card>
    </Grid>
  ));
};

export default RecipeList;
