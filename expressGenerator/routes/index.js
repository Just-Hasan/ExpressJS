const express = require("express");
const mainRouter = express.Router();

/* GET home page. */
mainRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = mainRouter;
