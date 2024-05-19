/////////////////////////////////////[Routes]
const mainRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");

const express = require("express");
const app = express();
app.use(express.json());

/////////////////////////////////////[set]
app.set("view engine", "ejs");

/////////////////////////////////////[use]
app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.listen("3000");

/*
/////////////////////////////////////[Middleware]
Code that sits between incoming request and outgoing
response, great to checks authentication, redirecting
to another page, or terminate the request itself if
it doesn't satisfy the requirements.

Where we define the middleware, affects it reach

*/
