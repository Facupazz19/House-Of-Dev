const User = require("./Users");
const Propertys = require("./Propertys");
const Date = require("./Dates");

//Relaciones de la tabla intermedia de favoritos
Propertys.belongsToMany(User, { through: "favorites" });
User.belongsToMany(Propertys, { through: "favorites" });

//Relaciones de la tabla de Citas
User.hasMany(Date, {foreignKey: "userId" });
Date.belongsTo(User)
Propertys.hasMany(Date,{foreignKey: "propertyId" });
Date.belongsTo(Propertys)

module.exports = { User, Propertys,Date };
