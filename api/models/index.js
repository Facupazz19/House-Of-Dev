const User = require("./Users");
const Propertys = require("./Propertys");

Propertys.belongsTo(User, {
  as: "favorites",
});

module.export = { User, Propertys };
