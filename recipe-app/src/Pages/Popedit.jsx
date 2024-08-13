import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import dataStorage from "../dataStorage.json";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Popedit = () => {
    

  const [recipes, setRecipes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.recipename === selectedRecipe.recipename
          ? selectedRecipe
          : recipe
      )
    );
    setEditMode(false);
  };

  useEffect(() => {
    // Load the data from the JSON file
    setRecipes(dataStorage.recipes);
  }, []);
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
                button
                onClick={() => handleEditClick(recipe)}
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveEdit}
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
            </form>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Popedit;
