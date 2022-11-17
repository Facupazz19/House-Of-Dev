const express = require("express");
const app = express();
const morgan = require("morgan");
const volleyball = require("volleyball");
const db = require("./db");
const models = require("./models");
const routes = require("./routes");

app.use(express.json());
app.use(morgan("tiny"));
app.use("/api",routes)

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () => {
      console.log(`Servidor corriendo en el puerto 3001`);
    });
  })
  .catch(console.error);
