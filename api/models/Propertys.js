const S = require("sequelize");
const db = require("../config/db.js");

class Property extends S.Model {}

Property.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },
    category: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    price: {
      type: S.BIGINT,
      allowNull: false,
    },
    city: {
      type: S.STRING,
      allowNull: false,
    },
    country: {
      type: S.STRING,
      allowNull: false,
    },
    state: {
      type: S.STRING,
      allowNull: false,
    },
    available: {
      type: S.BOOLEAN,
    },
    environments: {
      type: S.BIGINT
    },
    image: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "property",
  }
);

module.exports = Property
