const express = require("express");
const route = express.Router();
const { Date } = require("../models/index");
const { validateAuth } = require("../middlewares/auth");

route.post("/add/:idProperty", validateAuth, (req, res) => {
  const { id } = req.user;
  const { idProperty } = req.params;
  const { date } = req.body;
  Date.create({ userId: id, propertyId: idProperty, date: date })
    .then((date) => res.send(date))
    .catch((error) => console.log(error));
});

module.exports = route;
