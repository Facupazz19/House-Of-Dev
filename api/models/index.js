const Users = require("./Users");
const Propertys = require("./Propertys");

Users.belongsToMany(Propertys, {
  through: "property_favorites",
  as: "favorites",
});
Propertys.belongsToMany(Users, {
  through: "property_favorites",
  as: "favorites",
});

module.export = { Users, Propertys };
