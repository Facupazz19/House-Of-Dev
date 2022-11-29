const express = require("express");
const route = express.Router();
const Property = require("../models/Propertys");
const {validateAdmin} = require("../middlewares/auth")




route.get('/', (req, res) => {
  Property.findAll().then((property) => {
    res.status(200).send(property);
  });
});

route.get('/:id', (req, res) => {
  const id = req.params.id
  Property.findOne({where : {id}}).then((property) => {
    res.status(200).send(property);
  });
});



route.post('/create', validateAdmin, (req, res) => {
  Property.create(req.body).then((property) => {
    res.status(201).send(property);
  });
});

route.put('/change/:id', validateAdmin, (req, res) => {
  const id = req.params.id;
  Property.findByPk(id)
    .then((property) => property.update(req.body))
    .then((propertyUpdated) => res.status(201).send(propertyUpdated))
    .catch((err) => res.status(400).send(err));
});

route.delete('/delete/:id', validateAdmin, (req, res) => {
  const id = req.params.id;
  Property.destroy({ where: { id } })
  .then(() => res.status(204).send(console.log("propiedad eliminada")))
  .catch((err) => res.status(400).send(err));
});

module.exports = route