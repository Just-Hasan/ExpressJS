const express = require("express");
const usersRouter = express.Router();
const users = [{ name: "Hasan Basri" }, { name: "Violet Evergarden" }];
usersRouter.get("/", (req, res) => {
  res.send("user list");
});

usersRouter.get("/new", (req, res) => {
  res.send("New user form");
});

usersRouter.post("/", (req, res) => {
  res.send("Create User");
});

/*
/////////////////////////////////////[V1 - Style of writing this code]
The problem with the pattern below is that it's repetitive, we use the
usersRouter 3 times while specifying the same path which is :id
usersRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Get user with ID ${id}`);
});

usersRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`update user with ID ${id}`);
});

usersRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Delete the user with ID ${id}`);
});
*/

usersRouter
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    res.send(`GET user with ID ${id}`);
  })
  .put((req, res) => {
    const id = req.params.id;
    res.send(`UPDATE  user with ID ${id}`);
  })
  .delete((req, res) => {
    const id = req.params.id;
    res.send(`UPDATE user with ID ${id}`);
  });

usersRouter.param("id", (req, res, next, id) => {
  console.log(req.params.id);
  next();
  // req.users = next();
});
module.exports = usersRouter;
