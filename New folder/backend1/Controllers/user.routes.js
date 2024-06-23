const express = require("express");
const { UserModel } = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const userController = express.Router();
const jwt = require("jsonwebtoken");

userController.get("/", async (req, res) => {
  try {
    const data = await UserModel.find();
    console.log(data);
    res.json({ message: "Success", data: data });
  } catch (error) {}
});

userController.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  
    const user = await UserModel.findOne({ email:email });
    if (user) {
      return res.json({ message: "User is alredy registered" });
    }


  try {
    bcrypt.hash(password, 8, async function (err, hash) {
      // Store hash in your password DB.
      if (!err) {
        const newUser = await UserModel.create({
          name: name,
          email: email,
          password: hash,
        });
      } else {
        return res.json({ message: "Error occured while while creating user" });
      }
      res.json({ message: `A new user ${name} has been created successfully` });
    });
  } catch (error) {
    console.log("Error Occured while creating new user", err);
  }
});

userController.post("/login", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ message: "Please register first " });
  }
  const hashedPassword = user.password;
  console.log(hashedPassword);

  try {
    bcrypt.compare(password, hashedPassword, async function (err, result) {
      // Store hash in your password DB.
      if (result) {
        const token = jwt.sign({ userId: user._id }, "shhhhh");
        return res.json({
          message: `User ${user.name} has been logged in successfully`,
          token: token,
        });
      } else {
        return res.json({ message: "Please check your credentials." });
      }
    });
  } catch (error) {
    console.log("Error Occured while creating new user", err);
  }
});


// For updating the password 

userController.post("/updatePass", async (req, res) => {
  const { name, email, password, updatePassword, updatePasswordConfirm } =
    req.body;

    console.log();

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ message: "Please register first " });
  }
  const hashedPassword = user.password;

  try {
    bcrypt.compare(password, hashedPassword, async function (err, result) {
      if (result) {
        const token = jwt.sign({ userId: user._id }, "shhhhh");

        if (updatePassword !== updatePasswordConfirm) {
          return res.json({ message: "Please check your password" });
        }

        bcrypt.hash(updatePassword, 8, async function (err, hash) {
          if (!err) {
            const updatedPassword = await UserModel.findOneAndUpdate(
              { email: email },
              { password: hash },
              { new: true }
            );
            console.log("Password Updated");
            return res.json({ message: "Password updated successfully" });
          } else {
            return res.json({
              message: "Error occured while while updating the password in hash mode",
            });
          }
        });
      } else {
        return res.json({ message: "Please input valid old password" });
      }
    });
  } catch (error) {
    console.log("Error Occured while updating password", err);
  }
});

module.exports = { userController };
