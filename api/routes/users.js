const express = require("express");
const route = express.Router();
const User = require("../models/Users");

route.post("/register", (req, res) => {
  User.create().then((user) => {
    res.send(user);
  });
});
module.exports = route;
