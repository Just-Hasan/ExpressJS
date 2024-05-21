const express = require("express");
const usersRouter = express.Router();
const celebrity = require("../data/data");

// Route handler for GET request to "/"
usersRouter.get("/", (req, res) => {
  // getting the query string
  const nameParams = req.query.name;
  console.log(nameParams);
  res.send("Hello users");
});

usersRouter.get("/new", (req, res) =>
  res.render("users/new", { firstName: "Test" })
);

usersRouter
  .route("/login")
  .get((req, res) => res.render("users/login"))
  .post((req, res) => {
    const { email, password } = req.body; //we can access the req body bcz of express.urlEncoded() middleware;
    console.log(email, password);
    res.send(`Your email is ${email} 
              and password is ${password}`);
  });

usersRouter.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    celebrity.push({ firstname: req.body.firstname });
    res.redirect(`/users/${celebrity.length - 1}`);
  } else {
    console.log("Error");
    res.render("/users/new", { firstName: "Just Hasan" });
  }
  console.log(req.body.firstname);
  res.send("Hi");
});

// Route handlers for "/:id"
usersRouter
  .route("/:id")
  .get((req, res) => {
    // res.redirect("https://www.youtube.com/watch?v=SccSCuHhOw0&t=1553s");
    res.send(
      celebrity[req.params.id].name || celebrity[req.params.id].firstname
    );
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
