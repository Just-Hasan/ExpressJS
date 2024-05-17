const express = require("express");
const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  res.send("Posts List");
});

postsRouter.get("/new-post", (req, res) => {
  res.send("New post");
});

module.exports = postsRouter;
