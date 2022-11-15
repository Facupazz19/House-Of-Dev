const S = require('sequelize');
const db = new Sequelize('proyect_integrador', null,null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports= db;