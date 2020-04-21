const S = require("sequelize");
const db = require("../config/db");
const User = require("./index");

const Favorites = db.define("favorites", {
  imdbID: {
    type: S.STRING,
    allowNull: false
  }
});

Favorites.hasMany(User, { as: "favorites" });

module.exports = Favorites;
