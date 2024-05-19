const express = require("express");
const mainRouter = express.Router();

/* GET home page. */
mainRouter.get("/", function (req, res, next) {
  res.render("index", {
    title: "ExpressJS",
    desc: "Welcome to the world of back-end",
  });
});

module.exports = mainRouter;
