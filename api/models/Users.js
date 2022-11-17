const S = require("sequelize");
const db = require("../db")
class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
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
    phone: {
      type: S.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    admin: {
      type: S.BOOLEAN,
    },
/*     salt: {
      type: S.TEXT,
    }, */
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

module.export = User