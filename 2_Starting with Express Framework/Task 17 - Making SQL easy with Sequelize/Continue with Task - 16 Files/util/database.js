// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "amar",
//   password: "123456",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

// SCHEMAS Name = amar , User Name = root , Password = 123456
const sequelize = new Sequelize("amar", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
