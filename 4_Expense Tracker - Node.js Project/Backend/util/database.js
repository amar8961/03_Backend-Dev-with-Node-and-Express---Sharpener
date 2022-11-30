// Import Sequelize
const Sequelize = require('sequelize');

// Schema / Database-> expense , Username-> root , Password-> 123456 , Host -> localhost
const sequelize = new Sequelize('expense', 'root', '123456', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
