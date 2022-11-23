const express = require("express");
// var cors =require("cors")
const app = express();

app.use(express.json());

const todoController=require("./controllers/todo.controllers");

app.use("/todo",todoController);

module.exports = app;
