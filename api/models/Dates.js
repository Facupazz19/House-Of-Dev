const S = require("sequelize");
const db = require("../db")

class Date extends S.Model{}

Date.init(
  {
    date: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "date",
  }
);

module.exports = Date