import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, MenuItem, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    category: '',
    preparationTime: '',
    cookingTime: '',
    servings: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch the recipe to edit
      axios.get(`http://localhost:5000/recipes/${id}`).then((response) => {
        setRecipe(response.data);
      });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:5000/recipes/${id}`, recipe);
    } else {
      await axios.post('http://localhost:5000/recipes', recipe);
    }
    navigate('/home');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{id ? 'Edit Recipe' : 'Add Recipe'}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Recipe Name"
          name="name"
          value={recipe.name}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Category"
          name="category"
          value={recipe.category}
          onChange={handleInputChange}
          fullWidth
          required
          select
          margin="normal"
        >
          <MenuItem value="Breakfast">Breakfast</MenuItem>
          <MenuItem value="Lunch">Lunch</MenuItem>
          <MenuItem value="Dinner">Dinner</MenuItem>
        </TextField>
        <TextField
          label="Preparation Time"
          name="preparationTime"
          value={recipe.preparationTime}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Cooking Time"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Servings"
          name="servings"
          value={recipe.servings}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {id ? 'Update Recipe' : 'Add Recipe'}
        </Button>
      </form>
    </Container>
  );
};

export default RecipeForm;
