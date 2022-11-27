const express = require("express");
// var cors =require("cors")
const app = express();

app.use(express.json());

const todoController=require("./controllers/todo.controllers");

app.use("/todo",todoController);
app.use("/", (req, res) => {
    res.send(
      `<h1 style="color:green;font-size:26px;margin:20px auto;">Welcome to FullStack Todo-App API</h1>`
    );
  });

module.exports = app;
