import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import axios from "axios";

const Popadd = () => {

 
  const [tasks, setTask] = useState({
    recipename: "",
    Ingredients: "",
    Instructions: "",
    Category:"",
    Prepare:"",
    Cookingtime

  });
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (tasks.task === "") {
      alert("Task cannot be empty?");
    } else {
      // alert("Something is wron with code or button");
        axios
        .post("http://localhost:3000/Tasks", tasks)
        .then((result) => {
          console.log(result);
          alert("Task saved successfully");
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
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
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
    </>
  );
};

export default Popadd;