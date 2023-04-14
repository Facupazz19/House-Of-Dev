const express = require("express");
const route = express.Router();
const { Propertys, User } = require("../models/index");
const { validateAdmin, validateAuth } = require("../middlewares/auth");
const { Op, where } = require("sequelize");

route.get("/", (req, res) => {
  Propertys.findAll().then((property) => {
    res.status(200).send(property);
  });
});

route.post("/filter/price", (req, res) => {
  const { min, max } = req.body;
  Propertys.findAll({ where: { price: { [Op.between]: [min, max] } } })
    .then((filter) => {
      res.send(filter);
    })
    .catch((error) => console.log(error));
});

//Trae todos los usuarios y aparte tras las relaciones que tenga con el modelo property

/* route.get("/favorites", (req, res) => {
  User.findAll({ include: { model: Propertys } }).then((users) => {
    res.status(200).send(users);
  });
}); */

route.get("/:id", (req, res) => {
  const id = req.params.id;
  Propertys.findOne({ where: { id } }).then((property) => {
    res.status(200).send(property);
  });
});

route.get("/filter/:environments", (req, res) => {
  const { environments } = req.params;
  Propertys.findAll({ where: { environments: environments } })
    .then((filter) => {
      res.send(filter);
    })
    .catch((error) => console.log(error));
});

route.post("/delete/favorites/:id", validateAuth, (req, res) => {
  const { id } = req.params;
    Propertys.findByPk(id)
      .then((property) => {
        res.status(204).send(property);
        property.removeUsers(req.user.id);
      })
      .catch((error) => console.log(error));
});

route.post("/addFavorites", validateAuth, (req, res) => {
  const { id } = req.body;
  Propertys.findByPk(id)
    .then((property) => {
      property.setUsers(req.user.id);
      res.status(201).send(property);
    })
    .catch((error) => console.log(error));
});

route.get("/search/:category", (req, res) => {
  const { category } = req.params;
  const search = category.toLowerCase();
  Propertys.findAll({
    where: {
      [Op.or]: [{ category: search }, { city: search }, { country: search }],
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
  Propertys.create({
    category: categoryCreate,
    city: cityCreate,
    country: countryCreate,
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
  Propertys.findByPk(id)
    .then((property) => property.update(req.body))
    .then((propertyUpdated) => res.status(201).send(propertyUpdated))
    .catch((err) => res.status(400).send(err));
});

route.delete("/delete/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  Propertys.destroy({ where: { id } })
    .then(() => res.status(204).send(console.log("propiedad eliminada")))
    .catch((err) => res.status(400).send(err));
});

module.exports = route;
