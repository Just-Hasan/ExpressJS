const express = require("express");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const app = express();
app.use("/", indexRouter);
app.use("/users", usersRouter);

app.set("view engine", "ejs");

app.listen("7000");
console.log("siu");
