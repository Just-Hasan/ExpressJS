const mainRoutes = require("./routes/main");
const usersRoutes = require("./routes/users");

const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

////////[use routes]
app.use("/", mainRoutes);
app.use("/users", usersRoutes);

app.listen("3000");
