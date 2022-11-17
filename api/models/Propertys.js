const S = require("sequelize");

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
      type: S.INTEGER,
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
      type: S.INTEGER
    },
    image: {
      type: S.TEXT,
      allowNull: false
    },
  },
  {
    sequelize: db,
    modelName: "property",
  }
);

module.export = Property
