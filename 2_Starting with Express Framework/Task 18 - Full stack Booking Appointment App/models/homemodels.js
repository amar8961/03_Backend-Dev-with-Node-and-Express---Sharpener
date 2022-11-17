const Sequelize = require("sequelize");

const sequelize = require("../util/database");

// Table Name = booking
const Booking = sequelize.define("booking", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: Sequelize.STRING,

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Booking;
