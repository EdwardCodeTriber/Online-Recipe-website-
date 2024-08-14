import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Popadd = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    recipename: "",
    Ingredients: "",
    Instructions: "",
    Category: "",
    Prepare: "",
    Cookingtime: "",
    Servings: "",
  });
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      Category: event.target.value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (recipe.recipename === "") {
      alert("Recipe name cannot be empty");
    } else {
      axios
        .post("http://localhost:8000/recipes", recipe)
        .then((result) => {
          console.log(result);
          alert("Recipe saved successfully");
          navigate("/Navigation");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <Paper
          elevation={5}
          component="paper"
          sx={{
            p: "2px 4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 400,
            height: 550,
            gap: 1,
          }}
        >
          <TextField
            sx={{
              margin: "auto",
            }}
            required
            id="filled-required"
            label="Recipe"
            onChange={(e) =>
              setRecipe({ ...recipe, recipename: e.target.value })
            }
            variant="filled"
          />

          <TextField
            sx={{
              margin: "auto",
            }}
            id="outlined-multiline-static"
            label="Ingredients"
            multiline
            rows={1}
            onChange={(e) =>
              setRecipe({ ...recipe, Ingredients: e.target.value })
            }
          />
          <TextField
            sx={{
              margin: "auto",
            }}
            id="outlined-multiline-static"
            label="Instructions"
            multiline
            rows={1}
            onChange={(e) =>
              setRecipe({ ...recipe, Instructions: e.target.value })
            }
          />
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            sx={{
              margin: "auto",
              width: 0.5,
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            onChange={handleChange}
          >
            <MenuItem value="Dessert">Dessert</MenuItem>
            <MenuItem value="Main Course">Main Course</MenuItem>
            <MenuItem value="Appetiser">Appetiser</MenuItem>
          </Select>
          <TextField
            id="filled-number"
            label="Cooking-Time in minutes"
            type="number"
            onChange={(e) =>
              setRecipe({ ...recipe, Cookingtime: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Preparation in minutes"
            type="number"
            onChange={(e) => setRecipe({ ...recipe, Prepare: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Servings"
            type="number"
            onChange={(e) => setRecipe({ ...recipe, Servings: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />

          <IconButton type="submit" sx={{ p: "10px" }} aria-label="add">
            <AddIcon />
          </IconButton>
        </Paper>
      </form>
    </>
  );
};

export default Popadd;
