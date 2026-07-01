// cookies.js

import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/profile", (req, res) => {
  console.log(req.body);
  res.setHeader("Set-Cookie", "login=true");
  res.setHeader("Set-Cookie", "name=" + req.body.name);
  res.render("profile");
});

app.get("/home", (req, res) => {
  let cookiesData = req.get("Cookie");
  cookiesData = cookiesData.split(";");
  cookiesData = cookiesData[1].split("=");
  console.log(cookiesData[1]);
  res.render("home", { name: cookiesData[1] });
});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
