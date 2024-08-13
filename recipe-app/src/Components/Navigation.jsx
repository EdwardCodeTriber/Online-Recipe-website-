import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReorderIcon from "@mui/icons-material/Reorder";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popadd from "../Pages/Popadd"; // Ensure this is the correct path
import Search from "./Search";
import dataStorage from "../dataStorage.json";

const drawerWidth = 240;

const Navigation = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [popaddVisible, setPopaddVisible] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the data from the JSON file
    setRecipes(dataStorage.recipes); // Assuming the JSON has a `recipes` array
  }, []);

  const toggleModal = () => {
    setPopaddVisible(!popaddVisible);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favourite" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ReorderIcon />
            </ListItemIcon>
            <ListItemText primary="Recipe" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ReorderIcon />
            </ListItemIcon>
            <ListItemText primary="Breakfast" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ReorderIcon />
            </ListItemIcon>
            <ListItemText primary="Lunch" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ReorderIcon />
            </ListItemIcon>
            <ListItemText primary="Dinner" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Recipe Domain
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box sx={{ position: "absolute", flexGrow: 1 }}>
          <Search />
        </Box>
        <br />
        <Button
          variant="outlined"
          sx={{ width: 0.5, margin: "auto" }}
          onClick={toggleModal}
        >
          Add Recipe
        </Button>
        <br />
        <div>{popaddVisible && <Popadd />}</div>

        {/* Displaying data from JSON */}
        <Box mt={2}>
          <Typography variant="h6">Recipes:</Typography>
          <List>
            {recipes.map((recipe, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={recipe.name}
                  secondary={`Category: ${recipe.category}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

// Navigation.propTypes = {
//   window: PropTypes.func,
// };

export default Navigation;
