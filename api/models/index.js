const Users = require("./Users")
const Propertys = require("./Propertys")

Users.belongsToMany(Propertys, {through: 'favorites'})

module.export = {Users,Propertys}