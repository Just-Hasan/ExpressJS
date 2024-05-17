const express = require("express");
const app = express();
const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  //   res.sendStatus(200);
  //   res.status(400).send("ERROR");
  //   res.status(400).json({ message: "error" });
  //   res.json({ message: "error" });
  //   res.download("server.js");
  //   res.send("Hi");
  res.render("index", { text: "World" });
});

app.listen(3000);
