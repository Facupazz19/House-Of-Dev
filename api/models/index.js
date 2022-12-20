const User = require("./Users");
const Propertys = require("./Propertys");

Propertys.belongsToMany(User, { through: "favorites" });
User.belongsToMany(Propertys, { through: "favorites" });

module.exports = { User, Propertys };
