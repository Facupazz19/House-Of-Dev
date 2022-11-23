const express = require("express");
const route = express.Router();
const Property = require("../models/Propertys");
const {validateAdmin} = require("../middlewares/auth")

route.post("/create", validateAdmin, (req, res) => {
  Property.create(req.body).then((property) => {
    res.status(201).send(property);
  });
});

route.put("/change/:id", validateAdmin,(req, res) => {
    Property.findOne(req.property.id).then((property) => {
      console.log("ESTO ES PROPERTY" , req.property.id)
      res.status(201).send(property);
    });
  });

module.exports = route