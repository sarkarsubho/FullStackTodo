const User = require("../models/user.modules");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// getnerating a token from jwt doc
// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
function generateToken(obj) {
  return jwt.sign({ obj }, process.env.TOKEN_SALT);
}

const register =
  ("/",
  async (req, res) => {
    try {
      // validation from express validation
      const errors = validationResult(req);
      console.log("validation error", errors);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .send({ message: "Something Wrong in validation", error: errors });
      }

      // cheaking the user is already exeist or not
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        // 400=the server cannot or will not process the request due to something that is perceived to be a client error
        return res
          .status(400)
          .send({ message: "Email is already Exist. Please Try another one" });
      }

      // if the user is not exist then creat a new one
      let newUser = await User.create(req.body);
      const token = generateToken(newUser);
      return res.status(200).send({
        token,
        user: newUser,
        message: "user created successfully",
      });
    } catch (er) {
      console.log("error from authController-register ", er);
      // 500 =the server encountered an unexpected condition that prevented it from fulfilling the request
      res.status(500).send({ error: er });
    }
  });

const login =
  ("/",
  async (req, res) => {
    try {
      // validation from express validation
      const errors = validationResult(req);
      console.log("validation error", errors);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .send({ message: "Something Wrong in validation", error: errors });
      }
      //   cheaking the email is right or not
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .send({
            message: "Email OR Password is Wrong ! please enter Valid one.",
          });
      }

      //   if Email is write then cheak the password

      let passwordStatus = user.checkPassword(req.body.password);
      if (!passwordStatus) {
        return res
          .status(400)
          .send({
            message: "Email OR Password is Wrong ! please enter Valid one.",
          });
      }

      const token = generateToken(user);

      return res.status(200).send({
        token,
        user,
        message: "Login successfully",
      });

    } catch (er) {
      console.log("error from authController-login ", er);
      res.status(500).send({ error: er });
    }
  });

module.exports = { register, login,generateToken };
