import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import InboxIcon from "@mui/icons-material";
// import MailIcon from "@mui/icons-material";
import ReorderIcon from "@mui/icons-material/Reorder";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';

import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const drawerWidth = 240;

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

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

  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
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
              Home
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <ListItemIcon>
                <FavoriteIcon />
                Favourite
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <ListItemIcon>
                <ReorderIcon />
                Reciepe
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {/* Category for Breakfask, Lunch Dinner */}
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <ListItemIcon>
                <ReorderIcon />
                Breakfast
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <ListItemIcon>
                <ReorderIcon />
                Lunch
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <ListItemIcon>
                <ReorderIcon />
                Dinner
              </ListItemIcon>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Typography paragraph>
          {/* Show Content in a paper component */}
          <form >
        <Paper
          elevation={5}
          component="paper"
          sx={{
            p: "2px 4px",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            width: 400,
            height: 450,
            gap: 1,
          }}
        >
          <TextField
          sx={{
            margin:"auto"
          }}
          required
          id="filled-required"
          label="Recipe"
        //   defaultValue="Hello World"
          variant="filled"
        />
          
          <TextField
          sx={{
            margin:"auto"
          }}
          id="outlined-multiline-static"
          label="Ingredients"
          multiline
          rows={1}
        //   defaultValue="Default Value"
        />
        <TextField
        sx={{
            margin:"auto"
          }}
          id="outlined-multiline-static"
          label="Instructions"
          multiline
          rows={1}
        //   defaultValue="Default Value"
        />
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          sx={{
            margin:"auto",
            width:0.5,
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Dessert</MenuItem>
          <MenuItem value={20}>Main Course</MenuItem>
          <MenuItem value={30}>Appetiser</MenuItem>
        </Select>
        <TextField
          id="filled-number"
          label="Cooking-Time in minutes"
          type="number"
          onChange={(e) => setTask({ ...tasks, task: e.target.value })}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
          
          
          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
          {/* <button type="submit"> add</button> */}
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="add">
            <AddIcon/>
          </IconButton>
        </Paper>
      </form>
        </Typography>
        <Typography paragraph>
          {/* Show Content in a paper component */}
        </Typography>
      </Box>
    </Box>
  );
}

// Navigation.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

export default Navigation;
