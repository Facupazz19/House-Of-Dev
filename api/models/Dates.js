const S = require("sequelize");
const db = require("../config/db")

class Date extends S.Model{}

Date.init(
  {
    id: {
      type: S.INTEGER ,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: S.TEXT,
      allowNull: false,
    },
    userId: {
      type: S.INTEGER,
      allowNull: false
    },
    propertyId : {
      type : S.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "date",
  }
);

module.exports = Date