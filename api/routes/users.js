const express = require("express");
const { generateToken } = require("../config/token");
const route = express.Router();
const User = require("../models/Users");
const { validateAuth,validateAdmin} = require('../middlewares/auth');


route.get('/me',validateAuth, (req, res) => {
  res.send(req.user);
});

route.get("/users", validateAdmin, (req, res) => {
  User.findAll().then((users) => {
    res.status(200).send(users);
  });
});

route.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.sendStatus(204);
});

route.get("/:id", (req, res) => {
  const id = req.params.id
  User.findOne({where : {id}}).then((user) => {
    res.status(200).send(user);
  });
});

route.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

route.post("/login", (req, res) => {
  const { email, password,admin } = req.body;

  User.findOne({
    where: { email },
  }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        admin: user.admin
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
});

route.get("/secret", validateAuth, (req, res) => {
  res.send(req.user);
});

route.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.sendStatus(204);
});

route.get("/users", validateAdmin, (req, res) => {
  User.findAll().then((users) => {
    res.status(200).send(users);
  });
});

route.delete("/delete/:id", validateAdmin, (req, res) => {
  const id = req.params.id;
  User.destroy({ where: { id } })
    .then(() => res.status(204).send("user deleted"))
    .catch((err) => res.status(400).send(err));
});



module.exports = route;
