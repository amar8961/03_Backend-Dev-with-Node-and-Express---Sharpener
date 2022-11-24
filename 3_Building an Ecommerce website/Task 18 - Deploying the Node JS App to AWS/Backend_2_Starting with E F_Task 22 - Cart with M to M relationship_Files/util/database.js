const Sequelize = require('sequelize');

require('dotenv').config();

// const sequelize = new Sequelize('amar', 'root', '123456', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST
});

module.exports = sequelize;
