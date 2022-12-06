const express = require("express");
const route = express.Router();
const Property = require("../models/Propertys");
const { validateAdmin } = require("../middlewares/auth");
const { Op } = require("sequelize");

route.get("/", (req, res) => {
  Property.findAll().then((property) => {
    res.status(200).send(property);
  });
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  Property.findOne({ where: { id } }).then((property) => {
    res.status(200).send(property);
  });
});

route.get("/search/:category", (req, res) => {
  const { category } = req.params;
  const search = category.toLowerCase();
  Property.findAll({
    where: {
      [Op.or]: [
        { category: search },
        { city: search },
        { country: search },
      ],
    },
  }).then((search) => res.send(search));
});

route.post("/create", validateAdmin, (req, res) => {
  const {
    category,
    city,
    country,
    title,
    price,
    description,
    state,
    available,
    environments,
    image,
  } = req.body;
  const categoryCreate = category.toLowerCase();
  const cityCreate = city.toLowerCase();
  const countryCreate = country.toLowerCase();
  Property.create({
    category:categoryCreate,
    city:cityCreate,
    country:countryCreate,
    title,
    price,
    description,
    state,
    available,
    environments,
    image,
  }).then((property) => {
    res.status(201).send(property);
  });
});

route.put("/change/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Property.findByPk(id)
    .then((property) => property.update(req.body))
    .then((propertyUpdated) => res.status(201).send(propertyUpdated))
    .catch((err) => res.status(400).send(err));
});

route.delete("/delete/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Property.destroy({ where: { id } })
    .then(() => res.status(204).send(console.log("propiedad eliminada")))
    .catch((err) => res.status(400).send(err));
});

module.exports = route;
