const express = require("express");
const usersRouter = express.Router();
const users = [
  { username: "Hasan Basri" },
  { username: "Kujou Sa{a" },
  { username: "Violet Evergarden" },
];

usersRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  res.send(`Hello ${users[id].username}`);
});

module.exports = usersRouter;
