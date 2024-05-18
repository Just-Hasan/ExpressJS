const express = require("express");
const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("users", { username: "Hasan Basri" });
});

module.exports = usersRouter;
