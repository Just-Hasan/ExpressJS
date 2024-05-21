const express = require("express");
const userData = require("../data/userData");
const usersRoutes = express.Router();

usersRoutes.route("/").get((req, res) => {
  console.log(userData);
  res.send("users list");
});

usersRoutes.route("/new").get((req, res) => {});

module.exports = usersRoutes;
