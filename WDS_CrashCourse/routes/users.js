const express = require("express");
const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("user list");
});

usersRouter.get("/new", (req, res) => {
  res.send("New user form");
});
module.exports = usersRouter;
