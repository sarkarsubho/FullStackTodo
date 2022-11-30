const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
  },
  { versionKey: false, timestamps: true }
);

// have to encript password
userSchema.pre("save", function (next) {
  const hashedPassword = bcrypt.hashSync(this.password, 4);
  this.password = hashedPassword;
  return next();
});

// inside the userSchema object adding a method to cheack the password. returns true or false according to compare both password.

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);
module.exports = User;
