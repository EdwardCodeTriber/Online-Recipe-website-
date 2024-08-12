import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { green, yellow, red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
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
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, border: "none" }}
            placeholder="Recipe Name"
            name="name"
            type="text"
            onChange={(e) => setTask({ ...tasks, task: e.target.value })}
            inputProps={{ "aria-label": "Recipe" }}
          />
          <InputBase
            sx={{ ml: 1, flex: 1, border: "none" }}
            placeholder="Ingredients"
            name="ingrediens"
            type="text"
            onChange={(e) => setTask({ ...tasks, task: e.target.value })}
            inputProps={{ "aria-label": "ingrediens" }}
          />
          
          
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
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