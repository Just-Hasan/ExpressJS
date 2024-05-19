const express = require("express");
const usersRouter = express.Router();
const celebrity = require("../data/data");

// Route handler for GET request to "/"
usersRouter.get("/", (req, res) => res.send("Hello users"));

// Route handlers for "/:id"
usersRouter
  .route("/:id")
  .get((req, res) => {
    // res.redirect("https://www.youtube.com/watch?v=SccSCuHhOw0&t=1553s");
    res.send(req.celebrity);
  })
  .put((req, res) => {
    res.send(`Hello user ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Hello user ${req.params.id}`);
  });

// Middleware applied after route handlers for "/:id"
usersRouter.use(helloUsers);

// Middleware definition
function helloUsers(req, res, next) {
  const id = req.params.id; // Access the id parameter from req.params
  console.log(id);
  if (!id) console.log(`Hello all users`);
  console.log(`Hello user ID ${id}`);
  next();
}

module.exports = usersRouter;
