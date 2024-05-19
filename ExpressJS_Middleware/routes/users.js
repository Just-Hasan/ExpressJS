const express = require("express");
const usersRouter = express.Router();
const celebrity = require("../data/data");

usersRouter.get("/", (req, res) => res.send("Hello users"));

usersRouter
  .route("/:id")
  .get((req, res) => {
    res.send(req.celebrity);
    res.send(`Hello user ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Hello user ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Hello user ${req.params.id}`);
  });

usersRouter.param("id", (req, res, next, id) => {
  //   res.send(celebrity[id].name);
  req.celebrity = celebrity[id].name;
  next();
});

module.exports = usersRouter;
