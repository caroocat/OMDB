var Sequelize = require("sequelize");

const db = new Sequelize("passport", "postgres", "", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  protocol: null,
  logging: false
});

module.exports = db;
