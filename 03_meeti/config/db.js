const sequelize = require('sequelize');
require('dotenv').config({path: '.env'});

// La conexión a postgreSQL solo funciona con la version de Node 12.16.3 //
 
module.exports = new sequelize(process.env.DB, process.env.USER_DB, process.env.PASS_DB, {
  host: process.env.HOST_DB,
  port: process.env.PORT.DB,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
});