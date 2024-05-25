const express = require("express");
const userData = require("../data/userData");
const usersRoutes = express.Router();
const bcrypt = require("bcrypt");
usersRoutes.route("/").get((req, res) => {
  console.log(userData);
  res.send("users list");
});

usersRoutes
  .route("/signin")
  .get((_, res) => {
    console.log(userData);
    res.render("users/signin");
  })
  .post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userExist = userData.find((user) => user.email === email);
    const validPassword = await bcrypt.compare(password, userExist?.password);

    if (Boolean(userExist) && validPassword) {
      res.send("successful login");
    } else {
      res.send("failed login");
    }
  });

usersRoutes
  .route("/new")
  .get((_, res) => {
    res.render("users/signup");
  })
  .post(async function (req, res) {
    console.log(req.body);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    // res cannot send and redirect at the same time
    // res.send("You're signing up");
    if (
      !req.body.email ||
      !req.body.email.includes("@gmail.com") ||
      !req.body.password
    ) {
      res.redirect("/users/new");
    } else {
      userData.push({ email: req.body.email, password: hashPassword });
      res.redirect("/users/signin");
    }
  });

module.exports = usersRoutes;
