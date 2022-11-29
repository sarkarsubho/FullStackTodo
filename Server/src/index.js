const express = require("express");
var cors =require("cors")
const app = express();

app.use(express.json());
app.use(cors());
const todoController=require("./controllers/todo.controllers");
const userController=require("./controllers/user.controller")
app.use("/todo",todoController);
app.use("/user",userController)
app.use("/", (req, res) => {
    res.status(200).send(
      `<h1 style="color:green;font-size:26px;margin:20px auto;">Welcome to FullStack Todo-App API</h1>`
    );
  });

module.exports = app;
