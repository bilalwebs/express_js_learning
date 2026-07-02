// session.js
// session.js

import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "Bilal",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/profile", (req, res) => {
  req.session.data = req.body;

  console.log(req.session.data);

  res.render("profile");
});

app.get("/", (req, res) => {
  const data = req.session.data;
  console.log("data", data);
  res.render("home", { data });
});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
