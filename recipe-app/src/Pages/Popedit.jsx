import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

const Popedit = () => {
  const [recipes, setRecipes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    // Load the data from the server
    axios
      .get("http://localhost:3000/recipes")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  const handleEditClick = (recipe) => {
    setSelectedRecipe(recipe);
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    axios
      .put(`http://localhost:3000/recipes/ ${selectedRecipe.recipename}`, selectedRecipe)
      .then((res) => {
        setRecipes((prevRecipes) =>
          prevRecipes.map((recipe) =>
            recipe.recipename === selectedRecipe.recipename
              ? selectedRecipe
              : recipe
          )
        );
        setEditMode(false);
      })
      .catch((err) => console.error("Error updating recipe:", err));
  };

  const handleDeleteClick = (recipeName) => {
    axios
      .delete(`http://localhost:3000/recipes/ ${recipeName}`)
      .then((res) => {
        setRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe.recipename !== recipeName)
        );
      })
      .catch((err) => console.error("Error deleting recipe:", err));
  };

  return (
    <div>
      {/* Displaying and Editing Recipes */}
      <Box mt={2}>
        <Typography variant="h6">Your Recipes:</Typography>
        {!editMode ? (
          <List>
            {recipes.map((recipe, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => handleEditClick(recipe)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteClick(recipe.recipename)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemText
                  primary={recipe.recipename}
                  secondary={`Ingredients: ${recipe.Ingredients}, 
                      Instructions: ${recipe.Instructions},
                      Preparation Time: ${recipe.Prepare},
                      Cooking Time: ${recipe.Cookingtime},
                      Servings Total: ${recipe.Servings}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Box>
            <Typography variant="h6">Edit Recipe</Typography>
            <form noValidate autoComplete="off">
              <TextField
                label="Recipe Name"
                name="recipename"
                value={selectedRecipe.recipename}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Ingredients"
                name="Ingredients"
                value={selectedRecipe.Ingredients}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Instructions"
                name="Instructions"
                value={selectedRecipe.Instructions}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Preparation Time"
                name="Prepare"
                value={selectedRecipe.Prepare}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Cooking Time"
                name="Cookingtime"
                value={selectedRecipe.Cookingtime}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Servings"
                name="Servings"
                value={selectedRecipe.Servings}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveEdit}
                  sx={{ marginRight: 2 }}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Popedit;
