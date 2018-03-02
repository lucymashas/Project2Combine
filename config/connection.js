// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

var opts = {
	define: {
		freezeTableName: true
	}
}

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("ProjectTwo", "root", "", {
  host: "localhost",
  dialect: "mysql",
  "operatorsAliases": false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
