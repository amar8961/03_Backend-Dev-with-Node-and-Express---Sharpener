// Import Sequelize
const Sequelize = require('sequelize');

// Schema / Database-> amar , Username-> root , Password-> 123456 , Host -> localhost
const sequelize = new Sequelize('amar', 'root', '123456', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
