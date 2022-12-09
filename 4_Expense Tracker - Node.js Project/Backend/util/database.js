// Import Sequelize
const Sequelize = require('sequelize');

require('dotenv').config();

// // Schema / Database-> expense , Username-> root , Password-> 123456 , Host -> localhost
// const sequelize = new Sequelize('expense', 'root', '123456', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: process.env.DB_HOST
})

module.exports = sequelize;
