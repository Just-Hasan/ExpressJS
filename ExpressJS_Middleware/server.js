/////////////////////////////////////[Routes]
const mainRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");

const express = require("express");
const app = express();

/////////////////////////////////////[set]
app.set("view engine", "ejs");

/////////////////////////////////////[use]
app.use("/", mainRoutes);
app.use("/users", usersRoutes);

app.listen("3000");
