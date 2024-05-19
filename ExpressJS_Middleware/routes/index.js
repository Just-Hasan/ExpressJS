const express = require("express");
const mainRoutes = express.Router();

mainRoutes.get("/", (req, res) => res.render("index"));

module.exports = mainRoutes;
