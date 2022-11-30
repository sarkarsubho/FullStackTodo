const express = require("express");
const { body, validationResult } = require("express-validator");
const {
  generateToken,
  login,
  register,
} = require("./controllers/auth.controller");
var cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const todoController = require("./controllers/todo.controllers");
const userController = require("./controllers/user.controller");
app.use("/todo", todoController);
app.use("/user", userController);

// register

app.post(
  "/register",
  body("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name cannot be Empty")
    .isLength({ min: 3 })
    .withMessage("name should contain alleaste 3 charecter"),
  body("email")
    .isEmail()
    .withMessage("Please enter a valid emailId !"),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password should not be empty"),
  // Empliment Strong Regx expression strong password cheak
  body("phone")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number should be ten degit Long"),
  register
);

// Login
app.post(
  "/login",
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email address"),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password should not be empty !"),
  login
);

// default route
app.use("/", (req, res) => {
  res
    .status(200)
    .send(
      `<h3 style="color:green;font-size:26px;margin:20px auto;">Welcome to FullStack Todo-App API</h3>`
    );
});

module.exports = app;
