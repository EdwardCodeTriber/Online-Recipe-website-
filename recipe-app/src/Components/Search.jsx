import React from 'react'
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
      // Load the data from the JSON file
      axios
        .get("http://localhost:8000/recipes")
        .then((res) => {
          setRecipes(res.data);
          setFilteredRecipes(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    const handleSearchChange = (e) => {
      const keyword = e.target.value;
      setSearchTerm(keyword);
      
      if (keyword.trim() === "") {
        setFilteredRecipes(recipes); // Reset to full list if search is cleared
      } else {
        const filtered = recipes.filter((recipe) =>
          recipe.recipename.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredRecipes(filtered);
      }
    };

    const handleSearchSubmit = (e) => {
      e.preventDefault();
    };
  


  return (
    <div>
      <Paper
        component="form"
        onSubmit={handleSearchSubmit}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          margin: "auto",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Recipes"
          inputProps={{ "aria-label": "search Recipes" }}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      
      <List sx={{ width: 400, margin: "20px auto" }}>
        {filteredRecipes.map((recipe, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={recipe.recipename}
              secondary={`Ingredients: ${recipe.Ingredients},
              Instructions: ${recipe.Instructions},
              Category: ${recipe.Category},
              Prepare: ${recipe.Prepare},
              Cookingtime: ${recipe.Cookingtime},
              Servings: ${recipe.Servings}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Search;